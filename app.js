const container = document.getElementById("coachContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
function displayCoaches(list){
container.innerHTML = "";
list.forEach(coach=>{
container.innerHTML += `
<div class="coach-card">
<img src="${coach.image}" alt="${coach.name}">
<div class="info">
<h2>${coach.name}</h2>
<h4>${coach.role}</h4>
<p>${coach.description}</p>
<p><strong>Experience:</strong> ${coach.experience}</p>
<p>${coach.rating}</p>
<a href="coach.html?id=${coach.id}">
Read More →
</a>
</div>
</div>
`;
});
}
displayCoaches(coaches);
searchInput.addEventListener("keyup", function(){
const keyword = this.value.toLowerCase();
const filtered = coaches.filter(coach =>
coach.name.toLowerCase().includes(keyword)
);
displayCoaches(filtered);
});
categoryFilter.addEventListener("change", function(){
const category = this.value;
if(category==="All"){
displayCoaches(coaches);
return;
}
const filtered = coaches.filter(coach =>
coach.role===category
);
displayCoaches(filtered);
});
