// Translator: ProQuest
// Target: ^https?://(www|search)\.proquest\.com/(.*/)?(docview|pagepdf|results|publicationissue|browseterms|browsetitles|browseresults|myresearch/(figtables|documents))
// TODO: Implement ProQuest translator

import { INJECTED_MESSAGING_KEYS, MESSAGING_SOURCES, type DetectWebResultType, type DetectWebType, type DoWebResultType, type GetSearchType, type TranslatorFunctionsType } from "@/types";

import type { DtoDoiMetadata } from "@zinzot/contracts";
import { defineUnlistedScript } from "..";
import { text, xpath, xpathText, requestDocument } from "@/utils";

// localized field names
let fieldNames: Record<string, Record<string, string>> = {
  العربية: {
    "Source type": 'نوع المصدر',
    "Document type": 'نوع المستند',
    // "Record type"
    Database: 'قاعدة البيانات',
    Title: 'العنوان',
    Author: 'المؤلف',
    // "Editor":
    "Publication title": 'عنوان المطبوعة',
    Volume: 'المجلد',
    Issue: 'الإصدار',
    "Number of pages": 'عدد الصفحات',
    ISSN: 'رقم المسلسل الدولي',
    ISBN: 'الترقيم الدولي للكتاب',
    // "DOI":
    Copyright: 'حقوق النشر',
    Language: 'اللغة',
    "Language of publication": 'لغة النشر',
    Section: 'القسم',
    "Publication date": 'تاريخ النشر',
    "Publication year": 'عام النشر',
    Year: 'العام',
    Pages: 'الصفحات',
    School: 'المدرسة',
    Degree: 'الدرجة',
    Publisher: 'الناشر',
    "Printer/Publisher": 'جهة الطباعة/الناشر',
    "Place of publication": 'مكان النشر',
    "School location": 'موقع المدرسة',
    "Country of publication": 'بلد النشر',
    "Identifier / keyword": 'معرف / كلمة أساسية',
    Subject: 'الموضوع',
    "Journal subject": 'موضوع الدورية'
  },
  'Bahasa Indonesia': {
    "Source type": 'Jenis sumber',
    "Document type": 'Jenis dokumen',
    // "Record type"
    Database: 'Basis data',
    Title: 'Judul',
    Author: 'Pengarang',
    // "Editor":
    "Publication title": 'Judul publikasi',
    Volume: 'Volume',
    Issue: 'Edisi',
    "Number of pages": 'Jumlah halaman',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Hak cipta',
    Language: 'Bahasa',
    "Language of publication": 'Bahasa publikasi',
    Section: 'Bagian',
    "Publication date": 'Tanggal publikasi',
    "Publication year": 'Tahun publikasi',
    Year: 'Tahun',
    Pages: 'Halaman',
    School: 'Sekolah',
    Degree: 'Gelar',
    Publisher: 'Penerbit',
    "Printer/Publisher": 'Pencetak/Penerbit',
    "Place of publication": 'Tempat publikasi',
    "School location": 'Lokasi sekolah',
    "Country of publication": 'Negara publikasi',
    "Identifier / keyword": 'Pengidentifikasi/kata kunci',
    Subject: 'Subjek',
    "Journal subject": 'Subjek jurnal'
  },
  Čeština: {
    "Source type": 'Typ zdroje',
    "Document type": 'Typ dokumentu',
    // "Record type"
    Database: 'Databáze',
    Title: 'Název',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Název publikace',
    Volume: 'Svazek',
    Issue: 'Číslo',
    "Number of pages": 'Počet stránek',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Jazyk',
    "Language of publication": 'Jazyk publikace',
    Section: 'Sekce',
    "Publication date": 'Datum vydání',
    "Publication year": 'Rok vydání',
    Year: 'Rok',
    Pages: 'Strany',
    School: 'Instituce',
    Degree: 'Stupeň',
    Publisher: 'Vydavatel',
    "Printer/Publisher": 'Tiskař/vydavatel',
    "Place of publication": 'Místo vydání',
    "School location": 'Místo instituce',
    "Country of publication": 'Země vydání',
    "Identifier / keyword": 'Identifikátor/klíčové slovo',
    Subject: 'Předmět',
    "Journal subject": 'Předmět časopisu'
  },
  Deutsch: {
    "Source type": 'Quellentyp',
    "Document type": 'Dokumententyp',
    // "Record type"
    Database: 'Datenbank',
    Title: 'Titel',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Titel der Publikation',
    Volume: 'Band',
    Issue: 'Ausgabe',
    "Number of pages": 'Seitenanzahl',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Sprache',
    "Language of publication": 'Publikationssprache',
    Section: 'Bereich',
    "Publication date": 'Publikationsdatum',
    "Publication year": 'Erscheinungsjahr',
    Year: 'Jahr',
    Pages: 'Seiten',
    School: 'Bildungseinrichtung',
    Degree: 'Studienabschluss',
    Publisher: 'Herausgeber',
    "Printer/Publisher": 'Drucker/Verleger',
    "Place of publication": 'Verlagsort',
    "School location": 'Standort der Bildungseinrichtung',
    "Country of publication": 'Publikationsland',
    "Identifier / keyword": 'Identifikator/Schlüsselwort',
    Subject: 'Thema',
    "Journal subject": 'Zeitschriftenthema'
  },
  Español: {
    "Source type": 'Tipo de fuente',
    "Document type": 'Tipo de documento',
    // "Record type"
    Database: 'Base de datos',
    Title: 'Título',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Título de publicación',
    Volume: 'Tomo',
    Issue: 'Número',
    "Number of pages": 'Número de páginas',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Idioma',
    "Language of publication": 'Idioma de la publicación',
    Section: 'Sección',
    "Publication date": 'Fecha de titulación',
    "Publication year": 'Año de publicación',
    Year: 'Año',
    Pages: 'Páginas',
    School: 'Institución',
    Degree: 'Título universitario',
    Publisher: 'Editorial',
    "Printer/Publisher": 'Imprenta/publicista',
    "Place of publication": 'Lugar de publicación',
    "School location": 'Lugar de la institución',
    "Country of publication": 'País de publicación',
    "Identifier / keyword": 'Identificador / palabra clave',
    Subject: 'Materia',
    "Journal subject": 'Materia de la revista'
  },
  Français: {
    "Source type": 'Type de source',
    "Document type": 'Type de document',
    // "Record type"
    Database: 'Base de données',
    Title: 'Titre',
    Author: 'Auteur',
    // "Editor":
    "Publication title": 'Titre de la publication',
    Volume: 'Volume',
    Issue: 'Numéro',
    "Number of pages": 'Nombre de pages',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Langue',
    "Language of publication": 'Langue de publication',
    Section: 'Section',
    "Publication date": 'Date du diplôme',
    "Publication year": 'Année de publication',
    Year: 'Année',
    Pages: 'Pages',
    "First page": 'Première page',
    School: 'École',
    Degree: 'Diplôme',
    Publisher: 'Éditeur',
    "Printer/Publisher": 'Imprimeur/Éditeur',
    "Place of publication": 'Lieu de publication',
    "School location": "Localisation de l'école",
    "Country of publication": 'Pays de publication',
    "Identifier / keyword": 'Identificateur / mot-clé',
    Subject: 'Sujet',
    "Journal subject": 'Sujet de la publication'
  },
  한국어: {
    "Source type": '원본 유형',
    "Document type": '문서 형식',
    // "Record type"
    Database: '데이터베이스',
    Title: '제목',
    Author: '저자',
    // "Editor":
    "Publication title": '출판물 제목',
    Volume: '권',
    Issue: '호',
    "Number of pages": '페이지 수',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: '언어',
    "Language of publication": '출판 언어',
    Section: '섹션',
    "Publication date": '출판 날짜',
    "Publication year": '출판 연도',
    Year: '연도',
    Pages: '페이지',
    School: '학교',
    Degree: '학위',
    Publisher: '출판사',
    "Printer/Publisher": '인쇄소/출판사',
    "Place of publication": '출판 지역',
    "School location": '학교 지역',
    "Country of publication": '출판 국가',
    "Identifier / keyword": '식별자/키워드',
    Subject: '주제',
    "Journal subject": '저널 주제'
  },
  Italiano: {
    "Source type": 'Tipo di fonte',
    "Document type": 'Tipo di documento',
    // "Record type"
    Database: 'Database',
    Title: 'Titolo',
    Author: 'Autore',
    // "Editor":
    "Publication title": 'Titolo pubblicazione',
    Volume: 'Volume',
    Issue: 'Fascicolo',
    "Number of pages": 'Numero di pagine',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Lingua',
    "Language of publication": 'Lingua di pubblicazione',
    Section: 'Sezione',
    "Publication date": 'Data di pubblicazione',
    "Publication year": 'Anno di pubblicazione',
    Year: 'Anno',
    Pages: 'Pagine',
    School: 'Istituzione accademica',
    Degree: 'Titolo accademico',
    Publisher: 'Casa editrice',
    "Printer/Publisher": 'Tipografo/Editore',
    "Place of publication": 'Luogo di pubblicazione:',
    "School location": 'Località istituzione accademica',
    "Country of publication": 'Paese di pubblicazione',
    "Identifier / keyword": 'Identificativo/parola chiave',
    Subject: 'Soggetto',
    "Journal subject": 'Soggetto rivista'
  },
  Magyar: {
    "Source type": 'Forrástípus',
    "Document type": 'Dokumentum típusa',
    // "Record type"
    Database: 'Adatbázis',
    Title: 'Cím',
    Author: 'Szerző',
    // "Editor":
    "Publication title": 'Publikáció címe',
    Volume: 'Kötet',
    Issue: 'Szám',
    "Number of pages": 'Oldalszám',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Nyelv',
    "Language of publication": 'Publikáció nyelve',
    Section: 'Rész',
    "Publication date": 'Publikáció dátuma',
    "Publication year": 'Publikáció éve',
    Year: 'Év',
    Pages: 'Oldalak',
    School: 'Iskola',
    Degree: 'Diploma',
    Publisher: 'Kiadó',
    "Printer/Publisher": 'Nyomda/kiadó',
    "Place of publication": 'Publikáció helye',
    "School location": 'Iskola helyszíne:',
    "Country of publication": 'Publikáció országa',
    "Identifier / keyword": 'Azonosító / kulcsszó',
    Subject: 'Tárgy',
    "Journal subject": 'Folyóirat tárgya'
  },
  日本語: {
    "Source type": 'リソースタイプ',
    "Document type": 'ドキュメントのタイプ',
    // "Record type"
    Database: 'データベース',
    Title: 'タイトル',
    Author: '著者',
    // "Editor":
    "Publication title": '出版物のタイトル',
    Volume: '巻',
    Issue: '号',
    "Number of pages": 'ページ数',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: '著作権',
    Language: '言語',
    "Language of publication": '出版物の言語',
    Section: 'セクション',
    "Publication date": '出版日',
    "Publication year": '出版年',
    Year: '年',
    Pages: 'ページ',
    School: '学校',
    Degree: '学位称号',
    Publisher: '出版社',
    "Printer/Publisher": '印刷業者/出版社',
    "Place of publication": '出版地',
    "School location": '学校所在地',
    "Country of publication": '出版国',
    "Identifier / keyword": '識別子 / キーワード',
    Subject: '主題',
    "Journal subject": '学術誌の主題'
  },
  Norsk: {
    "Source type": 'Kildetype',
    "Document type": 'Dokumenttypeند',
    // "Record type"
    Database: 'Database',
    Title: 'Tittel',
    Author: 'Forfatter',
    // "Editor":
    "Publication title": 'Utgivelsestittel',
    Volume: 'Volum',
    Issue: 'Utgave',
    "Number of pages": 'Antall sider',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Opphavsrett',
    Language: 'Språk',
    "Language of publication": 'Utgivelsesspråk',
    Section: 'Del',
    "Publication date": 'Utgivelsesdato',
    "Publication year": 'Utgivelsesår',
    Year: 'År',
    Pages: 'Sider',
    School: 'Skole',
    Degree: 'Grad',
    Publisher: 'Utgiver',
    "Printer/Publisher": 'Trykkeri/utgiver',
    "Place of publication": 'Utgivelsessted',
    "School location": 'Skolested',
    "Country of publication": 'Utgivelsesland',
    "Identifier / keyword": 'Identifikator/nøkkelord',
    Subject: 'Emne',
    "Journal subject": 'Journalemne'
  },
  Polski: {
    "Source type": 'Typ źródła',
    "Document type": 'Rodzaj dokumentu',
    // "Record type"
    Database: 'Baza danych',
    Title: 'Tytuł',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Tytuł publikacji',
    Volume: 'Tom',
    Issue: 'Wydanie',
    "Number of pages": 'Liczba stron',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Prawa autorskie',
    Language: 'Język',
    "Language of publication": 'Język publikacji',
    Section: 'Rozdział',
    "Publication date": 'Data publikacji',
    "Publication year": 'Rok publikacji',
    Year: 'Rok',
    Pages: 'Strony',
    School: 'Uczelnia',
    Degree: 'Stopień',
    Publisher: 'Wydawca',
    "Printer/Publisher": 'Drukarnia/wydawnictwo',
    "Place of publication": 'Miejsce publikacji',
    "School location": 'Lokalizacja uczelni',
    "Country of publication": 'Kraj publikacji',
    "Identifier / keyword": 'Identyfikator/słowo kluczowe',
    Subject: 'Temat',
    "Journal subject": 'Tematyka czasopisma'
  },
  'Português (Brasil)': {
    "Source type": 'Tipo de fonte',
    "Document type": 'Tipo de documento',
    // "Record type"
    Database: 'Base de dados',
    Title: 'Título',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Título da publicação',
    Volume: 'Volume',
    Issue: 'Edição',
    "Number of pages": 'Número de páginas',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Idioma',
    "Language of publication": 'Idioma de publicação',
    Section: 'Seção',
    "Publication date": 'Data de publicação',
    "Publication year": 'Ano de publicação',
    Year: 'Ano',
    Pages: 'Páginas',
    School: 'Escola',
    Degree: 'Graduação',
    Publisher: 'Editora',
    "Printer/Publisher": 'Editora/selo',
    "Place of publication": 'Local de publicação',
    "School location": 'Localização da escola',
    "Country of publication": 'País de publicação',
    "Identifier / keyword": 'Identificador / palavra-chave',
    Subject: 'Assunto',
    "Journal subject": 'Assunto do periódico'
  },
  'Português (Portugal)': {
    "Source type": 'Tipo de fonte',
    "Document type": 'Tipo de documento',
    // "Record type"
    Database: 'Base de dados',
    Title: 'Título',
    Author: 'Autor',
    // "Editor":
    "Publication title": 'Título da publicação',
    Volume: 'Volume',
    Issue: 'Edição',
    "Number of pages": 'Número de páginas',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Idioma',
    "Language of publication": 'Idioma de publicação',
    Section: 'Secção',
    "Publication date": 'Data da publicação',
    "Publication year": 'Ano da publicação',
    Year: 'Ano',
    Pages: 'Páginas',
    School: 'Escola',
    Degree: 'Licenciatura',
    Publisher: 'Editora',
    "Printer/Publisher": 'Editora/selo',
    "Place of publication": 'Local de publicação',
    "School location": 'Localização da escola',
    "Country of publication": 'País de publicação',
    "Identifier / keyword": 'Identificador / palavra-chave',
    Subject: 'Assunto',
    "Journal subject": 'Assunto da publicação periódica'
  },
  Русский: {
    "Source type": 'Тип источника',
    "Document type": 'Тип документа',
    // "Record type"
    Database: 'База',
    Title: 'Название',
    Author: 'Автор',
    // "Editor":
    "Publication title": 'Название публикации',
    Volume: 'Том',
    Issue: 'Выпуск',
    "Number of pages": 'Число страниц',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Copyright',
    Language: 'Язык',
    "Language of publication": 'Язык публикации',
    Section: 'Раздел',
    "Publication date": 'Дата публикации',
    "Publication year": 'Год публикации',
    Year: 'Год',
    Pages: 'Страницы',
    School: 'Учебное заведение',
    Degree: 'Степень',
    Publisher: 'Издательство',
    "Printer/Publisher": 'Типография/издатель',
    "Place of publication": 'Место публикации',
    "School location": 'Местонахождение учебного заведения',
    "Country of publication": 'Страна публикации',
    "Identifier / keyword": 'Идентификатор / ключевое слово',
    Subject: 'Тема',
    "Journal subject": 'Тематика журнала'
  },
  ไทย: {
    "Source type": 'ประเภทของแหล่งข้อมูล',
    "Document type": 'ประเภทเอกสาร',
    // "Record type"
    Database: 'ฐานข้อมูล',
    Title: 'ชื่อเรื่อง',
    Author: 'ผู้แต่ง',
    // "Editor":
    "Publication title": 'ชื่อเอกสารสิ่งพิมพ์',
    Volume: 'เล่ม',
    Issue: 'ฉบับที่',
    "Number of pages": 'จำนวนหน้า',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'ลิขสิทธิ์',
    Language: 'ภาษา',
    "Language of publication": 'ภาษาของเอกสารสิ่งพิมพ์',
    Section: 'ส่วน',
    "Publication date": 'วันที่เอกสารสิ่งพิมพ์',
    "Publication year": 'ปีที่พิมพ์',
    Year: 'ปี',
    Pages: 'หน้า',
    School: 'สถาบันการศึกษา',
    Degree: 'ปริญญาบัตร',
    Publisher: 'สำนักพิมพ์',
    "Printer/Publisher": 'ผู้ตีพิมพ์/ผู้เผยแพร่',
    "Place of publication": 'สถานที่พิมพ์',
    "School location": 'สถานที่ตั้งของสถาบันการศึกษา',
    "Country of publication": 'ประเทศที่พิมพ์',
    "Identifier / keyword": 'ตัวบ่งชี้/คำสำคัญ',
    Subject: 'หัวเรื่อง',
    "Journal subject": 'หัวเรื่องของวารสาร'
  },
  Türkçe: {
    "Source type": 'Yayın türü',
    "Document type": 'Belge türü',
    // "Record type"
    Database: 'Veritabanı',
    Title: 'Başlık',
    Author: 'Yazar adı',
    // "Editor":
    "Publication title": 'Yayın adı',
    Volume: 'Cilt',
    Issue: 'Sayı',
    "Number of pages": 'Sayfa sayısı',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: 'Telif Hakkı',
    Language: 'Dil',
    "Language of publication": 'Yayın Dili',
    Section: 'Bölüm',
    "Publication date": 'Yayınlanma tarihi',
    "Publication year": 'Yayın Yılı',
    Year: 'Yıl',
    Pages: 'Sayfalar',
    School: 'Okul',
    Degree: 'Derece',
    Publisher: 'Yayıncı',
    "Printer/Publisher": 'Basımevi/Yayınc',
    "Place of publication": 'Basım yeri',
    "School location": 'Okul konumu',
    "Country of publication": 'Yayınlanma ülkesi',
    "Identifier / keyword": 'Tanımlayıcı / anahtar kelime',
    Subject: 'Konu',
    "Journal subject": 'Dergi konusu'
  },
  '中文(简体)': {
    "Source type": '来源类型',
    "Document type": '文档类型',
    // "Record type"
    Database: '数据库',
    Title: '标题',
    Author: '作者',
    // "Editor":
    "Publication title": '出版物名称',
    Volume: '卷',
    Issue: '期',
    "Number of pages": '页数',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: '版权',
    Language: '语言',
    "Language of publication": '出版物语言',
    Section: '章节',
    "Publication date": '出版日期',
    "Publication year": '出版年份',
    Year: '出版年',
    Pages: '页',
    School: '学校',
    Degree: '学位',
    Publisher: '出版商',
    "Printer/Publisher": '印刷商/出版商',
    "Place of publication": '出版物地点',
    "School location": '学校地点',
    "Country of publication": '出版物国家/地区',
    "Identifier / keyword": '标识符/关键字',
    Subject: '主题',
    "Journal subject": '期刊主题'
  },
  '中文(繁體)': {
    "Source type": '來源類型',
    "Document type": '文件類型',
    // "Record type"
    Database: '資料庫',
    Title: '標題',
    Author: '作者',
    // "Editor":
    "Publication title": '出版物名稱',
    Volume: '卷期',
    Issue: '期',
    "Number of pages": '頁數',
    ISSN: 'ISSN',
    ISBN: 'ISBN',
    // "DOI":
    Copyright: '著作權',
    Language: '語言',
    "Language of publication": '出版物語言',
    Section: '區段',
    "Publication date": '出版日期',
    "Publication year": '出版年份',
    Year: '年',
    Pages: '頁面',
    School: '學校',
    Degree: '學位',
    Publisher: '出版者',
    "Printer/Publisher": '印刷者/出版者',
    "Place of publication": '出版地',
    "School location": '學校地點',
    "Country of publication": '出版國家/地區',
    "Identifier / keyword": '識別碼/關鍵字',
    Subject: '主題',
    "Journal subject": '期刊主題'
  }
};

