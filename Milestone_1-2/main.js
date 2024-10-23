var toggleButton = document.getElementById('toggle-skill-btn');
var SkillsSec = document.getElementById('skill-sec');
toggleButton.addEventListener('click', function () {
    if (SkillsSec.style.display === 'none') {
        SkillsSec.style.display = 'block';
    }
    else {
        SkillsSec.style.display = 'none';
    }
});