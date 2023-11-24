const apiUrl = "https://raw.githubusercontent.com/jvs-dev/projectsAPI/main/db.json";
async function fetchData() {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro ao carregar os dados. Código de status: ${response.status}`);
        }
        console.log(element.projectName);
        let projectsObj = await response.json();
        let projectsDiv = document.getElementById("projectsDiv")
        projectsObj.forEach(element => {
            let article = document.createElement("article")
            projectsDiv.insertAdjacentElement("beforeend", article)
            article.classList.add("projectCard")
            article.innerHTML = `
        <div class="projectCard__div--1">
            <img src="${element.projectDesktopImg}" alt="" class="projectCard__img">
        </div>
        <div class="projectCard__div--2">
            <p class="projectCard__p">${element.projectName}</p>
            <button class="projectCard__btn">Ver mais</button>
        </div>`
        });
    } catch (error) {

    }
}

fetchData();