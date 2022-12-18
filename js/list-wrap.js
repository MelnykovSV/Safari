
function wrap() {
    const items = document.getElementsByClassName("description__list-item");
    for (i=0; i<items.length; i++) {
        const first_p = items[i].getElementsByClassName("description__list-num");
        const second_p = items[i].getElementsByClassName("description__list-desc");

        if (first_p[0].offsetWidth < 135 ) {
            second_p[0].style.width = "135px"
        }
        else {
            second_p[0].style.width =  first_p[0].offsetWidth + "px" 
        }
    }

}


wrap()