// Obtener el elemento del breadcrumb actual
const currentPage = document.getElementById('current-page');

// Obtener la ruta de la página actual
const currentPath = window.location.pathname;

// Obtener el nombre de la página actual
let currentPageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
currentPageName = currentPageName.replace('.html', '');

// Actualizar el contenido del breadcrumb con el nombre de la página actual
currentPage.textContent = currentPageName;