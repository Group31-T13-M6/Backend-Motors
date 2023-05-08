-- CreateTable
CREATE TABLE "announcement" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" VARCHAR(4) NOT NULL,
    "fuel" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" VARCHAR(30) NOT NULL,
    "price" INTEGER NOT NULL,
    "fipe_table" INTEGER NOT NULL,
    "description" VARCHAR(320) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "announcement_pkey" PRIMARY KEY ("id")
);
