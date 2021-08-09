$(function(){

    // 버튼 비활성화
    $('#mainbtn-manual').on("click",function(e){
        if($('#mainbtn-manual').hasClass('wait-on')){
            return true;
        }else{
            return false;
        };
    });

    $('#mainbtn-log').on("click",function(e){
        if($('#mainbtn-log').hasClass('wait-on')){
            return true;
        }else{
            return false;
        };
    });


    // 토글 버튼
    $('.toggle-base').click(function(){

        if($(this).hasClass('toggled')){
            $(this).children('.toggle-button').html("<p>Off</p>");
            $(this).children('.toggle-button').animate({'margin-left': 0}, 50);
            $(this).removeClass('toggled');

            $('#mainbtn-manual').removeClass('wait-on');
            $('#mainbtn-log').removeClass('wait-on');

        }else{
            $(this).children('.toggle-button').html("<p><b>On</b></p>");
            $(this).children('.toggle-button').animate({'margin-left': 40}, 50);
            $(this).addClass('toggled');

            $('#mainbtn-manual').addClass('wait-on');
            $('#mainbtn-log').addClass('wait-on');
        }        
    });

    // 마우스 우클릭, 드래그 방지
    $(document).on("contextmenu dragstart selectstart",function(e){
        return false;
    });



    // option selected color box
    $('.option-colorbox').click(function(){
            $('.option-colorbox').removeClass('selectedcolor');
            $(this).addClass('selectedcolor');
    });




    // side menu bar
    $('.btn-sidemenu').click(function(){
        if($('.sidemenu').hasClass('side-on')){
            $('.sidemenu').removeClass('side-on');
            $('.sidemenu').animate({'left': '-80vw'}, 120);
            $('.bg').animate({'left': 0}, 120);
            $('#darkbg').css("display","none");
        }else{
            $('.sidemenu').addClass('side-on');
            $('.sidemenu').animate({'left': 0}, 50);
            $('.bg').animate({'left': '80vw'}, 120);
            $('#darkbg').css("display","block");
        };
    });

    $('.sidemenu').click(function(){
        if($('.sidemenu').hasClass('side-on')){
            $('.sidemenu').removeClass('side-on');
            $('.sidemenu').animate({'left': '-80vw'}, 120);
            $('.bg').animate({'left': 0}, 120);
            $('#darkbg').css("display","none");
        }else{
            $('.sidemenu').addClass('side-on');
            $('.sidemenu').animate({'left': 0}, 50);
            $('.bg').animate({'left': '80vw'}, 120);
            $('#darkbg').css("display","block");
        };
    });

    $('#btn-linked').on('click', function(e){
        e.stopPropagation();
        if($(this).hasClass('linked-on')){
            $(this).html("<p>연결</p>");
            $('.sidemenu-title').html("<p>Voice become letters</p>");
            $('.sidemenu-title').children('p').css("color","#fff");
            $(this).removeClass('linked-on');
        }else{
            $(this).html("<p>연결해제</p>");
            $('.sidemenu-title').html("<p>+ Voice become letters</p>");
            $('.sidemenu-title').children('p').css("color","rgba(255,138,0,1.0)");
            $(this).addClass('linked-on');
        };
    });
    

});