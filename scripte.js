const imgs = document.querySelectorAll(".header-img");
const btn1 = document.querySelector(".control_prev");
const btn2 = document.querySelector(".control_next");
let n = 2;
let change_slider = () => {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none'
  }
  imgs[n].style.display = 'block'
}
change_slider();
btn1.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  change_slider();
});
btn2.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  change_slider();
});