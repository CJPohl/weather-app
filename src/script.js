import { staticEls } from "./elements";

const scripts = (() => {
    // set temp type
    const DEFAULT_TEMP_MODE = 'f';
    let tempMode = DEFAULT_TEMP_MODE;
    
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
            _searchWeather(location.value);
        }
        });
    };


    // use the api to return important weather details
    async function _searchWeather(location) {
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a4ee5fcc3386c99af852f2e5c67c9976`)
        const weatherJSON = await weather.json();
        console.log(weatherJSON);
    }
    

    return {
        getGifBackground,
        addInputListener,
    }
})();

export { scripts }