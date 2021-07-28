-- CreateTable
CREATE TABLE `Summary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `total` INTEGER NOT NULL DEFAULT 0,
    `recoveries` INTEGER NOT NULL DEFAULT 0,
    `deaths` INTEGER NOT NULL DEFAULT 0,
    `active_cases` INTEGER NOT NULL DEFAULT 0,
    `fatality_rate` DOUBLE NOT NULL DEFAULT 0,
    `recovery_rate` DOUBLE NOT NULL DEFAULT 0,
    `last_updates` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
