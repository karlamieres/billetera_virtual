$(document).ready(function() {
    // Obtener saldo actual del usuario desde el Local Storage
    var saldoActual = localStorage.getItem('saldo');
    if (saldoActual) {
        $('#saldo-actual').text(saldoActual);
    }

    // Manejar el envío del formulario de depósito
    $('#depositForm').submit(function(event) {
        event.preventDefault();

        // Obtener el monto del formulario
        var monto = parseFloat($('#monto').val());

        // Actualizar el saldo en el Local Storage
        var nuevoSaldo = saldoActual ? parseFloat(saldoActual) + monto : monto;
        localStorage.setItem('saldo', nuevoSaldo);

        // Mostrar leyenda con el monto depositado
        $('<p>').text('Se depositó $' + monto.toFixed(2)).insertAfter($('#depositForm'));

        // Mostrar mensaje de éxito utilizando una alerta de Bootstrap
        $('#alert-container').html('<div class="alert alert-success" role="alert">¡Depósito realizado con éxito!</div>');

        // Redirigir después del depósito
        setTimeout(function() {
            window.location.href = 'menu.html';
        }, 2000);
    });
});
