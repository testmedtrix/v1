var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
$(document).ready(function () {
    
    $('.modal').keydown(function (e) {
        var modalid = $('.modal.fade.in:visible').attr('id');
        if (e.keyCode == 40) {
            $('#' + modalid + ' .modal-body').scrollTop($('#' + modalid + ' .modal-body').scrollTop() + 10);
        }
        if (e.keyCode == 38) {
            $('#' + modalid + ' .modal-body').scrollTop($('#' + modalid + ' .modal-body').scrollTop() - 10);
        }
        if (e.keyCode == 27) {
            $(".close").trigger("click");
            onClose_diseasemdl();
            training_modalclose();
            event_modalclose();
            game_modalclose();
            onClose_hcpmdl();
           
        }
    });
    loadScript('assets/js/content.js');
   
    $('#moveSectionDown').click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });
    if (window.location.pathname == "/event/source/web/" || "/source/web/EVENT.html") {
        return;
    }
    else {


        document.getElementById('currentYear').innerHTML = new Date().getFullYear();
        
    }
    try {
        $(".carousel-inner").swipe({
            swipeLeft: function (event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function (event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('prev');
            },
            threshold: 75
        });
    }
    
    catch (e) { }

    checkVideoEnd();
    });

function onClickMenu(id, show) {
    var element = document.getElementById(id);
    $("#menu").toggleClass("active");
    $(element).find(".hamburger").toggleClass('active');
    $(element).toggleClass("active");
    if (show) {
        $('#menuModal').modal('show');
        $('.modal-backdrop').css('background-color', 'transparent');
        $('.modal-backdrop').css('top', '70px');
    }
    else {
        $('.modal-backdrop').css('background-color', 'gray');
        $('#menuModal').modal('hide');
        $('.modal-backdrop').css('top', '0px');
    }
    if ($('#menu').hasClass('active')) {
        document.getElementById('menuInteract').setAttribute("onclick", "onClickMenu('menuSection', false)");
    }
    else {
        document.getElementById('menuInteract').setAttribute("onclick", "onClickMenu('menuSection', true)");
    }
}
//introduction page video play pause control//
function play() {
    var vid = document.getElementById("video_con");
    vid.play();
    $('#play_btn').css("display", "none");
    $('#pause_btn').css("display", "block");
}
function pause() {
    var vid = document.getElementById("video_con");
    vid.pause();
    $('#pause_btn').css("display", "none");
    $('#play_btn').css("display", "block");
}
//works page content suffling//
function gettopic(value) {
if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        $('#pause_btn').css("display", "none");
        $('#play_btn').css("display", "block");
    }
    else {
        $('#pause_btn').css("display", "block");
        $('#play_btn').css("display", "none");
    }
    if (value == "1") {
        $('#topic1_cont').fadeIn();
        $('#topic2_cont').css("display", "none");
        $('#topic3_cont').css("display", "none");
        $('#topic4_cont').css("display", "none");
        $('#topic5_cont').css("display", "none");
        $('#topic6_cont').css("display", "none");
        $('#disease').css("display", "block");
        $('#training').css("display", "none");
        $('#events').css("display", "none");
        $('#games_app').css("display", "none");
        $('#hcp').css("display", "none");
        $('#work-video-container').hide();
        document.getElementById('video_con').pause();
        $('#page-network-work').css('background-image', 'url("assets/imgs/network.jpg")');
        $('#work-img-container').show();
    }
    else if (value == "2") {
        $('#topic2_cont').fadeIn();
        $('#topic1_cont').css("display", "none");
        $('#topic3_cont').css("display", "none");
        $('#topic4_cont').css("display", "none");
        $('#topic5_cont').css("display", "none");
        $('#topic6_cont').css("display", "none");
        $('#training').css("display", "block");
        $('#disease').css("display", "none");
        $('#events').css("display", "none");
        $('#games_app').css("display", "none");
        $('#hcp').css("display", "none");
        $('video').empty().remove();
        $('#vdCont').append('<video poster="assets/imgs/video_poster.png"  id="video_con"><source src="assets/imgs/GAME_app.mp4" type="video/mp4" id="video_detect" /></video>');
        $('#work-video-container').show();
        $('#page-network-work').css('background-image', '');
        $('#work-img-container').hide();
        //if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        //    $('#work-video-container').hide();
        //    document.getElementById('video_con').pause();
        //    $('#page-network-work').css('background-image', 'url("assets/imgs/game_app_trainbg.png")');
        //    $('#work-img-container').show();
        //}
        //else {
            $('#page-network-work').css('background', 'none');
            $('#page-network-work').css('background-color', 'white');
            $('#work-img-container').hide();
            $('#video_detect').attr('src', 'assets/imgs/GAME_app.mp4');
            $('#work-video-container').show();
            document.getElementById('video_con').play();
       //}
    }
    if (value == "3") {
        $('#topic3_cont').fadeIn();
        $('#topic1_cont').css("display", "none");
        $('#topic2_cont').css("display", "none");
        $('#topic4_cont').css("display", "none");
        $('#topic5_cont').css("display", "none");
        $('#topic6_cont').css("display", "none");
        $('#events').css("display", "block");
        $('#disease').css("display", "none");
        $('#training').css("display", "none");
        $('#games_app').css("display", "none");
        $('#hcp').css("display", "none");
        $('video').empty().remove();
        $('#vdCont').append('<video poster="assets/imgs/video_poster.png"  id="video_con"><source src="assets/imgs/Event_Training.mp4" type="video/mp4" id="video_detect" /></video>');
        $('#work-video-container').show();
        $('#page-network-work').css('background-image', '');
        $('#work-img-container').hide();
        //if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        //    $('#work-video-container').hide();
        //    document.getElementById('video_con').pause();
        //    $('#page-network-work').css('background-image', 'url("assets/imgs/event_videobg.png")');
        //    $('#work-img-container').show();
        //}
        //else {
            $('#page-network-work').css('background', 'none');
            $('#page-network-work').css('background-color', 'white');
            $('#work-img-container').hide();
            $('#video_detect').attr('src', 'assets/imgs/Event_Training.mp4');
            $('#work-video-container').show();
            document.getElementById('video_con').play();
        //}
    }
    else if (value == "4") {
        $('#topic4_cont').fadeIn();
        $('#topic1_cont').css("display", "none");
        $('#topic2_cont').css("display", "none");
        $('#topic3_cont').css("display", "none");
        $('#topic5_cont').css("display", "none");
        $('#topic6_cont').css("display", "none");
        $('#disease').css("display", "none");
        $('#training').css("display", "none");
        $('#events').css("display", "none");
        $('#hcp').css("display", "none");
        $('video').empty().remove();
        $('#vdCont').append('<video poster="assets/imgs/video_poster.png"  id="video_con"><source src="assets/imgs/HCP.mp4" type="video/mp4" id="video_detect" /></video>');
        $('#work-video-container').show();
        $('#page-network-work').css('background-image', '');
        $('#work-img-container').hide();
        //if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        //    $('#work-video-container').hide();
        //    document.getElementById('video_con').pause();
        //    $('#page-network-work').css('background-image', 'url("assets/imgs/HCP_videobg.png")');
        //    $('#work-img-container').show();
        //}
        //else {
            $('#page-network-work').css('background', 'none');
            $('#page-network-work').css('background-color', 'white');
            $('#work-img-container').hide();
            $('#video_detect').attr('src', 'assets/imgs/HCP.mp4');
            $('#work-video-container').show();
            document.getElementById('video_con').play();
        //}
    }
    if (value == "5") {
        $('#topic5_cont').fadeIn();
        $('#topic1_cont').css("display", "none");
        $('#topic2_cont').css("display", "none");
        $('#topic3_cont').css("display", "none");
        $('#topic4_cont').css("display", "none");
        $('#topic6_cont').css("display", "none");
        $('#games_app').css("display", "block");
        $('#disease').css("display", "none");
        $('#training').css("display", "none");
        $('#events').css("display", "none");
        $('#hcp').css("display", "none");
        document.getElementById('video_con').pause();
        $('video').empty().remove();
        $('#vdCont').append('<video poster="assets/imgs/video_poster.png"  id="video_con"><source src="assets/imgs/GAME_app.mp4" type="video/mp4" id="video_detect" /></video>');
        $('#work-video-container').show();
        $('#page-network-work').css('background-image', '');
        $('#work-img-container').hide();
        //if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        //    $('#work-video-container').hide();
        //    document.getElementById('video_con').pause();
        //    $('#page-network-work').css('background-image', 'url("assets/imgs/game_app_trainbg.png")');
        //    $('#work-img-container').show();
        //}
        //else {
            $('#page-network-work').css('background', 'none');
            $('#page-network-work').css('background-color', 'white');
            $('#work-img-container').hide();
            $('#video_detect').attr('src', 'assets/imgs/GAME_app.mp4');
            $('#work-video-container').show();
            //document.getElementById('video_con').currentTime = 0;
            document.getElementById('video_con').play();
        //}
    }
    else if (value == "6") {
        $('#topic6_cont').fadeIn();
        $('#topic1_cont').css("display", "none");
        $('#topic2_cont').css("display", "none");
        $('#topic3_cont').css("display", "none");
        $('#topic4_cont').css("display", "none");
        $('#topic5_cont').css("display", "none");
        $('#hcp').css("display", "block");
        $('#disease').css("display", "none");
        $('#training').css("display", "none");
        $('#events').css("display", "none");
        $('#games_app').css("display", "none");
        //if (isAndroid || isBlackBerry || isiDevice || isWindowsPhone) {
        //    $('#work-video-container').hide();
        //    document.getElementById('video_con').pause();
        //    $('#page-network-work').css('background-image', 'url("assets/imgs/HCP_videobg.png")');
        //    $('#work-img-container').show();
        //}
        //else {
            $('#page-network-work').css('background', 'none');
            $('#page-network-work').css('background-color', 'white');
            $('#work-img-container').hide();
            $('#video_detect').attr('src', 'assets/imgs/HCP.mp4');
            $('#work-video-container').show();
            document.getElementById('video_con').play();
        //}
    }
    checkVideoEnd();
}
//caraousal//
function onclickthumbnail() {
    $("#modal-carousel").carousel({ interval: false });
    var content = $(".carousel-inner");
    content.empty();
    var id = this.id;
    var repo = $("#img-repo .item");
    var repoCopy = repo.filter("#" + id).clone();
    var active = repoCopy.first();
    active.addClass("active");
    title.html(active.find("img").attr("title"));
    content.append(repoCopy);
    // show the modal
    $("#modal-gallery").modal("show");
}
function showPrivacyPolicy() {
    $('#terms-policy-modal').find('.modal-title').html('<img src="assets/imgs/medtrix_logo.png" style="width: 100px"><br />Privacy Policy');
    $('#terms-policy-modal').find('.modal-body').html(privacy);
    $('#terms-policy-modal').modal('show');
}
function showTermsOfUse() {
    $('#terms-policy-modal').find('.modal-title').html('<img src="assets/imgs/medtrix_logo.png" style="width: 100px"><br />Terms of Use');
    $('#terms-policy-modal').find('.modal-body').html(terms);
    $('#terms-policy-modal').modal('show');
}
function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
function loadWorkPage(pageId) {
    window.location.href = 'works.html?id=' + pageId;
    
    
}

