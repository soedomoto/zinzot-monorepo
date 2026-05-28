/*
  Warnings:

  - A unique constraint covering the columns `[userId,cslDataId]` on the table `user_libraries` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_libraries_userId_cslDataId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "user_libraries_userId_cslDataId_key" ON "user_libraries"("userId", "cslDataId");
