document.getElementById('actualizarBoton').addEventListener('click', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    var tableBody = document.getElementById('user-table-body');

    loader.classList.remove('d-none');

    fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = '';

            data.data.forEach(user => {
                var row = `
                    <tr>
                        <td data-label="ID">${user.id}</td>
                        <td data-label="Nombre">${user.first_name}</td>
                        <td data-label="Apellido">${user.last_name}</td>
                        <td data-label="Email">${user.email}</td>
                        <td data-label="Avatar"><img src="${user.avatar}" alt="Avatar de ${user.first_name}" class="avatar-img"></td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            loader.classList.add('d-none');
            content.classList.remove('d-none');
        })
        .catch(error => {
            console.error('Error al obtener usuarios:', error);
        });
});