var i = 0;

function zoomin() {
    var mag = parseInt(viewer.camera.getMagnitude());
    if (mag > 23000000) {
        i = i + 1000000;

        viewer.camera.zoomIn(i);
        return;
    }

    else if (mag > 15000000) {
        i = i + 1000000;

        viewer.camera.zoomIn(i);
    }
    else if (mag <= 6477158 && mag> 6387900) {
        i = 10000;
        viewer.camera.zoomIn(i);
    }
    else if (mag <= 6387900) {
        i = 1000;
        viewer.camera.zoomIn(i);

    }
    else
        viewer.camera.zoomIn();

}
function zoomout() {
    viewer.camera.zoomOut();
}

function validateCareerForm() {
    $('#error_message').hide();
    var name = $.trim($('#careerUserName').val());
    var mail = $.trim($('#careerEmail').val());
    var position = $.trim($('#careerPosition').val());
    var file = $('#selectedFileName').val();

    if (name.length > 0 && mail.length > 0 && position.length > 0 && file.length > 0) {
        if (!isValidEmail(email)) {
            $('#error_message').css('color', 'red');
            $('#error_message').html('Please enter the valid Email');
            $('#error_message').show();
            return false;
        }
        return true;
    }
    else {
        $('#error_message').css('color', 'red');
        $('#error_message').html('All mandatory fields are required*');
        $('#error_message').show();
        return false;
    }
}

function isValidEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
}

function checkVideoEnd() {
    var video = document.getElementById("video_con");
    if (video != null) {
        video.onended = function () {
            $('#pause_btn').css("display", "none");
            $('#play_btn').css("display", "block");
        };
    }
}

/*EVENT page*/
$(document).ready(function () {
    $(".three_2").fadeOut();
    $(".three_3").fadeOut();
    //$('#adapt').removeClass('imageshow').addClass('adaptimage');
});

$('.two').on('touchstart', function () {
    diplaybranding();
});
$('.three').on('touchstart', function () {
    fadeinbrand();
});
$('.five').on('touchstart', function () {
    viewtechimg();
});

/*for mozilla*/
//{
    

//    document.getElementById("branding_fade").style.bottom = "0%";
//    document.getElementById("branding_fade").style.opacity = "1";
//    document.getElementById("branding_fade").style.transition = "all 2s";
//    setTimeout(function () { $(".event_branding").css("visibility", "visible") }, 100);
//});

/*end*/
/*chrome & IE*/
function event_branding() {
    document.getElementById("branding_fade").style.bottom = "0%";
    document.getElementById("branding_fade").style.opacity = "1";
    document.getElementById("branding_fade").style.transition = "all 2s";
    setTimeout(function () { $(".event_branding").css("visibility", "visible") }, 100);
   
}
/*end*/
function onClose_event_branding() {
    document.getElementById("branding_fade").style.bottom = "-40%";
    document.getElementById("branding_fade").style.opacity = "0";
    setTimeout(function () { $(".event_branding").css("visibility", "hidden") });

}
function diplaybranding() {
    
    document.getElementById("two_2").style.width = "100%";
    document.getElementById("two_2").style.transition = "width 2s";   
    setTimeout(function () {$(".two_2").css("visibility","visible") }, 700);
}

