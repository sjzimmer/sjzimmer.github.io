// Function to show loader
function showLoaderAndOverlay() {
  loader.style.display = 'block';
  overlay.style.display = 'block';
  setTimeout(function() {
    loader.style.display = 'none';
    overlay.style.display = 'none';
  }, 1000);
}

// Function for PDF download
function handlePDFDownload() {
  const pdfPath = 'arq/CV.pdf';
  window.open(pdfPath);
}

// Function to generate header content and add dropdown functionality
function generateHeader() {
  const headerContent = `
    <header>
      <nav>
        <ul class="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li class="dropdown">
            <a href="#" class="dropbtn">Cheat Sheets</a>
            <div class="dropdown-content">
              <a href="html-cheat-sheet.html"><img src="img/heart.png" alt="Ícone Heart" style="width: 0.5cm;"> HTML</a>
              <a href="css-cheat-sheet.html"><img src="img/heart.png" alt="Ícone Heart" style="width: 0.5cm;"> CSS</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  `;
  headerContainer.innerHTML = headerContent;

  // Add dropdown functionality
  const dropdownButton = headerContainer.querySelector('.dropbtn');
  dropdownButton.addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    }
  });
}

// Main code
const loader = document.getElementById('loader');
const overlay = document.getElementById('overlay');
if (loader) {
  showLoaderAndOverlay();
}

const downloadPDFButton = document.getElementById('downloadPDF');
if (downloadPDFButton) {
  downloadPDFButton.addEventListener('click', handlePDFDownload);
}

const headerContainer = document.getElementById("header-container");
if (headerContainer) {
  generateHeader();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
