const forms = (el) => {
    let form = document.querySelector(el);
    const errorMess = `Что то пошло не так!`,
        successMess = `Спасибо! Мы скоро с вами свяжемся`,
        loaded = `Загрузка...`,
        status = document.createElement('div');
        status.style.cssText = `font-size:15px`;
        form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        form.appendChild(status);
        const formData = new FormData(form);
        let body = {};
        formData.forEach((i,j) => {
           body[j] = i;
        });
        status.textContent = loaded;
        postData(body)
            .then((response) => {
                if(response.status !== 200) throw new Error('Status network not 200');
                if(el !== '.director-form') status.textContent = successMess;
                else status.textContent = '';
            })
            .catch ((error) => {
                status.textContent = errorMess;
                console.error(error);
            });
    });
    
    const postData = (body) => {
        form.querySelectorAll('input').forEach((i) => {
            if(i.value !== '') i.value = '';
        });
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default forms;