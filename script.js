const mobileMenuModal = document.getElementById("mobile-menu-modal");
const closeMenuCross = document.querySelector(".close-cross");
const openMenu = document.querySelector(".three-bars");
console.log(mobileMenuModal, closeMenuCross, openMenu);

//
mobileMenuModal.classList.add("hide", "remove");
mobileMenuModal.classList.remove("show");
//

//
openMenu.addEventListener("click", () => {
     mobileMenuModal.classList.remove("hide", "remove");
     setTimeout(() => {
          mobileMenuModal.classList.add("show");
     }, 200);
     // mobileMenuModal.classList.add("show");
});
//
closeMenuCross.addEventListener("click", () => {
     console.log("close clicked");
     mobileMenuModal.classList.add("hide");
     mobileMenuModal.classList.remove("show");

     setTimeout(() => {
          mobileMenuModal.classList.add("remove");
     }, 500);
});

//
window.addEventListener("resize", () => {
     //console.log(window.innerWidth)
     if (window.innerWidth < 700) {
     }

     if (window.innerWidth > 700) {
          mobileMenuModal.classList.add("hide");
          mobileMenuModal.classList.remove("show");

          setTimeout(() => {
               mobileMenuModal.classList.add("remove");
          }, 500);
     }
});
