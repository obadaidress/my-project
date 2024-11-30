// Start Header 
let toggleHeader = document.querySelector(".header-box .toglle-links");
let myLinks = document.querySelector(".landing-page .header-box .links");
toggleHeader.addEventListener('click', function() {
    myLinks.classList.add("open");
})
document.addEventListener('click', function(e) {
    if (!(e.target === myLinks || myLinks.contains(e.target) || e.target === toggleHeader || toggleHeader.contains(e.target))) {
            myLinks.classList.remove("open");
    }
})
// End Header 
// Strat Setting Page 
let toglleSetting = document.querySelector(".setting-page .toglle");
toglleSetting.addEventListener('click', function() {
    document.querySelector(".setting-page").classList.toggle("click");
})
let colorsLi = document.querySelectorAll(".setting-page .option-colors li");
colorsLi.forEach(li => {
    li.addEventListener('click', function(e) {
        colorsLi.forEach(i => i.classList.remove("list-active"));
        this.classList.add("list-active");
        document.documentElement.style.setProperty('--main-color',  e.target.getAttribute('data-color'));
        localStorage.setItem("color-option", e.target.getAttribute('data-color'));
    });
});
window.onload = function() {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));
};
// End Setting Page 
// Start Bullets 
let myBullets = document.querySelectorAll(".nav-bullets .bullet");
myBullets.forEach(bullet => {
    bullet.addEventListener('click', function() {
        let targetId = bullet.getAttribute("data-section");
        let targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    })
});
let myBulletsOption = document.querySelectorAll(".setting-page .optoin-bullets span");
myBulletsOption.forEach(bullets => {
    bullets.addEventListener('click', function() {
        myBulletsOption.forEach(bu => {bu.classList.remove("active")});
        bullets.classList.add("active");
        if (bullets.dataset.bullets === "yes") {
            document.querySelector(".landing-page .nav-bullets").style.display = "block";
        } else if (bullets.dataset.bullets === "no") {
            document.querySelector(".landing-page .nav-bullets").style.display = "none";
        }
    })
});
// End Bullets 
// Start Landing Page 
imgsArray = ["imgs/download\ \(1\).jpg", "imgs/download.jpg", "imgs/images.jpg", "imgs/images\ \(1\).jpg"];
let backImage = document.querySelector(".landing-page");
currentIndex = 1;
let changeImageOption = true;
if (changeImageOption === true) {
    function changeBackgroundImage() {
        backImage.style.backgroundImage = `url('${imgsArray[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % imgsArray.length;
    };
}
setInterval(changeBackgroundImage, 5000);
// End Landing Page 
// Start Our Skills
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= document.querySelector(".our-skills").offsetHeight) {
        let myProg = document.querySelectorAll(".our-skills .box-prog .prog");
        myProg.forEach(pr => {
            pr.style.width = pr.dataset.width;
        });
    }
})
// End Our Skills
// Strat Our Gallery 
let myImage = document.querySelectorAll(".our-gallery .image-container img");
myImage.forEach(im => {
    im.addEventListener('click', function() {
    let myDivOverlay = document.createElement('div');
    myDivOverlay.className = 'overlay-image';
    document.body.appendChild(myDivOverlay);
    /////////////////////////////////////////////
    let myDivContener = document.createElement('div');
    myDivContener.className = 'container-image';
    myDivOverlay.appendChild(myDivContener);
    /////////////////////////////////////////////
    let mySpan = document.createElement('span');
    mySpan.textContent = "X";
    myDivContener.appendChild(mySpan);
    /////////////////////////////////////////////
    let myIma = im.cloneNode();
    myDivContener.appendChild(myIma);
    mySpan.addEventListener('click', function() {
        myDivOverlay.remove();
    })
    })
})
// End Our Gallery 
