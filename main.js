$(document).ready(function(){
    $('form button').click(function(){
        $('ul li').slideDown();
    })
    $('ul li').click(function(){
        $('ul li').slideUp();
    })
    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();

    })
})
