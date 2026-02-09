// Speaker Bio Data
const speakerBios = {
    moderator: {
        name: "Dr. Sarah Martinez",
        role: "Associate Dean",
        company: "A. Gary Anderson Graduate School of Management",
        image: "assets/moderator.jpeg",
        bio: `<p>TBU.</p>`
    },
    colin: {
        name: "Colin Kessinger",
        role: "Supply Chain Advisor",
        company: "Xtillion",
        image: "assets/colin_kessinger.jpg",
        bio: `<p>TBU.</p>`
    },
    bonnie: {
        name: "Bonnie Li",
        role: "Staff Behavioral Scientist",
        company: "Toyota Research Institute",
        image: "assets/bonnie_li.jpeg",
        bio: `<p>TBU.</p>`
    },
    randolph: {
        name: "Randolph Kim",
        role: "Office Services Director",
        company: "Wedbush AlphaOne",
        image: "assets/randolph_kim.jpeg",
        bio: `<p>TBU.</p>`
    }
};

// Open Bio Modal
function openBio(speakerId) {
    const speaker = speakerBios[speakerId];
    if (!speaker) return;

    // Populate modal content
    document.getElementById('modalName').textContent = speaker.name;
    document.getElementById('modalRole').textContent = speaker.role;
    document.getElementById('modalCompany').textContent = speaker.company;
    document.getElementById('modalImg').src = speaker.image;
    document.getElementById('modalBio').innerHTML = speaker.bio;

    // Show modal
    document.getElementById('bioModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Bio Modal
function closeBio() {
    document.getElementById('bioModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('bioModal');
    if (event.target === modal) {
        closeBio();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBio();
    }
});

