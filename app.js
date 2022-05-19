// toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.link-container');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})
//links
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click',() =>{
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

// creating dynamic project card

// const projectContainer = document.querySelector('.project-container');


// projects.forEach(project => {
//     projectContainer.innerHTML +=
//      <div class="project-card" data-tags="#all, ${project.tags}">
//     <img src="img/${project.image}" alt="hi">
//         </img>
//     <div class="content">
//         <h1 class="project-name">${project.name}</h1>
//         <span class="tags">${project.tags}</span>

//     </div>;

// </div> 
// })