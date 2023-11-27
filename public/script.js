var myVar;

function pageload() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("root").style.display = "block";
}