// Speaker Bio Data
const speakerBios = {
    moderator: {
        name: "Professor Subramanian Balachander",
        role: "Professor and the Albert O. Steffey Chair in Marketing",
        company: "A. Gary Anderson Graduate School of Management",
        image: "assets/moderator.jpeg",
        bio: `<p>Subramanian “Bala” Balachander is Professor and the Albert O. Steffey Chair in Marketing at the UCR School of Business. He also serves as the Academic Director of the Master of Science in Business Analytics (MSBA) program offered by the School of Business in conjunction with the Department of Statistics, and is the Area Coordinator for the Marketing area. His research studies competitive marketing strategy, pricing, bundling, sales promotions and market signaling employing methods of game theory and structural econometric models, and he has chaired the dissertations of close to a dozen doctoral students. His teaching interests are in marketing strategy, pricing, digital marketing and marketing models. Professor Balachander is a Senior Editor of Production and Operations Management and served previously on the Editorial Board of Marketing Science. He was recently recognized as a Global Retail Brand Management Research Fellow and was named a Purdue University Faculty Scholar in 2009. Prior to joining UCR, he was a Professor of Management at Purdue University’s Krannert School of Management. Professor Balachander has a Ph. D. in Industrial Administration from Carnegie Mellon University, an MBA from IIM, Calcutta and a B. Tech in Chemical Engineering from IIT, Madras.</p>`
    },
    colin: {
        name: "Dr. Colin Kessinger",
        role: "Partner & Advisor",
        company: "Ethos Capital | Kiso Technology | Xtillion | Lumi AI",
        image: "assets/colin_kessinger.jpg",
        bio: `<p>Dr. Colin Kessinger is a two-time founder and analytics leader specializing in end-to-end data and supply chain strategy. He built and led a boutique analytics consulting firm with over 100 consultants, serving leading global brands across technology, retail, semiconductor, and automotive industries. The firm was later acquired by Accenture, where he served as a Managing Director. He previously founded Vivecon Inc., a supply chain risk-management software company. Colin has also taught at Michigan Ross (tenure-track faculty), Berkeley Haas, Stanford GSB, and Stanford Engineering, and holds a Ph.D. in Industrial Engineering and Operations Research. Today, he serves on advisory boards of multiple AI-focused startups, including Lumi.AI, and advises Accenture on strategic accounts—demonstrating how deep analytical expertise can evolve into entrepreneurship, leadership, and industry impact.</p>`
    },
    bonnie: {
        name: "Dr. Bonnie Li",
        role: "Staff Behavioral Scientist",
        company: "Toyota Research Institute",
        image: "assets/bonnie_li.jpeg",
        bio: `<p>Dr. Bonnie Li is a Staff Behavioral Scientist at the Toyota Research Institute (TRI), where she works on human-centered AI research that connects behavioral science with intelligent systems and next-generation mobility technologies. A UC Riverside alumna, Bonnie shows how academic research, interdisciplinary thinking, and curiosity can translate into meaningful careers at the forefront of AI and technology innovation.</p>`
    },
    randolph: {
        name: "Mr. Randolph Kim",
        role: "Global Family Office Services Director",
        company: "Wedbush AlphaOne",
        image: "assets/randolph_kim.jpeg",
        bio: `<p>Mr. Randolph Kim joined Wedbush in March 2025 as Director of Alpha One, Global Family Office Services, bringing over 13 years of experience spanning public equities, private equity, venture capital, and real estate. In this role, he is responsible for the growth and expansion of Wedbush Alpha One, fostering strategic family office relationships, and identifying unique investment opportunities.   Before joining Wedbush, Randolph spent a decade on the investment teams of two prominent single-family offices, where he developed a trusted network of family offices, next-generation leaders, and multi-family offices worldwide. He holds a Master of Finance and a B.A. in Economics, and is recognized for combining institutional discipline with entrepreneurial agility and a nuanced understanding of the family office landscape.</p>`
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

