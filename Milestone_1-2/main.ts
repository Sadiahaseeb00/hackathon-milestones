const toggleButton = document.getElementById('toggle-skill-btn') as HTMLButtonElement
const SkillsSec = document.getElementById('skill-sec') as HTMLElement
toggleButton.addEventListener('click', ()=> {
    if(SkillsSec.style.display === 'none') {
        SkillsSec.style.display = 'block'
    } else{
        SkillsSec.style.display = 'none'
    }
});