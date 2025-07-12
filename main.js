const srch = document.getElementById("srch");
const srchi = document.getElementById("srchi");
const srchbrow = document.getElementById("brow");
const titulo = document.getElementById("titulo");
const settings = document.getElementById('settings');
const about = document.getElementById('about');

function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:" || url.protocol === "file:";
    } catch (_) {
        return false;
    }
}

const searchEngine = {
  Google: "https://www.google.com/search?q=",
  Brave: "https://search.brave.com/search?q=",
  DuckDuckGo: "https://www.duckduckgo.com/search?q=",
  StartPage: "https://www.startpage.com/search?q="
};

srch.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = srchi.value.trim();

    if (!query) {
        titulo.textContent = "Please, insert something.";
        return;
    }

    /*if (isValidUrl(query)) {
        const formattedUrl = query.startsWith("http") || query.startsWith("file:") ? query : `https://${query}`;
        window.open(formattedUrl);*/
    if (query.startsWith("http:") || query.startsWith("https:")) {
        window.open(query)
    } else if (query.startsWith("file:")) {
        window.location.href = query
    } else {
        window.open(searchEngine[srchbrow.value] + encodeURIComponent(query));
    }
});

// Efecto de escritura optimizado
const text = "Vulpe://Search";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        titulo.textContent += text[index++];
        requestAnimationFrame(typeEffect);
    }
}
typeEffect();

// Guardar y aplicar tema
const toggleTheme = document.getElementById("toggle-theme");
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Guardar y aplicar fondo
const bgSelect = document.getElementById("bg-select");
const savedBg = localStorage.getItem("background") || "default";
document.body.style.backgroundImage = savedBg === "default" ? "none" : `url(${savedBg})`;
bgSelect.value = savedBg;

bgSelect.addEventListener("change", () => {
    const selectedBg = bgSelect.value;
    document.body.style.backgroundImage = selectedBg === "default" ? "none" : `url(${selectedBg})`;
    localStorage.setItem("background", selectedBg);
});

document.getElementById('menu-side').addEventListener('click', openSideMenu);
document.getElementById('but-nig').addEventListener('click', openAbout);

 function openSideMenu() {
 settings.classList.toggle('active')
 }
 
 function openAbout() {
 about.classList.toggle('active')
 }