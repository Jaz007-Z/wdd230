const day = d.getDay()
if (day < 3 ) {
    document.querySelector(".banner").style.display="block";
}


document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
  });