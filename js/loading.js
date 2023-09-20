var loadTime;

function loading() {
    loadTime = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("load-page").style.display = "block";
}
