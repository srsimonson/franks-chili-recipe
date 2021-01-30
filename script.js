// var linkData = {
//     campaign: 'TEST FROM SCRIPT',
//     channel: 'facebook',
//     feature: 'dashboard',
//     stage: 'new user',
//     tags: [ 'tag1', 'tag2', 'tag3' ],
//     alias: '',
//     data: {
//         'custom_bool': true,
//         'custom_int': Date.now(),
//         'custom_string': 'hello',
//         '$og_title': 'Title',
//         '$og_description': 'Description',
//         '$og_image_url':'http://lorempixel.com/400/400'
//     }
// };

// const branchEvent = () => {
//     console.log('hi');
//     window.open('http://frankschili.app.link/KrYNWMS0rdb');
// }

var wizards = ['Hermione', 'Neville', 'Gandalf'];

// Get the app element
var app = document.querySelector('#app');

// Create markup
app.innerHTML = '<ul>' + wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>';

const hiThere = document.querySelector

const myElements = [1, 2, 3]
Array.from(myElements).forEach('<ul>' + myElements.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>')
