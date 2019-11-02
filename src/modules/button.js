const button = () => {
    const but = document.querySelector('.add-sentence-btn'),
        els = document.querySelectorAll('.sentence .el');
    for(let i of els) {
        but.addEventListener('click', (e) => {
            e.preventDefault();
            if(i.classList.contains('hidden') && (i.classList.contains('hidden') && document.documentElement.offsetWidth >= 768)){
                i.classList.remove('hidden')
                but.classList.add('hidden')
            } 
            if(i.classList.contains('visible-sm-block') && document.documentElement.offsetWidth >= 576 && document.documentElement.offsetWidth < 768){
                i.classList.remove('visible-sm-block')
                but.classList.add('hidden')
            }
        })
    }
};

export default button;