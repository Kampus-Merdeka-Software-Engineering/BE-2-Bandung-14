-- CreateTable
CREATE TABLE `Customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `check_in` VARCHAR(191) NULL,
    `check_out` VARCHAR(191) NULL,
    `adults` INTEGER NULL,
    `children` INTEGER NULL,
    `room` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile_number` VARCHAR(191) NULL,
    `bukti_TF` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
