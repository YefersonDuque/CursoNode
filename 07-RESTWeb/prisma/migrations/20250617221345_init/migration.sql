-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
