$(document).ready(function(){

  /* catalog */

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ]);
      $( "#amount-1" ).val(ui.values[ 1 ]);
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
  $( "#amount-1" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#amount").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount_1").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount").val("$"+value1);
    }
    $("#slider-range").slider("values",0,value1);	
  });
      
  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
  $("input#amount-1").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount-1").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount-1").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount, #amount-1').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;
    
    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;
  
    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);
    
    if(!/\d/.test(keyChar))	return false;
  
  });

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

  let scrollOffSet = $(window).scrollTop();
  checkScroll(scrollOffSet);
  $(window).on("scroll", function(){
		scrollOffSet = $(this).scrollTop();
		checkScroll(scrollOffSet);
  });
  function checkScroll(scrollOffSet){
		if (scrollOffSet >= 70) {
			$(".nav").addClass('fixed');
		} else{
			$(".nav").removeClass('fixed');
		}
	};

  $(window).resize(function(){
    if ($(window).width() <= '1500'){
      heightContent = $('#main-content').height()-75;
      $('#content').height(heightContent);
    }else{
      heightContent = $('#main-content').height()-150;
      $('#content').height(heightContent);
    };
  });

  $(window).resize();

  $("#hamburger").on("click", function(event){
		event.preventDefault();
		$(this).toggleClass('active');
/*     $("#menu").toggleClass('active'); */
    if ($("#menu").hasClass('active')){
      $("#menu").removeClass('active')
      setTimeout(function(){
        $("#menu").addClass('displayNone');
      }, 800);
    } else{
      $("#menu").removeClass('displayNone');
      $("#menu").addClass('active');
    }
  });

  $(".hamburger-overlay").on("click", function(event){
		event.preventDefault();
		$("#hamburger").toggleClass('active');
/*     $("#menu").toggleClass('active'); */
    if ($("#menu").hasClass('active')){
      $("#menu").removeClass('active')
      setTimeout(function(){
        $("#menu").addClass('displayNone');
      }, 800);
    } else{
      $("#menu").removeClass('displayNone');
      $("#menu").addClass('active');
    }
  });

  $("#nav__search-icon").on("click", function(event){
		event.preventDefault();
    if ($("#nav__search-hover").hasClass('active')){
      $("#nav__search-hover").removeClass('active')
      setTimeout(function(){
        $("#nav__search-hover").addClass('displayNone');
      }, 800);
    } else{
      $("#nav__search-hover").removeClass('displayNone');
      $("#nav__search-hover").addClass('active');
    }
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

  
});