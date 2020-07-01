const hasTooltip = document.querySelectorAll(".has-tooltip");

for(let el of hasTooltip) {
    let element = document.createElement("div");

    element.classList.add("tooltip");
    element.innerText = el.title;
    
    element.style.left = `${el.getBoundingClientRect().left}px`;
    element.style.top = `${el.getBoundingClientRect().bottom}px`;
    element.style.position = "absolute";
   
    el.insertAdjacentElement('beforeend', element);
}

hasTooltip.forEach(tooltip => {

    tooltip.onclick = () => {
        
        for(let el of document.querySelectorAll(".tooltip")) {

            if(tooltip.firstElementChild.classList.contains("tooltip_active")) {
                continue;
            }
            
            if (el.classList.contains("tooltip_active")) {

                el.classList.remove("tooltip_active");
            }
        };
       
        tooltip.firstElementChild.classList.toggle("tooltip_active");
        
        return false;
    }
});


