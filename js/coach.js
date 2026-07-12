const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const coach = coaches.find(item => item.id === id);
const container = document.getElementById("coachDetails");
if(coach){
container.innerHTML = `
<div class="profile">
<img src="${coach.image}" alt="${coach.name}">
<div class="details">
<h1>${coach.name}</h1>
<h3>${coach.role}</h3>
<p>${coach.rating}</p>
<p><strong>Experience:</strong> ${coach.experience}</p>
<p><strong>Location:</strong> ${coach.location}</p>
<p><strong>Languages:</strong> ${coach.languages}</p>
<h2>About</h2>
<p>${coach.bio}</p>
<h2>Specializations</h2>
<ul>
${coach.specialization.map(item=>`<li>${item}</li>`).join("")}
</ul>
<a class="btn" href="#">Book Appointment</a>
<br><br>
<a href="index.html">← Back</a>
</div>
</div>
`;
}
