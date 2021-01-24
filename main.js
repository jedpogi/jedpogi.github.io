let isActive = false;

$('.menu').on('click', function(){
    console.log("aaa")
    if(isActive){
        $(this).removeClass('active');
        $('body').removeClass('menu-open')
    }
    else{
        $(this).addClass('active');
        $('body').addClass('menu-open')
    }

    isActive = !isActive
})