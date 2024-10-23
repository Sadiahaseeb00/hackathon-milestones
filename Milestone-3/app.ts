// get refrence to the form and output area
const form = document.getElementById('myform') as HTMLFormElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;
const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
const profilePicturePreview = document.getElementById("profilePicturePreview") as HTMLImageElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Handle profile picture
    const profilePictureFile = profilePictureInput.files?.[0];
    let profilePictureURL = '';
    if (profilePictureFile) {
        profilePictureURL = URL.createObjectURL(profilePictureFile);
        profilePicturePreview.src = profilePictureURL;
        profilePicturePreview.style.display = 'block'; // Show the profile picture
    }


    //generate the resume dynamically
    const resumeHtml = `
    <h2><b>dynamic Resume</b></h2>
    <img src="${profilePictureURL}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;" />
    <h3><u>Personal Information</u></h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Contact:</b> ${contact}</p>
    
    <h3><u>Education</u></h3>
    <p>${education}</p>
    
    <h3><u>Experience</u></h3>
    <p>${experience}</p>
    
    <h3><u>Skills</u></h3>
    <p>${skills}</p>`;


    //Display Generated Resume
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeHtml;
    }else{
        console.error('The display resume element is missing');
    }
});