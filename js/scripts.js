//Declare variables for later use
const output=document.querySelector(".output");
//create a variable named 'HeadingTwo' and save the h2 element in it
let HeadingTwo = document.querySelector("h2");
//create a variable named 'emoji' and save the img element of class"mood" in it
let emoji = document.querySelector(".mood");
//create a variable named 'pElement' and save the p element of class"message" in it
let pElement=document.querySelector(".message");
//declare a variable named 'imgAlt' to store the alt attribute later for the image
let imgAlt;
//declare a variable named 'imgSrc' to store the src attribute later (with the image path)
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
    //extract mood from dataObject using dot notation from dataObject and save it in a variable named 'userMood'
    let userMood = dataObject.mood;
    //extract reason from dataObject using dot notation from dataObject and save it in a variable named 'reason'
    let reason = dataObject.reason;
    //print userMood and reason on console
    console.log(userMood,reason);
    //check if userMood equals "happy"
    if(userMood==="happy"){
        //Set text content of 'headingTwo' with a message "Yay! Keep shining!" and happy emoji
        HeadingTwo.textContent="Yay! Keep shining!" + String.fromCodePoint(0x1F60A);
        //Set text content of 'pElement' with the reason user entered
        pElement.textContent = "You said: " + reason;
        //assign 'imgAlt' variable with a value "happy face emoji";
        imgAlt="happy face emoji";
        //assign 'imgSrc' variable with a value of the image path in images folder for happy.png;
        imgSrc="images/happy.png"
        //set the alt attribute for image by assigning it the value of the variable imgAlt
        emoji.alt =imgAlt;
        //set the src attribute for image by assigning it the value of the variable imgSrc
        emoji.src=imgSrc;
    }
    //otherwise check if userMood equals "sad"
    else if(userMood==="sad"){
        //Set text content of 'headingTwo' with a message "It's okay to feel sad. Sending hugs" and sad emoji
        HeadingTwo.textContent= "It's okay to feel sad. Sending hugs" + String.fromCodePoint(0x1f499);
         //Set text content of 'pElement' with the reason user entered
        pElement.textContent = "You said: " + reason;
        //assign 'imgAlt' variable with a value "sad face emoji";
        imgAlt="sad face emoji";
        //assign 'imgSrc' variable with a value of the image path in images folder for sad.png;
        imgSrc="images/sad.png";
        //set the alt attribute for image by assigning it the value of the variable imgAlt
        emoji.alt =imgAlt;
        //set the src attribute for image by assigning it the value of the variable imgSrc
        emoji.src=imgSrc;
    }
    //otherwise check if userMood equals "calm"
    else if(userMood==="calm"){
        //Set text content of 'headingTwo' with a message "Breathe into the calmness" and calm emoji
        HeadingTwo.textContent= "Breathe into the calmness" + String.fromCodePoint(0x1F607);
         //Set text content of 'pElement' with the reason user entered
        pElement.textContent = "You said: " + reason;
        //assign 'imgAlt' variable with a value "calm face emoji";
        imgAlt="calm face emoji";
        //assign 'imgSrc' variable with a value of the image path in images folder for calm.png;
        imgSrc = "images/calm.png";
        //set the alt attribute for image by assigning it the value of the variable imgAlt
        emoji.alt =imgAlt;
        //set the src attribute for image by assigning it the value of the variable imgSrc
        emoji.src=imgSrc;
      
    }
	form.reset(); //reset form
}