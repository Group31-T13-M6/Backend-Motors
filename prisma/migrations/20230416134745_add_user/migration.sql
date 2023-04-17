/*
  Warnings:

  - Added the required column `user_id` to the `announcement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeUser" AS ENUM ('Advertiser', 'Buyer');

-- AlterTable
ALTER TABLE "announcement" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "phone_number" VARCHAR(50) NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(320) NOT NULL,
    "password" TEXT NOT NULL,
    "type_user" "TypeUser" NOT NULL DEFAULT 'Advertiser',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "announcement" ADD CONSTRAINT "announcement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;


