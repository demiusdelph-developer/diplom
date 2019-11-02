const valid = () => {
    const phone = document.querySelectorAll('.phone-user');
    const name = document.querySelectorAll('.name-user');
    phone.forEach((i) => {
        i.addEventListener('input', () => {
            i.value = i.value.replace(/[^0-9\+]/gi, '');
        });
    });
    name.forEach((i) => {
        i.addEventListener('input', () => {
            i.value = i.value.replace(/[^\а-я\s]/gi, '');
        });
    });
};

export default valid;