/* calling functions for mobile devices instead of mouse hover function*/

function checkdevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
       
        /*event functions*/
        setTimeout(function () {
            //event_branding();
            //eventbrand();
            //event2_flow();
            //displayadapt();
            //eventsolution();
            $("#event_mobile").css("display", "block");
            $("#event_bigscreen").css("display", "none");
        },0);
       
        /*End*/  
        
    }
    else {
        setTimeout(function () {
        $("#event_mobile").css("display", "none");
        $("#event_bigscreen").css("display", "block");
        }, 0);
    }
}



function checkdevice_forgame() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        /*Game functions*/
        setTimeout(function () {
        //game_1();
        //game_2();
        //game_3();
        //game_4();
        $("#game_mobile").css("display", "block");
        $("#game_bigscreen").css("display", "none");
        }, 0);

    }
    else {
        setTimeout(function () {
        $("#game_mobile").css("display", "none");
        $("#game_bigscreen").css("display", "block");
        }, 0);
    }
}


function checkdevice_training() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        /*training functions*/
        setTimeout(function () {
        //train_1();
        //train_2();
        //train_3();
        //train_4();
        $("#training_mobile").css("display", "block");
        $("#training_bigscreen").css("display", "none");
        }, 0);
    }
    else {
        setTimeout(function () {
        $("#training_mobile").css("display", "none");
        $("#training_bigscreen").css("display", "block");
        }, 0);
    }
}