let language: string = "English";
let L: Record<string, string> = {};
let isEbrary = false;
let isBookmarklet = false;

function trimInternal(text: string | null): string {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
}

function initLang(doc: Document) {
  let lang: string | undefined | null = text(doc, '.gaMRLanguage');
  if (!lang) lang = xpathText(doc, '//a[span[contains(@class,"uxf-globe")]]');
  lang = lang?.replace(/\u200e/g, ''); // Remove stray left-to-right markers
  if (lang && lang != "English") {
    lang = lang.split(',')[0].trim();

    // if already initialized, don't need to do anything else
    if (lang == language) return;

    language = lang;

    // build reverse field map
    L = {};
    for (let i in fieldNames[language]) {
      L[fieldNames[language][i]] = i;
    }

    return;
  }

  language = 'English';
  L = {};
}

function getTextValue(doc: Document, fields: string | string[]): string[] {
  if (typeof (fields) != 'object') fields = [fields];

  // localize fields
  fields = fields.map(
    function (field) {
      if (fieldNames[language]) {
        return fieldNames[language][field] || field;
      }
      else {
        return field;
      }
    });

  var allValues: string[] = [], values: Element[] | string[];
  for (let i = 0, n = fields.length; i < n; i++) {
    values = xpath(doc,
      '//div[@class="display_record_indexing_fieldname" and	normalize-space(text())="' + fields[i]
      + '"]/following-sibling::div[@class="display_record_indexing_data"][1]');

    if (values.length) values = [(values[0] as HTMLElement).textContent];

    allValues = allValues.concat(values as string[]);
  }

  return allValues;
}

