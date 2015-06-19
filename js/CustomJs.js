//Documentation

//1.Scrolling Parallax
//2.Service logic


// 1.Scrolling Parallax
// Using jquery.scrolling-parallax.js

$.scrollingParallax('img/body-dg.png', {
    enableHorizontal: true,
    bgWidth: 'auto',
    staticSpeed: 0.03,
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
    //Expande\Compression checkbox list
    document.getElementById("checkboxClick").addEventListener("click", checkboxExpand, false);
    var flag = false;
    function CircleExpand(e) {
        var elem = e.target;
        var closeIcon = document.createElement("div");
        closeIcon.className = "closeIcon";
        if (elem.className !== "closeIcon") {
            if (elem.id !== "cicle-group-info" && elem.className !== "add" && elem.className !== "circle-content") {
                if (elem.querySelector("#active-circle .closeIcon") == null) {
                    elem.id = "active-circle";
                    
                    setTimeout(function () {
                        elem.innerHTML = "<span class='circle-head'>Lorem ipsum dolor sit amet</span><p class='circle-content'>Donec dictum justo placerat, luctus lacus id, eleifend lectus. Vivamus a nunc turpis.</p><br/><span class='add'>Add to <br/>contact form<br/>✔</span>"
                        elem.appendChild(closeIcon);
                        elem.querySelector("#active-circle .closeIcon").style.opacity = 1;
                    }, 1100)
                    
                } 

             
            } else {
                if(elem.className == "add"){
                var selectedId = elem.parentElement.dataset.id;
                document.getElementById(selectedId).setAttribute("checked", "checked");
            }
        }
            
        } else {
            elem.parentElement.id = "";
            elem.parentElement.innerHTML = "Lorem ipsum dolor sit amet";
            

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
        if (flag) {
            document.getElementById("checkbox-holder").style.height = "0px";
            flag = false;
        } else {
            document.getElementById("checkbox-holder").style.height = "150px";
            flag = true;
        }
        
    };

};




//MENU SCROLLING WITH ACTIVE ITEM SELECTED
jQuery(document).ready(function () {
    jQuery("a#scroll").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
        return false;
    });
});


//mikshers
$(function () {
    $("#slider-vertical-left, #slider-vertical-right").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });

    $("#amount").val($("#slider-vertical").slider("value"));
});
