const container = document.getElementById('profile-container');
const template = document.getElementById('profile-card-template');

function createProfile(name, role, team) {
    
    const clone = template.content.cloneNode(true);

    
    clone.querySelector('[name="username"]').textContent = name;
    clone.querySelector('[name="role"]').textContent = role;
    clone.querySelector('[name="team"]').textContent = team;

    
    container.appendChild(clone);
}


createProfile("Vaibhavi", "Full Stack Developer", "Runtime Terror");
createProfile("Scaler Peer", "Software Engineer", "Tech Titans");
