/*
  Warnings:

  - You are about to drop the `doi_assertions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_attachments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_contributors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_date_infos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_funders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_issn_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_journal_issues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_licenses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_metadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_references` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doi_string_arrays` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_collection_library_association` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_collections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_libraries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_library_annotations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CSLType" AS ENUM ('article', 'article-journal', 'article-magazine', 'article-newspaper', 'bill', 'book', 'broadcast', 'chapter', 'classic', 'collection', 'dataset', 'document', 'entry', 'entry-dictionary', 'entry-encyclopedia', 'event', 'figure', 'graphic', 'hearing', 'interview', 'legal_case', 'legislation', 'manuscript', 'map', 'motion_picture', 'musical_score', 'pamphlet', 'paper-conference', 'patent', 'performance', 'periodical', 'personal_communication', 'post', 'post-weblog', 'regulation', 'report', 'review', 'review-book', 'software', 'song', 'speech', 'standard', 'thesis', 'treaty', 'webpage');

-- DropForeignKey
ALTER TABLE "doi_assertions" DROP CONSTRAINT "doi_assertions_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_attachments" DROP CONSTRAINT "doi_attachments_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_contributors" DROP CONSTRAINT "doi_contributors_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_date_infos" DROP CONSTRAINT "doi_date_infos_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_funders" DROP CONSTRAINT "doi_funders_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_issn_types" DROP CONSTRAINT "doi_issn_types_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_journal_issues" DROP CONSTRAINT "doi_journal_issues_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_licenses" DROP CONSTRAINT "doi_licenses_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_links" DROP CONSTRAINT "doi_links_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_references" DROP CONSTRAINT "doi_references_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "doi_string_arrays" DROP CONSTRAINT "doi_string_arrays_researchReferenceId_fkey";

-- DropForeignKey
ALTER TABLE "user_collection_library_association" DROP CONSTRAINT "user_collection_library_association_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "user_collection_library_association" DROP CONSTRAINT "user_collection_library_association_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "user_collections" DROP CONSTRAINT "user_collections_parentId_fkey";

-- DropForeignKey
ALTER TABLE "user_collections" DROP CONSTRAINT "user_collections_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_libraries" DROP CONSTRAINT "user_libraries_doiMetadataId_fkey";

-- DropForeignKey
ALTER TABLE "user_libraries" DROP CONSTRAINT "user_libraries_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_library_annotations" DROP CONSTRAINT "user_library_annotations_parentId_fkey";

-- DropForeignKey
ALTER TABLE "user_library_annotations" DROP CONSTRAINT "user_library_annotations_rootId_fkey";

-- DropForeignKey
ALTER TABLE "user_library_annotations" DROP CONSTRAINT "user_library_annotations_userLibraryId_fkey";

-- DropForeignKey
ALTER TABLE "user_sessions" DROP CONSTRAINT "user_sessions_userId_fkey";

-- DropTable
DROP TABLE "doi_assertions";

-- DropTable
DROP TABLE "doi_attachments";

-- DropTable
DROP TABLE "doi_contributors";

-- DropTable
DROP TABLE "doi_date_infos";

-- DropTable
DROP TABLE "doi_funders";

-- DropTable
DROP TABLE "doi_issn_types";

-- DropTable
DROP TABLE "doi_journal_issues";

-- DropTable
DROP TABLE "doi_licenses";

-- DropTable
DROP TABLE "doi_links";

-- DropTable
DROP TABLE "doi_metadata";

-- DropTable
DROP TABLE "doi_references";

-- DropTable
DROP TABLE "doi_string_arrays";

-- DropTable
DROP TABLE "user_collection_library_association";

-- DropTable
DROP TABLE "user_collections";

-- DropTable
DROP TABLE "user_libraries";

-- DropTable
DROP TABLE "user_library_annotations";

-- DropTable
DROP TABLE "user_sessions";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "AnnotationType";

-- CreateTable
CREATE TABLE "csl_data" (
    "id" TEXT NOT NULL,
    "type" "CSLType" NOT NULL,
    "abstract" TEXT,
    "annote" TEXT,
    "archive" TEXT,
    "archive-place" TEXT,
    "archive_collection" TEXT,
    "archive_location" TEXT,
    "authority" TEXT,
    "call-number" TEXT,
    "categories" TEXT[],
    "chapter-number" TEXT,
    "citation-key" TEXT,
    "citation-label" TEXT,
    "citation-number" TEXT,
    "collection-number" TEXT,
    "collection-title" TEXT,
    "container-title" TEXT,
    "container-title-short" TEXT,
    "dimensions" TEXT,
    "division" TEXT,
    "DOI" TEXT,
    "edition" TEXT,
    "event" TEXT,
    "event-place" TEXT,
    "event-title" TEXT,
    "first-reference-note-number" TEXT,
    "genre" TEXT,
    "ISBN" TEXT,
    "ISSN" TEXT,
    "issue" TEXT,
    "journalAbbreviation" TEXT,
    "jurisdiction" TEXT,
    "keyword" TEXT,
    "language" TEXT,
    "locator" TEXT,
    "medium" TEXT,
    "note" TEXT,
    "number" TEXT,
    "number-of-pages" TEXT,
    "number-of-volumes" TEXT,
    "original-publisher" TEXT,
    "original-publisher-place" TEXT,
    "original-title" TEXT,
    "page" TEXT,
    "page-first" TEXT,
    "part" TEXT,
    "part-title" TEXT,
    "PMCID" TEXT,
    "PMID" TEXT,
    "printing" TEXT,
    "publisher" TEXT,
    "publisher-place" TEXT,
    "references" TEXT,
    "reviewed-genre" TEXT,
    "reviewed-title" TEXT,
    "scale" TEXT,
    "section" TEXT,
    "shortTitle" TEXT,
    "source" TEXT,
    "status" TEXT,
    "supplement" TEXT,
    "title" TEXT,
    "title-short" TEXT,
    "URL" TEXT,
    "version" TEXT,
    "volume" TEXT,
    "volume-title" TEXT,
    "volume-title-short" TEXT,
    "year-suffix" TEXT,
    "accessed" JSONB,
    "available-date" JSONB,
    "custom" JSONB,
    "event-date" JSONB,
    "issued" JSONB,
    "original-date" JSONB,
    "submitted" JSONB,

    CONSTRAINT "csl_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "name_variable" (
    "id" TEXT NOT NULL,
    "family" TEXT,
    "given" TEXT,
    "literal" TEXT,
    "dropping-particle" TEXT,
    "non-dropping-particle" TEXT,
    "suffix" TEXT,
    "comma-suffix" TEXT,
    "parse-names" TEXT,
    "static-ordering" TEXT,

    CONSTRAINT "name_variable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_author" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_chair" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_collection-editor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_compiler" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_composer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_container-author" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_contributor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_curator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_director" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_editor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_editorial-director" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_executive-producer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_guest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_host" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_illustrator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_interviewer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_narrator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_organizer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_original-author" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_performer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_producer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_recipient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_reviewed-author" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_script-writer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_series-creator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_translator" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "csl_data_DOI_idx" ON "csl_data"("DOI");

-- CreateIndex
CREATE INDEX "csl_data_PMID_idx" ON "csl_data"("PMID");

-- CreateIndex
CREATE INDEX "csl_data_ISBN_idx" ON "csl_data"("ISBN");

-- CreateIndex
CREATE INDEX "csl_data_citation-key_idx" ON "csl_data"("citation-key");

-- CreateIndex
CREATE INDEX "csl_data_type_idx" ON "csl_data"("type");

-- CreateIndex
CREATE INDEX "csl_data_title_type_idx" ON "csl_data"("title", "type");

-- CreateIndex
CREATE INDEX "csl_data_container-title_volume_idx" ON "csl_data"("container-title", "volume");

-- CreateIndex
CREATE INDEX "name_variable_family_given_idx" ON "name_variable"("family", "given");

-- CreateIndex
CREATE INDEX "name_variable_literal_idx" ON "name_variable"("literal");

-- CreateIndex
CREATE UNIQUE INDEX "_author_AB_unique" ON "_author"("A", "B");

-- CreateIndex
CREATE INDEX "_author_B_index" ON "_author"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_chair_AB_unique" ON "_chair"("A", "B");

-- CreateIndex
CREATE INDEX "_chair_B_index" ON "_chair"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_collection-editor_AB_unique" ON "_collection-editor"("A", "B");

-- CreateIndex
CREATE INDEX "_collection-editor_B_index" ON "_collection-editor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_compiler_AB_unique" ON "_compiler"("A", "B");

-- CreateIndex
CREATE INDEX "_compiler_B_index" ON "_compiler"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_composer_AB_unique" ON "_composer"("A", "B");

-- CreateIndex
CREATE INDEX "_composer_B_index" ON "_composer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_container-author_AB_unique" ON "_container-author"("A", "B");

-- CreateIndex
CREATE INDEX "_container-author_B_index" ON "_container-author"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_contributor_AB_unique" ON "_contributor"("A", "B");

-- CreateIndex
CREATE INDEX "_contributor_B_index" ON "_contributor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_curator_AB_unique" ON "_curator"("A", "B");

-- CreateIndex
CREATE INDEX "_curator_B_index" ON "_curator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_director_AB_unique" ON "_director"("A", "B");

-- CreateIndex
CREATE INDEX "_director_B_index" ON "_director"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_editor_AB_unique" ON "_editor"("A", "B");

-- CreateIndex
CREATE INDEX "_editor_B_index" ON "_editor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_editorial-director_AB_unique" ON "_editorial-director"("A", "B");

-- CreateIndex
CREATE INDEX "_editorial-director_B_index" ON "_editorial-director"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_executive-producer_AB_unique" ON "_executive-producer"("A", "B");

-- CreateIndex
CREATE INDEX "_executive-producer_B_index" ON "_executive-producer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_guest_AB_unique" ON "_guest"("A", "B");

-- CreateIndex
CREATE INDEX "_guest_B_index" ON "_guest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_host_AB_unique" ON "_host"("A", "B");

-- CreateIndex
CREATE INDEX "_host_B_index" ON "_host"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_illustrator_AB_unique" ON "_illustrator"("A", "B");

-- CreateIndex
CREATE INDEX "_illustrator_B_index" ON "_illustrator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_interviewer_AB_unique" ON "_interviewer"("A", "B");

-- CreateIndex
CREATE INDEX "_interviewer_B_index" ON "_interviewer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_narrator_AB_unique" ON "_narrator"("A", "B");

-- CreateIndex
CREATE INDEX "_narrator_B_index" ON "_narrator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_organizer_AB_unique" ON "_organizer"("A", "B");

-- CreateIndex
CREATE INDEX "_organizer_B_index" ON "_organizer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_original-author_AB_unique" ON "_original-author"("A", "B");

-- CreateIndex
CREATE INDEX "_original-author_B_index" ON "_original-author"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_performer_AB_unique" ON "_performer"("A", "B");

-- CreateIndex
CREATE INDEX "_performer_B_index" ON "_performer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_producer_AB_unique" ON "_producer"("A", "B");

-- CreateIndex
CREATE INDEX "_producer_B_index" ON "_producer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_recipient_AB_unique" ON "_recipient"("A", "B");

-- CreateIndex
CREATE INDEX "_recipient_B_index" ON "_recipient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_reviewed-author_AB_unique" ON "_reviewed-author"("A", "B");

-- CreateIndex
CREATE INDEX "_reviewed-author_B_index" ON "_reviewed-author"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_script-writer_AB_unique" ON "_script-writer"("A", "B");

-- CreateIndex
CREATE INDEX "_script-writer_B_index" ON "_script-writer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_series-creator_AB_unique" ON "_series-creator"("A", "B");

-- CreateIndex
CREATE INDEX "_series-creator_B_index" ON "_series-creator"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_translator_AB_unique" ON "_translator"("A", "B");

-- CreateIndex
CREATE INDEX "_translator_B_index" ON "_translator"("B");

-- AddForeignKey
ALTER TABLE "_author" ADD CONSTRAINT "_author_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_author" ADD CONSTRAINT "_author_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chair" ADD CONSTRAINT "_chair_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chair" ADD CONSTRAINT "_chair_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collection-editor" ADD CONSTRAINT "_collection-editor_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collection-editor" ADD CONSTRAINT "_collection-editor_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_compiler" ADD CONSTRAINT "_compiler_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_compiler" ADD CONSTRAINT "_compiler_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_composer" ADD CONSTRAINT "_composer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_composer" ADD CONSTRAINT "_composer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_container-author" ADD CONSTRAINT "_container-author_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_container-author" ADD CONSTRAINT "_container-author_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_contributor" ADD CONSTRAINT "_contributor_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_contributor" ADD CONSTRAINT "_contributor_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_curator" ADD CONSTRAINT "_curator_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_curator" ADD CONSTRAINT "_curator_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_director" ADD CONSTRAINT "_director_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_director" ADD CONSTRAINT "_director_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_editor" ADD CONSTRAINT "_editor_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_editor" ADD CONSTRAINT "_editor_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_editorial-director" ADD CONSTRAINT "_editorial-director_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_editorial-director" ADD CONSTRAINT "_editorial-director_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_executive-producer" ADD CONSTRAINT "_executive-producer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_executive-producer" ADD CONSTRAINT "_executive-producer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guest" ADD CONSTRAINT "_guest_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guest" ADD CONSTRAINT "_guest_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_host" ADD CONSTRAINT "_host_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_host" ADD CONSTRAINT "_host_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_illustrator" ADD CONSTRAINT "_illustrator_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_illustrator" ADD CONSTRAINT "_illustrator_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_interviewer" ADD CONSTRAINT "_interviewer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_interviewer" ADD CONSTRAINT "_interviewer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_narrator" ADD CONSTRAINT "_narrator_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_narrator" ADD CONSTRAINT "_narrator_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_organizer" ADD CONSTRAINT "_organizer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_organizer" ADD CONSTRAINT "_organizer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_original-author" ADD CONSTRAINT "_original-author_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_original-author" ADD CONSTRAINT "_original-author_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_performer" ADD CONSTRAINT "_performer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_performer" ADD CONSTRAINT "_performer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_producer" ADD CONSTRAINT "_producer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_producer" ADD CONSTRAINT "_producer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recipient" ADD CONSTRAINT "_recipient_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recipient" ADD CONSTRAINT "_recipient_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reviewed-author" ADD CONSTRAINT "_reviewed-author_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reviewed-author" ADD CONSTRAINT "_reviewed-author_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_script-writer" ADD CONSTRAINT "_script-writer_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_script-writer" ADD CONSTRAINT "_script-writer_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_series-creator" ADD CONSTRAINT "_series-creator_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_series-creator" ADD CONSTRAINT "_series-creator_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_translator" ADD CONSTRAINT "_translator_A_fkey" FOREIGN KEY ("A") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_translator" ADD CONSTRAINT "_translator_B_fkey" FOREIGN KEY ("B") REFERENCES "name_variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
