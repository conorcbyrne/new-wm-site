const title = document.querySelector(".wm__title");
const nav = document.querySelector(".site__navigation");
const social = document.querySelector(".social__links");
const burger = document.querySelector(".header__burger");


burger.addEventListener("click", () => {
    nav.classList.toggle("site__navigation__open");
    social.classList.toggle("social__links__open");
    burger.classList.toggle("toggle");
  });

//MUSIC SITCH TILES
const musicTiles = document.querySelector(".music__container");
const tile1 = document.querySelector(".song__item1");
const tile2 = document.querySelector(".song__item2");
const tile3 = document.querySelector(".song__item3");
const tile4 = document.querySelector(".song__item4");

tile1.addEventListener("click", () => {
  musicTiles.classList.add("song1__display");
  musicTiles.classList.remove("song2__display");
  musicTiles.classList.remove("song3__display");
  musicTiles.classList.remove("song4__display");
});
tile2.addEventListener("click", () => {
  musicTiles.classList.add("song2__display");
  musicTiles.classList.remove("song1__display");
  musicTiles.classList.remove("song3__display");
  musicTiles.classList.remove("song4__display");
});
tile3.addEventListener("click", () => {
  musicTiles.classList.add("song3__display");
  musicTiles.classList.remove("song1__display");
  musicTiles.classList.remove("song2__display");
  musicTiles.classList.remove("song4__display");
});
tile4.addEventListener("click", () => {
  musicTiles.classList.add("song4__display");
  musicTiles.classList.remove("song1__display");
  musicTiles.classList.remove("song2__display");
  musicTiles.classList.remove("song3__display");
});


  //MORE GIGS SELECTION
  const moreGigs = document.querySelector(".gigs__more__container");
  const moreGigsBtn = document.querySelector(".moredates__btn");
  const GigsBtn = document.getElementById("#more__gigs");

  moreGigsBtn.addEventListener("click", () => {
    moreGigs.classList.toggle("gigs__more__container__open");
  });

