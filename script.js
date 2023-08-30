var reg = document.querySelector("#register");
var clear = document.querySelector("#clear");
var nam = document.getElementById("nam");
var age = document.getElementById("agetxt");
var email = document.getElementById("emailtxt");
var dob = document.getElementById("dobtxt");
var maindiv = document.querySelector("#mainwaladiv");
var form = document.getElementById("formi");
var gender;
var skills;


reg.addEventListener("click", function(){
 

    
    if ((nam.innerText || age.value || email.value) == "") {
        alert("Please Fill up all the details");
    }

    else {
        
        
        form.addEventListener("submit",function(event){
            event.preventDefault();
        });
        
        if (document.getElementById("maletxt").checked) {
            gender = document.getElementById("maletxt").value;
        }


        else if (document.getElementById("femaletxt").checked) {
            gender = document.getElementById("femaletxt").value;
        }


        else if (document.getElementById("othertxt").checked) {
            gender = document.getElementById("othertxt").value;
        }

        if (document.getElementById("sk1").checked) {
            skills = document.getElementById("sk1").value;
        }

        if (document.getElementById("sk2").checked) {
            skills = document.getElementById("sk2").value;
        }

        if (document.getElementById("sk3").checked) {
            skills = document.getElementById("sk3").value;
        }



        

        var largediv = document.createElement("div");
        var mediumdiv = document.createElement("div"); 
        var smalldiv1 = document.createElement("div");
        //var smalldiv2 = document.createElement("div");
        var nameElement = document.createElement("p");
        var emailElement = document.createElement("p");
        var dobElement = document.createElement("p");
        var genderElement = document.createElement("p");
        var ageElement = document.createElement("p");
        var skillsElement = document.createElement("p");

        nameElement.innerText = "Name: " + nam.value;
        emailElement.innerText = "Email:     " + email.value;
        dobElement.innerText = "DOB:     " + dob.value.split("-").reverse().join("-");
        genderElement.innerText = "Gender:     " + gender;
        ageElement.innerText = "Age:     " + age.value;
        skillsElement.innerText = "Skills:     " + skills;

        
        //smalldiv1.className = "col-lg-6 col-md-6 col-sm-6";
        smalldiv1.style.height = "25%";
        smalldiv1.appendChild(nameElement);
        smalldiv1.appendChild(ageElement);
        smalldiv1.appendChild(genderElement);
        smalldiv1.appendChild(emailElement);
        smalldiv1.appendChild(dobElement);
        smalldiv1.appendChild(skillsElement);

        
        mediumdiv.className = "divrow";
        mediumdiv.appendChild(smalldiv1);

        largediv.className = "box";
        largediv.appendChild(mediumdiv);

        maindiv.appendChild(largediv);



    }


}
);


clear.addEventListener("click",function(){

    form.reset();


});
