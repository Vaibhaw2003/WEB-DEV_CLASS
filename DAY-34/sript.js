
    document.getElementById("myForm").addEventListener("submit", function(event){

        event.preventDefault(); // Prevent page reload

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let number = document.getElementById("number").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("Number:", number);

        console.log("Form Submitted Successfully 🚀");
        alert("DOne")
    });