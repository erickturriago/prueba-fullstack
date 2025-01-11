CREATE TABLE usuarios (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(100),
 correo VARCHAR(100),
 edad INT
);

INSERT INTO usuarios (nombre, correo, edad) VALUES
('Juan Pérez', 'juan.perez@example.com', 30),
('María López', 'maria.lopez@example.com', 25),
('Carlos Gómez', 'carlos.gomez@example.com', 40),
('Ana Torres', 'ana.torres@example.com', 35),
('Luis Ramírez', 'luis.ramirez@example.com', 28),
('Sofía Vargas', 'sofia.vargas@example.com', 22),
('Miguel Castillo', 'miguel.castillo@example.com', 45),
('Laura Fernández', 'laura.fernandez@example.com', 31),
('Pedro Martínez', 'pedro.martinez@example.com', 38),
('Lucía Morales', 'lucia.morales@example.com', 26),
('Andrés Gutiérrez', 'andres.gutierrez@example.com', 29),
('Carmen Rivera', 'carmen.rivera@example.com', 27),
('José Hernández', 'jose.hernandez@example.com', 33),
('Elena Rojas', 'elena.rojas@example.com', 24),
('Jorge Suárez', 'jorge.suarez@example.com', 41),
('Diana Ortiz', 'diana.ortiz@example.com', 36),
('Fernando Méndez', 'fernando.mendez@example.com', 39),
('Paula Castro', 'paula.castro@example.com', 32),
('Roberto Reyes', 'roberto.reyes@example.com', 37),
('Claudia Delgado', 'claudia.delgado@example.com', 23);