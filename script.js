
// typing animation
const dynamicText = document.querySelector("h5 span");
const words = [" Freelancer", " FrontEnd Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
    } else if (!isDeleting && charIndex >= currentWord.length) {
        isDeleting = true;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
};

typeEffect();




//-----------------smpt.js


function emailSend() {

    var yourName = document.getElementById("name").value;
    var emailAdress = document.getElementById("floatingInput").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var messageBody = "Name <br/>" + yourName +
        "<br/> emailAdress <br/>" + emailAdress +
        "<br/> subject <br/>" + subject +
        "<br/> message <br/>" + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hazarvisaad1@gmail.com",
        Password: "C3374FAA497ADA5CEBE5FD0693CF86406EC7",
        To: 'rizwanabro14@gmail.com',
        From: "hazarvisaad1@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Successful!", "You clicked the button!", "success");

            } else {
                swal(" Error !", "You clicked the button!", "error");

            }

        }
    );

}


function firstPageAnim() {

    var tl = gsap.timeline()

    tl.from("#Header .navbar-brand, #Header .nav-link, .dark-toggle", {
        y: -10,
        opacity: 0,
        // delay:0.5,
        duration: 1,
        stagger: 0.2,
        // ease: Expo.ease

    })

        .from("#Header .image", {
            x: 100,
            ease: Expo.easeInOut,
            duration: 1,
            delay: -1,

        })



        .to(".rightside", {
            x: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: 1,

        })


        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .5,

        })


        .to(".btn-anim", {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 1,
            delay: -2,
            stagger: .5,

        })



}

firstPageAnim()




function scrollAnim() {
    // =============aboutAnimation
    gsap.to(".abouthidden", {
        y: 0,
        duration: .5,
        ease: Expo.InOut,
        stagger: .2,
        scrollTrigger: {
            trigger: ".abouthidden",
            scroller: "body",
            start: "top 80%",

        }

    });

    gsap.to(".about-anim", {
        x: 0,
        duration: 0.5,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about-anim",
            scroller: "body",
            start: "top 80%",

        }
    });

    gsap.to(".rightsideAnim", {
        x: 0,
        duration: 0.5,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".rightsideAnim",
            scroller: "body",
            start: "top 80%",

        }
    });

    // =====portfolio animation===========

    gsap.to(".headingAnim", {
        y: 0,
        duration: 0.5,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".headingAnim",
            scroller: "body",
            start: "top 80%",

        }
    });


    gsap.to(".hiddenCard", {
        x: 0,
        duration: 1,
        ease: Power1.InOut,
        delay: .5,
        // stagger: 0.2,
        scrollTrigger: {
            trigger: ".hiddenCard",
            scroller: "body",
            start: "top 80%",

        }
    });

    // ===================contact animation 

    gsap.to(".contact-heading", {
        y: 0,
        duration: .5,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".contact-heading",
            scroller: "body",
            start: "top 60%",

        }
    });



    gsap.to(".box1", {
        x: 0,
        duration: .5,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".box1",
            scroller: "body",
            start: "top 60%",

        }
    });


    gsap.to(".inputAnim", {
        x: 0,
        duration: .5,
        ease: Power1.InOut,
        // stagger: 0.2,
        scrollTrigger: {
            trigger: ".inputAnim",
            scroller: "body",
            start: "top 60%",

        }
    });



    // ===================service animation 

    gsap.to(".service-heading", {
        y: 0,
        duration: .4,
        ease: Power1.InOut,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".card-anim",
            scroller: "body",
            start: "top 60%",

        }
    });



    gsap.to(".card-box-anim", {
        y: 0,
        duration: .3,
        ease: Power1.InOut,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".card-anim",
            scroller: "body",
            start: "top 60%",
        }
    });



}

scrollAnim()


// ====================dark mode

let moonIcon = document.getElementById("moon-icon")

moonIcon.onclick = function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        moonIcon.src = "images/moon.png";

    } else {
        moonIcon.src = "images/sun.png";
    }

}







// -----------------sticky navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("#header-scrolled");

    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }


})



// -------------------- smooth scroll

jQuery(".circle.btn-anim").on("click", function (e) {
    jQuery("html, body").animate({ scrollTop: 0 }, "slow");
})


function circleSkew() {
    // define default scale value 
    let xscale = 1;
    let yscale = 1;

    let xpre = 0;
    let ypre = 0;

    let timeout;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xpre);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - ypre);

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100 );
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });

}

circleSkew();





