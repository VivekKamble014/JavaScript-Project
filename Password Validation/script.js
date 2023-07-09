const passwordInput= document.querySelector(".pass-field input");
const eyeIcon= document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements =[
    {regex: /.{8,}/, index: 0}, // at last 8 charactors
    {regex: /[0-9]/, index: 1}, // at last 1 number
    {regex: /[a-z]/, index: 2}, // at last 1 lowre letter
    {regex: /[A-Z]/, index: 3}, //at last on uppercase letter
    {regex: /[^A-Za-z0-9]/, index: 4}, // one special charactor
    

]


passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click",()=>{
    //change password input type between password to text
    passwordInput.type= passwordInput.type === "password" ? "text" : "password";
    // update eye icon in to clash eyeicon
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" :"-slash"}`;

}
);