var a = document.querySelector("#heding");
a.style.color = "blue";
a.style.textAlign = "center";
a.style.fontFamily = "Arial, sans-serif";
a.style.backgroundColor = "lightgray";
a.style.padding = "20px";

var b = document.querySelector("#para");
b.style.color = "green";
b.style.fontSize = "18px";
b.style.fontFamily = "Georgia, serif";
b.style.marginTop = "10px"; 
b.style.lineHeight = "1.6";
b.style.textAlign = "center";
b.style.fontSize = "30px";
b.style.fontWeight = "bold";
b.style.textcase = "uppercase";

var button = document.querySelector("#btn");
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "orange";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.color = "white";
button.style.fontWeight = "bold";
button.style.marginTop = "15px";
button.style.cursor = "pointer";
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "darkorange";
});
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "orange";
});

button.addEventListener("click", function() {
    alert("successfully submitted");
});