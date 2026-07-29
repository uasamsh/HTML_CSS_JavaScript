
// using external javascript file







alert("Visit the page");  //it is called data type  string
//  alret(33.56) it is called integer data type 

console.log("Hello World");

// we can change the title javascirpt to Hello world
document.title ="Hello World" 

// document body
document.body.style.backgroundColor="light blue";

//enter prompt

var name = prompt("Enter your name");
console.log(name);

// confirm
var result = confirm("Are you sure?");
console.log(result);

// Events
// 1. onclick
// 2. onmouseover
// A tag select
// A tag / listen / event/ action(click)
// Run the function alert
// A tag select
// var clicklink = document.getElementById("clickME"); //using id in HTML
// clicklink.onclick = function() {
//     alert(clicklink);
// }

// // clicklink.addEventListener("click", function() {
// //     alert("Click the link please");
// })

// Other example without variable
// document.getElementById("clickME").addEventListener("click", function() {
//     alert("Click the link please");
// })

// When we scroll the web page console give output
// window.addEventListener("scroll", function() {
//     console.log("Scrolling");
// })


// DOM means Document Object Model How to work DOM manipulation through javascript , we can change the inner html through javascript

console.log(document.getElementById("clickme").innerHTML);
// OR
document.getElementById("clickme").innerHTML = "This is a new dummy data";

window.addEventListener('resize', function() {
    console.log("Please stop the Resizing");
    
})

// next example
// window.onscroll = function() {
//     console.log("Scrolling");
// }
 // get current date and time in JS
document.getElementById("update_time").addEventListener('click', function() {
    var currentTime = new Date().toLocaleString();
    alert(currentTime);
    document.getElementById("update_time").innerHTML = currentTime;
    
})



// when we won't load  url the page that is mentioned href in HTML then we use this code, e means event, preventDefault() use for stop the default action
// document.getElementById('clickme')

// document.getElementById(update_time).addEventListener('click', function(e) {
//     e.preventDefault();
// });


// Loop: initialize 1 value, 2 change ,3 limit 

// var num = 1;

// while (num < 10) {
//     alert("this is a test");
//     num++;
// }

// Infinte Loop while 4==4 like ture
// while(true){
//     var currenttime = new Date().toLocaleString();
//     document.getElementById(update_time).innerHTML = currenttime;
// }

// for using time update
// for using time update
// setInterval(function() {
//     var currenttime = new Date().toLocaleString();
//     document.getElementById('update_time').innerHTML = currenttime;
// }, 1000); // 1000 means 1 second

function updateTimeInPTag(){

    var currentTIme= new Date().toLocaleDateString();
    docme.getElementById('update_time').innerhtml = currentTIme;
}
// for sing infinite loop
// setinterval(updateTimeInPTag, 1000); 
// OR


// setInterval(function(){
// updateTimeInPTag();
// },1000);


setInterval(() => {
    
}, 1000);

document.getElementById('update_time').addEventListener('click', function(e) {
e.preventDefault();
updateTimeInPTag()
});




