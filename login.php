<?php
header('Content-Type: application/json');

$datos = json_decode(file_get_contents('php://input'), true);

if (!isset($datos['usuario']) || !isset($datos['contrasena'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Completa usuario y contraseña.']);
    exit;
}

$archivo = 'data/usuarios.json';
$usuarios = json_decode(file_get_contents($archivo), true);

foreach ($usuarios as $u) {
    if ($u['usuario'] === $datos['usuario'] && $u['contrasena'] === $datos['contrasena']) {
        echo json_encode([
            'mensaje' => 'Inicio de sesión exitoso.',
            'nombre' => $u['nombre'],
            'perfil' => $u['perfil']
        ]);
        exit;
    }
}

http_response_code(401);
echo json_encode(['error' => 'Usuario o contraseña incorrectos.']);