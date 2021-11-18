const sidebarElements= [...document.querySelectorAll('.side-nav__item')];


sidebarElements.forEach((sideNavBtn)=>
  sideNavBtn.addEventListener("click", function(){
    const activeBtn = sidebarElements.find((sideNavBtn) =>
      sideNavBtn.classList.contains("side-nav__item--active")
    );

    activeBtn ? activeBtn.classList.remove("side-nav__item--active")
    : undefined

    sideNavBtn.classList.add("side-nav__item--active")
  })
);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


// sticky navbar after scrolling in the amount of margintop

window.onscroll = function() {stickyNav()}

function stickyNav(){

var header = document.getElementById("header");
var container = document.getElementById("contain")
var sticky = container.offsetTop;

if(window.scrollY >= sticky){
  header.classList.add("sticky")
}else{
  header.classList.remove("sticky")
}

}

