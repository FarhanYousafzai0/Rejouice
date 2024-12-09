
let smoothScroll = ()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
}

smoothScroll();



let cursorEffect = ()=>{





    let page1Content = document.querySelector(".page-1-content");
    let cursor = document.querySelector(".cursor");
let page5 = document.querySelector(".page-5")
let cursor2 = document.querySelector(".cursor-2")


page1Content.addEventListener('mousemove', (eve) => {
gsap.to(cursor,{
    x:eve.x,
    y:eve.y,
})

});



page1Content.addEventListener('mouseenter',()=>{

    gsap.to(cursor,{
        scale:1,
        opecity:1,
    })
});
page1Content.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        scale:0,
        opecity:0,
    })
});







}
cursorEffect();



let effect = ()=>{


  let cursorPage5 = document.querySelector(".cursor-5");
  let pageContent5 = document.querySelector(".page-content-5");


pageContent5.addEventListener('mousemove',(e)=>{



  gsap.to(cursorPage5,{

    x:e.x,
    y:e.y,
  });
})


}
effect();



document.addEventListener('DOMContentLoaded', function () {
  // Your custom JavaScript code
});




let page2Animation = () => {
  gsap.from(".elem > h6", {
    y: 100,                   // Starts each line slightly off-screen (below)
    opacity: 0,               // Start invisible
    skewY: 10,                // Adds a slight skew for dramatic effect
    duration: 1,              // Duration of animation for each line
    stagger: 0.5,             // Smoothly delay between each `h6`
    ease: "power3.out",       // Smooth easing
    scrollTrigger: {
      trigger: ".page-2",      // Trigger the animation when `.page-2` enters the viewport
      scroller: ".main",       // For custom scroller (if applicable)
      start: "top 50%",        // Animation starts when `.page-2` is 50% from the top
      end: "top 20%",          // Animation ends when it's 20% from the top
      scrub: true,             // Smooth scrolling link to animation
    }
  });
};
page2Animation();


gsap.fromTo(
  ".elem > h6",
  { backgroundPosition: "200% 0%", opacity: 0 }, // Initial state
  {
    backgroundPosition: "0% 0%",  // Animate highlight across the text
    opacity: 1,                   // Gradually fade in
    duration: 1,                  // Smooth transition
    stagger: 0.4,                 // Each `h6` starts with a delay
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




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
 loop: true,
  autoplay: {
delay: 2500,
disableOnInteraction: false,
},
});



