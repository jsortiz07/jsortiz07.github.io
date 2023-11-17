function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Cerrar el menú desplegable si el usuario hace clic fuera de él
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // envio formulario contactanos

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud HTTP o un mensaje de confirmación
    alert('Formulario enviado');
  });
  