-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2023 at 05:41 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_inventoryjc`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `kode_brg` varchar(10) NOT NULL,
  `nama_brg` varchar(100) NOT NULL,
  `harga_brg` int(11) NOT NULL,
  `stok` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`kode_brg`, `nama_brg`, `harga_brg`, `stok`) VALUES
('CMPNAN00', 'KPM CLASSIC PREMIUM KIDS PUTIH SIZE 0', 26400, 100),
('CMPNAN01', 'KPM CLASSIC PREMIUM KIDS PUTIH SIZE 1', 26400, 100),
('CMPNAN02', 'KPM CLASSIC PREMIUM KIDS PUTIH SIZE 2 coba edit', 26400, 100);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id_inv` varchar(10) NOT NULL,
  `id_po` varchar(10) NOT NULL,
  `tanggal` date NOT NULL,
  `total` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_inv`, `id_po`, `tanggal`, `total`) VALUES
('I-001', 'P002', '2023-06-10', 2640000);

-- --------------------------------------------------------

--
-- Table structure for table `item_invoice`
--

CREATE TABLE `item_invoice` (
  `id_item_inv` varchar(20) NOT NULL,
  `id_inv` varchar(10) NOT NULL,
  `id_po` varchar(10) NOT NULL,
  `kode_brg` varchar(10) NOT NULL,
  `nama_brg` varchar(100) NOT NULL,
  `harga_brg` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item_invoice`
--

INSERT INTO `item_invoice` (`id_item_inv`, `id_inv`, `id_po`, `kode_brg`, `nama_brg`, `harga_brg`, `qty`, `subtotal`) VALUES
('IV-001', 'I-001', 'P002', 'CMPNAN00', 'KPM CLASSIC PREMIUM KIDS PUTIH 00', 26400, 50, 0),
('IV-002', 'I-001', 'P002', 'CMPNAN01', 'KPM CLASSIC PREMIUM KIDS PUTIH 01', 26400, 50, 0);

-- --------------------------------------------------------

--
-- Table structure for table `item_po`
--

CREATE TABLE `item_po` (
  `id_item_po` varchar(10) NOT NULL,
  `id_po` varchar(10) NOT NULL,
  `kode_brg` varchar(10) NOT NULL,
  `nama_brg` varchar(100) NOT NULL,
  `harga_brg` int(10) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item_po`
--

INSERT INTO `item_po` (`id_item_po`, `id_po`, `kode_brg`, `nama_brg`, `harga_brg`, `qty`) VALUES
('IP001', 'P002', 'CMPNAN01', 'KPM CLASSIC PREMIUM KIDS PUTIH 01', 26400, 50),
('IP002', 'P002', 'CMPNAN00', 'KPM CLASSIC PREMIUM KIDS PUTIH 00', 26400, 50);

-- --------------------------------------------------------

--
-- Table structure for table `po`
--

CREATE TABLE `po` (
  `id_po` varchar(4) NOT NULL,
  `tanggal` date NOT NULL,
  `supplier` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `po`
--

INSERT INTO `po` (`id_po`, `tanggal`, `supplier`) VALUES
('P001', '2023-06-01', 'PT Kaos Indonesia'),
('P002', '2023-06-02', 'PT Solidaritas');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  `is_superuser` int(1) NOT NULL,
  `is_staff` int(1) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`, `is_superuser`, `is_staff`, `status`) VALUES
('tes2@gmail.com', '$2a$10$Mtr93ITOVxaMTxnmthfRKuObvCnxGjzM/NCRb89E1ueIQG6It0Ztm', 1, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`kode_brg`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id_inv`),
  ADD KEY `id_po` (`id_po`);

--
-- Indexes for table `item_invoice`
--
ALTER TABLE `item_invoice`
  ADD PRIMARY KEY (`id_item_inv`);

--
-- Indexes for table `item_po`
--
ALTER TABLE `item_po`
  ADD PRIMARY KEY (`id_item_po`),
  ADD KEY `kode_brg` (`kode_brg`),
  ADD KEY `id_po` (`id_po`);

--
-- Indexes for table `po`
--
ALTER TABLE `po`
  ADD PRIMARY KEY (`id_po`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`id_po`) REFERENCES `po` (`id_po`);

--
-- Constraints for table `item_po`
--
ALTER TABLE `item_po`
  ADD CONSTRAINT `item_po_ibfk_1` FOREIGN KEY (`kode_brg`) REFERENCES `barang` (`kode_brg`),
  ADD CONSTRAINT `item_po_ibfk_2` FOREIGN KEY (`id_po`) REFERENCES `po` (`id_po`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
