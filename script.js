console.log("DreamNest Loaded Successfully");

/* DARK MODE */

const moon = document.querySelector(".fa-moon");

moon.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* SIMPLE ALERT */

const signBtn = document.querySelector(".sign-btn");

signBtn.addEventListener("click", () => {

    alert("Sign In Clicked");

});