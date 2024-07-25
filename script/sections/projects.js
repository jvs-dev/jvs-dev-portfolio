import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyCdIEygLw7D3M5igcqwUHtIR1SgPy5FIMM",
    authDomain: "jvs-dev-935d2.firebaseapp.com",
    projectId: "jvs-dev-935d2",
    storageBucket: "jvs-dev-935d2.appspot.com",
    messagingSenderId: "404085043681",
    appId: "1:404085043681:web:16e867e5130604a11d22a0",
    measurementId: "G-73XGFEF76J"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage();

const body = document.querySelector("body")
const viewProject = document.getElementById("view-project")
const viewProjectTitle = document.getElementById("viewProjectTitle")
const closeViewProject = document.getElementById("closeViewProject")
const viewProjectVideo = document.getElementById("viewProjectVideo")
const viewProjectLink = document.getElementById("viewProjectLink")
const viewProjectRepoLink = document.getElementById("viewProjectRepoLink")
const inDevelopment = document.getElementById("inDevelopment")
async function fetchData() {
    let projectsDiv = document.getElementById("projectsDiv")
    let querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
        getDownloadURL(ref(storage, `projects/${doc.id}/desktop.jpg`))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                let article = document.createElement("article")
                let seeMore = document.createElement("button")
                projectsDiv.insertAdjacentElement("beforeend", article)
                article.classList.add("projectCard")
                article.innerHTML = `
                <div class="projectCard__div--1">
                    <img src="${url}" alt="" class="projectCard__img">
                </div>
                <div class="projectCard__div--2">
                    <p class="projectCard__p">${doc.data().name}</p>                    
                </div>`
                article.children[1].insertAdjacentElement("beforeend", seeMore)
                seeMore.classList.add("projectCard__btn")
                seeMore.textContent = "Ver mais"
                seeMore.onclick = function () {
                    loadViewProject(doc.data().name, doc.data().webLink, doc.data().repoLink, doc.id, doc.data().inDevelop)
                }
            })
    });
}

function loadViewProject(name, webLink, repoLink, id, inDevelop) {
    getDownloadURL(ref(storage, `projects/${id}/video.mp4`))
        .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            if (inDevelop == true) {
                inDevelopment.classList.add("active")
            } else {
                inDevelopment.classList.remove("active")
            }
            viewProjectTitle.textContent = `${name}`
            viewProjectVideo.src = `${url}`
            viewProjectLink.href = `${webLink}`
            viewProjectRepoLink.href = `${repoLink}`
            viewProject.style.transition = "0.5s"
            viewProject.style.opacity = "0"
            viewProject.style.display = "flex"
            body.style.overflow = "hidden"
            setTimeout(() => {
                viewProject.style.opacity = "1"
            }, 1);
            setTimeout(() => {
                viewProject.style.transition = ""
                viewProject.style.opacity = ""
            }, 501);
        })
        .catch((error) => {
            viewProjectTitle.textContent = `${name}`
            viewProjectLink.href = `${webLink}`
            viewProjectRepoLink.href = `${repoLink}`
            viewProject.style.transition = "0.5s"
            viewProject.style.opacity = "0"
            viewProject.style.display = "flex"
            setTimeout(() => {
                viewProject.style.opacity = "1"
            }, 1);
            setTimeout(() => {
                viewProject.style.transition = ""
                viewProject.style.opacity = ""
            }, 501);
        });
}

closeViewProject.onclick = function () {
    viewProject.style.transition = "0.5s"
    setTimeout(() => {
        viewProject.style.opacity = "0"
    }, 1);
    setTimeout(() => {
        viewProject.style.display = ""
        viewProject.style.opacity = ""
        viewProject.style.transition = ""
        body.style.overflow = ""
    }, 500);
}

fetchData();