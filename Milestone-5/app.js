// Get references to the form and output area
var form = document.getElementById("myform");
var resumeOutputElement = document.getElementById("resumeOutput");
var shareablelinkcontainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPDFButton = document.getElementById("download-pdf");
var profilePictureInput = document.getElementById("profilePicture");
var profilePicturePreview = document.getElementById("profilePicturePreview");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var description = document.getElementById("description").value;
    // Handle profile picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = '';
    if (profilePictureFile) {
        profilePictureURL = URL.createObjectURL(profilePictureFile);
        profilePicturePreview.src = profilePictureURL;
        profilePicturePreview.style.display = 'block'; // Show the profile picture
    }
    // Save form data in LocalStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills,
        description: description,
        profilePictureURL: profilePictureURL,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume dynamically
    var resumeHtml = "\n        <h2><b>Shareable Resume</b></h2>\n        <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"max-width: 150px; max-height: 150px;\" />\n        <h3><u>Personal Information</u></h3>\n        <p><b>Name:</b> <span contenteditable=\"true\"> ").concat(name, " </span> </p>\n        <p><b>Email:</b> <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n        <p><b>Contact:</b> <span contenteditable=\"true\"> ").concat(contact, " </span> </p>\n        \n        <h3><u>Education</u></h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3><u>Experience</u></h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        \n        <h3><u>Skills</u></h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n\n        <h3><u>Description</u></h3>\n        <p contenteditable=\"true\">").concat(description, "</p>\n    ");
    // Display Generated Resume
    resumeOutputElement.innerHTML = resumeHtml;
    // Generate a shareable URL with the username
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareablelinkcontainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPDFButton.addEventListener("click", function () {
    window.print();
});
// Prefill the form based on the username URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            // Autofill form if data is found in the local storage
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.contact;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('description').value = resumeData.description;
            // Set the profile picture if available
            if (resumeData.profilePictureURL) {
                profilePicturePreview.src = resumeData.profilePictureURL;
                profilePicturePreview.style.display = 'block';
            }
        }
    }
});
