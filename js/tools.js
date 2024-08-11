document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const services = document.querySelector(".services");
    const serviceItems = document.querySelectorAll(".services .service-item");
  
    // Toggle services
    services.addEventListener("click", function () {
      serviceItems.forEach((item) => {
        item.style.display = item.style.display === "block" ? "none" : "block";
      });
    });
  
    // Toggle nested items
    serviceItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        const nestedItems = item.querySelectorAll(".nested-item");
        nestedItems.forEach((nestedItem) => {
          nestedItem.style.display =
            nestedItem.style.display === "block" ? "none" : "block";
        });
        e.stopPropagation();
      });
    });
  
    // Open the menu for demonstration
    //   menu.classList.add('open');
  });
  
  // click event on side bar ------------>
  let hameburger = document.getElementById("hame-menu-btn");
  let sideBar = document.querySelector(".menu");
  
  let logo = document.querySelector(".logo");
  let isMenuOpen = false;
  
  hameburger.addEventListener("click", () => {
    console.log("clicked");
    if (isMenuOpen) {
      sideBar.style.right = "-300px"; // Hide the menu
    } else {
      sideBar.style.right = "0px"; // Show the menu
    }
    isMenuOpen = !isMenuOpen; // Toggle the state
  });
  
  //  side bar ends here ------------->
  // banner section code start form her =------->
  


