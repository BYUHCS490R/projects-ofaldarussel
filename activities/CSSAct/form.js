document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault();

    const fullname = document.getElementById("frame").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const state = document.getElementById("state").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!fullname || !email){
        alert("You need a name and email.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        state: state,
        gender: gender
    };

     console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open ("GET","submit.json",true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                alert("Form submitted successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                document.getElementById('myform').innerHTML ='';
                document.getElementById('message').innerText = response.message;
            } else if (xhr.readyState === 4){
                alert("Error submitting Form");
            }
        };
        xhr.send(JSON.stringify(formData))  
 });