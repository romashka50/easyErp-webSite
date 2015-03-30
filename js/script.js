 $(document).ready(function(){
	 var block = false;
	 var time = 600;
	 function nextEl(next){
		 if (block)return;
		 block = true;
		 $(".gallery .active").stop().animate({right:"+=1200",opacity:0},time, function(){
			 $(this).removeClass("active");
			 block = false;
		 });
		 next.addClass("active").css({right:-1500,opacity:0}).animate({right:"+=1550",opacity:1},time);
		 next = next.next();
		 if (next.length==0){
			 $(".next").removeClass("active");
		 }
		 $(".prev").addClass("active");
		 $(".navigation .active").removeClass("active").next().addClass("active");
	 }
	 function prevEl(next){
		 if (block)return;
		 block = true;
		 $(".gallery .active").stop().animate({right:"-=700",opacity:0},time, function(){
			 $(this).removeClass("active");
			 block = false;
		 });
		 next.addClass("active").css({right:1000,opacity:0}).animate({right:"20",opacity:1},time);
		 next = next.prev();
		 if (next.length==0){
			 $(".prev").removeClass("active");
		 }
		 $(".next").addClass("active");
		 $(".navigation .active").removeClass("active").prev().addClass("active");

	 }
	 function next(){

		 var next = $(".gallery .active").next();
		 if (!next.length){
			 next = $(".gallery div").eq(0);
		 }
		 nextEl(next);
	 }
function prev(){
		 var next = $(".gallery .active").prev();
		 if (!next.length){
			 next = $(".gallery div").eq($(".gallery div").length-1);
		 }
		 prevEl(next);
	}
	 var inter = setInterval(next, 5000);
	 $(".next").click(
		 function(){
			 clearInterval(inter);
			 next();
		 }
	 );
	 $(".prev").click(		 function(){
			 clearInterval(inter);
			 prev();
		 });
	 
	 $(".navigation a").click(function(){
		 clearInterval(inter);
		 if (block)return;
		 var cur =$(".navigation .active");
		 var next = $(".gallery div").eq($(".navigation a").index($(this)));

		 if ($(".navigation a").index(cur)<$(".navigation a").index($(this))){
			 if (!next.length){
				 next = $(".gallery div").eq(0);
			 }
			 nextEl(next);
		 }else{
			 if (!next.length){
				 next = $(".gallery div").eq($(".gallery div").length-1);
			 }
			 prevEl(next);
		 }
		 $(".navigation .active").removeClass("active");
		 $(this).addClass("active");
	 });

	 if (window.google){
    var mapOptions = {
        scrollwheel: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: false,
        overviewMapControl: false,
        streetViewControl: false,
        zoom: 5,
        center: new google.maps.LatLng(48.617887, 22.291573),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map;
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var Marker = new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png", null, null, "", "");
    var Coordinates = new google.maps.LatLng(48.618621, 22.298769);
    var home = new google.maps.Marker({
        position: Coordinates,
        map: map,
        icon: Marker
    });

    // style map
    var map_color = [
            {
                featureType: "all", elementType: "all", stylers: [
                { hue: "#3344АА" },
                { saturation: -50 },
                { gamma: 1 },
                { visibility: "on" },
                { lightness: 30 },
                { invert_lightness: false }
            ]
            }
        ],
        styledMapOptions = { name: "mobilesoft356" },
        maptype = new google.maps.StyledMapType(map_color, styledMapOptions);
    map.mapTypes.set('mobilesoft365', maptype);
    map.setMapTypeId('mobilesoft365');

    marker = new google.maps.Marker({
        icon: Marker,
        map: map,
        position: Coordinates
    });
}
});
