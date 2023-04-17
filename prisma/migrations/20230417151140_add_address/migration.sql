-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "cep" VARCHAR(12) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "street" VARCHAR(50) NOT NULL,
    "number" VARCHAR(50) NOT NULL,
    "complement" VARCHAR(320) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_user_id_key" ON "address"("user_id");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
