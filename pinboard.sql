CREATE TABLE IF NOT EXISTS `pinboard` (
  `id` int(11) NOT NULL,
  `sender` varchar(30) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `pinboard`
ADD PRIMARY KEY (`id`);

ALTER TABLE `pinboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;
