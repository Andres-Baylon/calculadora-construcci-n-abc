<?php
header('Content-Type: application/json');
// Leemos los datos que llegan desde el formulario (en formato JSON)
$datos = json_decode(file_get_contents('php://input'), true);
// Validamos que lleguen todos los campos necesarios
if (!isset($datos['nombre']) || !isset($datos['usuario']) || !isset($datos['contrasena'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos obligatorios.']);
    exit;
}
// Ruta del archivo donde guardamos los usuarios
$archivo = 'data/usuarios.json';
// Leemos los usuarios que ya existen
$usuarios = json_decode(file_get_contents($archivo), true);
// Verificamos que el usuario no exista ya
foreach ($usuarios as $u) {
    if ($u['usuario'] === $datos['usuario']) {
        http_response_code(409);
        echo json_encode(['error' => 'Ese usuario ya existe.']);
        exit;
    }
}
// Creamos el nuevo usuario con un id único
$nuevoUsuario = [
    'id' => uniqid(),
    'nombre' => $datos['nombre'],
    'apellidos' => $datos['apellidos'],
    'usuario' => $datos['usuario'],
    'correo' => $datos['correo'],
    'perfil' => $datos['perfil'],
    'contrasena' => $datos['contrasena']
];
// Lo agregamos a la lista y guardamos el archivo
$usuarios[] = $nuevoUsuario;
file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));

echo json_encode(['mensaje' => 'Usuario registrado correctamente.']);