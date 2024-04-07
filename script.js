//red ,orange , purpe-green and uske neeche ke teen lines delete kr do.

function loco_gsap(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
lerp:0.02,
  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// loco_gsap();

// gsap.to('.scroll img'){


  // window.addEventListener('DOMContentLoaded', () => {
  //   const container = document.querySelector('.scroll');
  //   const images = container.querySelectorAll('img');
  //   let isMouseDown = false;
  //   let startX;
  //   let scrollLeft;

  //   container.addEventListener('mousedown', (e) => {
  //     isMouseDown = true;
  //     startX = e.pageX - container.offsetLeft;
  //     scrollLeft = container.scrollLeft;
  //   });

  //   container.addEventListener('mouseleave', () => {
  //     isMouseDown = false;
  //   });

  //   container.addEventListener('mouseup', () => {
  //     isMouseDown = false;
  //   });

  //   container.addEventListener('mousemove', (e) => {
  //     if (!isMouseDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - container.offsetLeft;
  //     const walk = (x - startX) * 2; // Adjust the scrolling speed
  //     container.scrollLeft = scrollLeft - walk;
  //   });
  // });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    mousewheel:true,
    grabCursor:true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  // var circle = document.querySelector(".circle")

  var cursor = document.querySelector('.circle');

  var imgg=document.querySelectorAll('.swiper-slide');
  
  
  document.addEventListener('mousemove',function(details){
      // console.log(details.target.classList.contains('divs'));
      gsap.to('.circle',{
          top:details.y,
          left:details.x,
          
      })
  })
  
  
  imgg.forEach(function(elem)
  {
      elem.addEventListener('mouseenter',function(){
          console.log("enter");
          gsap.to('.circle',{
              transform: 'translate(-50%,-50%) scale(1)',
              // opacity:1,
              delay:.2,
              duration:.6,
          })
      })
      elem.addEventListener('mouseout',function(){
          console.log("leave");
          gsap.to('.circle',{
              transform: 'translate(-50%,-50%) scale(0)',
              // opacity:0,
              delay:0,
          })
         
      })
  })