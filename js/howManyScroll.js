window.addEventListener("load", start, false);

function start() {
    var valhold = document.createElement("span");
    valhold.style.position = "fixed";
    valhold.style.top = "0px";
    valhold.style.left = "0px";
    valhold.id = "OFTOP"
    valhold.style.fontSize = "20px"
    valhold.style.color = "#fff"

    document.body.appendChild(valhold);

    window.addEventListener("scroll", scrollVizer, false);

    function scrollVizer() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        document.getElementById("OFTOP").innerHTML = scrolled+"px";

    }
}