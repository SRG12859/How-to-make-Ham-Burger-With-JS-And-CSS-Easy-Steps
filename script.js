let ham_burger_btn = document.getElementById("hamBurger-btn");
let navbar_ul = document.getElementById("navbar-links-ul");

let ham_toggle = false;
ham_burger_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (ham_toggle === false) {
        // while Opening ham
        navbar_ul.classList.add("opening");
        ham_burger_btn.classList.add("open-ham");

        // removing closing class
        navbar_ul.classList.remove("closing");
        ham_burger_btn.classList.remove("close-ham");
        ham_toggle = true;
    } else {
        // While Closing Ham Remove Opening
        ham_burger_btn.classList.remove("open-ham");
        navbar_ul.classList.remove("opening");

        // adding closing
        navbar_ul.classList.add("closing");
        ham_burger_btn.classList.add("close-ham");
        ham_toggle = false;
    }
})