function init(){

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh(); 
    
}
init( )
  var menu = document.querySelector(".nav-part-2 i")
    var full =document.querySelector(".full-scr-nav")
    var word1 =document.querySelector(".nav h2")
    var word2 =document.querySelector(".nav h3")
    var word3 =document.querySelector(".nav i")
    var menubutton = document.querySelector("#menu")
    var flag =0 ;
    
    menu.addEventListener("click",function(){
        if (flag ==0){
            full.style.top = "0%"
            word1.style.color ="#222 "
            word2.style.color ="#222 "
            word3.style.color ="#222 "
            
            flag =1
            

        }
        else {
            
            full.style.top = "-100%"
            word1.style.color ="#dadada "
            word2.style.color ="#dadada "
            word3.style.color ="#dadada "
            flag =0 
            
        }
      })
     
      
    gsap.to(".page4 h2",{
        rotate:360,
        repeat:-1,
        ease:Power0.easeNone,
        
        duration:1.1
     })

    var time = gsap.timeline()
    time.from(".page1 h1",{
        y:60,
        delay:1,
        
        opacity:0 
    })
    .from(".page1 h2 ",{
        y:50,
        duration:0.6,  
        opacity:0,
        delay:-.1
    })
    .from(".page1 h3 ",{
        y:50,
        duration:0.6,
        opacity:0,
       
    })
     gsap.to(".page2 img",{
      duration:2,
           scale:1.5,
            scrollTrigger:{
            trigger:".page2 ",
            scroller:".main",
            markers:false,
            start:"top 50%",
            end:"top 10%",
            scrub:3
         
          
           

        }
    })
    gsap.from (".page2 h1",{
      scale:0,
      duration:2,
      rotateX:20,
   
      scrollTrigger:{
          trigger:".page2 h1",
          scroller:".main",
          start:"top 60%",
          end:"top 45%",
          markers:false,
          scrub:3
  
  
      }   
  
  }
  )
     
var slide1h1 =document.querySelectorAll(".page6 .slide1-of-h1 h1 span")
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:4,
      
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            scrub:3
        }
    })

    })
    var slide2h1 =document.querySelectorAll(".page6 .slide2-of-h1 h1 span")
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(20%)',
        duration:4,
      
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            scrub:3
        }
      })

    })

     document.querySelector(".element1").addEventListener("mousemove", function(event) {
      document.querySelector(".element1 img").style.opacity = 1;
      document.querySelector(".element1 img").style.left = `${event.x -120}px`
      document.querySelector(".element1.img").style.top=`${event.y-230}px`
          
        })
        document.querySelector(".element2").addEventListener("mousemove",function(dets){
        document.querySelector(".element2 img").style.opacity =1
        document.querySelector(".element2 img").style.left =`${dets.x-120}px`
        document.querySelector(".element1.img").style.top=`${dets.y-230}px`

      
     })
     document.querySelector(".element2").addEventListener("mouseleave",function(dets){
        document.querySelector(".element2 img").style.opacity =0
       
  })
  document.querySelector(".element1").addEventListener("mouseleave",function(event){
    document.querySelector(".element1 img").style.opacity =0
   
})
