var userInput = document.querySelector('#input-area');
var clickBtn = document.querySelector('#click-btn');
var outputArea = document.querySelector('#output-area');

var timeoutArea = document.querySelector('#timeout-area');


function clickHandler() {
    var userDate = userInput.value;
    var userYear = userDate.slice(0,4);
    var dateFirst = (userDate.slice(5,10)).split("-").reverse().join(""); //for the DD-MM-YYYY format
    var monthFirst = (userDate.slice(5,10)).split("-").join("") //for the MM-DD-YYYY format
    var reverseYear = userYear.split("").reverse().join("");
    
    if(dateFirst === reverseYear || monthFirst === reverseYear) {
        outputArea.innerHTML = "Yayy!! Your birthday is a pallindrome.";
}

else {

var d = new Date(userDate);
var newMonth = Math.floor(parseInt(reverseYear)/100);
var newDate = parseInt(reverseYear)%100;
var pallindromeDateFirst = new Date(newDate+"-"+newMonth+"-"+d.getFullYear());
var pallindromeMonthFirst = new Date(newMonth+"-"+newDate+"-"+d.getFullYear());

var closestPallindrome = new Date();
if(Math.abs(pallindromeDateFirst.getTime()-d.getTime()) < Math.abs(pallindromeMonthFirst.getTime()-d.getTime())) 
    closestPallindrome  = pallindromeDateFirst ;

else 
    closestPallindrome =pallindromeMonthFirst;




var datePallindrome = closestPallindrome.getDate(); 
var monthPallindrome = closestPallindrome.getMonth()+1;
var yearPallindrome = closestPallindrome.getFullYear();
var numberofDays = Math.abs(Math.floor((closestPallindrome.getTime()-d.getTime())/(1000*24*60*60)));
if(closestPallindrome.getTime()>d.getTime()) {
    outputArea.innerHTML = "Sorry! Your birthday is not a pallindrome. The nearest pallindrome date in your birthyear is "+datePallindrome+"-"+monthPallindrome+"-"+yearPallindrome+".\nIt is in : "+(numberofDays+1)+" day(s).";
}


// else if(typeof(numberofDays === "NaN")){
// outputArea.innerHTML = "Sorry! There are no pallindrome dates in your birthyear.";
// }

else{
    outputArea.innerHTML = "Sorry! Your birthday is not a pallindrome. The nearest pallindrome date in your birthyear is "+datePallindrome+"-"+monthPallindrome+"-"+yearPallindrome+".\nYou missed it by : "+(numberofDays-1)+" day(s).";

}

}
}
function timeoutHandler() {
    var img = document.createElement("img");
 
    img.src = "Clock.gif";
    var src = document.querySelector("#output-area");
     
    src.appendChild(img);
    myVar = setTimeout(clickHandler, 3000);

}

clickBtn.addEventListener('click', timeoutHandler);