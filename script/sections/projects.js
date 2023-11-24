let projectsObj = [
    {
        projectName: "Lio Hairstyle",
        projectMobileImg: "https://drive.google.com/file/d/1eKl8o17uEGhdtXvCPhJGku8jVIRxdqvZ/view?usp=drive_link",
        projectDesktopImg: "assets/projects/lioHairstyle/desktop.jpeg"
    },
    {
        projectName: "Marktec Estoque",
        projectMobileImg: "https://drive.google.com/file/d/1eKl8o17uEGhdtXvCPhJGku8jVIRxdqvZ/view?usp=drive_link",
        projectDesktopImg: "assets/projects/marktec/desktop.jpeg"
    }, ,
    {
        projectName: "Lio Hairstyle",
        projectMobileImg: "https://drive.google.com/file/d/1eKl8o17uEGhdtXvCPhJGku8jVIRxdqvZ/view?usp=drive_link",
        projectDesktopImg: "https://drive.google.com/file/d/1lBmB9vgkHWVtjPlxEUwCbD3PSva7e6v3/view?usp=sharing"
    },
    {
        projectName: "Lio Hairstyle",
        projectMobileImg: "https://drive.google.com/file/d/1eKl8o17uEGhdtXvCPhJGku8jVIRxdqvZ/view?usp=drive_link",
        projectDesktopImg: "https://drive.google.com/file/d/1lBmB9vgkHWVtjPlxEUwCbD3PSva7e6v3/view?usp=sharing"
    }
]

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