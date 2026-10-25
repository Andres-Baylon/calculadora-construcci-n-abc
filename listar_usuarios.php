<?php
header('Content-Type: application/json');

$archivo = 'data/usuarios.json';
$usuarios = json_decode(file_get_contents($archivo), true);

echo json_encode($usuarios);