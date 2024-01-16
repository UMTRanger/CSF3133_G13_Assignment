//Ensure that the script won't run until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next button click event listener
  document.querySelector(".next").addEventListener("click", 
    function () {
      plusSlides(1);
    }
  );

  // Previous button click event listener
  document.querySelector(".prev").addEventListener("click", 
    function () {
      plusSlides(-1);
    }
  );

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
});
