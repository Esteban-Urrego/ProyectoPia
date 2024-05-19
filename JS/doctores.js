document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var bmi = weight / ((height / 100) * (height / 100));
    var result = '';
    if (bmi < 18.5) {
      result = 'Tu peso es inferior al normal';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Tu peso esnormal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Tu peso es superior al normal';
    } else {
      result = 'Obesidad';
    }
    document.getElementById('result').innerText = 'BMI: ' + bmi.toFixed(2) + ', ' + result;
  });
  const openButtons = document.querySelectorAll('.openFormBtn');

  openButtons.forEach(button => {
    button.addEventListener('click', function () {
      document.getElementById('formDialog').showModal();
    });
  });

  document.getElementById('closeFormBtn').addEventListener('click', function () {
    document.getElementById('formDialog').close();
  });
  const btnAbrirRegistro = document.querySelector('#abrir-registro');
    const btnCerrarRegistro = document.querySelector('#cerrar-registro');
    const modalRegistro = document.querySelector('#modal-registrar');
    const btnAbrirLogin = document.querySelector('#abrir-login');
    const btnCerrarLogin = document.querySelector('#cerrar-login');
    const modalLogin = document.querySelector('#modal-login');
   
    function abrirdialogo() {
        modalRegistro.showModal();
    };
    btnAbrirRegistro.addEventListener('click', abrirdialogo);

    btnCerrarRegistro.addEventListener('click', () => {
        modalRegistro.close();
    });

    // Evento para abrir el diálogo de inicio de sesión
    btnAbrirLogin.addEventListener('click', () => {
        modalLogin.showModal();
    });

    // Evento para cerrar el diálogo de inicio de sesión
    btnCerrarLogin.addEventListener('click', () => {
        modalLogin.close();
    });
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    
    // Función para avanzar el slider automáticamente cada 5 segundos
    function startSlider() {
      slideInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide > slides.length - 3) {
          currentSlide = 0; // Vuelve al principio si se alcanza el final
        }
        updateSlides();
      }, 5000); // Intervalo de 5 segundos
    }
    
    // Función para detener el movimiento automático del slider
    function stopSlider() {
      clearInterval(slideInterval);
    }
    
    // Event listener para el botón previo
    prevButton.addEventListener('click', () => {
      stopSlider(); // Detiene el movimiento automático al hacer clic manualmente
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 3;
      }
      updateSlides();
      startSlider(); // Reinicia el movimiento automático después de hacer clic manualmente
    });
    
    // Event listener para el botón siguiente
    nextButton.addEventListener('click', () => {
      stopSlider(); // Detiene el movimiento automático al hacer clic manualmente
      currentSlide++;
      if (currentSlide > slides.length - 3) {
        currentSlide = 0;
      }
      updateSlides();
      startSlider(); // Reinicia el movimiento automático después de hacer clic manualmente
    });
    
    // Función para actualizar los slides
    function updateSlides() {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    
    // Iniciar el slider automáticamente al cargar la página
    startSlider();
    