function getItemType(types: string[]): string | null {
  let guessType = null;
  for (var i = 0, n = types.length; i < n; i++) {
    // put the testString to lowercase and test for singular only for maxmial compatibility
    // in most cases we just can return the type, but sometimes only save it as a guess and will use it only if we don't have anything better
    var testString = types[i].toLowerCase();
    if (testString.includes("journal") || testString.includes("periodical")) {
      // "Scholarly Journals", "Trade Journals", "Historical Periodicals"
      return "journalArticle";
    }
    else if (testString.includes("newspaper") || testString.includes("wire feed")) {
      // "Newspapers", "Wire Feeds", "WIRE FEED", "Historical Newspapers"
      return "newspaperArticle";
    }
    else if (testString.includes("dissertation")) {
      // "Dissertations & Theses", "Dissertation/Thesis", "Dissertation"
      return "thesis";
    }
    else if (testString.includes("chapter")) {
      // "Chapter"
      return "bookSection";
    }
    else if (testString.includes("book")) {
      // "Book, Authored Book", "Book, Edited Book", "Books"
      guessType = "book";
    }
    else if (testString.includes("conference paper")) {
      // "Conference Papers and Proceedings", "Conference Papers & Proceedings"
      return "conferencePaper";
    }
    else if (testString.includes("magazine")) {
      // "Magazines"
      return "magazineArticle";
    }
    else if (testString.includes("report")) {
      // "Reports", "REPORT"
      return "report";
    }
    else if (testString.includes("website")) {
      // "Blogs, Podcats, & Websites"
      guessType = "webpage";
    }
    else if (testString == "blog" || testString == "article in an electronic resource or web site") {
      // "Blog", "Article In An Electronic Resource Or Web Site"
      return "blogPost";
    }
    else if (testString.includes("patent")) {
      // "Patent"
      return "patent";
    }
    else if (testString.includes("pamphlet")) {
      // Pamphlets & Ephemeral Works
      guessType = "manuscript";
    }
    else if (testString.includes("encyclopedia")) {
      // "Encyclopedias & Reference Works"
      guessType = "encyclopediaArticle";
    }
    else if (testString.includes("statute")) {
      return "statute";
    }
    else if (testString.includes("letter") || testString.includes("cable")) {
      guessType = "letter";
    }
    else if (testString.includes("archival material")) {
      guessType = "manuscript";
    }
  }

  // We don't have localized strings for item types, so just guess that it's a journal article
  if (!guessType && language != 'English') {
    return 'journalArticle';
  }

  return guessType;
}

