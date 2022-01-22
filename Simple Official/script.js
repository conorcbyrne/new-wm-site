const about = document.querySelector(".about_button");
const modal = document.querySelector(".about_us");
const aboutClose = document.querySelector(".about_close");

about.addEventListener("click", () => {
    modal.classList.toggle("about_show");
});
aboutClose.addEventListener("click", () => {
    modal.classList.remove("about_show");
});


window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".pop_up_screen").style.display="none";
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".pop_up_screen").style.display="none";
    audio.pause();
});

