function preloading() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

let nav = document.getElementById("nav");
nav.innerHTML = `

<h2>
    <a href="/index.html">
        <img class="logo" src="/Images/book.webp" alt="logo">

        Du Books
    </a>
</h2>

<div class="options">
   
    <a href="/index.html">
        <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        </h3>
    </a>


    <a>
        <span style="display: flex;align-items: center;margin-right:2rem" id="theme_Changer">
            <svg id="theme_Changer" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        </span>
    </a>

    <a href="/contact.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-user">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    </a>

    <a id="semester_btn" href="#">
    <h3>Semesters</h3>
    <div class="hidden">
        <h3><a href="/Semesters/semester_1.html" alt="semester 1">Semester 1</a></h3>
        <h3><a href="/Semesters/semester_2.html" alt="semester 2">Semester 2</a></h3>
        <h3><a href="http://">Semester 3</a></h3>
        <h3><a href="http://">Semester 4</a></h3>


    </div>

</a>

</div>


<a class="contact_btn" href="/contact.html">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</a>


`;

let dropdown = document.getElementsByClassName("hidden")[0];
let semester_btn = document.getElementById("semester_btn");
semester_btn.addEventListener("click", function () {
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

var theme_Changer = document.getElementById("theme_Changer");

theme_Changer.addEventListener("click", themechanger);
function themechanger() {
  document.body.classList.toggle("change_theme");

  if (document.body.classList.contains("change_theme")) {
    theme_Changer.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    localStorage.setItem("Number", 2);
  } else {
    theme_Changer.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>`;

    localStorage.setItem("Number", 1);
  }
}

if (localStorage.getItem("Number") == 2) {
  localStorage.setItem("Fun", themechanger());
}
