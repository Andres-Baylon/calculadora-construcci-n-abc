const listaUsuarios = document.getElementById("listaUsuarios");
const formEditar = document.getElementById("formEditar");

function cargarUsuarios() {
    fetch("listar_usuarios.php")
        .then(function (respuesta) { return respuesta.json(); })
        .then(function (usuarios) {
            listaUsuarios.innerHTML = "";
            usuarios.forEach(function (u) {
                const fila = document.createElement("div");
                fila.className = "fila-resultado";
                fila.innerHTML =
                    "<span>" + u.nombre + " " + u.apellidos + " (" + u.usuario + ")</span>" +
                    "<span>" +
                    '<button class="btn" style="padding:4px 10px;margin-right:6px;" onclick="editarUsuario(\'' + u.id + '\',\'' + u.nombre + '\',\'' + u.apellidos + '\',\'' + u.correo + '\',\'' + u.perfil + '\')">Editar</button>' +
                    '<button class="btn" style="padding:4px 10px;background:#C0392B;" onclick="eliminarUsuario(\'' + u.id + '\')">Eliminar</button>' +
                    "</span>";
                listaUsuarios.appendChild(fila);
            });
        });
}

function editarUsuario(id, nombre, apellidos, correo, perfil) {
    document.getElementById("editId").value = id;
    document.getElementById("editNombre").value = nombre;
    document.getElementById("editApellidos").value = apellidos;
    document.getElementById("editCorreo").value = correo;
    document.getElementById("editPerfil").value = perfil;
    formEditar.style.display = "flex";
}

function eliminarUsuario(id) {
    if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;

    fetch("eliminar_usuario.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id })
    })
        .then(function (respuesta) { return respuesta.json(); })
        .then(function (resultado) {
            alert(resultado.mensaje || resultado.error);
            cargarUsuarios();
        });
}

document.getElementById("btnGuardar").addEventListener("click", function () {
    const datos = {
        id: document.getElementById("editId").value,
        nombre: document.getElementById("editNombre").value,
        apellidos: document.getElementById("editApellidos").value,
        correo: document.getElementById("editCorreo").value,
        perfil: document.getElementById("editPerfil").value
    };

    fetch("actualizar_usuario.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })
        .then(function (respuesta) { return respuesta.json(); })
        .then(function (resultado) {
            alert(resultado.mensaje || resultado.error);
            formEditar.style.display = "none";
            cargarUsuarios();
        });
});

cargarUsuarios();