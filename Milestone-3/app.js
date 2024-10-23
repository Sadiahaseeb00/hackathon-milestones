// get refrence to the form and output area
var form = document.getElementById('myform');
var resumeOutputElement = document.getElementById('resumeOutput');
var profilePictureInput = document.getElementById("profilePicture");
var profilePicturePreview = document.getElementById("profilePicturePreview");
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = '';
    if (profilePictureFile) {
        profilePictureURL = URL.createObjectURL(profilePictureFile);
        profilePicturePreview.src = profilePictureURL;
        profilePicturePreview.style.display = 'block'; // Show the profile picture
    }
    //generate the resume dynamically
    var resumeHtml = "\n    <h2><b>dynamic Resume</b></h2>\n    <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"max-width: 150px; max-height: 150px;\" />\n    <h3><u>Personal Information</u></h3>\n    <p><b>Name:</b> ").concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Contact:</b> ").concat(contact, "</p>\n    \n    <h3><u>Education</u></h3>\n    <p>").concat(education, "</p>\n    \n    <h3><u>Experience</u></h3>\n    <p>").concat(experience, "</p>\n    \n    <h3><u>Skills</u></h3>\n    <p>").concat(skills, "</p>");
    //Display Generated Resume
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The display resume element is missing');
    }
});
