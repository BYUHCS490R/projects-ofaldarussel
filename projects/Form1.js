// Ensure JS is connected
console.log("Form1.js is connected!");

document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = parseInt(document.getElementById("age").value);
    const birthdate = document.getElementById("birthdate").value;
    const country = document.getElementById("country").value;
    const news = document.querySelector('input[name="news"]:checked')?.value;
    const terms = document.getElementById("terms").checked;
    const comments = document.getElementById("comments").value.trim();

    // Validate required fields
    if(!fullname || !email || !password){
        alert("Full Name, Email, and Password are required.");
        return;
    }

    // Validate password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if(!passwordPattern.test(password)){
        alert("Password must be at least 6 characters, include 1 uppercase letter, 1 number, and 1 special character.");
        return;
    }

    // Validate age
    if(isNaN(age) || age < 18 || age > 100){
        alert("Age must be a number between 18 and 100.");
        return;
    }

    // Print form data to console
    const formData = { fullname, email, password, age, birthdate, country, news, terms, comments };
    console.log("Form Data Submitted:", formData);

    // AJAX GET request to submit.json
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);

                // Display message on page
                document.getElementById("message").innerText = response.message;

                // Reset and disable form
                document.getElementById("myform").reset();
                Array.from(document.getElementById("myform").elements).forEach(el => el.disabled = true);
            } else {
                alert("Error submitting form.");
            }
        }
    };
    xhr.send(JSON.stringify(formData));
});