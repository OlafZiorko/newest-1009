const toggleBtn = document.querySelector(".btn");
const hiddenMenu = document.querySelector(".mobile-menu");
const crossBtn = document.querySelector(".cross");
const nextBtn = document.querySelector(".next-btn");
let move = 25;
function showMenu() {
  hiddenMenu.classList.toggle("open");
}

toggleBtn.addEventListener("click", showMenu);
crossBtn.addEventListener("click", showMenu);

nextBtn.addEventListener("click", () => {
  document.querySelector(".swiper").style.transform = ` translateX(-${move}px)`;
  move += 25;
});
