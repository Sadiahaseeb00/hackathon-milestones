// get refrence to the form and output area
const form = document.getElementById('myform') as HTMLFormElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //generate the resume dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
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
    `;


    //Display Generated Resume
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeHtml;
    }else{
        console.error('The display resume element is missing');
    }
});