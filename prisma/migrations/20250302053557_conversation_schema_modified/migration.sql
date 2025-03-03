/*
  Warnings:

  - Added the required column `companyId` to the `conversations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "conversations" ADD COLUMN     "companyId" TEXT NOT NULL;
