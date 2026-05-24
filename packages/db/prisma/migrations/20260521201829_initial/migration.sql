-- CreateEnum
CREATE TYPE "AnnotationType" AS ENUM ('HIGHLIGHT', 'UNDERLINE', 'STRIKETHROUGH');

-- CreateTable
CREATE TABLE "user_collection_library_association" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "libraryId" INTEGER NOT NULL,

    CONSTRAINT "user_collection_library_association_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_contributors" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "contributorType" TEXT NOT NULL,
    "given" TEXT,
    "family" TEXT,
    "name" TEXT,
    "sequence" TEXT,
    "affiliation" TEXT,
    "orcid" TEXT,
    "authenticatedOrcid" BOOLEAN,

    CONSTRAINT "doi_contributors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_date_infos" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "dateType" TEXT NOT NULL,
    "date" TEXT,
    "timestamp" INTEGER,
    "dateParts" TEXT,
    "dateTime" TEXT,
    "versionField" TEXT,

    CONSTRAINT "doi_date_infos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_issn_types" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "value" TEXT,

    CONSTRAINT "doi_issn_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_licenses" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "start" TEXT,
    "end" TEXT,
    "url" TEXT,
    "identifier" TEXT,
    "type" TEXT,
    "contentVersion" TEXT,
    "delayInDays" INTEGER,

    CONSTRAINT "doi_licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_funders" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "name" TEXT,
    "identifier" TEXT,

    CONSTRAINT "doi_funders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_references" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "doi" TEXT,
    "url" TEXT,
    "title" TEXT,
    "author" TEXT,
    "publisher" TEXT,
    "publishedDate" TEXT,
    "key" TEXT,
    "doiAssertedBy" TEXT,
    "firstPage" TEXT,
    "volume" TEXT,
    "volumeTitle" TEXT,
    "year" TEXT,
    "unstructured" TEXT,
    "journalTitle" TEXT,
    "edition" TEXT,

    CONSTRAINT "doi_references_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_links" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "url" TEXT,
    "rel" TEXT,
    "mediaType" TEXT,
    "contentType" TEXT,
    "contentVersion" TEXT,
    "intendedApplication" TEXT,

    CONSTRAINT "doi_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_assertions" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "identifier" TEXT,

    CONSTRAINT "doi_assertions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_attachments" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "url" TEXT,
    "title" TEXT,
    "mimeType" TEXT,
    "hash" TEXT,
    "content" TEXT,

    CONSTRAINT "doi_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_journal_issues" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "issue" TEXT,
    "publishedPrint" TEXT,

    CONSTRAINT "doi_journal_issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_string_arrays" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "researchReferenceId" INTEGER NOT NULL,
    "arrayType" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "doi_string_arrays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doi_metadata" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "sourceUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "doi" TEXT,
    "title" TEXT,
    "originalTitle" TEXT,
    "subtitle" TEXT,
    "shortTitle" TEXT,
    "type" TEXT,
    "url" TEXT,
    "abstract" TEXT,
    "publicationTitle" TEXT,
    "journal" TEXT,
    "volume" TEXT,
    "issue" TEXT,
    "articleNumber" TEXT,
    "specialNumbering" TEXT,
    "page" TEXT,
    "firstPage" TEXT,
    "lastPage" TEXT,
    "publishedDate" TEXT,
    "publishedPrintYear" INTEGER,
    "publishedOnlineYear" INTEGER,
    "alternativeId" TEXT,
    "alternateDoi" TEXT,
    "publisher" TEXT,
    "source" TEXT,
    "member" TEXT,
    "prefix" TEXT,
    "publisherPlace" TEXT,
    "language" TEXT,
    "referenceCount" INTEGER,
    "referencesCount" INTEGER,
    "isReferencedByCount" INTEGER,
    "citedByRelationCount" INTEGER,
    "updatePolicy" TEXT,
    "contentDomain" TEXT,
    "relation" TEXT,
    "resource" TEXT,
    "score" DOUBLE PRECISION,

    CONSTRAINT "doi_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_library_annotations" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "parentId" INTEGER,
    "rootId" INTEGER,
    "userLibraryId" INTEGER NOT NULL,
    "pageNumber" INTEGER,
    "originalContent" TEXT,
    "comment" TEXT,
    "color" TEXT,
    "type" "AnnotationType",
    "rects" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_library_annotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "pictureUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sessions" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_libraries" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "doiMetadataId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_libraries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_collections" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_collections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "user_collection_library_association_collectionId_idx" ON "user_collection_library_association"("collectionId");

-- CreateIndex
CREATE INDEX "user_collection_library_association_libraryId_idx" ON "user_collection_library_association"("libraryId");

-- CreateIndex
CREATE UNIQUE INDEX "user_collection_library_association_collectionId_libraryId_key" ON "user_collection_library_association"("collectionId", "libraryId");

-- CreateIndex
CREATE INDEX "idx_doi_contributor_ref_type" ON "doi_contributors"("researchReferenceId", "contributorType");

-- CreateIndex
CREATE INDEX "doi_contributors_family_idx" ON "doi_contributors"("family");

-- CreateIndex
CREATE INDEX "doi_issn_types_value_idx" ON "doi_issn_types"("value");

