/*
  Warnings:

  - A unique constraint covering the columns `[id,version]` on the table `user_libraries` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_libraries_version_key";

-- CreateIndex
CREATE UNIQUE INDEX "user_libraries_id_version_key" ON "user_libraries"("id", "version");
