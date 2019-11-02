const accordionCalculator = () => {
    const panel = document.querySelectorAll('#accordion .panel'),
        panelHeading = document.querySelectorAll('#accordion .panel-heading'),
        test = document.querySelectorAll('#accordion .panel .collapse'),
        block2 = document.querySelector('.panel-two-second'),
        buttons = document.querySelectorAll('#accordion .construct-btn'),
        button = document.querySelector('.firstBlock'),
        end = document.querySelector('.end'),
        switchOnOff = document.querySelector('#myonoffswitch');
        block2.style.display = 'none';
    for(let i = 0; i < panel.length; i++){
        panelHeading[i].addEventListener('click', (e) => {
            e.preventDefault();
            if(!(test[i].classList.contains('in'))){
                for(let j = 0; j < panel.length; j++) {
                test[j].classList.remove('in');
                panel[j].classList.remove('animated','slideInDown');
                }
            } test[i].classList.add('in'), panel[i].classList.add('animated','slideInDown');
        });
    }
    buttons.forEach((i,j) => {
        i.addEventListener('click', (e) => {
        e.preventDefault();
        if(j <= 2){
            test[j].classList.remove('in');
            test[j+1].classList.add('in'); 
            panel[j+1].classList.add('animated','slideInDown');
        }
    });
    });
    let resSwitchOnOff = 10000;
    switchOnOff.addEventListener('click', () => {
        if(switchOnOff.checked) {
            block2.style.display = 'none';
        }
        else {
            block2.style.display = 'block';
            resSwitchOnOff = 15000;
        }
    })
    const calc = () => {
        let obj1 = {
            Диаметр: 1.4,
            Кольца: 1,
            Днище: 'есть',
            Дистанция: 1
        }
            let rings1 = document.querySelectorAll('.rings-one option'),
            rings2 = document.querySelectorAll('.rings-two option'),
            diametr1 = document.querySelectorAll('.diametr-one option'),
            diametr2 = document.querySelectorAll('.diametr-two option'),
            distance = document.querySelectorAll('.distance'),
            calcResult = document.getElementById('calc-result'),
            switchOnOff = document.querySelector('#myonoffswitch'),
            switchOnOff2 = document.querySelector('#myonoffswitch-two')
            let resSwitchTwo = 0;
            if(switchOnOff2.checked && switchOnOff.checked) resSwitchTwo = 1000;
            else if(switchOnOff2.checked && !switchOnOff.checked) resSwitchTwo = 2000;
            else resSwitchTwo;
            diametr1.forEach((i) => i.value = 0);
            diametr2.forEach((i) => i.value = 0);
            rings1.forEach((i) => i.value = 0);
            rings2.forEach((i) => i.value = 0);
            //console.log(obj1)
            let res;
        const calcData = (i,j,k,l,m,n) => {
            let src = +i[0].value + +j[0].value + k;
            console.log(+i[0].value + +j[0].value + k + l)
                //src2 = +i[0].value + +j[0].value + k + l + +m[0].value + +n[0].value;
            if(i[0].selected && j[0].selected && k && l) res = src + l;
            else if(i[1].selected && j[0].selected && k && l) res = src + (src*0.2) + l;
            else if(i[1].selected && j[1].selected && k && l) res = src + (src*0.2 + src * 0.3) + l;
            else if(i[0].selected && j[1].selected && k && l) res = src + (src*0.3) + l;
            else if(i[0].selected && j[2].selected && k && l) res = src + (src*0.5) + l;
            else if(i[1].selected && j[2].selected && k && l) res = src + (src*0.3 + src*0.5) + l;
            else if(i[0].selected && j[0].selected && k && !l) res = src;
            else if(i[1].selected && j[0].selected && k && !l) res = src + (src*0.2);
            else if(i[1].selected && j[1].selected && k && !l) res = src + (src*0.2 + src * 0.3);
            else if(i[0].selected && j[1].selected && k && !l) res = src + (src*0.3);
            else if(i[0].selected && j[2].selected && k && !l) res = src + (src*0.5);
            else if(i[1].selected && j[2].selected && k && !l) res = src + (src*0.3 + src*0.5);
            calcResult.value = res;
        }
        if(switchOnOff.checked) calcData(diametr1,rings1,resSwitchOnOff,resSwitchTwo);
        else calcData(diametr1,rings1,resSwitchOnOff,resSwitchTwo)
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
                //let body = {};
                formData.forEach((i,j) => {
                    obj1[j] = i;
                });
                status.textContent = loaded;
                postData(obj1)
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
            
            const postData = (obj1) => {
                form.querySelectorAll('input').forEach((i) => {
                    if(i.value !== '') i.value = '';
                });
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj1)
                });
            };
        };
        forms('.popup-form-call');
    };
    end.addEventListener('click', () => {
        calc();
    });
};

export default accordionCalculator;