function Start()
{
  window.location.href= "Q1.html";
}

function getAnswer1()
{
 var userInput = document.getElementById("solution");
 var incorrect1;
 if (userInput != "1")
 {
    document.getElementById("Error").innerHTML="Incorrect Answer";
    document.getElementById("Error").classList.remove("hidden-message");
    document.getElementById("Error").classList.add("shown-message");
    incorrect1++;
 }
 else
 {
   document.getElementById("solution").classList.remove("has-error");

 }

}
function getAnswer2()
{


}
function getAnswer3()
{


}
function nextQuestion1()
{


}

function nextQuestion2()
{


}

function finalPage()
{


}

//functions setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays)
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
