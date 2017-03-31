var incorrect;

function Start()
{
  window.location.href= "Q1.html";
}

function initializeIncorrect()
{
  incorrect = 0;
}
function getAnswer1()
{
 var userInput = document.getElementById("solution").value;
 if(userInput != 72)
 {
    alert("Incorrect Answer");
    incorrect++;
 }
 else
 {
    document.getElementById("nextButton").removeAttribute("hidden");
 }
 setCookie("one", incorrect, 1);
}

function getAnswer2()
{
  var userInput = document.getElementById("solution").value;
  if (userInput != 45)
  {
     alert("Incorrect Answer");
     incorrect++;
  }
  else
  {
     document.getElementById("nextButton").removeAttribute("hidden");
  }
  setCookie("two", incorrect, 1);
}

function getAnswer3()
{
  var userInput = document.getElementById("solution").value;
  if (userInput != 63)
  {
    alert("Incorrect Answer");
    incorrect++;
  }
 else
 {
    document.getElementById("nextButton").removeAttribute("hidden");
 }
 setCookie("three", incorrect, 1);
}

function nextQuestion1()
{
  window.location.href= "Q2.html";
}

function nextQuestion2()
{
  window.location.href= "Q3.html";
}

function finalPage()
{
  window.location.href= "results.html";
}

function results(){
  var one = Number(getCookie("one"));
  var two = Number(getCookie("two"));
  var three = Number(getCookie("three"));
  var total = Number(one + two + three);
  var numberAnswers = Number(total + 3);
  var percentage = Number(3/numberAnswers * 100);
  document.getElementById("one").innerHTML = "Incorrect: " + one + " times";
  document.getElementById("two").innerHTML = "Incorrect: " + two + " times";
  document.getElementById("three").innerHTML = "Incorrect: " + three + " times";
  document.getElementById("total").innerHTML = "Total Incorrect: " + total + " times";
  document.getElementById("percentage").innerHTML = percentage + "%";
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
