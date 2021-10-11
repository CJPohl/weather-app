import { scripts } from "../script";

// module to create dom elements
const staticEls = (() => {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    // init the page
    function initPage() {
        document.body.appendChild(mainContainer);
        _getGifBackground();
        _createHeader();
        _createInput();
        _createFooter();
        scripts.addInputListener();
    }
    
    // clear page
    function renderPage() {
        mainContainer.innerHTML = '';
    }

    // create weather containers
    function createContainers() {
        for (let i=0; i<3; i++) {
            const weatherContainer = document.createElement('div');
            weatherContainer.classList.add('weather-container');
            weatherContainer.setAttribute('id', `${i}`);
            mainContainer.appendChild(weatherContainer);
        }
    }

    // header
    function _createHeader() {
        const header = document.createElement('div');
        header.classList.add('header');
        header.innerHTML = `
            <p>Simple Weather</p>
        `; 
        mainContainer.appendChild(header);
    }

    // input bar
    function _createInput() {
        const input = document.createElement('div');
        input.classList.add('input');
        input.innerHTML = `
            <i class="fas fa-search"></i><input type="text" id="location" placeholder="Location" required>
        `;
        mainContainer.appendChild(input);
    }

    // create footer
    function _createFooter() {
        const footer = document.createElement('div');
        footer.classList.add('footer');
        footer.innerHTML = `
            <p>Copyright @ 2021 Christopher J. Pohl</p><a href="https://github.com/CJPohl"><i class="fab fa-github"></i></a>
        `;
        mainContainer.appendChild(footer);
    }

    // from giphy api add background image
    function _getGifBackground() {
        const img = document.createElement('img');
        img.classList.add('gif-background');
        document.body.appendChild(img);
        img.src = "https://media0.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif?cid=c055d487074b4dc39ac961aacbf05c265a2e0bb0136c4c8f&rid=giphy.gif&ct=g";
    }

    return { 
        initPage,
        renderPage,
        createContainers,
    }
})();

export { staticEls };