function getSearchResults(doc: Document, checkOnly: boolean, extras: any = {}): boolean | Record<string, any> {
  var root;
  var elements = doc.getElementsByClassName('resultListContainer');

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] && elements[i].childElementCount) {
      root = elements[i];
      break;
    }
  }

  if (!root) {
    console.log("No root found");
    return false;
  }

  var results = root.getElementsByClassName('resultItem');
  // root.querySelectorAll('.resultTitle, .previewTitle');
  var items: Record<string, any> = {}, found = false;
  isEbrary = (results && results[0] && results[0].getElementsByClassName('ebraryitem').length > 0);
  // if the first result is Ebrary, they all are - we're looking at the Ebrary results tab

  for (let i = 0, n = results.length; i < n; i++) {
    var title = results[i].querySelectorAll('h3 a')[0] as HTMLAnchorElement;
    // console.log(title)
    if (!title || !title.href) continue;

    if (checkOnly) return true;
    found = true;


    let item: string | { title: string, checked: boolean } = trimInternal(title.textContent);
    var preselect = results[i].getElementsByClassName('marked_list_checkbox')[0] as HTMLInputElement;
    if (preselect) {
      item = {
        title: item,
        checked: preselect.checked
      };
    }

    items[title.href] = item;

    if (isEbrary && isBookmarklet) {
      extras[title.href] = {
        html: results[i],
        title: item,
        url: title.href
      };
    }
  }

  return found ? items : false;
}

