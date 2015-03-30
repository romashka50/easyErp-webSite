 $(document).ready(function(){
        $(".dropdown a").click(function(event){
            $('.menu').slideToggle("fast");
            $(this).toggleClass("active");
        });
 });
