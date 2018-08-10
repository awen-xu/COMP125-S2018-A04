/*
File name: contact.js
Author's name: Awen Xu
Student number: 300992536
Website: Mini Portfolio
Date Created: Aug 08, 2018
Latest Revision: Aug 10, 2018
File description: This is the JavaScript file for the contact page form validation of the mini portfolio. 
*/
let content;
((content) => {
    // Local variables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Subject = document.getElementById("Subject");
    let Message = document.getElementById("Message");


    // Clears the validation message for the form elements
    function ClearValidationMessage() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Subject.setCustomValidity("");
        Message.setCustomValidity("");
    }


    // Event handlers for form elements
    // Sets the validation message depending on the element
    function setEventHandlersForFormElements() {
        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is entering data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });
                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FirstName":
                            element.setCustomValidity("Enter a first name with at least 2 letters");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter a last name with at least 2 letters");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("Enter a phone number with the pattern (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Enter an appropriate email address with the pattern name@example.com.");
                            break;
                        case "Subject":
                            element.setCustomValidity("You must enter a subject");
                            break;
                        case "Message":
                            element.setCustomValidity("You must enter a message");
                            break;
                        default:
                            element.setCustomValidity("This field is required.");
                            break;
                    }
                });
            }
        }
    }


    // calls the setEventHandlersForFormElements function
    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    // main function that runs when on contact.html
    function ContactContent() {

        ClearValidationMessage();

        // configure the submit button
        let SendButton = document.getElementById("submitButton");
        SendButton.addEventListener("click", (event) => {
            if (!document.forms[0].checkValidity()) {
                ValidateForm();
            }
            else{
                alert("Form completed!");
            }
        });
    }

    // public functions exposed to the content namespace
    content.ContactContent = ContactContent;
})(content || (content = {}));