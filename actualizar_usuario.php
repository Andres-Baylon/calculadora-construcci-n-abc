<?php
header('Content-Type: application/json');

$datos = json_decode(file_get_contents('php://input'), true);

if (!isset($datos['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Falta el id del usuario.']);
    exit;
}

$archivo = 'data/usuarios.json';
$usuarios = json_decode(file_get_contents($archivo), true);

$encontrado = false;
foreach ($usuarios as $indice => $u) {
    if ($u['id'] === $datos['id']) {
        $usuarios[$indice]['nombre'] = $datos['nombre'];
        $usuarios[$indice]['apellidos'] = $datos['apellidos'];
        $usuarios[$indice]['correo'] = $datos['correo'];
        $usuarios[$indice]['perfil'] = $datos['perfil'];
        $encontrado = true;
        break;
    }
}

if (!$encontrado) {
    http_response_code(404);
    echo json_encode(['error' => 'Usuario no encontrado.']);
    exit;
}

file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));
echo json_encode(['mensaje' => 'Usuario actualizado correctamente.']);