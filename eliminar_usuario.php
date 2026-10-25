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

$nuevaLista = [];
foreach ($usuarios as $u) {
    if ($u['id'] !== $datos['id']) {
        $nuevaLista[] = $u;
    }
}

file_put_contents($archivo, json_encode($nuevaLista, JSON_PRETTY_PRINT));
echo json_encode(['mensaje' => 'Usuario eliminado correctamente.']);