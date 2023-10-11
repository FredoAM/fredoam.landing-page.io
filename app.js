window.addEventListener("scroll",function (){
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0)
});


const carro = document.querySelectorAll('.carro');
const display = document.querySelectorAll('.fa-circle');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideShow = carro.length;
var slideCount = 0;

    prevBtn.addEventListener('click', () =>{

        carro.forEach((auto) =>{
            auto.classList.remove('active');
        });
        // display.forEach((icon) =>{
        //     icon.classList.remove('active');
        // });
    
        slideCount --;
    
        if(slideCount < 0){
            slideCount = slideShow - 1;
        }
    
        carro[slideCount].classList.add('active');
        // display[slideCount].classList.add('active');
        
    })
    
    nextBtn.addEventListener('click', () =>{
        carro.forEach((auto) =>{
            auto.classList.remove('active');
        });
        // display.forEach((icon) =>{
        //     icon.classList.remove('active');
        // });
        slideCount ++;
    
        if(slideCount > slideShow - 1){
            slideCount = 0;
        }
    
        carro[slideCount].classList.add('active');
        // display[slideCount].classList.add('active');
    })
