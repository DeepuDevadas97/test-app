var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.round-btn');
        let currentSlide = 1;
    
        // Javascript for image slider manual navigation
        var manualNav = function(manual){
          slides.forEach((slide) => {
            slide.classList.remove('active');
    
            btns.forEach((btn) => {
              btn.classList.remove('active');
            });
          });
    
          slides[manual].classList.add('active');
          btns[manual].classList.add('active');
        }
    
        btns.forEach((btn, i) => {
          btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
          });
        });
    
        // Javascript for image slider autoplay navigation
        var repeat = function(activeClass){
          let active = document.getElementsByClassName('active');
          let i = 1;
    
          var repeater = () => {
            setTimeout(function(){
              [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
              });
    
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
    
            if(slides.length == i){
              i = 0;
            }
            if(i >= slides.length){
              return;
            }
            repeater();
          }, 5000);
          }
          repeater();
        }
        repeat();



//    Star-rating
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
const elClass = e.target.classList;
// change the rating if the user clicks on a different star
if (!elClass.contains('active')) {
items.forEach( // reset the active class on the star
item => item.classList.remove('active')
);
console.log(e.target.getAttribute("data-rate"));
elClass.add('active'); // add active class to the clicked star
}
};