function training_modalclose() {   
    onClose_train_1();
    onClose_train_2();
    onClose_train_3();
    onClose_train_4();
}

function event_modalclose() {
    onClose_event_branding();
    onClose_eventbrand();
    onClose_displayadapt();
    onClose_eventsolution();

    onClose_event2_anim();

}
function game_modalclose() {
    onClose_game_1();
    onClose_game_2();
    onClose_game_3();
    onClose_game_4();
}


/*End*/

/*TRAINING PAGE*/

 function trainingsolution() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
        setTimeout(function () { $(".train_two_2").css("visibility", "visible") }, 500);
        document.getElementById("train_two_1").style.transition = "all 3s ease-in-out";
        document.getElementById("train_two_2").style.transition = "all 3s ease-in-out";
        $('#train_two_1').addClass('train_two_1_new');
        $('#train_two_2').removeClass('train_two_2_new').addClass('train_two_2_mob');
    }
    else
    {
        $('#train_two_1').addClass('train_two_1_new');
        setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
        document.getElementById("train_two_1").style.transition = "all 3s ease-in-out";
        $('#train_two_2').addClass('train_two_2_new').removeClass('train_two_2_mob');
        setTimeout(function () { $(".train_two_2").css("visibility", "visible") }, 500);       
        document.getElementById("train_two_2").style.transition = "all 3s ease-in-out";
        
       

    }

 }




 //{

   
 //    setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
 //    setTimeout(function () { $(".event_two_tech").css("visibility", "visible") }, 500);
 //    $("#train_two_1a").css("left", "0%");
 //    $("#event_two_techb").css("left", "0%");
 //    document.getElementById("train_two_1a").style.transition = "all 3s ease-in-out";
 //    document.getElementById("event_two_techb").style.transition = "all 3s ease-in-out";
 //});
/*end*/

/*Chrome and IE*/
 function eventsolution() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent))
     {
         
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
         setTimeout(function () { $(".event_two_tech").css("visibility", "visible") }, 500);
         $("#train_two_1a").css("left", "0%");
         $("#event_two_techb").css("left", "0%");
         document.getElementById("train_two_1a").style.transition = "all 2s ease-in-out";
         document.getElementById("event_two_techb").style.transition = "all 2s ease-in-out";
     }
     else
     {     
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 100);
         setTimeout(function () { $(".event_two_tech").css("visibility", "visible") }, 100);
         $("#train_two_1a").css("left", "0%");
         $("#event_two_techb").css("left", "0%");
         document.getElementById("train_two_1a").style.transition = "all 1.5s ease-in-out";
         document.getElementById("event_two_techb").style.transition = "all 1.5s ease-in-out";
     }

 }

 function onClose_eventsolution() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent))
     {
         $(".train_two_1").css("visibility", "hidden");
         $(".event_two_tech").css("visibility", "hidden");
         $("#train_two_1a").css("left", "-100%");
         $("#event_two_techb").css("left", "100%");        
     }
     else {
         $(".train_two_1").css("visibility", "hidden");
         $(".event_two_tech").css("visibility", "hidden");
         $("#train_two_1a").css("left", "-100%");
         $("#event_two_techb").css("left", "100%");         
     }
 }

 function eventbrand() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         
         $('#imageshow').addClass('imageshow').removeClass('imageshow_brand', 'imageshow_brand_new');
         setTimeout(function () { $(".train_two_2").css("visibility", "visible") }, 500);
         document.getElementById("train_two_2").style.transition = "all 2s linear";
         $('#train_two_2').removeClass('train_two_2_new').addClass('event_two_2_mob');

         
         //$('#train_two_2').removeClass('train_two_2_new').addClass('event_two_2_mob');


         //setTimeout(function () { $(".imageshow_brand").css("visibility", "visible") }, 500);
         //document.getElementById("imageshow").style.transition = "all 1s";
         //$('#imageshow').removeClass('imageshow_brand_new').addClass('event_two_2_mob');
     }
     else {
         event2_flow();
         setTimeout(function () {
             setTimeout(function () { $(".imageshow_brand").css("visibility", "visible") }, 200);
             document.getElementById("imageshow").style.transition = "all 1.5s linear";
             $('#imageshow').addClass('imageshow_brand_new').removeClass('train_two_2_mob');
         }, 1000);
         
         

     }
 }
 function onClose_eventbrand() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent))
     {
         $('#imageshow').addClass('imageshow_brand', 'imageshow_brand_new').removeClass('imageshow');
         $(".train_two_2").css("visibility", "hidden");        
         $('#train_two_2').removeClass('event_two_2_mob').addClass('train_two_2_new');
     }
     else
     {
     $(".imageshow_brand").css("visibility", "hidden");
     $('#imageshow').addClass('train_two_2_mob').removeClass('imageshow_brand_new');
     }
 }

 $('document').ready(function () {
     $("#designmore1").fadeOut();
     $(".moreinfo").fadeOut();
     $("#design1").fadeOut();
     $("#design2").fadeOut();
     $("#design3").fadeOut();
     $("#designmore").fadeOut();   
   //  $(".game_act").fadeOut();
 });

 
 function displayadapt() {
     
     $('#adapt').addClass('imageshow_anim').removeClass('adaptimage');
     document.getElementById("adapt").style.transition = "all 1s linear";
     //setTimeout(function(){ $(".event_three").css("visibility","visible")},200);
    
     
 }
 function onClose_displayadapt() {
     $('#adapt').addClass('adaptimage').removeClass('imageshow_anim');     
     //$(".event_three").css("visibility", "hidden");
 }
