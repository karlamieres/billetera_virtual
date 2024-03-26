document.addEventListener('DOMContentLoaded', function () {
    const addContactBtn = document.getElementById('add-contact-btn');
    const addContactForm = document.getElementById('add-contact-form');
    const closeFormBtn = document.getElementById('close-form-btn');
    const overlay = document.getElementById('overlay');
    const searchForm = document.getElementById('search-form');
    const sendMoneyBtn = document.getElementById('send-money-btn');


    addContactBtn.addEventListener('click', function () {
        addContactForm.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeFormBtn.addEventListener('click', function () {
        addContactForm.style.display = 'none';
        overlay.style.display = 'none';
    });

    
    const newContactForm = document.getElementById('new-contact-form');
    newContactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const cbuInput = document.getElementById('cbu');
        const aliasInput = document.getElementById('alias');
        const bankInput = document.getElementById('bank');

        if (nameInput.value.trim() === '' || cbuInput.value.trim() === '' || aliasInput.value.trim() === '' || bankInput.value.trim() === '') {
            alert('Por favor complete todos los campos.');
            return;
        }

        function validarCBU(cbu) {
            const cbuRegex = /^[0-9]{10}$/;
            return cbuRegex.test(cbu);
        }
       
        alert('¡Formulario enviado con éxito!');
        newContactForm.reset(); 
    });

    
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value;
        
        console.log('Búsqueda realizada:', searchTerm);
    });

    
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(function (item) {
        item.addEventListener('click', function () {
            transactionItems.forEach(function (el) {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
            sendMoneyBtn.style.display = 'block';
        });
    });

    
    sendMoneyBtn.addEventListener('click', function () {
        const selectedContact = document.querySelector('.transaction-item.selected p').textContent;
        alert(`Dinero enviado a ${selectedContact}.`);
    });
});

