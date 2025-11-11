INSERT INTO Hotels (hotel_id, hotel_name, city, rooms_available)
VALUES 
("H01", "Bloom Boutique", "Udaipur", 5),
("H02", "The Royal Mint", "Delhi", 7);


UPDATE Hotels
SET rooms_available = 30
WHERE hotel_id = 1;


DELETE FROM Hotels
WHERE hotel_id = 2;


SELECT SUM(rooms_available) AS total_rooms_available
FROM Hotels;


SELECT AVG(rooms_available) AS average_rooms_available
FROM Hotels;