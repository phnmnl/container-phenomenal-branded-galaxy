$(document).ready( function() {

    render();
    var handle = setInterval(function(){ 
        // console.log($(".navbar-brand-image").attr("src"));
        // console.log($(".navbar-brand-title").html());
        if ($(".navbar-brand-image").attr("src")=="../../../static/images/galaxyIcon_noText.png") {
            // console.log($(".navbar-brand-image").attr("src"));
            // console.log($(".navbar-brand-title").html());
            clearInterval(handle);
            render();
        }

    }, 100);
    
});   

function render(){
    document.title="PhenoMeNal powered by Galaxy";
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'http://phenomenal-h2020.eu/home/wp-content/uploads/2016/09/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);  
    $('.navbar-brand-image').attr('src', 'http://phenomenal-h2020.eu/home/wp-content/uploads/2016/09/phenomenal_white.png');
    $('.navbar-brand-title').html(" PhenoMeNal");
    $('.navbar-brand-title').css("font-style", "italic");
    $('.navbar-inverse').css("background-color", "#525991");
    $('.navbar-inverse .navbar-nav>.active>a').css("background-color", "#414774");
    $('.navbar-inverse .navbar-nav>.disabled>a').css("color", "#6f7481");

    var handle = setInterval(function(){ 
        $(".dropdown-menu").find("li>a").hover(function(){
            $(this).attr("style", "background-color:#525991 !important;");
        },function(){
            $(this).css("background-color", "");
        });

    }, 1000);
}