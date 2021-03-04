function validateForm(){
   
    var errorMessages = "";

    var isnamevalid = false;
    var islastvalid = false;
    var isemailvalid = false;
    var isphonevalid = false;
    var isadressvalid = false;
    var iscountryvalid = false;
    var usernamevalid = false;
    var passwordvalid = false;
    var zipvalid = false;
    var cityvalid = false;
    var statesvalid = false;
     
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var email = document.getElementById("EMail").value;
    var phone = document.getElementById("Phone").value;
    var Address = document.getElementById("Address").value;
    var country = document.getElementById("Country").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var username = document.getElementById("username").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var states = document.getElementById("states").value;


    //3) do the validation
    if (firstname===null || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
    else
    isnamevalid = true;

    if (lastname===null || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
    else
    islastvalid = true;

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length){
        errorMessages += "<p>Invalid email</p>";
    }
    else
        isemailvalid = true;

    if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
        errorMessages += "<p>Invalid phone number </p>";
    else
    isphonevalid = true;

    

    if(password1!= password2){
        errorMessages += "<p>The passwords need to match</p>";
    }
    else if(password1.length > 7) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
    }
    else if (password1.toUpperCase() === password1) {
        errorMessages +="<p>Your password needs a lower case letter</P>";
    }
    else if (password1.toLowerCase() === password1) {
        errorMessages += "<p>Your password needs an upper case letter</p>";
    }
    else if (/\d/.test(password1) === false) {
        errorMessages += "<p>Your password needs a number</p>";
        
    }
    else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password1) === false) {
        errorMessages += "<p>Your password needs a special character</p>";
        
    }
    else {
        passwordvalid = true;
    }
    
    if (username===null || username==="" || username.length > 12){
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
    } else{
        usernamevalid = true;
    }
    if (city===null || city===""){
        errorMessages += "<p>The city is required </p>";
    } else{
         cityvalid = true;
    }
    if (Address===null || Address===""){
        errorMessages += "<p>The Address is required </p>";
    } else{
        isadressvalid = true;
    }
    if(country === "000"){
        errorMessages += "<p>please choose a country</p>"; 
    } else{
        iscountryvalid = true;
    }
    
   
    if(country === "USA"){
        if (isNaN(zip) || zip.length >5 || zip===null || zip===""){
            errorMessages += "<p>The zip code is invalid </p>";
        } else{
            zipvalid = true;
        } 
        if (states === "NO"){
            errorMessages += "<p>please choose a state </p>";
        }
        else{
            statesvalid = true;
        }
    } else{
        zipvalid = true;
        statesvalid = true;
    }
    
    
    document.getElementById("errorMessages").innerHTML = errorMessages;
   
    return (isnamevalid && islastvalid && isemailvalid && isphonevalid && isadressvalid && iscountryvalid && usernamevalid && passwordvalid && zipvalid && cityvalid && statesvalid)

    }