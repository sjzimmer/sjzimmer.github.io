/* Global Styles */
body {
  font-family: 'Garamond', Courier, monospace, sans-serif;
  background-color: #f9e9cd;
  color: #333;
  margin: 0;
  padding: 0;
}


.profile-text strong {
  color: #FF69B4;
}

a {
  color:#ff7c48;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Header Styles */
header {
  background-color: #FF69B4; 
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

#downloadPDF {
  background-color: pink; 
  color: white; 
  border: none; 
  padding: 10px 20px; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  font-family: 'Courier New', Courier, monospace;
}

#downloadPDF:hover {
  background-color: orange; 
}

/* Footer Styles */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #ffb5da; 
  color: #fff; 
  padding: 2px 0;
}

/* Menu Styles */
.menu {
  font-family: 'Courier New', Courier, monospace;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu li {
  margin-right: 10px;
}

.menu li:last-child {
  margin-right: 0;
}

.menu li a {
  text-decoration: none;
  padding: 12px 24px; 
  background-color: #FF69B4;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  border: 1px solid #FF69B4; 
}

.menu li a:hover {
  background-color: #ff4b92;
  transform: translateY(-2px); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Section Styles */
.section {
  margin-bottom: 30px;
}

h2 {
  font-family: ;
  color: #FF69B4; 
  border-bottom: 2px solid #FF69B4; 
  padding-bottom: 5px;
}

h3 {
  color: #ff7c48; 
  padding-bottom: 5px;
  border-left: 2px solid #ff7c48;
  padding-left: 10px;
}

/* Personal Info Styles */
.personal-info {
  margin-top: 20px;
}

.personal-info p {
  margin: 5px 0;
}

.personal-info strong {
  font-weight: bold;
}

/* Profile Image Styles */
.profile-image {
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* Sidebar Styles */
.sidebar {
  float: left;
  width: 50%;
}

/* Social Icons Styles */
.social-icons {
  margin-top: 20px;
}

.social-icons img {
  width: 20px; 
  height: auto;
}

/* About Me Box Styles */
.about-me-box {
  max-height: 400px;
  max-width: 600px; 
  overflow-y: auto; 
  border-left: 1px solid #ff7c48; 
  padding: 10px; 
  margin-top: 20px; 
  margin-right: 5%;
}

.about-me-box::-webkit-scrollbar {
  width: 12px; 
}

.about-me-box::-webkit-scrollbar-thumb {
  background-color: pink; 
  border-radius: 6px; 
}

.about-me-box::-webkit-scrollbar-track {
  background-color: transparent; 
}


/* Social Icons within About Me Box Styles */
.social-icons-about-me img {
  width: 20px; 
  height: auto;
}

/* Loader Overlay Styles */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1000; 
  display: none; 
}

#html-cheat-sheet,
#css-cheat-sheet {
  margin-left:100px;
  margin-right:100px;
  margin-bottom:100px;
}


#loader {
  position: fixed;
  top: 50%; /* Vertically center */
  left: 50%; /* Horizontally center */
  transform: translate(-50%, -50%); /* Fully center */
  width: 15cm; /* Set width of loader */
  height: 15cm; /* Set height of loader */
  background-color: rgba(255, 255, 255, 0.7); /* Add semi-transparent background */
  display: none; /* Initially hide loader */
}

#loader img {
  width: 100%; /* Occupy entire space of loader */
  height: 100%; /* Occupy entire space of loader */
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.show {
  display: block;
}

/* Profile Container Styles */
.profile-container {
  text-align: center; /* Center content */
}

.profile-text {
  margin-top: 10px; /* Add spacing between image and text */
}

/* Code Box Styles */
.code-box {
  background-color: #272822; 
  color: #f8f8f2; 
  padding: 10px; 
  border-radius: 5px; 
  overflow-x: auto; 
  max-width: 10cm; 
}

/* Style for slideshow container */
    .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
    }

/* Style for slideshow images */
    .mySlides {
      display: none;
      width: 100%;
      height: auto;
    }

/* Style for navigation buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: #FF69B4; /* Change color to pink */
  font-weight: bold;
  font-size: 30px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Positioning for previous button */
.prev {
  left: 0;
}

/* Positioning for next button */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* Style for dots/bullets */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* Active dot */
.active {
  background-color: #717171;
}

