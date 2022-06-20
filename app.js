'use strict';

const loading = document.querySelector(".loading");

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.classList.add("hide");
    },400);
});