-- CreateTable
CREATE TABLE "csl_data_attachments" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "cslDataId" TEXT NOT NULL,
    "url" TEXT,
    "title" TEXT,
    "mimeType" TEXT,
    "hash" TEXT,
    "content" TEXT,

    CONSTRAINT "csl_data_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "csl_data_attachments_hash_idx" ON "csl_data_attachments"("hash");

-- AddForeignKey
ALTER TABLE "csl_data_attachments" ADD CONSTRAINT "csl_data_attachments_cslDataId_fkey" FOREIGN KEY ("cslDataId") REFERENCES "csl_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;
