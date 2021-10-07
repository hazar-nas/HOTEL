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


