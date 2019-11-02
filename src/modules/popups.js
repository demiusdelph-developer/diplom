const popupConsult = (el,el1) => {
    const popup = document.querySelector(el1),
        popupBtn = document.querySelectorAll(el);
        let count = popup.style.opacity = 0,
        popupInterval,
        popupAnimate = () => {
            popupInterval = requestAnimationFrame(popupAnimate);
            popup.style.display = 'block';
            count += 0.03;
            if(count < 1){
                popup.style.opacity = count;
            } else {
                cancelAnimationFrame(popupInterval);
            }
        };
    for(let i of popupBtn) i.addEventListener('click', () => {
        popupInterval = requestAnimationFrame(popupAnimate);
        count = 0;
    });
    popup.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest(el)) popupInterval = requestAnimationFrame(popupAnimate);
        count = 0;
        if(target.classList.contains('popup-close')) popup.style.display = 'none';
        else {
            target = target.closest('.popup-content');
            if(!target) popup.style.display = 'none';
        }
    });
};

export default popupConsult;