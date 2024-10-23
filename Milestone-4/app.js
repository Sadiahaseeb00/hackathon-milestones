// get refrence to the form and output area
var form = document.getElementById('myform');
var resumeOutputElement = document.getElementById('resumeOutput');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume dynamically
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><u>Personal Information</u></h3>\n    <p><b>Name:</b> <span contenteditable=\"true\"> ".concat(name, " </span> </p>\n    <p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n    <p><b>Contact:</b> <span contenteditable=\"true\"> ").concat(contact, " </span> </p>\n    \n    <h3><u>Education</u></h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3><u>Experience</u></h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n    <h3><u>Skills</u></h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //Display Generated Resume
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The display resume element is missing');
    }
});
