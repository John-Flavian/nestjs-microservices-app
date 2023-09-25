/*
  Warnings:

  - The `usersId` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `description` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "description" SET NOT NULL,
DROP COLUMN "usersId",
ADD COLUMN     "usersId" INTEGER[];
