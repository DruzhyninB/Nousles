//validation
var form = document.forms[0];
for (var i = 0; i < form.elements.length; i++) {
    var e = form.elements[i];
    var pattern = e.getAttribute("data-patern");

    if (pattern) {
        e.onblur = validation;
        e.onfocus = resetFormElem;
    }
}
form.addEventListener("submit", validateform, false);

function validation() {
    var patte = this.dataset.patern,
        value = this.value,
        masgid = this.dataset.msgid;
        masg = this.dataset.msg;

    var res = value.search(patte);
    if (value !== "") {
        if (res == -1) {
            document.getElementById(masgid).innerHTML = masg;
            document.getElementById(masgid).style.opacity = "1";
            this.parentElement.className = "input-group formError";
        }
    }

}

function resetFormElem() {
    this.parentElement.className = "input-group";
    var idToClear = this.dataset.msgid
    document.getElementById(idToClear).style.opacity = "0";
}

function validateform(e) {
    var validFlag = false;
    for (var i = 0; i < form.elements.length; i++) {
        var ele = form.elements[i];
        if (ele.parentElement.className == "input-group formError") validFlag = true;
    }
    if (form.Name.value == "") {
        event.preventDefault();
        document.getElementById("nameid").innerHTML = "Empty fields";
        document.getElementById("nameid").style.opacity = "1";
        setTimeout(function () {document.getElementById("nameid").style.opacity = "0";}, 5000);
        validFlag = true;
    }
        if (form.Email.value == "") {
            event.preventDefault();
            document.getElementById("emailid").innerHTML = "Empty fields";
            document.getElementById("emailid").style.opacity = "1";
            setTimeout(function () { document.getElementById("emailid").style.opacity = "0"; }, 5000);
            validFlag = true;
        } 
            if (form.Tel.value == "") {
                event.preventDefault();
                document.getElementById("telid").innerHTML = "Empty fields";
                document.getElementById("telid").style.opacity = "1";
                setTimeout(function () { document.getElementById("telid").style.opacity = "0"; }, 5000);
                validFlag = true;
            }
                if (form.Position.value == "") {
                    event.preventDefault();
                    document.getElementById("posid").innerHTML = "Empty fields";
                    document.getElementById("posid").style.opacity = "1";
                    setTimeout(function () { document.getElementById("posid").style.opacity = "0"; }, 5000);
                    validFlag = true;
                }
       if (!validFlag) {

        form.Posiion.value = "";
        form.Name.value = "";
        form.Tel.value = "";
        form.Email.value = "";
        event.preventDefault();
    } else {
        event.preventDefault();
    }
}