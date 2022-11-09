function myFunction() {
    var x,y, text;
    
    x = document.getElementById("uname").value;
    y = document.getElementById("pword").value;
    
    if (x == '101C' && y == '123456789') {
      text = "Log-In Complete";
      window.location.replace("Login.html");
      
    }
   
    else {
      document.getElementById("uname").disabled = true;
      document.getElementById("pword").disabled = true;
      document.getElementById("login").disabled = true;
      text = "Invalid Username or Password, You are not Worthy!";
  
    }
    document.getElementById("demo").innerHTML = text;
  }