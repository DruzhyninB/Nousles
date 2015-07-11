window.addEventListener("load", start, false);

function start() {
    document.getElementById("preset1").addEventListener("click", preset1Activete, false); //Preset1
    document.getElementById("preset2").addEventListener("click", preset2Activete, false); //Preset2
    document.getElementById("preset3").addEventListener("click", preset3Activete, false);
    var timeoutHolder, deeptimeoutholder, deepdeeptimeoutholder, deepdeepdeeptimeoutholde;
    var gift = document.getElementsByClassName("gift")[0];


    function preset1Activete() {
        var containerDots = document.getElementsByClassName("hum-line")[0];
        gift.removeAttribute("style"); gift.className = "gift";
        //remove old scene
        for (var i = (containerDots.childNodes.length-1); i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        

        containerDots.appendChild(manContainer1);
        containerDots.appendChild(manContainer2);

        manContainer1.className = "manBox preset1-man1-animate";
        manContainer2.className = "manBox preset1-man2-animate"

        manContainer1.appendChild(pointer1);
        manContainer2.appendChild(pointer2);

        pointer2.className = "pointer";
        pointer1.className = "pointer";
        
        clearTimeout(deepdeepdeeptimeoutholde);
        clearTimeout(deepdeeptimeoutholder);
        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder);

        timeoutHolder =  setTimeout(function () {
            containerDots.appendChild(manContainer3);
            manContainer3.className = "manBox preset1-man3-animate";
            manContainer3.appendChild(pointer3);
            pointer3.className = "pointer";
            deeptimeoutholder = setTimeout(function () {
                    manContainer3.style.bottom = "60px";
                    manContainer3.style.opacity = 0;
                    gift.style.top = "-60px";
                    gift.style.opacity = 0;
            },4000)

        }, 4500);
    }

    function preset2Activete() {
        var containerDots = document.getElementsByClassName("hum-line")[0];
        gift.removeAttribute("style");
        //remove old scene
        for (var i = (containerDots.childNodes.length - 1) ; i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        
        containerDots.appendChild(manContainer1);

        manContainer1.className = "manBox preset2-vespa-animate";

        manContainer1.appendChild(pointer1);

        pointer1.className = "pointer";

        gift.className = "gift preset2-gift-animation"
        clearTimeout(deepdeepdeeptimeoutholde);
        clearTimeout(deepdeeptimeoutholder);
        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder); 

        timeoutHolder = setTimeout(function () {
            containerDots.appendChild(manContainer2);
            manContainer2.className = "manBox width-80 preset2-talkingMan-animate";
            manContainer2.appendChild(pointer2);
            pointer2.className = "pointer";
            gift.className = "gift";
            deeptimeoutholder = setTimeout(function () {
                containerDots.appendChild(manContainer3);
                manContainer3.className = "manBox  width-80 preset2-runingAfterTalkMan-animate";
                manContainer3.appendChild(pointer3);
                pointer3.className = "pointer";
                gift.className = "gift preset2-gift1-animation";
                deepdeeptimeoutholder = setTimeout(function () {
                    gift.className = "gift";
                }, 12300);
                deepdeepdeeptimeoutholder = setTimeout(function () {
                    
                    manContainer3.className = "manBox preset2-runingFinalMan-animate";
                    gift.classList.add("preset2-gift1-animation");
                },13000)
            }, 2700);

        }, 9100);

    }

    function preset3Activete() {
        var containerDots = document.getElementsByClassName("hum-line")[0];
        //remove old scene
        for (var i = (containerDots.childNodes.length - 1) ; i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        var gift = document.getElementsByClassName("gift")[0];




        /*==============================================================        Two drivers + gift ==================================================================*/

        containerDots.appendChild(manContainer1);

        manContainer1.className = "manBox preset3-man_vespas-animate";

        pointer1.className = "pointer_vespars";

        manContainer1.appendChild(pointer1);

        // delete and insert element for anumation
        gift.classList.remove("gift_for_vespars");
        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        gift.offsetWidth = gift.offsetWidth;

        // -> and re-adding the class
        gift.classList.add("gift_for_vespars");


        /*==============================================================  One driver + talking man ==================================================================*/


        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder);

        timeoutHolder = setTimeout(function () {
            containerDots.appendChild(manContainer2);

            manContainer2.className = "manBox preset3-man2_vespas-animate";

            manContainer2.appendChild(pointer2);
            pointer2.className = "pointer_vespars";
            //    deeptimeoutholder = setTimeout(function () {
            //        manContainer3.style.bottom = "60px";
            //        manContainer3.style.opacity = 0;
            //        gift.style.top = "-60px";
            //        gift.style.opacity = 0;
            //    }, 4000)

        }, 12500);

    }
        

}