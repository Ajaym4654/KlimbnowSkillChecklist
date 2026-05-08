
const nursingSkills = [
["CNA","https://forms.gle/w6LqEF7dPsdDQRWQ7"],
["LPN/LVN","https://forms.gle/pZ63s2Xu8xZ71SkS9"],
["Registered Nurse LTC","https://forms.gle/hpN9NRmkuAyd9gh46"],
["RN ER","https://forms.gle/FA6PxeHEQ5C3oX3s8"],
["Med/Surg","https://forms.gle/WLBjE6K6c2Gg5Ru28"],
["RN OR","https://forms.gle/nFmxQ9bCmeLXzj2P7"],
["Ambulatory","https://forms.gle/otx3fZxnZaDZf2p98"],
["Outpatient Clinic","https://forms.gle/otx3fZxnZaDZf2p98"],
["ICU","https://forms.gle/U2DrDrPh1B638MMP6"],
["PCU","https://forms.gle/mVozjvqGzNhvE6UN9"],
["Intermediate","https://forms.gle/mVozjvqGzNhvE6UN9"],
["Stepdown","https://forms.gle/mVozjvqGzNhvE6UN9"],
["Observation Unit","https://forms.gle/mVozjvqGzNhvE6UN9"],
["L&D","https://forms.gle/s7oqHeUN44mo5WFe9"],
["Psych","https://forms.gle/hPvxS9FGjN6rc8Ze9"],
["Nurse Manager Supervisor","https://forms.gle/BQFVw1wAouDRh3c9A"],
["RN Endoscopy","https://forms.gle/M6agt7s9HSXqnY6F7"],
["PACU","https://forms.gle/st1BjT1F239i9qm3A"],
["Oncology","https://forms.gle/iTmALFoZqs26NVh7A"],
["Phone Triage","https://forms.gle/UBNAMfCkUw6qQzZo8"],
["Case Manager","https://forms.gle/BwQHrd5Mhcz9zLHKA"],
["Wound Care","https://forms.gle/mNRcXA4D2S7dep7RA"],
["PICC","https://forms.gle/AMCpaUNcY3iCuVmR8"],
["Home Health","https://forms.gle/6vdEaxjs9JybBgS88"],
["RN IR","https://forms.gle/R9ZKBnEsovg5yPP1A"],
["RN Cath Lab","https://forms.gle/kksvoRQrrj2AjDWF6"],
["RN Pre Operative","https://forms.gle/r6E2Apwm2Soi6giG9"]
];

const alliedSkills = [
["RRT/CRT","https://forms.gle/8DB2YPYqeGsSNbqP9"],
["Physical Therapist","https://forms.gle/3FhyU33xRu6erMxt8"],
["Physical Therapist Assistant","https://forms.gle/xcjWgUDF6QtH1Gpm8"],
["Certified Surgical Technologist","https://forms.gle/2LwyHUksWc2qbqQY6"],
["X-Ray Tech","https://forms.gle/yUpbnEhzUuiad4J68"],
["Sterile Processing Tech","https://forms.gle/WE6WwYvbxM8GHVw18"],
["Cardiac Echo Tech","https://forms.gle/ML7RffobxMbnyjaY7"],
["MRI Tech","https://forms.gle/LAX3FGrV3uN2uzVB9"],
["Ultrasound Tech","https://forms.gle/exehLddp1Edfzn9b6"],
["Patient Care Technician","https://forms.gle/a5GvDZKMWb9tofH5A"],
["Medical Lab Tech","https://forms.gle/nDoaXh2QdXMaZK6w5"],
["Anesthesia Tech","https://forms.gle/tgXuPrqLbi8gVSeX9"],
["Phlebotomist","https://forms.gle/YzBkvUgGU4sneqna6"],
["Monitor Tech","https://forms.gle/hY36HZqLefhLf9fP7"],
["Paramedic","https://forms.gle/8poKFXku65D11jeK7"],
["EP Tech","https://forms.gle/e5sZGbdwfo5dLc6t9"],
["Psych Tech","https://forms.gle/27im53mKU5xPvbux7"],
["Pathology Assistant","https://forms.gle/iRNdkiKwe4zdctjaA"],
["Endoscopy Tech","https://forms.gle/vbNSnQmjwM5xds5R9"],
["Sleep Tech","https://forms.gle/6ahSMhUvBgHCiH4y7"],
["CT Tech","https://forms.gle/bH6cVt9zDUzGBrrVA"],
["Pharmacy Tech","https://forms.gle/1bW8TvUPG9JcFve88"],
["Medical Physicist","https://forms.gle/YnDxUcR4WaCTXu487"],
["Radiology Tech","https://forms.gle/Qgx1y7iobPrYPr2i6"]
];

const clinicalSkills = [
["Clinical Social Worker","https://forms.gle/EG1Ua3r3hVyeKqaq6"]
];

function createCard(skill){
return `
<div class="card">
<h3>${skill[0]}</h3>

<div class="actions">

<a class="view-btn" href="${skill[1]}" target="_blank">
Open
</a>

<button class="copy-btn"
onclick="copyLink('${skill[1]}')">
Copy Link
</button>

<button class="share-btn"
onclick="shareLink('${skill[0]}','${skill[1]}')">
Share
</button>

<button class="copy-btn"
onclick="previewForm('${skill[1]}')">
Preview
</button>

</div>
</div>
`;
}

function renderSkills(){
document.getElementById("nursingGrid").innerHTML =
nursingSkills.map(createCard).join("");

document.getElementById("alliedGrid").innerHTML =
alliedSkills.map(createCard).join("");

document.getElementById("clinicalGrid").innerHTML =
clinicalSkills.map(createCard).join("");
}

renderSkills();

function copyLink(link){
navigator.clipboard.writeText(link);
alert("Link copied successfully!");
}

async function shareLink(title,link){

if(navigator.share){
await navigator.share({
title:title,
url:link
});
}else{
copyLink(link);
}
}

function previewForm(link){
document.getElementById("previewModal").style.display = "flex";
document.getElementById("previewFrame").src = link;
}

function closePreview(){
document.getElementById("previewModal").style.display = "none";
}

document.getElementById("searchInput").addEventListener("keyup",function(){

const val = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{
card.style.display =
card.innerText.toLowerCase().includes(val)
? "block"
: "none";
});
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{
document.body.classList.toggle("light");

if(document.body.classList.contains("dark")){
themeToggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';
}else{
themeToggle.innerHTML =
'<i class="fa-solid fa-moon"></i>';
}
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};