async function scrape(doc: Document, url: string): Promise<{ doiMetadata: DtoDoiMetadata | null; pdfLink: string | null }> {
  // Extract metadata from the page using ProQuest's standard HTML structure
  const doiMetadata: DtoDoiMetadata = {
    title: '',
    author: [],
    issued: undefined,
    URL: url,
  };

  // Get the title
  let titleText = text(doc, '#documentTitle');
  if (titleText) {
    doiMetadata.title = titleText;
  }

  // Get all the metadata rows
  const rows = doc.getElementsByClassName('display_record_indexing_row');
  const dates: string[] = [];
  let place: { schoolLocation?: string, publicationPlace?: string, publicationCountry?: string } = {};
  const keywords: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    const labelElem = rows[i].childNodes[0];
    const valueElem = rows[i].childNodes[1];

    if (!labelElem || !valueElem) continue;

    let label = labelElem.textContent?.trim() || '';
    let value = valueElem.textContent?.trim() || '';

    // Translate label
    const enLabel = (language && fieldNames[language] && fieldNames[language][label]) || label;

    switch (enLabel) {
      case 'Title':
        // Capitalize title if all uppercase
        if (value === value.toUpperCase()) {
          value = value.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' ');
        }
        doiMetadata.title = value;
        break;
      case 'Author':
      case 'Editor':
      case 'People':
        const creatorType = enLabel === 'Author' ? 'author' : enLabel === 'Editor' ? 'editor' : 'contributor';

        // Parse authors from text or links
        let authorText = value;
        const authorLinks = Array.from((valueElem as HTMLElement).querySelectorAll('a')).filter(a => a.id !== 'orcidLink');
        if (authorLinks.length) {
          const authors = authorLinks.map(a => a.textContent || '').filter(t => t);
          if (authors.length) {
            authorText = authors.join('; ');
          }
        }

        const authorList = authorText.replace(/^by\s+/i, '').split(/\s*;\s*|\s+and\s+/i);
        for (const author of authorList) {
          if (!doiMetadata.author) doiMetadata.author = [];
          doiMetadata.author.push({
            family: author.split(',')[0].trim(),
            given: author.split(',')[1]?.trim(),
            name: author.trim(),
          });
        }
        break;
      case 'Publication title':
        doiMetadata['container-title'] = [value.replace(/;.+/, "")];
        break;
      case 'Volume':
        doiMetadata.volume = value;
        break;
      case 'Issue':
        doiMetadata.issue = value;
        break;
      case 'ISSN':
        if (!doiMetadata.ISSN) doiMetadata.ISSN = [];
        if (typeof doiMetadata.ISSN === 'string') {
          doiMetadata.ISSN = [doiMetadata.ISSN];
        }
        (doiMetadata.ISSN as string[]).push(value);
        break;
      case 'ISBN':
        if (!doiMetadata.ISBN) doiMetadata.ISBN = [];
        if (typeof doiMetadata.ISBN === 'string') {
          doiMetadata.ISBN = [doiMetadata.ISBN];
        }
        (doiMetadata.ISBN as string[]).push(value);
        break;
      case 'DOI':
        doiMetadata.DOI = value;
        break;
      case 'Pages':
        doiMetadata.page = value;
        break;
      case 'Publisher':
      case 'Printer/Publisher':
        doiMetadata.publisher = (valueElem as HTMLElement).innerText.split('\n')[0];
        break;
      case 'Place of publication':
        place.publicationPlace = value;
        break;
      case 'Language':
      case 'Language of publication':
        doiMetadata.language = value;
        break;
      case 'Publication date':
      case 'Date':
        dates[2] = value;
        break;
      case 'Publication year':
        dates[1] = value;
        break;
      case 'Year':
        dates[0] = value;
        break;
      case 'Subject':
      case 'Identifier / keyword':
        const tagLinks = (valueElem as HTMLElement).querySelectorAll('a');
        if (tagLinks.length) {
          Array.from(tagLinks).forEach(a => {
            if (a.textContent) keywords.push(a.textContent.replace(/\.$/, ''));
          });
        } else {
          keywords.push(...value.split(/\s*(?:,|;)\s*/));
        }
        break;
    }
  }

  // Set date from the array
  const dateValue = dates.pop();
  if (dateValue) {
    doiMetadata.issued = { "date-time": dateValue,
     };
  }

  // Set place
  if (place.publicationPlace) {
    // Store in publisher field for now since there's no dedicated place field
    // doiMetadata.publisher might already be set, but event-place doesn't exist
    if (!doiMetadata.publisher) {
      doiMetadata.publisher = place.publicationPlace;
    }
  }

  // Try to find PDF link
  let pdfLink: string | null = null;
  const pdfLinkEl = doc.querySelector('[id^="downloadPDFLink"]') as HTMLAnchorElement;
  if (pdfLinkEl && pdfLinkEl.href && !pdfLinkEl.closest('#suggestedSourcesBelowFullText')) {
    pdfLink = pdfLinkEl.href;
  } else {
    // Try to find fulltext link as fallback
    const fullTextLinks = xpath(doc, '//li[@id="tab-Fulltext-null"]/a');
    if (fullTextLinks.length > 0) {
      pdfLink = (fullTextLinks[0] as HTMLAnchorElement).href;
    }
  }

  return {
    doiMetadata,
    pdfLink,
  };
}

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ProQuest',
      translatorType: 4,
      target: '^https?://(www|search)\.proquest\.com/(.*/)?(docview|pagepdf|results|publicationissue|browseterms|browsetitles|browseresults|myresearch/(figtables|documents))',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-10-22 16:15:00',
    }
  },
  detectWeb(doc: Document, url: string) {
    let type: string | boolean | null = "journalArticle";

    initLang(doc);

    // Check for multiple first
    if (!url.includes('docview') && !url.includes('pagepdf')) {
      type = getSearchResults(doc, true) ? 'multiple' : false;
      return type;
    }

    // if we are on Abstract/Details page,
    // then we can read the type from the corresponding field
    var types = getTextValue(doc, ["Source type", "Document type", "Record type"]);
    var zoteroType = getItemType(types);
    if (zoteroType) {
      type = zoteroType;
      return type;
    }

    // hack for NYTs, which misses crucial data.
    var db = getTextValue(doc, "Database")[0];
    if (db && db.includes("The New York Times")) {
      type = "newspaperArticle";
      return type;
    }

    // there is not much information about the item type in the pdf/fulltext page
    let titleRow = text(doc, '.open-access');
    if (titleRow && doc.getElementById('docview-nav-stick')) { // do not continue if there is no nav to the Abstract, as the translation will fail
      if (getItemType([titleRow])) {
        type = getItemType([titleRow]);
        return type;
      }

      // Fall back on journalArticle - even if we couldn't guess the type
      type = "journalArticle";
      return type;
    }

    return type;
  },
  async doWeb(doc: Document, url: string) {
    const type = this.detectWeb ? this.detectWeb(doc, url) : null;
    if (type === "multiple") {
      let results: {
        doiMetadata: DtoDoiMetadata | null;
        pdfLink: string | null;
      }[] = [];

      // Get all article links from search results
      const articles = getSearchResults(doc, false) as Record<string, any>;
      if (!articles) {
        window.postMessage({
          source: MESSAGING_SOURCES.PAGE,
          type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
          payload: results as unknown as DoWebResultType,
        }, "*");
        return Promise.resolve();
      }

      for (const articleUrl in articles) {
        try {
          const resp = await fetch(articleUrl);
          const text = await resp.text();
          const parser = new DOMParser();
          const articleDoc = parser.parseFromString(text, "text/html");
          const result = await scrape(articleDoc, articleUrl);
          results.push(result as any);
        } catch (e) {
          console.error("Error scraping article:", e);
          results.push({ doiMetadata: null, pdfLink: null } as any);
        }
      }

      window.postMessage({
        source: MESSAGING_SOURCES.PAGE,
        type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
        payload: results as unknown as DoWebResultType,
      }, "*");

      return Promise.resolve();
    }
    else {
      // const result = (await scrape(doc, url)) as any;
      let result: DoWebResultType[number];

      const abstractTab = (doc.getElementById('addFlashPageParameterformat_abstract') || doc.getElementById('addFlashPageParameterformat_citation') || doc.getElementById("link_prefix_addFlashPageParameterformat_citation")) as HTMLAnchorElement;
      const abstractView = doc.getElementsByClassName('abstractContainer');
      if (abstractTab && abstractTab.classList.contains('active')) {
        result = (await scrape(doc, url)) as any;
      }
      else if (abstractTab && abstractTab.href) {
        var link = abstractTab.href;
        const _doc = await requestDocument(link);
        functions?.doWeb?.(_doc, link);
        return;
      }
      else if (abstractView.length) {
        result = (await scrape(doc, url)) as any;
      }
      else if (doc.querySelector('.docViewFullCitation .display_record_indexing_row')) {
        result = (await scrape(doc, url)) as any;
      }
      else {
        throw new Error("Could not find the abstract/metadata link");
      }

      window.postMessage({
        source: MESSAGING_SOURCES.PAGE,
        type: INJECTED_MESSAGING_KEYS.DO_WEB_RESULT,
        payload: [result] as unknown as DoWebResultType,
      }, "*");
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}

export default defineUnlistedScript(() => {
  console.log("Hello from translators-proquest.ts");

  window.addEventListener("message", (event: MessageEvent<{ source: string, type: INJECTED_MESSAGING_KEYS, payload: DetectWebType }>) => {
    if (event.data?.source !== MESSAGING_SOURCES.CONTENT) return;

    switch (event.data.type) {
      case INJECTED_MESSAGING_KEYS.DETECT_WEB:
        const type = functions.detectWeb?.(document, window.location.href) || null;

        window.postMessage({
          source: MESSAGING_SOURCES.PAGE,
          type: INJECTED_MESSAGING_KEYS.DETECT_WEB_RESULT,
          payload: { type } as DetectWebResultType,
        }, "*");

        break;

      case INJECTED_MESSAGING_KEYS.DO_WEB:
        functions.doWeb?.(document, window.location.href).then(() => {
          console.log("doWeb completed");
        }).catch((e: any) => {
          console.error("doWeb failed", e);
        });

        break;

      default:
        return;
    }
  });
});