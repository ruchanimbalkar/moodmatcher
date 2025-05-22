//Declare variables for later use
const output=document.querySelector(".output");
let HeadingTwo = document.querySelector("h2");
let emoji = document.querySelector(".mood");
let pElement=document.querySelector(".message");
let imgAlt;
let imgSrc;



//store mood form in a variable named 'form' 
const form = document.querySelector(".mood-form");
//add event listener to form's submit button
//and call function onFormSubmit() when submit button is clicked
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e){
    // prevent default form behavior: prevent the page from refreshing, allowing you to handle and process the form without causing the entire page to reload
	e.preventDefault();
	//construct a FormData object, which fires the formdata event
	const data = new FormData(e.target);
	//Use the boilerplate code to create your data object
	const dataObject = Object.fromEntries(data.entries());
	//print dataObject on console
	console.log("dataObject", dataObject);
    let userMood = dataObject.mood;
    let reason = dataObject.reason;
    console.log(userMood,reason);
    if(userMood==="happy"){
        HeadingTwo.textContent="Yay! Keep shining!" + String.fromCodePoint(0x1F60A);
        pElement.textContent = "You said: " + reason;
        imgAlt="happy face emoji";
        imgSrc="images/happy.png"
        emoji.alt =imgAlt;
        emoji.src=imgSrc;

    }else if(userMood==="sad"){
        HeadingTwo.textContent= "It's okay to feel sad. Sending hugs" + String.fromCodePoint(0x1f499);
        pElement.textContent = "You said: " + reason;
        imgAlt="sad face emoji";
        imgSrc="images/sad.png";
        emoji.alt =imgAlt;
        emoji.src=imgSrc;

    }else if(userMood==="calm"){
        HeadingTwo.textContent= "Breathe into the calmness" + String.fromCodePoint(0x1F607);
        pElement.textContent = "You said: " + reason;
        imgAlt="calm face emoji";
        imgSrc = "images/calm.png";
        emoji.alt =imgAlt;
        emoji.src=imgSrc;
      
    }
	form.reset(); //reset form
}