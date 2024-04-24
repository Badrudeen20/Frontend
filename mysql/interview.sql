-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2024 at 10:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview`
--

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `id` int(11) NOT NULL DEFAULT 0,
  `model_name` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `price` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `model_id` int(11) NOT NULL,
  `model_name` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`model_id`, `model_name`, `color`, `brand`) VALUES
(1, 'Leaf', 'Black', 'Nissan'),
(2, 'Leaf', 'Black', 'Nissan'),
(3, 'Model S', 'Black', 'Tesla'),
(4, 'Model X', 'White', 'Tesla'),
(5, 'Ioniq 5', 'Black', 'Hyundai'),
(6, 'Ioniq 5', 'Black', 'Hyundai'),
(7, 'Ioniq 6', 'White', 'Hyundai');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`) VALUES
(1, 'admin'),
(2, 'hr'),
(3, 'developer'),
(4, 'tester');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `dept` varchar(100) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `student_id` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `name`, `dept`, `city`, `student_id`) VALUES
(1, 'Raghav', '1', 'DELHI', 1),
(2, 'Raashi', '3', 'NOIDA', 3),
(3, 'Rohan', '3', 'INDORE', 1),
(4, 'Rohan', '3', 'GOA', 4),
(5, 'Dani', '3', 'JHANSI', 4),
(6, 'Manual', '2', 'DELHI', 4),
(7, 'Bella', '2', 'Lucknow', 6);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `name`, `employee_id`) VALUES
(1, 'Project A', 1),
(2, 'Project B', 2),
(3, 'Project C', 1),
(4, 'Project D', 3);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `stream` varchar(50) DEFAULT NULL,
  `marks` text DEFAULT NULL,
  `dept_id` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `gender`, `stream`, `marks`, `dept_id`) VALUES
(1, 'John Doe', 'Male', 'Science', '87,92,76,89', NULL),
(2, 'Jane Smith', 'Male', 'Commerce', '37,94,76,83', NULL),
(3, 'Michael Johnson', 'Male', 'Science', NULL, NULL),
(4, 'Emily Davis', 'Female', 'Science', NULL, NULL),
(5, 'Christopher Brown', 'Male', 'Science', NULL, NULL),
(6, 'Amanda Wilson', 'Male', 'Science', NULL, NULL),
(7, 'Daniel Martinez', 'Male', 'Commerce', NULL, NULL),
(8, 'Jessica Taylor', 'Female', 'Arts', '17,55,83,65', NULL),
(9, 'David Anderson', 'Male', 'Science', NULL, NULL),
(10, 'Sarah Clark', 'Female', 'Science', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`model_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `fk_student` (`student_id`),
  ADD KEY `idx_emp` (`name`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_dept_id` (`dept_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`);

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
