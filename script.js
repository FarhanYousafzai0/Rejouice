// Smooth Scroll with Locomotive and ScrollTrigger
let smoothScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
};
smoothScroll();

// Cursor Effect
let cursorEffect = () => {
    let page1Content = document.querySelector(".page-1-content");
    let cursor = document.querySelector(".cursor");

    if (page1Content && cursor) {
        page1Content.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.x,
                y: e.y,
            });
        });

        page1Content.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
            });
        });

        page1Content.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,
            });
        });
    }
};
cursorEffect();

// Page 5 Cursor Effect
let effect = () => {
    let cursorPage5 = document.querySelector(".cursor-5");
    let pageContent5 = document.querySelector(".page-content-5");

    if (cursorPage5 && pageContent5) {
        pageContent5.addEventListener("mousemove", (e) => {
            gsap.to(cursorPage5, {
                x: e.x,
                y: e.y,
            });
        });
    }
};
effect();

// Page 2 Animation
let page2Animation = () => {
    gsap.from(".elem > h6", {
        y: 100,
        opacity: 0,
        skewY: 10,
        duration: 1,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page-2",
            scroller: ".main",
            start: "top 50%",
            end: "top 20%",
            scrub: true,
        },
    });

    gsap.fromTo(
        ".elem > h6",
        { backgroundPosition: "200% 0%", opacity: 0 },
        {
            backgroundPosition: "0% 0%",
            opacity: 1,
            duration: 1,
            stagger: 0.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".page-2",
                scroller: ".main",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
            },
        }
    );
};
page2Animation();

// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
