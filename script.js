document.addEventListener("DOMContentLoaded", function() {
    const hamBurger = document.querySelector("#toggle-btn");
    console.log("smh");

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });
});