/*End of event page*/

/*game page*/

 $(document).ready(function () {
     $("#game_4_img1").fadeOut();
 });
 function game_1() {
     setTimeout(function () { $("#game_act_g7").removeClass("game_act_g7_1").addClass("game_act_g7_new"); },700);
     document.getElementById("game_act_g7").style.transition = "all 1.5s linear";

     setTimeout(function () {
         $("#game_1_img2_1").removeClass("game_1_img2_1").addClass("game_1_img2_1_new");
         $("#game_1_img2_2").removeClass("game_1_img2_2").addClass("game_1_img2_2_new");
     }, 1000);
     
     document.getElementById("game_1_img2_1").style.transition = "all 2.5s linear"; 
     document.getElementById("game_1_img2_2").style.transition = "all 2.5s linear"; 
 }
 function onClose_game_1() {
     $("#game_act_g7").removeClass("game_act_g7_new").addClass("game_act_g7_1");

     $("#game_1_img2_1").removeClass("game_1_img2_1_new").addClass("game_1_img2_1");
     $("#game_1_img2_2").removeClass("game_1_img2_2_new").addClass("game_1_img2_2");
 }
 function game_2() {
     $("#game_2_img_1").removeClass("game_2_img").addClass("game_2_img_1");
     setTimeout(function () { $(".game_2_img_1").css("visibility", "visible") }, 500);
     document.getElementById("game_2_img_1").style.transition = "all 2s";
 }
 function onClose_game_2() {
     $("#game_2_img_1").removeClass("game_2_img_1").addClass("game_2_img");
     $(".game_2_img_1").css("visibility", "hidden");
 }
 function game_3() {

     $("#game_3_img1").removeClass("game_3_img_left").addClass("game_3_img1_new");
     $("#game_3_img2").removeClass("game_3_img_position").addClass("game_3_img2_new");
     setTimeout(function () { $(".game_3_img1_new").css("visibility", "visible") }, 500);
     setTimeout(function () { $(".game_3_img2_new").css("visibility", "visible") }, 500);
     document.getElementById("game_3_img1").style.transition = "all 1.5s ease-out";
     document.getElementById("game_3_img2").style.transition = "all 1.5s ease-out";
 }
 function onClose_game_3() {
     $("#game_3_img1").removeClass("game_3_img1_new").addClass("game_3_img_left");
     $("#game_3_img2").removeClass("game_3_img2_new").addClass("game_3_img_position");
     $(".game_3_img1_new").css("visibility", "hidden");
     $(".game_3_img2_new").css("visibility", "hidden");
    
 }
 function game_4() {
     $("#game_4_img1").fadeIn("slow");
     
 }
 function onClose_game_4() {
     $("#game_4_img1").fadeOut();
 }

