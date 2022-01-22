const platforms = document.querySelector('.music__container');
const musicTile = document.querySelector('.music__tile');

musicTile.addEventListener("click", () => {
  platforms.classList.add("music__container__open");

     setTimeout(function () {
      platforms.classList.remove("music__container__open");
   }, 8000);
});

