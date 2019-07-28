$(document).ready(function(){
  let comingdate = new Date("Aug 1, 2019 08:02:05");

  let d = document.getElementById('d');
  let h = document.getElementById('h');
  let m = document.getElementById('m');
  let s = document.getElementById('s');

  let x = setInterval(function(){
    let now = new Date();
    let des = comingdate.getTime() - now.getTime();
    let days = Math.floor(des/(1000 * 60 * 60 * 24));
    let hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(des%(1000 * 60) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);
  }, 1000);

  function getTrueNumber(x){
    if (x<10) return '0'+x;
    else return x;
  }

  $("#nav__search").on("click", function(event){
		event.preventDefault();
		$("#nav__search-inner").toggleClass('active');
		$("#nav__title").toggleClass("active");
	});

  let slider = $("#slider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    prevArrow: '<a class="btn slider-prev" href="#"><svg class="slider-arrow"><use xlink:href="#arrow"></use></svg></a>',
    nextArrow: '<a class="btn slider-next" href="#"><svg class="slider-arrow"><use xlink:href="#arrow"></use></svg></a>'
  });

  let slider2 = $("#slider2");
  slider2.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="btn slick-prev"><svg><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="btn slick-next"><svg><use xlink:href="#arrow"></use></svg></button>'
  });

  /* let heightMainContent = document.getElementById('#main-content').offsetHeight;
  let newHeightContent = heightMainContent - 150;
  document.getElementById('#main-content').style.height = newHeightContent + "px"; */
});