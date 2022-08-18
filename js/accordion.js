var acc = document.getElementsByClassName("accordion_item-tilte");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("accordion_item-tilte-active");
        var panel = this.nextElementSibling;        

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";    
        }
    });
}