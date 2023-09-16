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

let currentScroll = 0;
document.addEventListener('scroll', e => {
  const phone = document.querySelector('.phone');
  phone.style.transform = `translate(-50%, calc(50% - ${(window.scrollY+10) * .3}px))`;
})