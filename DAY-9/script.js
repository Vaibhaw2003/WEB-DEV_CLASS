const Form = document.getElementById("form");

Form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {       

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const number = document.getElementById("num").value.trim();
const password = document.getElementById("password").value.trim(); 

console.log("Name: " + name);
console.log("Email: " + email);
console.log("Number: " + number);
console.log("Password: " + password);
alert("Form submitted successfully!");
};

//email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)) {
    message.style.color = "red";
    massage.textcontent = "please enter a valid email address";
    alert("please enter a valid email address");
    return false;
}


//contact number validation
if(number.length !== 10 || isNaN(number)) {
    message.style.color = "red";
    massage.textcontent = "contact number must be 10 digits";
    alert("contact number must be 10 digits");
    return false;
}

//password validation
if(password.length < 6) {
    message.style.color = "red";
    massage.textcontent = "password must be at least 6 characters long";
    alert("password must be at least 6 characters long");
    return false;
}

//if all validations pass
{ 
message.style.color = "green";
massage.textcontent = "form submitted successfully!";
alert("form submitted successfully!");
return true;
} 
