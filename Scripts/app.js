/*
 Author: Christopher Ritchil 
 Student # : 300702644
 Date Modified: August 5, 2016
 Description: COMP125-Assignment#3-JSON DATA
 */

//Java script goes here
//IIFE 

(function () {
    "use strict";
    console.log("app is running :)");
    // define the paragraph object for handling AJAX call (Assignment 3)
    var xhrParagraphContents;
    //define an array of HTML elements
    var paragraphElements = [];
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");



    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    if (sendButton) {
        sendButton.addEventListener("click", function (event) {
            console.log("Send button Clicked!!");
        })
    }

    // create a reference to the form 
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var yourMessage = document.getElementById("yourMessage");


    //create a reference for the form
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("FORM HAS BEEN SUBMITTED");
            showFormInput();
            contactForm.reset();
        })
    }
    // This showFormInput() function ouputs the form information to the console when client press the send button
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("    First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("     Last Name: " + lastName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("         Email: " + email.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Contact Number: " + contactNumber.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("  Your Message: " + yourMessage.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function readParagraphData() {
        if ((xhrParagraphContents.readyState === 4) && (xhrParagraphContents.status === 200)) {

            var paragraphContents = JSON.parse(xhrParagraphContents.responseText);
            var contents = paragraphContents.paragraphs;

            contents.forEach(function (pContents) {
                var index = pContents["id"];
                var parContent = pContents["content"];
                console.log(index + " ==> " + parContent);
                if (documentElements[index]) {
                    documentElements[index].innerHTML = parContent;
                }
            }, this);

        }
    }
    /*   
     * This function will request paragraph details from json file using AJAX call and then process
     * the resoponse to use paragraph details.
     * 
     * @function init
     * @returns {void}
     */
    function init() {

        xhrParagraphContents = new XMLHttpRequest(); 
        xhrParagraphContents.open("GET", "Scripts/paragraphs.json", true); 
        xhrParagraphContents.send(null);
        xhrParagraphContents.addEventListener("readystatechange", readParagraphData);

    }

    // add windows load event handler
    window.addEventListener("load", init);


})();