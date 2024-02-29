let accordion = document.querySelectorAll(".contentBx");
let icon = document.querySelectorAll(".labelBx img");

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle("active")
    })
}

for(let i = 0; i < icon.length; i++){
    icon[i].addEventListener('click',function(){
        if (this.parentElement.parentElement.classList.contains("active")){
            this.setAttribute("src","/assets/images/icon-plus.svg");
        } else {
            this.setAttribute("src","/assets/images/icon-minus.svg")
        }
    });
}