/*Training page*/
 $(document).ready(function () {
     $("#train_1_img").fadeOut();
     $("#train_2_img").css("visibility", "hidden");
     $("#train_2_img").removeClass("train_2_new").addClass("train_2");
     $("#train_3_img1").removeClass("trainshow_right").addClass("train_3_img1");
     $("#train_3_img2").removeClass("trainshow_left").addClass("train_3_img2");
     $(".train_5").fadeOut();
     
 });

 function train_1() {
     $("#train_1_img").fadeIn();

 }
 function onClose_train_1() {
     $("#train_1_img").fadeOut();
 }
 function train_2() {
     setTimeout(function(){$("#train_create").addClass("train_fade_2").removeClass("train_fade")},200);
     document.getElementById("train_create").style.transition = "all 1.2s linear";
     
     //setTimeout(function () { $("#train_2_img").css("visibility", "visible") }, 500);
     //$("#train_2_img").removeClass("train_2").addClass("train_2_new");
     //document.getElementById("train_2_img").style.transition = "all 2.5s linear";
 }
 function onClose_train_2() {
     $("#train_create").addClass("train_fade").removeClass("train_fade_2");
     document.getElementById("train_create").style.transition = "all 1s";
     //$("#train_2_img").css("visibility", "hidden");
     //$("#train_2_img").removeClass("train_2_new").addClass("train_2");
 }
 function train_3() {
     $("#train_3_img1").removeClass("train_3_img1").addClass("trainshow_right");
     $("#train_3_img2").addClass("trainshow_left").removeClass("train_3_img2");    
 }

 function onClose_train_3() {
     $("#train_3_img1").removeClass("trainshow_right").addClass("train_3_img1");
     $("#train_3_img2").addClass("train_3_img2").removeClass("trainshow_left");
 }

 function train_4() {
     $(".train_5").fadeIn("slow");
 }

 function onClose_train_4() {
     $(".train_5").fadeOut();
 }


