
let sqi = document.getElementById("searchQueryInput");
let sqb = document.getElementById("btn01");
let sel001 = document.getElementById("sel01");
let sel002 = document.getElementById("sel02");
let txtLogo = document.getElementById("textLogo");

// Función para detectar si el texto es una URL
function esURL(texto) {
    return /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(texto);
}

sqb.addEventListener('click', function() {
    var value = sqi.value.trim();
    if (!value) {
        alert("You have to input something. :D");
        return;
    }
    // Si es una URL, abrirla directamente
    if (esURL(value)) {
        window.location.href = value;
        return;
    }
    // Si no es URL, buscar según el buscador seleccionado
    var buscador = sel001.value;
    switch (buscador) {
        case "Google":
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(value);
        break;
        case "Brave":
            window.location.href = "https://search.brave.com/search?q=" + encodeURIComponent(value);
        break;
        case "Bing":
            window.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(value);
        break;
        case "DuckDuckGo":
            window.location.href = "https://www.duckduckgo.com/?q=" + encodeURIComponent(value);
        break;
        case "Ecosia":
            window.location.href = "https://www.ecosia.com/search?q=" + encodeURIComponent(value);
        break;
        case 'StartPage':
        	window.location.href = 'https://www.startpage.com/search?q=' + encodeURIComponent(value);
        break;
        case 'Yandex':
        	window.location.href = 'https://www.yandex.com/search?q=' + encodeURIComponent(value);
        break;
        case 'perplex':
        	window.location.href = 'https://www.perplexity.ai/search?q=' + encodeURIComponent(value);
        break;
        case 'Ask.com':
        	window.location.href = 'https://www.ask.com/search?q=' + encodeURIComponent(value)
        break;
        
    }
});

// Evento para aplicar configuración guardada al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    // Lee los valores guardados
    const theme = localStorage.getItem('userThemeDraco');
    const video = localStorage.getItem('userVideoDraco');
    // Aplica el tema (puedes cambiar clases, estilos, etc.)
    if (theme) {
        document.body.className = theme; // Asumiendo que tienes estilos para .light y .dark
    }
    // Cambia el video de fondo si existe configuración
    if (video) {
        const srcVid = document.getElementById('videoBG');
        srcVid.src = video;
        const vid = document.querySelector('video');
        vid.load();
        vid.play();
    }
});

// Si quieres que el dropdown también cambie el video en tiempo real:
if (sel002) {
    sel002.addEventListener("change", function() {
        var vid = document.querySelector('video');
        var srcVid = document.getElementById('videoBG');
        srcVid.src = this.value;
        vid.load();
        vid.play();
    });
}
