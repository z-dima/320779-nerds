var link = document.querySelector(".feedback-open");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".btn-close");
var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=e-mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show");
    if (storage) {
        username.value = storage;
        password.focus();
    } else {
        username.focus();
    }
}); //Открытие формы
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
}); //Закрытие формы
form.addEventListener("submit", function(event) {
    if (!username.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
        username.classList.remove("info-error");
        username.offsetWidth = popup.offsetWidth;
        username.classList.add("info-error");
        email.classList.remove("info-error");
        email.offsetWidth = popup.offsetWidth;
        email.classList.add("info-error");
    } else {
        localStorage.setItem("username", login.value);
    }
}); //Изменение события отправки формы
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
      }
    }
});

ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("yandex-map", {
        center: [59.938414, 30.323072],
        zoom: 17
    }); 
    myPlacemark = new ymaps.Placemark([59.93870788, 30.32301386], { 
        hintContent: "NERDS", 
        balloonContent: "NERDS" 
    }, { 
        iconLayout: "default#image", 
        iconImageHref: "img/map-marker.png",
        iconImageOffset: [-185, -165],
        iconImageSize: [367, 190] 
    }); 
    myMap.geoObjects.add(myPlacemark); 
}