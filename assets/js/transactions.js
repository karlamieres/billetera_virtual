
const newContactForm = document.getElementById('new-contact-form');
newContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const cbuInput = document.getElementById('cbu');
   
    if (nameInput.value.trim() === '' || cbuInput.value.trim() === '') {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }
    
    alert('¡Contacto guardado con éxito!');
    
    newContactForm.reset();
    
    document.getElementById('add-contact-form').style.display = 'none';
});

const listaTransacciones = [
    { tipo: 'depositar', monto: -200, fecha: '2024-03-19' },
    { tipo: 'enviar dinero', monto: 500, fecha: '2024-03-18' },
    { tipo: 'ultimos movimientos', monto: 300, fecha: '2024-03-17' },
    
];

function mostrarUltimosMovimientos(filtro) {
    $('#lista-movimientos').empty(); 

    listaTransacciones.forEach(function(transaccion) {
        if (filtro === 'todos' || transaccion.tipo === filtro) {
            $('#lista-movimientos').append(`<li>${getTipoTransaccion(transaccion.tipo)}: ${transaccion.monto}</li>`);
        }
    });
}