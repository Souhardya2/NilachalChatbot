const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

const responses = {
  "about nilachal polytechnic": 
    "📘 Nilachal Polytechnic is a reputed technical institute in Bhubaneswar, Odisha, founded in 1997. It offers diploma engineering programs and has produced skilled professionals in multiple streams.",

  "location": 
    "📍 Nilachal Polytechnic\nNear, Plot No-540/1780, Nilachal Nagar, Shikhar Chandi Rd, Patharagadia, Bhubaneswar, Odisha 751024\n🌐 Website: https://www.nilachalpolytechnic.ac.in\nFounded: 1997\nTotal Enrollment: 768 (2025)\n📞 Phone: 094370 37989\n🕙 Hours: 10 AM – 5 PM",

  "founded": 
    "🏛️ Nilachal Polytechnic was established in 1997 and has been serving Odisha with quality diploma education since then.",

  "enrollment": 
    "👩‍🎓 As of 2025, the total enrollment at Nilachal Polytechnic is around 768 students.",

  "courses": 
    "🎓 Nilachal Polytechnic offers diploma programs in:\n- Mechanical Engineering (240 seats)\n- Electrical Engineering (120 seats)\n- Computer Science (60 seats)\n- Civil Engineering (30 seats)",

  "admission": 
    "📝 Admissions are conducted through **Diploma Entrance Test (DET), Odisha**. Candidates must apply online and go through counseling as per SCTE & VT norms.",

  "eligibility": 
    "✅ Eligibility: Students must have passed 10th (Matriculation) with Science and Mathematics as compulsory subjects.",

  "affiliation": 
    "📚 Nilachal Polytechnic is affiliated to SCTE & VT, Odisha and approved by AICTE, New Delhi.",

  "library": 
    "📖 Nilachal Polytechnic has a well-stocked library with textbooks, reference books, journals, and digital learning resources.",

  "hostel": 
    "🏠 Hostel facilities are available for both boys and girls with Wi-Fi, mess, and security.",

  "placement": 
    "💼 Placement Highlights of Nilachal Polytechnic:\n- Mechanical: 240 seats\n- Electrical: 120 seats\n- Computer Science: 60 seats\n- Civil: 30 seats\n\n⭐ Highest Package: 3.8 LPA by Tata Steel\n📈 Companies: Tata Steel, L&T, Jindal, Vedanta, Infosys, and more.",

  "highest package": 
    "💰 The highest salary package offered to Nilachal Polytechnic students was **3.8 LPA by Tata Steel**.",

  "average package": 
    "📊 The average salary package at Nilachal Polytechnic ranges from **2 LPA to 2.8 LPA** depending on the stream and recruiter.",

  "companies": 
    "🏢 Top recruiters of Nilachal Polytechnic include Tata Steel, L&T, Jindal Steel, Vedanta, Infosys, Tech Mahindra, and Maruti Suzuki.",

  "facilities": 
    "🏫 Nilachal Polytechnic offers facilities like library, laboratories, hostels, canteen, sports grounds, computer labs, workshops, and seminar halls.",

  "sports": 
    "⚽ Nilachal Polytechnic encourages sports like cricket, football, volleyball, and athletics, along with annual cultural fests.",

  "festivals": 
    "🎉 Nilachal Polytechnic conducts annual **Tech Fest, Cultural Fest, and Sports Week** to promote talent and extracurricular growth.",

  "faculty": 
    "👨‍🏫 Nilachal Polytechnic has experienced faculty in Mechanical, Electrical, Civil, Computer Science, and Basic Sciences departments.",

  "labs": 
    "🔬 Nilachal Polytechnic has modern laboratories for Civil, Mechanical, Electrical, Electronics, and Computer Science students.",

  "workshops": 
    "🛠️ Regular workshops on robotics, coding, welding, CNC machines, and CAD are organized at Nilachal Polytechnic for skill development.",

  "training": 
    "📚 Nilachal Polytechnic provides soft skills, aptitude training, and industrial visits to prepare students for placements.",

  "contact": 
    "☎️ Contact Nilachal Polytechnic:\nPhone: 094370 37989\n📍 Address: Patharagadia, Bhubaneswar, Odisha\n🌐 Website: https://www.nilachalpolytechnic.ac.in",

  "hours": 
    "🕙 Office Hours of Nilachal Polytechnic: Open 10 AM – 5 PM (Monday to Saturday). Closed on Sundays.",

  "website": 
    "🌐 Official Website of Nilachal Polytechnic: https://www.nilachalpolytechnic.ac.in"
};

// Send message
function sendMessage() {
  let message = userInput.value.trim().toLowerCase();
  if (message === "") return;

  appendMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    let reply = getResponse(message);
    appendMessage(reply, "bot");
  }, 500);
}

// Append chat messages
function appendMessage(text, sender) {
  let msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Find best response (keyword match)
function getResponse(message) {
  for (let key in responses) {
    if (message.includes(key)) {
      return responses[key];
    }
  }
  return "❓ Sorry, I don’t have info on that. Try asking about 'courses', 'admission', 'placement', 'hostel', etc.";
}

// Quick FAQ button
function quickAsk(question) {
  userInput.value = question;
  sendMessage();
}
