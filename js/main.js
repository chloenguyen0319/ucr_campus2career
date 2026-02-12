// Speaker Bio Data
const speakerBios = {
    moderator: {
        name: "Professor Subramanian Balachander",
        role: "Professor and the Albert O. Steffey Chair in Marketing",
        company: "A. Gary Anderson Graduate School of Management",
        image: "assets/moderator.jpeg",
        bio: `<p>Subramanian “Bala” Balachander is Professor and the Albert O. Steffey Chair in Marketing at
the UCR School of Business. He also serves as the Academic Director of the Master of Science
in Business Analytics (MSBA) program offered by the School of Business in conjunction with
the Department of Statistics, and is the Area Coordinator for the Marketing area. His research
studies competitive marketing strategy, pricing, bundling, sales promotions and market signaling
employing methods of game theory and structural econometric models, and he has chaired the
dissertations of close to a dozen doctoral students. His teaching interests are in marketing
strategy, pricing, digital marketing and marketing models. Professor Balachander is a Senior
Editor of Production and Operations Management and served previously on the Editorial Board
of Marketing Science. He was recently recognized as a Global Retail Brand Management
Research Fellow and was named a Purdue University Faculty Scholar in 2009. Prior to joining
UCR, he was a Professor of Management at Purdue University’s Krannert School of
Management. Professor Balachander has a Ph. D. in Industrial Administration from Carnegie
Mellon University, an MBA from IIM, Calcutta and a B. Tech in Chemical Engineering from
IIT, Madras.</p>`
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

