const container=document.getElementById("coachContainer");
coaches.forEach(coach=>{
container.innerHTML+=`
<div class="coach-card">
<img src="${coach.image}">
<div class="info">
<h2>${coach.name}</h2>
<h4>${coach.role}</h4>
<p>${coach.description}</p>
<a href="coach.html?id=${coach.id}">
Read More
</a>
</div>
</div>
`;
});