-- CreateIndex
CREATE INDEX "doi_attachments_hash_idx" ON "doi_attachments"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "doi_journal_issues_researchReferenceId_key" ON "doi_journal_issues"("researchReferenceId");

-- CreateIndex
CREATE INDEX "doi_string_arrays_value_idx" ON "doi_string_arrays"("value");

-- CreateIndex
CREATE INDEX "doi_metadata_doi_idx" ON "doi_metadata"("doi");

-- CreateIndex
CREATE INDEX "doi_metadata_url_idx" ON "doi_metadata"("url");

-- CreateIndex
CREATE INDEX "doi_metadata_createdAt_idx" ON "doi_metadata"("createdAt");

-- CreateIndex
CREATE INDEX "doi_metadata_sourceUrl_idx" ON "doi_metadata"("sourceUrl");

-- CreateIndex
CREATE INDEX "doi_metadata_id_idx" ON "doi_metadata"("id");

-- CreateIndex
CREATE INDEX "doi_metadata_title_idx" ON "doi_metadata"("title");

-- CreateIndex
CREATE INDEX "doi_metadata_type_idx" ON "doi_metadata"("type");

-- CreateIndex
CREATE INDEX "doi_metadata_publisher_idx" ON "doi_metadata"("publisher");

-- CreateIndex
CREATE INDEX "doi_metadata_publicationTitle_idx" ON "doi_metadata"("publicationTitle");

-- CreateIndex
CREATE INDEX "doi_metadata_publishedDate_idx" ON "doi_metadata"("publishedDate");

-- CreateIndex
CREATE INDEX "doi_metadata_publishedOnlineYear_idx" ON "doi_metadata"("publishedOnlineYear");

-- CreateIndex
CREATE INDEX "doi_metadata_publishedPrintYear_idx" ON "doi_metadata"("publishedPrintYear");

-- CreateIndex
CREATE INDEX "doi_metadata_id_version_idx" ON "doi_metadata"("id", "version");

-- CreateIndex
CREATE INDEX "user_library_annotations_userLibraryId_idx" ON "user_library_annotations"("userLibraryId");

-- CreateIndex
CREATE INDEX "user_library_annotations_parentId_idx" ON "user_library_annotations"("parentId");

-- CreateIndex
CREATE INDEX "user_library_annotations_rootId_idx" ON "user_library_annotations"("rootId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "user_sessions_token_key" ON "user_sessions"("token");

-- CreateIndex
CREATE INDEX "user_sessions_userId_idx" ON "user_sessions"("userId");

-- CreateIndex
CREATE INDEX "user_sessions_token_idx" ON "user_sessions"("token");

-- CreateIndex
CREATE INDEX "user_sessions_expires_idx" ON "user_sessions"("expires");

-- CreateIndex
CREATE INDEX "user_libraries_userId_idx" ON "user_libraries"("userId");

-- CreateIndex
CREATE INDEX "user_libraries_doiMetadataId_idx" ON "user_libraries"("doiMetadataId");

-- CreateIndex
CREATE UNIQUE INDEX "user_libraries_userId_doiMetadataId_key" ON "user_libraries"("userId", "doiMetadataId");

-- CreateIndex
CREATE INDEX "user_collections_userId_idx" ON "user_collections"("userId");

-- CreateIndex
CREATE INDEX "user_collections_parentId_idx" ON "user_collections"("parentId");

-- AddForeignKey
ALTER TABLE "user_collection_library_association" ADD CONSTRAINT "user_collection_library_association_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "user_collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_collection_library_association" ADD CONSTRAINT "user_collection_library_association_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "user_libraries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_contributors" ADD CONSTRAINT "doi_contributors_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_date_infos" ADD CONSTRAINT "doi_date_infos_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_issn_types" ADD CONSTRAINT "doi_issn_types_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_licenses" ADD CONSTRAINT "doi_licenses_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_funders" ADD CONSTRAINT "doi_funders_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_references" ADD CONSTRAINT "doi_references_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_links" ADD CONSTRAINT "doi_links_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_assertions" ADD CONSTRAINT "doi_assertions_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_attachments" ADD CONSTRAINT "doi_attachments_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_journal_issues" ADD CONSTRAINT "doi_journal_issues_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doi_string_arrays" ADD CONSTRAINT "doi_string_arrays_researchReferenceId_fkey" FOREIGN KEY ("researchReferenceId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_library_annotations" ADD CONSTRAINT "user_library_annotations_userLibraryId_fkey" FOREIGN KEY ("userLibraryId") REFERENCES "user_libraries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_library_annotations" ADD CONSTRAINT "user_library_annotations_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "user_library_annotations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_library_annotations" ADD CONSTRAINT "user_library_annotations_rootId_fkey" FOREIGN KEY ("rootId") REFERENCES "user_library_annotations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_libraries" ADD CONSTRAINT "user_libraries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_libraries" ADD CONSTRAINT "user_libraries_doiMetadataId_fkey" FOREIGN KEY ("doiMetadataId") REFERENCES "doi_metadata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_collections" ADD CONSTRAINT "user_collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_collections" ADD CONSTRAINT "user_collections_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "user_collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
