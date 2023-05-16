// Define the project data
const projects = [
    {
        name: 'Lock API',
        description:
            'Lock uses REST APIs to protect endpoints by using two techniques: tokens and sessions.',
        image: './images/project_screenshots/Snapshoot Portfolio.svg',
        technologies: ['Node.js', 'Express.js', 'JWT', 'Redis'],
        liveLink: 'https://example.com',
        sourceLink: 'https://github.com/ahmedeid6842/auth_session-token_',
        projectCover: './images/project_screenshots/Snapshoot Portfolio.svg'
    },
    {
        name: 'Affable REST APIs',
        description:
            "Affable manages your Blog through REST API and you can also see others' Blogs.",
        image: './images/project_screenshots/Snapshoot Portfolio (1).svg',
        technologies: ['Node.js', 'TypeScript', 'Docker'],
        liveLink: 'https://example.com',
        sourceLink: 'https://github.com/ahmedeid6842/Blog',
        projectCover: './images/project_screenshots/Snapshoot Portfolio (1).svg'
    },
];

function createCard() {
    const cardContainer = document.querySelector(".card__container");
    for (let project of projects) {
        let technologiesList = project.technologies.map((tech) => `<li>${tech}</li>`).join("");

        let card = `
            <li class="card">

                <div class="card__imgbox">
                    <img src="${project.projectCover}" alt="Lock-app"
                     class="card__img">
                </div>

                <div class="card__details">
                    <h3 class="card__text">${project.name}</h3>
                    <div class="card__canopy">
                        <div class="card__canopy-header">
                            <h4 class="card__canopy-title">CANOPY</h4>
                            <ul class="card__canopy-list">
                                <li>Backed Dev</li>
                                <li>2023</li>
                            </ul>
                        </div>
                    <p class="card__canopy-text">${project.description}</p>
                    </div>
                    <ul class="card__list">
                         ${technologiesList}
                    </ul>
                    <button
                        class="btn btn--green car__btn">See
                        Project</button>
                </div>
    </li>
        `
        console.log(card);
        cardContainer.insertAdjacentHTML("afterbegin", card);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createCard();

});