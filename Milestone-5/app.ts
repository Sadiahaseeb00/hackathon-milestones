// Get references to the form and output area
const form = document.getElementById("myform") as HTMLFormElement;
const resumeOutputElement = document.getElementById("resumeOutput") as HTMLDivElement;
const shareablelinkcontainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPDFButton = document.getElementById("download-pdf") as HTMLButtonElement;
const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
const profilePicturePreview = document.getElementById("profilePicturePreview") as HTMLImageElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Get references to form elements using their IDs
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;

    // Handle profile picture
    const profilePictureFile = profilePictureInput.files?.[0];
    let profilePictureURL = '';
    if (profilePictureFile) {
        profilePictureURL = URL.createObjectURL(profilePictureFile);
        profilePicturePreview.src = profilePictureURL;
        profilePicturePreview.style.display = 'block'; // Show the profile picture
    }

    // Save form data in LocalStorage with the username as the key
    const resumeData = {
        name,
        email,
        contact,
        education,
        experience,
        skills,
        description,
        profilePictureURL, // Save the URL for the picture
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate the resume dynamically
    const resumeHtml = `
        <h2><b>Shareable Resume</b></h2>
        <img src="${profilePictureURL}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;" />
        <h3><u>Personal Information</u></h3>
        <p><b>Name:</b> <span contenteditable="true"> ${name} </span> </p>
        <p><b>Email:</b> <span contenteditable="true"> ${email} </span> </p>
        <p><b>Contact:</b> <span contenteditable="true"> ${contact} </span> </p>
        
        <h3><u>Education</u></h3>
        <p contenteditable="true">${education}</p>
        
        <h3><u>Experience</u></h3>
        <p contenteditable="true">${experience}</p>
        
        <h3><u>Skills</u></h3>
        <p contenteditable="true">${skills}</p>

        <h3><u>Description</u></h3>
        <p contenteditable="true">${description}</p>
    `;

    // Display Generated Resume
    resumeOutputElement.innerHTML = resumeHtml;

    // Generate a shareable URL with the username
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareablelinkcontainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPDFButton.addEventListener("click", () => {
    window.print();
});

// Prefill the form based on the username URL
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            // Autofill form if data is found in the local storage
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.contact;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
            (document.getElementById('description') as HTMLTextAreaElement).value = resumeData.description;

            // Set the profile picture if available
            if (resumeData.profilePictureURL) {
                profilePicturePreview.src = resumeData.profilePictureURL;
                profilePicturePreview.style.display = 'block';
            }
        }
    }
});
