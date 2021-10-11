// TODO:
// - Pick out important info from API
// - Create object/class for weather statistics
// - Stylize weather elements and find corresponding icons
// - Add error control
// - Maybe research eslint issue

import './style.css';
import { staticEls } from './elements';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


window.onload = () => {
    staticEls.initPage();
}