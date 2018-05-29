$('#submitFormButton').on('click', function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var webaddress = $('#webaddress').val();
    var birthdate = $('#birthdate').val(); 
    var hasError = false;
    if (name == '') {
        hasError = true;
        $('#nameError').css('display', 'block');
        $('#nameError').text('Please type your name');
        setTimeout(function() {
            $('#nameError').fadeOut('slow');
        },4000);
    }
    else if (email == '') {
        hasError = true;
        $('#emailError').css('display', 'block');
        $('#emailError').text('Please type your correct email');
        setTimeout(function() {
            $('#emailError').fadeOut('slow');
        },4000);
    }
    else if (phone == '') {
        hasError = true;
        $('#phoneError').css('display', 'block');
        $('#phoneError').text('Please type your contact number');
        setTimeout(function() {
            $('#phoneError').fadeOut('slow');
        },4000);
    }
   else if (webaddress == '') {
        hasError = true;
        $('#webaddressError').css('display', 'block');
        $('#webaddressError').text('Please type your web address');
        setTimeout(function() {
            $('#webaddressError').fadeOut('slow');
        },4000);
    }
    else if (birthdate == '') {
        hasError = true;
        $('#birthdateError').css('display', 'block');
        $('#birthdateError').text('Please type your Birth-Date');
        setTimeout(function() {
            $('#birthdateError').fadeOut('slow');
        },4000);
    }
    if (!hasError) {
        $('#contactform').css('display', 'none');
        $('#successfull').css('display', 'block');
    }
});