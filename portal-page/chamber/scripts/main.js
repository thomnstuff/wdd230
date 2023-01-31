const date = document.getElementById("date");
const currentDate = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);
date.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}
const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

const dYear = document.querySelector(".current-year");

dYear.innerHTML = 2023;

let text = document.lastModified;
document.querySelector(".current-date").innerHTML = `-Last Updated: ${text}`;

const adYear = document.querySelector(".acurrent-year");

adYear.innerHTML = 2023;

let aText = document.lastModified;
document.querySelector(".acurrent-date").innerHTML = `-Last Updated: ${aText}`;