//Documentation

//1.Scrolling Parallax
//2.Service logic


// 1.Scrolling Parallax
// Using jquery.scrolling-parallax.js

$.scrollingParallax('img/body-dg.png', {
    enableHorizontal: true,
    bgWidth : '200%'
});

//2.Service logic

window.addEventListener("load", start, false);

function start() {
    document.getElementById("hexa2").addEventListener("click", hex2Click, true);
    document.getElementById("hexa3").addEventListener("click", hex3Click, true);
    document.getElementById("hexa4").addEventListener("click", hex4Click, true);
    document.getElementById("hexa5").addEventListener("click", hex5Click, true);
    document.getElementById("hexa6").addEventListener("click", hex6Click, true);
    //Circle expand
    document.getElementById("cicle-group-info").addEventListener("click", CircleExpand, true);
    //Expande checkbox list
    document.getElementById("checkboxClick").addEventListener("click", checkboxExpand, false);
    //Compression checkbox list
    document.getElementById("checkbox-holder").addEventListener("blur", checkboxCompression, true);
    function CircleExpand(e) {
        var elem = e.target;
        var closeIcon = document.createElement("div");
        closeIcon.className = "closeIcon";
        closeIcon.innerHTML = "X"
        if (elem.className !== "closeIcon") {
            if (elem.id !== "cicle-group-info") { 
                if (elem.querySelector("#active-circle .closeIcon") == null) {
                    elem.id = "active-circle";
                    elem.appendChild(closeIcon);
                    elem.querySelector("#active-circle .closeIcon").style.opacity = 1;
                } else {
                    var selectedId = elem.dataset.id;
                    document.get

            } 
        }
            
        } else {
            elem.parentElement.id = ""
            elem.parentElement.removeChild(elem);

        }
    }

    function hex2Click(e) {
        var elements = document.getElementsByClassName("filter-brand");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                        elements[i].style.display = "block";
                    }
        }
        
    }
    function hex3Click(e) {
        var elements = document.getElementsByClassName("filter-webInter");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex4Click(e) {
        var elements = document.getElementsByClassName("filter-manegment");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex5Click(e) {
        var elements = document.getElementsByClassName("filter-marketing");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex6Click(e) {
        var elements = document.getElementsByClassName("filter-contGener");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }

    //Expande chexbox list(function)
    function checkboxExpand() {
        document.getElementById("checkbox-holder").style.height = "150px";
    };
    function checkboxCompression() {
        document.getElementById("checkbox-holder").style.height = "0px";
    }

};