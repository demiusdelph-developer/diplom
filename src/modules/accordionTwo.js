const accordionTwo = () => {
    const panel = document.querySelectorAll('#accordion-two .panel'),
        test = document.querySelectorAll('#accordion-two .panel .collapse');
    for(let i = 0; i < panel.length; i++){
        panel[i].addEventListener('click', (e) => {
            e.preventDefault();
            if(!(test[i].classList.contains('in'))){
                for(let j = 0; j < panel.length; j++) {
                  test[j].classList.remove('in');
                  panel[j].classList.remove('animated','slideInDown');
                }
            } test[i].classList.add('in'), panel[i].classList.add('animated','slideInDown');
        });
    }
  };

export default accordionTwo;