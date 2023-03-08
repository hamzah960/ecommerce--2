import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './styles/main.scss';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min';
// import '@popperjs/core';

// config tooltip bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//************************* */

//************************* */
//add to chart btn
let mybtn = document.querySelectorAll(".add-to-chart-btn");

mybtn.forEach(function (el) {
    el.addEventListener('click', function () {
        alert('أضيف المنتج الى عربة الشراء');
    })
});
//************************* */

//************************ */
//copyright
const date = new Date();
document.getElementById('copyright').innerHTML = date.getFullYear();
//************************ */