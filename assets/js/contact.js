var isfNameValid = false;
var islNameValid = false;
var isEmailValid = false;
var isNumberValid = false;
var isMsgValid = false;


/* function onContactUser() {
    $('#validate_msg').hide();    
    var data = new Contact();
    var email = $.trim($('#txtmail').val());

    data.name = $.trim($('#txtUName').val());
    data.Lname = $.trim($('#txtLName').val());
    data.email = email;
    data.phone = $.trim($('#txtPhone').val());
    data.message = $.trim($('#txtmsg').val());    

    if ((data.name).length > 0 && (data.email).length > 0 && (data.message).length > 0) {
        if (!isValidEmail(email)) {
            $('#validate_msg').css('color', 'red');
            $('#validate_msg').html('Please enter the valid email');
            $('#validate_msg').show();
            return;
        }
        if (medtrix.AddContactMessage(data, null)) {
            $('#validate_msg').css('color', 'green');
            $('#validate_msg').html('Thank you for sending your message, we will get back to you soon');
        }
        else {
            $('#validate_msg').css('color', 'red');
            $('#validate_msg').html('There is an error while receiving your message. Please try again later');
        }
    }
    else {
        $('#validate_msg').css('color', 'red');
        $('#validate_msg').html('All mandatory fields are required');
    }

    $('#validate_msg').show();
} */


function onContactUser(){
    if(isfNameValid && islNameValid && isNumberValid && isEmailValid && isMsgValid){
        var data = new Contact();
        var email = $.trim($('#txtmail').val());

        data.name = $.trim($('#txtUName').val());
        data.Lname = $.trim($('#txtLName').val());
        data.email = email;
        data.phone = $.trim($('#txtPhone').val());
        data.message = $.trim($('#txtmsg').val());

        // Write Email Trigger Code here
    }
    else{
        alert('Enter all the fields.');
    }
    if (medtrix.AddContactMessage(data, null)) {
        $('#validate_msg').css('color', 'green');
        $('#validate_msg').html('Thank you for sending your message, we will get back to you soon');
    }
    else {
        $('#validate_msg').css('color', 'red');
        $('#validate_msg').html('There is an error while receiving your message. Please try again later');
    }
}

function checkField(element){
    var nameRegex = /^[a-zA-Z]+$/;
    var numberRegex = /^\+?[0-9]+$/;
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})\.?$/;
    var fieldValue = element.value;
    if(element.id == 'txtUName'){
        if(!nameRegex.test(fieldValue)){
            document.getElementById('txtUNameErrorMsg').style.display = 'block';
            isfNameValid = false;
        }
        else{
            document.getElementById('txtUNameErrorMsg').style.display = 'none';
            isfNameValid = true;
        }
    }
    else if(element.id == 'txtLName'){
        if(!nameRegex.test(fieldValue)){
            document.getElementById('txtLNameErrorMsg').style.display = 'block';
            islNameValid = false;
        }
        else{
            document.getElementById('txtLNameErrorMsg').style.display = 'none';
            islNameValid = true;
        }
    }
    else if(element.id == 'txtPhone'){
        if(!numberRegex.test(fieldValue) || fieldValue.length > 20){
            document.getElementById('txtPhoneErrorMsg').style.display = 'block';
            isNumberValid = false;
        }
        else{
            document.getElementById('txtPhoneErrorMsg').style.display = 'none';
            isNumberValid = true;
        }
    }
    else if(element.id == 'txtmail'){
        if(!emailRegex.test(fieldValue)){
            document.getElementById('txtmailErrorMsg').style.display = 'block';
            isEmailValid = false;
        }
        else{
            document.getElementById('txtmailErrorMsg').style.display = 'none';
            isEmailValid = true;
        }
    }
    else if(element.id == 'txtmsg'){
        if(fieldValue.trim().length == 0){
            document.getElementById('txtmsgErrorMsg').innerHTML = 'Please enter a message.';
            document.getElementById('txtmsgErrorMsg').style.display = 'block';
            isMsgValid = false;
        }
        else if(fieldValue.length > 250){
            document.getElementById('txtmsgErrorMsg').innerHTML = 'Max characters must be 250.';
            document.getElementById('txtmsgErrorMsg').style.display = 'block';
            isMsgValid = false;
        }
        else{
            document.getElementById('txtmsgErrorMsg').innerHTML = '';
            document.getElementById('txtmsgErrorMsg').style.display = 'none';
            isMsgValid = true;
        }
    }
}