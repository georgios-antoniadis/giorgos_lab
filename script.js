
//
// LANGUAGE SUPPORT
//

function setLanguage(lang){

    localStorage.setItem("language", lang);

    document.getElementById("heroTitle").innerText =
        translations[lang].heroTitle;

    document.getElementById("heroBio").innerText =
        translations[lang].heroBio;

    document.getElementById("projectsTitle").innerText =
        translations[lang].projectsTitle;

    document.getElementById("contactTitle").innerText =
        translations[lang].contactTitle;

    document.getElementById("contactText").innerText =
        translations[lang].contactText;

    document.getElementById("blogTitle").innerText =
        translations[lang].blogTitle;
}

//
// PROJECTS
//

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {

    const card = document.createElement("a");

    card.href = project.url;
    card.target = "_blank";

    card.className = "project-card";

    card.innerHTML = `
        <img src="${project.image}">
        <h3>${project.title}</h3>
    `;

    projectsContainer.appendChild(card);

});

let currentPage = 1;
const postsPerPage = 10;


//
// BLOG
//


async function loadBlog() {

    const response = await fetch("posts/posts.json");
    const files = await response.json();

    renderPage(files);
}

async function renderPage(files){

    const container = document.getElementById("blogContainer");

    container.innerHTML = "";

    const start = (currentPage - 1) * postsPerPage;

    const pagePosts = files.slice(start, start + postsPerPage);

    for(const file of pagePosts){

        const response = await fetch(`posts/${file}`);
        const text = await response.text();

        const titleMatch = text.match(/title:\s*(.+)/);
        const dateMatch = text.match(/date:\s*(.+)/);

        const title = titleMatch ? titleMatch[1] : "Untitled";
        const date = dateMatch ? dateMatch[1] : "";

        container.innerHTML += `
            <a class="blog-post" href="post.html?file=${encodeURIComponent(file)}">
                <h3>${title}</h3>
                <div class="date">${date}</div>
            </a>
        `;
    }

    document.getElementById("pageInfo").innerText =
        `${currentPage} / ${Math.ceil(files.length / postsPerPage)}`;

    document.getElementById("prevBtn").onclick = () => {
        if(currentPage > 1){
            currentPage--;
            renderPage(files);
        }
    };

    document.getElementById("nextBtn").onclick = () => {
        if(currentPage < Math.ceil(files.length / postsPerPage)){
            currentPage++;
            renderPage(files);
        }
    };

}

loadBlog();

//
// INITIAL LANGUAGE
//

const browserLanguage = navigator.language.startsWith("el")
    ? "gr"
    : "en";

const savedLanguage =
    localStorage.getItem("language") || browserLanguage;

setLanguage(savedLanguage);