document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu a');
    var alertContainer = document.getElementById('alert-container');

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault();

            var destination = '';
            var alertMessage = '';

            switch (menuItem.textContent) {
                case 'Depositar':
                    destination = '/deposit.html';
                    alertMessage = 'Redirigiendo a la pantalla de depósito.';
                    break;
                case 'Enviar Dinero':
                    destination = '/sendmoney.html';
                    alertMessage = 'Redirigiendo a la pantalla de enviar dinero.';
                    break;
                case 'Últimos Movimientos':
                    destination = '/transactions.html';
                    alertMessage = 'Redirigiendo a la pantalla de últimos movimientos.';
                    break;
            }

            if (destination && alertMessage) {
                alertContainer.innerHTML = '<div class="alert alert-success" role="alert">' + alertMessage + '</div>';
                setTimeout(function() {
                    window.location.href = destination;
                }, 2000);
            }
        });
    });
});
