(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const burger = document.querySelector(".burger-menu");
    burger.addEventListener("click", (() => {
        if (burger) burger.classList.toggle("_active-burger");
    }));
    const fon = document.querySelector(".fon");
    const _header_burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".header__nav");
    const body = document.querySelector("body");
    _header_burger.addEventListener("click", (() => {
        if (_header_burger) {
            fon.classList.toggle("fon__active");
            nav?.classList.toggle("header__nav_active");
            body?.classList.toggle("no-scroll");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();