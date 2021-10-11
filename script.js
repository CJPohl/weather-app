import { staticEls } from "./src/elements";

const scripts = (() => {
    // fetch giphy api
    async function getGifBackground() {
        const gif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=xZt9fYZwOC1114gvJ6EiMRefocxMPKTs&s=weather`, {mode: 'cors'});
        const gifJSON = await gif.json();
        const url = gifJSON.data.images.original.url;
        return url;
    }


    // add key listener for text input
    function addInputListener() {
        const location = document.getElementById('location');
        document.addEventListener('keypress', (e) => {
        if ((e.keyCode === 13) && (location.value !== '')) {
            staticEls.renderPage();
            staticEls.createContainers();
        }
        });
    };
    

    return {
        getGifBackground,
        addInputListener,
    }
})();

export { scripts }