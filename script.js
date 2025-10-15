// ==========================================
// PARTICIPANT DATA
// ==========================================
// This array contains all participant information
// TO ADD YOUR LINKS: Find your name in the array below and add your GitHub and LinkedIn URLs
// Format: { name: "Your Name", roll: "Roll No", year: "Year", branch: "Branch", github: "YOUR_GITHUB_URL", linkedin: "YOUR_LINKEDIN_URL" }

const participants = [
    { name: "Tanish Nagari", roll: "23R21A04G7", year: "Third", branch: "ECE", github: "", linkedin: "" },
    { name: "PULLURI SHIVAMANI", roll: "24R21A6754", year: "Second", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Samudrawad Varun", roll: "24R21A6758", year: "Second", branch: "CSD-A", github: "", linkedin: "" },
    { name: "CHAVALI PINAKI SRI SIVARAM", roll: "24R21A6709", year: "Second", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Katukam Sunayana", roll: "24R21A05HH", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "V.Sri Chandana", roll: "24R21A05JL", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "T.Nanditha", roll: "24R21A05JE", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Rambai Pruthvi", roll: "23q91a6745", year: "Third", branch: "CSE-DS", github: "", linkedin: "" },
    { name: "Katepally Tribhuvan", roll: "24R21A05HG", year: "Second", branch: "CSE-F", github: "", linkedin: "" },
    { name: "Athava Sri Pavan", roll: "24R21A05GW", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Arjula Yeshaswini", roll: "23R21A0580", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "D. Akshay Reddy", roll: "24R21A6614", year: "Second", branch: "CSM-A", github: "", linkedin: "" },
    { name: "Maripalli Mallesh", roll: "24R21A6631", year: "Second", branch: "CSM-A", github: "", linkedin: "" },
    { name: "K.K.Moukthika", roll: "24R21A05HM", year: "Second", branch: "CSE-F", github: "", linkedin: "" },
    { name: "Kalisetti Rishikesh", roll: "24R21A0593", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "BUYANI AKSHARA", roll: "24R21A05H1", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "S Manishankar", roll: "24r21a6760", year: "Second", branch: "DATA SCIENCE", github: "", linkedin: "" },
    { name: "MALLAM TEJA", roll: "24r25a6705", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Kalva Venkat", roll: "24r21a0594", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "Maddineni Sri Sai Deepak", roll: "23R21A6728", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Patharlapalli Nitya Sri", roll: "24R21A05AA", year: "Second", branch: "CSE-B", github: "", linkedin: "" },
    { name: "Vishwanath Yashaswi", roll: "24R21A05JJ", year: "Second", branch: "CSE-F", github: "", linkedin: "" },
    { name: "V Ram Charan", roll: "24R21A6765", year: "Second", branch: "CSD", github: "", linkedin: "" },
    { name: "ch.vikasReddy", roll: "23q91a6761", year: "Third", branch: "cse-ds", github: "", linkedin: "" },
    { name: "Bobbili Chandana sri", roll: "23R21A0584", year: "Third", branch: "CSE-B", github: "", linkedin: "" },
    { name: "K.Joshi Rakesh", roll: "24r21a6622", year: "Second", branch: "CSM", github: "", linkedin: "" },
    { name: "K. Sharath Chandra", roll: "24R21A05KG", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Golla Dheeraj Carey", roll: "23R21A6682", year: "Third", branch: "CSM", github: "", linkedin: "" },
    { name: "Karthik Raparthi", roll: "24R21A6756", year: "Second", branch: "CSD", github: "", linkedin: "" },
    { name: "K.PRAVALLIKA", roll: "24r21a05hf", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "Srivyshnavi Yadoji", roll: "24R21A67K2", year: "Second", branch: "CSD-C", github: "", linkedin: "" },
    { name: "Moku Preethi Reddy", roll: "24R21A67H1", year: "Second", branch: "CSD-C", github: "", linkedin: "" },
    { name: "Gunde Jahnavi", roll: "23r21a12e3", year: "Third", branch: "IT", github: "", linkedin: "" },
    { name: "Naikoti Varshini", roll: "24R21A05C8", year: "Second", branch: "CSE-C", github: "", linkedin: "" },
    { name: "M.Rushitha", roll: "24r21a05bw", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Mandala Vishnu Vardhan Goud", roll: "23r21a6799", year: "Third", branch: "CSD-B", github: "", linkedin: "" },
    { name: "N Saimanikanta Reddy", roll: "23q91a6736", year: "Third", branch: "CSD", github: "", linkedin: "" },
    { name: "N.Himasri", roll: "23R21A6741", year: "Third", branch: "CSD", github: "", linkedin: "" },
    { name: "SARIKA PABBA", roll: "23R21A67B0", year: "Third", branch: "CSD-B", github: "", linkedin: "" },
    { name: "K.Sathvik", roll: "24r21a05hr", year: "Second", branch: "Cse -f", github: "", linkedin: "" },
    { name: "KARPE VAISHNAVI", roll: "23R21A6792", year: "Third", branch: "CSD-B", github: "", linkedin: "" },
    { name: "Sharon Lilly", roll: "24R21A05KK", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Shikha Gundapaneni", roll: "23r21a6719", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "GADDAM SANJANA", roll: "23R21A6780", year: "Third", branch: "CSD-B", github: "", linkedin: "" },
    { name: "Jayadeep Tadakamalla", roll: "23R21A6757", year: "Third", branch: "CSD", github: "", linkedin: "" },
    { name: "Vivekanand", roll: "22R21A04N6", year: "Fourth", branch: "Ece", github: "https://github.com/vivek30117", linkedin: "https://www.linkedin.com/feed/" },
    { name: "Narsingoju Tharun", roll: "23R21A12A1", year: "Third", branch: "IT", github: "", linkedin: "" },
    { name: "Biyyani Hari venkata Gopal", roll: "23R21A0583", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "Ankitha Kole", roll: "24R21A05KH", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "A.Likhitha", roll: "23R21A6702", year: "Third", branch: "Csd", github: "", linkedin: "" },
    { name: "K.Sarayu", roll: "24R25A6703", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "YELLA SHIVAMRUTH REDDY", roll: "23R21A05Z1", year: "Third", branch: "Computer Science Engineering", github: "", linkedin: "" },
    { name: "Kanukuntla Srujan", roll: "23r21a6724", year: "Third", branch: "CSD", github: "", linkedin: "" },
    { name: "V.Medhashwi", roll: "24r21a05ct", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "KALAKUNTLA SAI KUMAR", roll: "23R21A6694", year: "Third", branch: "CSE-AIML", github: "", linkedin: "" },
    { name: "Kamble Navyasri", roll: "23r21a6722", year: "Third", branch: "Data Science", github: "", linkedin: "" },
    { name: "Kadam Samskruthi", roll: "24R21A05BN", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "KOMMINENI VENKATA NIKHIL", roll: "24R21A05BU", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "K Sai Madhu", roll: "24R21A6735", year: "Second", branch: "CSD", github: "", linkedin: "" },
    { name: "Mogili Avinash", roll: "25r21a05dy", year: "First", branch: "Cse-D", github: "", linkedin: "" },
    { name: "B.Rachana", roll: "25R21A05JW", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "KARAM SAI TEJASWAN", roll: "23R21A6695", year: "Third", branch: "CSM", github: "", linkedin: "" },
    { name: "Erri pushpa", roll: "24R21A05JV", year: "Second", branch: "CSE G", github: "", linkedin: "" },
    { name: "Lingam Aditya", roll: "24R21A0598", year: "Second", branch: "CSE-B", github: "", linkedin: "" },
    { name: "ASHWITH REDDY BONGARAM", roll: "24R21A0575", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "N. Lakshmi Narayana", roll: "24R21A05A3", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Chakka Praneeth", roll: "23r21a0585", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "M.Likhitha", roll: "23R21A6736", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "S.REKHA SAI SRI", roll: "23R21A6756", year: "Third", branch: "Data science (CSD-A)", github: "", linkedin: "" },
    { name: "MUTYALA SRI KRISHNA BALAJI", roll: "23R21A6740", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Y.LakshmiLasya Reddy", roll: "23R21A05C9", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "DOGUPARTHI MONIKA", roll: "23r21a6715", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "Tejasri Ganga. K", roll: "23R21A6760", year: "Third", branch: "CSD", github: "", linkedin: "" },
    { name: "Gariga Aadesh", roll: "24R21A05BG", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "MANGAJI DURGA PRASAD", roll: "23R21A12F9", year: "Third", branch: "IT", github: "", linkedin: "" },
    { name: "Sahithi Gaddoju", roll: "23R21A6716", year: "Third", branch: "CSD-A", github: "", linkedin: "" },
    { name: "CH Nidhi Reddy", roll: "24R21A6613", year: "Second", branch: "CSM", github: "", linkedin: "" },
    { name: "Rathnam Sai Nethra", roll: "23R21A66B7", year: "Third", branch: "CSM-B", github: "", linkedin: "" },
    { name: "Vidhyullatha vadla", roll: "23R21A05C6", year: "Third", branch: "Computer science and engineering", github: "", linkedin: "" },
    { name: "TIPIREDDY MANOGNYA", roll: "24R21A05JD", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Likhith Nagisetti", roll: "24R21A05HZ", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Sathish kurre", roll: "24R25A6610", year: "Third", branch: "CSM-B", github: "", linkedin: "" },
    { name: "Lingisetti V V N S Ramakrishna", roll: "24R25A6611", year: "Third", branch: "CSM", github: "", linkedin: "" },
    { name: "Prasanna Reddy", roll: "24R21A05HP", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "V. Sandhyana Seethal", roll: "24R21A05AT", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "B.Siri", roll: "24R21A05K1", year: "Second", branch: "CSE-G", github: "", linkedin: "" },
    { name: "Aarthi reddy", roll: "23r21a6667", year: "Third", branch: "Csm", github: "", linkedin: "" },
    { name: "Mahathi Somasetty", roll: "24R21A05J9", year: "Second", branch: "CSE-F", github: "", linkedin: "" },
    { name: "Yasam Spandana", roll: "24R21A05JM", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "Manne Anugna", roll: "23R21A05A7", year: "Third", branch: "CSE-B", github: "", linkedin: "" },
    { name: "Maduri Varshini", roll: "24R21A05HT", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "Katuri Ramya", roll: "24R21A05HJ", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Ch.koushik", roll: "23R21A0586", year: "Third", branch: "CSE-B", github: "", linkedin: "" },
    { name: "VIGNESH CHINTAMANI", roll: "24R21A05H2", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Vislavath Thirupathi naik", roll: "24r21a05jk", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "Kadali Sowmya", roll: "24R21A05KB", year: "Second", branch: "CSE-G", github: "", linkedin: "" },
    { name: "Sravanthi Samurothu", roll: "23R21A12H6", year: "Third", branch: "IT-C", github: "", linkedin: "" },
    { name: "Surampudi Shashank Sai", roll: "22R21A6654", year: "Fourth", branch: "CSM", github: "", linkedin: "" },
    { name: "Divyateja", roll: "24R21A05HD", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "CHEETIRALA LAKSHMI KRUTHIKA", roll: "24R21A05B6", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "Bejawada shalem raju", roll: "23r21a66d3", year: "Third", branch: "Csm-c", github: "", linkedin: "" },
    { name: "M.Harshith", roll: "24r21a05kq", year: "Second", branch: "Cse", github: "", linkedin: "" },
    { name: "NAINI VNITH REDDY", roll: "24R21A5KU", year: "Second", branch: "CSE-G", github: "", linkedin: "" },
    { name: "Anirudh Reddy", roll: "24R25A6614", year: "Third", branch: "CSM", github: "", linkedin: "" },
    { name: "Keertan Kuppili", roll: "23R21A1285", year: "Third", branch: "IT", github: "", linkedin: "" },
    { name: "Katuri Sai Pranathi", roll: "23R21A0597", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "T MAHESH BABU", roll: "24R25A6618", year: "Third", branch: "CSM-C", github: "", linkedin: "" },
    { name: "vanam varun", roll: "23R21A05C7", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "Mulla Ruhulalemeen", roll: "24R21A05C5", year: "Second", branch: "CSE", github: "", linkedin: "" },
    { name: "K.stiven", roll: "24r21a05hn", year: "Second", branch: "Cse-F", github: "", linkedin: "" },
    { name: "SOMADIGARI SAMHITH", roll: "25R21A0560", year: "First", branch: "CSE", github: "", linkedin: "" },
    { name: "Koganti Harshavardhan", roll: "23r21a0598", year: "Third", branch: "Cse", github: "", linkedin: "" },
    { name: "Patadoddy Rushika", roll: "24R21A66H7", year: "Second", branch: "Csm", github: "", linkedin: "" },
    { name: "Nitesh sirvi", roll: "23R21A05B4", year: "Third", branch: "CSE", github: "", linkedin: "" },
    { name: "Md. Ridhai kounine", roll: "24R21A66G9", year: "Second", branch: "CSM -C", github: "", linkedin: "" },
    { name: "GUGULOTH ADITHYA JADHAV", roll: "24R21A6619", year: "Second", branch: "CSM-A", github: "", linkedin: "" },
    { name: "Aleti Vaishnavi Reddy", roll: "24R21A05GU", year: "Second", branch: "CSE-F", github: "", linkedin: "" }
];

// ==========================================
// RENDER CARDS FUNCTION
// ==========================================
function renderCards(filteredParticipants) {
    const container = document.getElementById('participantCards');
    container.innerHTML = '';

    if (filteredParticipants.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: #5F6368;">No participants found.</p>';
        return;
    }

    filteredParticipants.forEach(participant => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Create card HTML
        card.innerHTML = `
            <h2 class="participant-name">${participant.name}</h2>
            <div class="participant-info">
                <p><strong>Roll No:</strong> ${participant.roll}</p>
                <p><strong>Year:</strong> ${participant.year}</p>
                <p><strong>Branch:</strong> ${participant.branch}</p>
            </div>
            <div class="social-links">
                <a href="${participant.github || '#'}" target="_blank" class="link-btn github-btn" ${!participant.github ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
                    <span class="icon">🔗</span> GitHub
                </a>
                <a href="${participant.linkedin || '#'}" target="_blank" class="link-btn linkedin-btn" ${!participant.linkedin ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
                    <span class="icon">🔗</span> LinkedIn
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
function setupSearch() {
    const searchBar = document.getElementById('searchBar');
    
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        const filteredParticipants = participants.filter(participant => 
            participant.name.toLowerCase().includes(searchTerm) ||
            participant.roll.toLowerCase().includes(searchTerm) ||
            participant.branch.toLowerCase().includes(searchTerm)
        );
        
        renderCards(filteredParticipants);
    });
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCards(participants);
    setupSearch();
});
