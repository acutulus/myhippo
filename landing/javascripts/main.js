/*
Good luck.
*/

scrolledPage = 0;
windowHeight = $(window).outerHeight();
currentPage = 0;

$(document).ready(function(){  

  var body = document.body,
    html = document.documentElement;

    resize();

    $(window).resize(function(e){
       resize();
    }); 


    $(window).on("scroll", function(e){
       currentPage = Math.ceil(scrolledPage/windowHeight);
       traceCurrentPage();
    }); 

    function traceCurrentPage() {

       if(currentPage == 1) {
        $(".next-page-bar").css("background-color", "#7C5BF4");
        loopZeppelin();
       } else if(currentPage == 2) {
        $(".next-page-bar").css("background-color", "#F2654E");
        loopChopper();
       } else if(currentPage == 3) {
        $(".next-page-bar").css("background-color", "#19DD84");
        loopBalloons();
       } else if(currentPage == 4) {
        loopRain();
        $(".next-page-bar").css("background-color", "#328DF9");
       } else if(currentPage == 5) {

        $(".next-page-bar").css("background-color", "#004767");
       } else if(currentPage == 6) {
         hideFooter();
        $(".next-page-bar").css("background-color", "#004767");
       }

       if(currentPage > 0) {
        showGetQuote();
       } else {
        hideGetQuote();
       }

       if(currentPage > 4) {
        hideCity();
       } else {
        showCity();
       }

       if(currentPage > 6) {
        showFooter();
       }
    }

    function showFooter() {
      TweenLite.to(".city-illustration", 0.8, {y:-250, ease:Power1.easeInOut});
      TweenLite.to(".next-page-bar", 0.8, {bottom:0, ease:Power1.easeInOut});
      TweenLite.to(".arrow-down", 0.3, {opacity:0, ease:Power1.easeInOut});
      TweenLite.to(".footer", 0.3, {opacity:1, ease:Power1.easeInOut});
    }

    function hideFooter() {
      TweenLite.to(".city-illustration", 0.8, {y:100, ease:Power1.easeInOut});
      TweenLite.to(".next-page-bar", 0.8, {bottom:-255, ease:Power1.easeInOut});
      TweenLite.to(".arrow-down", 0.3, {opacity:1, ease:Power1.easeInOut});
      TweenLite.to(".footer", 0.3, {opacity:0, ease:Power1.easeInOut});
    }

    function hideCity() {
      TweenLite.to(".city-illustration", 0.3, {y:100, ease:Power1.easeInOut});
    }

    function showCity() {
      TweenLite.to(".city-illustration", 0.3, {y:0, ease:Power1.easeInOut});
    }

    function showGetQuote() {
      TweenLite.to(".menu", 0.3, {x:-200, ease:Power1.easeInOut, delay: 0.3});
      TweenLite.to(".menu .quote-button", 0.3, {opacity:1, ease:Power1.easeInOut, delay: 0.3});
    }

    function hideGetQuote() {
      TweenLite.to(".menu", 0.3, {x:0, ease:Power1.easeInOut});
      TweenLite.to(".menu .quote-button", 0.3, {opacity:0, ease:Power1.easeInOut});
    }

    function loopZeppelin() {
    	var tl = new TimelineMax({repeat:60});
		  tl.fromTo(".zeppelin", 23, {x:$(window).width(),ease:Linear.easeNone}, {x:-$(".zeppelin").width(),ease:Linear.easeNone});
    }

    function loopChopper() {
      var tl = new TimelineMax({repeat:60});
      tl.fromTo(".chopper-container-1", 15, {x:$(window).width()+$(".chopper-container-1").width(),ease:Linear.easeNone}, {x:-$(".chopper-container-1").width(),ease:Linear.easeNone});
      tl.fromTo(".chopper-container-2", 15, {x:-$(".chopper-container-2").width(),ease:Linear.easeNone}, {x:$(window).width()+$(".chopper-container-2").width(),ease:Linear.easeNone}, 0);

      var tl2 = new TimelineMax({repeat:60});
      tl2.to(".lights", 5, {rotation:30});
      tl2.to(".lights", 5, {rotation:-30});
      tl2.to(".lights", 5, {rotation:30});
    }

    function loopBalloons() {
      var tl = new TimelineMax({repeat:60});
      tl.fromTo(".balloon-1", 25, {x:-$(".balloon-1").width(), y:$(window).height()/3, rotation:10, ease:Linear.easeNone}, 
                                  {x:$(window).width()+$(".balloon-1").height(), y:-$(".balloon-1").height(), rotation:-10, ease:Linear.easeNone});

      tl.fromTo(".balloon-2", 25, {x:-$(".balloon-2").width(), y:-$(window).height()/3, rotation:-5, ease:Linear.easeNone}, 
                                  {x:$(window).width() + $(".balloon-2").width(), y:-$(".balloon-2").height(), rotation:25, ease:Linear.easeNone}, 0);

      tl.fromTo(".balloon-3", 25, {x:-$(".balloon-3").width()*1.8, y:$(window).height()/2, ease:Linear.easeNone}, 
                                  {x:$(window).width()/2, y:-$(".balloon-3").height()*2.5, ease:Linear.easeNone}, 0);


      var tl2 = new TimelineMax({repeat:60});
      tl2.to(".balloon-3", 5, {rotation:10, ease:Linear.easeNone});
      tl2.to(".balloon-3", 5, {rotation:-10, ease:Linear.easeNone});
      tl2.to(".balloon-3", 5, {rotation:10, ease:Linear.easeNone});
      tl2.to(".balloon-3", 5, {rotation:-10, ease:Linear.easeNone});
      tl2.to(".balloon-3", 5, {rotation:10, ease:Linear.easeNone});
    }

    function loopRain() {
      var tl = new TimelineMax();
      tl.to(".rain-1", 0.3, {opacity:0, ease:Linear.easeNone, repeat:-1, yoyo:true});

      var tl2 = new TimelineMax();
      tl2.to(".rain-2", 0.2, {opacity:0.2, ease:Linear.easeNone, repeat:-1, yoyo:true});

      var tl3 = new TimelineMax();
      tl3.fromTo(".rays", 0.1, {opacity:0, ease:Power1.easeInOut}, {opacity:1, ease:Power1.easeInOut, repeat:8, delay: 2});
      tl3.to(".rays", 0.1, {opacity:0, ease:Power1.easeInOut});
    }

    
    $(".next-page-bar").on("click", function(){
      if(currentPage<6) {
        currentPage++
      } else {
        return
      }
      
      traceCurrentPage();
        TweenLite.to(window, 0.9, {scrollTo:{y:$(".section:eq(" + parseInt(currentPage) + ")").offset().top}, ease: Power3.easeInOut});
      
    });
    
});


$(document).alton({
    fullSlideContainer: 'section-wrapper', // Tell Alton the full height container
    singleSlideClass: 'section', // Tell Alton the full height slide class
    useSlideNumbers: false, // Set to false if you don't want to use pagination
    slideNumbersBorderColor: '#fff', // Set the outside color of the pagination items (also used for active)
    slideNumbersColor: 'transparent', // Set the inner color of the pagination items (not active)
    bodyContainer: 'body-wrapper', // Tell Alton the body class
});


function resize() {
    
}

function scaleProportion(big1, small1, big2, small2, value) {
    var bigValueOne = big1;
    var smallValueOne = small1;

    var bigValueTwo = big2;
    var smallValueTwo = small2;

    return ((bigValueTwo - smallValueTwo) / (bigValueOne - smallValueOne)) * (value - smallValueOne) + smallValueTwo;
}





