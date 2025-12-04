// add active class Dynamically
// in github it seems that href have repo link and github page link so will take the last part where path across

let websiteUrl = window.location.pathname;
console.log(websiteUrl);
let navLink = document.querySelectorAll("nav ul li a");

console.log(navLink[0].pathname);
navLink.forEach(function (el) {
    if (el.pathname === websiteUrl) {
        el.classList.add("active");
    } else if (websiteUrl.split("").pop() === "/") {
        navLink[0].classList.add("active");
    } // handle the case if the last of pathname is / void
});

// add the scroller to the upp of the pages

let scroller = document.createElement("div");
scroller.classList.add("scroller");
document.body.append(scroller);

// Scroll height: Entire Content & Padding (Visible Or not)
// Client Height: Visible Content & Padding

let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop); how much did you scroll from Top
    let position = (scrollTop / height) * 100;
    scroller.style.width = `${position}%`;
});

// add go to up

let btn = document.createElement("button");
btn.classList.add("up");
btn.appendChild(document.createTextNode("Up"));
document.body.append(btn);

window.addEventListener("scroll", () => {
    window.scrollY > 700
        ? btn.classList.add("show")
        : btn.classList.remove("show");
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