/*HCP and patient*/
 function hcp_1() {
     $("#hcp_h4_img").fadeIn("slow");
 }



 function hcp_2() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 1200);
         document.getElementById("h5img").style.transition = "all 2s linear";
         $('#h5img').addClass('train_two_1_new');
         $("#h5img").css("left", "0%");

     }
     else {
         $('#h5img').addClass('train_two_1_new');
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 200);
         document.getElementById("h5img").style.transition = "all 1.5s linear";
         $("#h5img").css("left", "0%");
     }

 }

 function hcp_3() {
     setTimeout(function () { $('#h6img').addClass('imageshow_hcp6').removeClass('adaptimage') }, 300);
     document.getElementById("h6img").style.transition = "all 1.5s ease-out";
     setTimeout(function () { $(".hcp_h6").css("visibility", "visible") }, 500);
 }

 function patient_4() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
         document.getElementById("p9img_div").style.transition = "all 2.5s ease-in-out";
         $("#p9img_div").css("left", "0%");
     }
     else {
          setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 500);
         document.getElementById("p9img_div").style.transition = "all 2.5s ease-in-out";
         $("#p9img_div").css("left", "0%");
     }
 }

 function patient_3()
 {
     setTimeout(function () { $('#p8img').addClass('imageshow_hcp6').removeClass('adaptimage') }, 300);
     document.getElementById("p8img").style.transition = "all 1.5s ease-out";
     setTimeout(function () { $(".hcp_h6").css("visibility", "visible") }, 500);
 }


 function patient_1() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 1000);
         document.getElementById("p5img").style.transition = "all 3.5s ease-in-out";
         // $('#p5img').addClass('ptnt_p5_UP');
         $("#p5img").removeClass("ptnt_p5").addClass("ptnt_p5_UP");
     }
     else {
       $("#p5img").removeClass("ptnt_p5").addClass("ptnt_p5_UP");
      //  $('#p5img').addClass('ptnt_p5_UP');
         setTimeout(function () { $(".train_two_1").css("visibility", "visible") }, 1000);
         document.getElementById("p5img").style.transition = "all 3.5s ease-in-out";
     }
 }


 function patient_2() {
     setTimeout(function () { $(".train_two_1_hcp").css("visibility", "visible") }, 500);
     setTimeout(function () { $(".event_two_tech").css("visibility", "visible") }, 500);
     document.getElementById("train_two_1_hcp").style.transition = "all 2s ease-in-out";
     document.getElementById("ptnt_p6").style.transition = "all 2s ease-in-out";
     $('#train_two_1_hcp').css("left", "0%");
     $('#ptnt_p6').css("left", "0%");
 }



 function checkdevice_pateint() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         //patient_1();
         //patient_2();
         //patient_3();
         //patient_4();
         $("#disease_mobile").css("display", "block");
         $("#disease_bigscreen").css("display", "none");
     }
     else {
         setTimeout(function () {
             $("#disease_mobile").css("display", "none");
             $("#disease_bigscreen").css("display", "block");
         }, 0);
     }
 }

 function checkdevice_hcp() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         //hcp_1();
         //hcp_2();
         //hcp_3();
         $("#hcp_mobile").css("display", "block");
         $("#hcp_bigscreen").css("display", "none");
     }
     else {
         setTimeout(function () {
             $("#hcp_mobile").css("display", "none");
             $("#hcp_bigscreen").css("display", "block");
         }, 0);
     }
 }


 function onClosehcp_1() {
     $("#hcp_h4_img").css("display","none");
 }

 function onClosehcp_2() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
         $('#h5img').removeClass('train_two_1_new');
         $("#h5img").css("left", "-100%");

     }
     else {
         $('#h5img').removeClass('train_two_1_new');
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
         $("#h5img").css("left", "-100%");
     }

 }

 function onClosehcp_3() {
     setTimeout(function () { $('#h6img').removeClass('imageshow_hcp6').addClass('adaptimage') });
     setTimeout(function () { $(".hcp_h6").css("visibility", "hidden") });
 }

 function onClosepatient_4() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
         $("#p9img_div").css("left", "100%");
     }
     else {
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
         $("#p9img_div").css("left", "-100%");
     }
 }

 function onClosepatient_3() {
     setTimeout(function () { $('#p8img').removeClass('imageshow_hcp6').addClass('adaptimage') });
     setTimeout(function () { $(".hcp_h6").css("visibility", "hidden") });
 }
 function onClosepatient_2() {
     setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
     setTimeout(function () { $(".event_two_tech").css("visibility", "hidden") });
     $('#train_two_1_hcp').css("left", "-100%");
     $('#ptnt_p6').css("left", "100%");
 }

 function onClosepatient_1() {
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows phone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
         $("#p5img").addClass("ptnt_p5").removeClass("ptnt_p5_UP");
     }
     else {
         $("#p5img").addClass("ptnt_p5").removeClass("ptnt_p5_UP");
         setTimeout(function () { $(".train_two_1").css("visibility", "hidden") });
     }
 }


 function onClose_hcpmdl()
 {
     onClosehcp_1();
     onClosehcp_2();
     onClosehcp_3();
 }

 function onClose_diseasemdl()
 {
     onClosepatient_1();
     onClosepatient_2();
     onClosepatient_3();
     onClosepatient_4();
 }

/*check animation*/
 function event2_flow() {
     $("#event_2_anim_1").addClass("trainleft_width").removeClass("flow_right");
     
    
 }
 function onClose_event2_anim() {
     $("#event_2_anim_1").addClass("flow_right").removeClass("trainleft_width");
     
 }


/*patient page carousal*/
 function add_carousal() {
     $("#patient_carousal").addClass("patient_carousal");
 }
