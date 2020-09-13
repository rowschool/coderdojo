document.addEventListener("DOMContentLoaded", function() {
    var menuOpenButton = document.getElementById("mobile-dropdown-menu-open-button");
    var menuCloseButton = document.getElementById("mobile-dropdown-menu-close-button");
    var mobileMenuDropdown = document.getElementById("mobile-menu-dropdown");

    menuOpenButton.addEventListener("click", function() {
        this.classList.add("hidden");
        menuCloseButton.classList.remove("hidden");
        mobileMenuDropdown.classList.remove("hidden");
    });

    menuCloseButton.addEventListener("click", function() {
        this.classList.add("hidden");
        menuOpenButton.classList.remove("hidden");
        mobileMenuDropdown.classList.add("hidden");
    });
});
