const navButton = document.querySelector(".btn");
const navButtonMarginRight = navButton.style.marginRight;
const avatorImage = document.querySelector(".avatar");
const summaryHeading = document.querySelector('.hero-summary-heading');
const projectBox1 = document.querySelector('#project-1');
const projectImage1 = document.querySelector('#project-image-1'); 
const projectBox2 = document.querySelector('#project-2');
const projectImage2 = document.querySelector('.project-image-2'); 
const buttonProject1 = document.querySelector(".btn-project-1");

navButton.addEventListener('mouseover', () => {
    navButton.innerHTML = "Let's Connect!";
    navButtonMarginRight += "2px";
})

navButton.addEventListener('mouseout', () => {
    navButton.innerHTML = "Connect With Me!";
})

avatorImage.addEventListener('mouseover', () => avatorImage.classList.add('shadow-on-hover'));

avatorImage.addEventListener('mouseout', () => avatorImage.classList.remove('shadow-on-hover'));

var typed = new Typed('#element', {
    strings: ['Hello Visitor!'],
    showCursor: false,
    typeSpeed: 80,
    onComplete: () => {
        var typed1 = new Typed('#introducingtext3', {
            strings: ['Web Developer', 'JavaScript Developer', 'React Developer', 'Python Developer', 'C++ Developer', 'C Developer'],
            typeSpeed: 50,
            loop: true,
        });
    }
});

function hideProject1 () {
    projectBox1.classList.add("darken-box");
    projectImage1.style.height = '0';
    projectBox1.querySelector(".panel-4-project-1-hidden").style.display = 'flex';
}

function showProject1 () {
    projectBox1.classList.remove("darken-box");
    projectImage1.style.height = '100%';
    projectBox1.querySelector(".panel-4-project-1-hidden").style.display = 'none';
}

projectBox1.addEventListener('mouseover', hideProject1);
projectBox1.addEventListener('mouseleave', showProject1);

const hideproject2 = () => {
    projectBox2.classList.add("darken-box");
    projectImage2.style.height = '0'
    projectBox2.querySelector(".panel-4-project-2-hidden").style.display = 'flex';
}

const showProject2 = () => {
    projectBox2.classList.remove("darken-box")
    projectImage2.style.height = '100%'
    projectBox2.querySelector(".panel-4-project-2-hidden").style.display = 'none';
}

projectBox2.addEventListener('mouseover', hideproject2)
projectBox2.addEventListener('mouseleave', showProject2)

buttonProject1.addEventListener('mouseover', ()=>{
    buttonProject1.style.cursor = 'pointer';
});

