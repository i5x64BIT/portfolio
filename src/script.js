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
