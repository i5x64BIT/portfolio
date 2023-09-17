const cube = document.querySelector(".cube");

let deg = 90;
let t = setTimeout(() => {
  callback();
}, 1000);
const callback = () => {
    cube.style.transform = `rotateX(${deg}deg)`;
    deg += 90;
    if(deg > 270){
      deg = 0;
    }
    t = setTimeout(callback, 3000);
}

document.addEventListener('scroll',() => {
  const phone = document.querySelector('.phone');
  phone.style.transform = `translateY(calc(50% - ${(window.scrollY+10) * .3}px))`;
})

const checkTabs = () => {
  const maxWidth = 1200;
  const covers = document.querySelectorAll('.cover');
  if(window.innerWidth > maxWidth){
    covers.forEach(e => {
      e.removeAttribute('tabindex');
    })
  } else{
    covers.forEach(e => {
      e.setAttribute('tabindex', -1)
    })
  }
}
checkTabs();
window.addEventListener('resize', checkTabs);
