$(function() {
var Username = $('#username');
var Password = $('#password');
var UserIcon = $('.user-in img');
var PasswordIcon = $('.pass-in img');
var MSGBox = $('.msg-box');
var MSG = $('.msg');
var MSGShow = 'yes';
var MSG_OK_BTN =$('#ok-btn');
MSG_OK_BTN.on('click',function () {
MSGBox.css('display', 'none');    
});
var request;


Username.focus(function () {
$(this).css('border-bottom', '2px solid black');
UserIcon.attr('src', '/site_data/img/username-focus.svg');





});

Username.focusout(function () {
    $(this).css('border-bottom', '2px solid #807c7c');
    UserIcon.attr('src', '/site_data/img/username.svg');
});

Password.focus(function () {
    $(this).css('border-bottom', '2px solid black');
    PasswordIcon.attr('src', '/site_data/img/password-focus.svg');
    
    
    
    
    
    });
    
    Password.focusout(function () {
        PasswordIcon.attr('src', '/site_data/img/password.svg');
        $(this).css('border-bottom', '2px solid #807c7c');
    });


    $("#form").submit(function(event){

        
        event.preventDefault();
       if (Username.val() == ''|| Password.val() == '') {
        MSG.text('Lazımlı məlumatlar verilməyib! Həm İstifadəçi adı, həmdə Sifrəni qeyd edin!');
        MSGBox.css('display', 'block');
       return false;


       }



        
        if (request) {
            request.abort();
        }
        
        var $form = $(this);
    
        
        var serializedData = $form.serialize();
    
        
        Username.prop("disabled", true);
        Password.prop("disabled", true);
    
       
        request = $.ajax({
            url: "/site_data/php/login_form.php",
            type: "post",
            data: serializedData
        });
    
        
        request.done(function (response, textStatus, jqXHR){
            if (response == "OK") {    
            
            MSGShow = 'none';    
            window.location = '/upload/new-upload.php';
            
            }
            
            if (response == "Istifadəçi adı və/və ya Şifrə yalnışdır!") {
                MSG.text(response);
                Username.css('border-bottom', '2px solid #ff0000');
                Password.css('border-bottom', '2px solid #ff0000');
                UserIcon.attr('src', '/site_data/img/username-error.svg');
                PasswordIcon.attr('src', '/site_data/img/password-error.svg');
                MSGBox.css('display', 'block'); 
                

            } 
            if (response != "OK"||response != "Istifadəçi adı və/və ya Şifrə yalnışdır!" && MSGShow == 'yes') {
                MSG.text(response);
                MSGBox.css('display', 'block');
            }
            
            
        });
    
        
        request.fail(function (jqXHR, textStatus, errorThrown){
            
        MSG.text('Giriş alınmadı! Sistemdə xəta:'+ " " + '"'+textStatus+":"+ " " + errorThrown+ '"');
        MSGBox.css('display', 'block');

            
        });
    
        
        request.always(function () {
        Username.prop("disabled", false);
        Password.prop("disabled", false);
            
        });
    
    }); 







});