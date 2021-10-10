export class Badge {
    constructor({shape_name, background, field, organization_name, tagline, logo_image}) {
        this.outer_div = document.createElement("div");
        this.setShape(shape_name);
        this.setBackground(background);
    }
    setShape(shape_name) {
        shape_name = shape_name.toLowerCase();
        this.outer_div.classList.toggle("badge", true);
        switch (shape_name) {
            case "square": this.outer_div.classList.toggle("badge", true);
                break;
            case "rhombus": this.outer_div.classList.toggle("badge-rhombus", true);
                break;
            case "circle": this.outer_div.classList.toggle("badge-circle", true);
                break;
            case "oval": this.outer_div.classList.toggle("badge-oval", true);
                break;
            case "triangle": this.outer_div.classList.toggle("badge-triangle", true);
                break;
            case "octagon": this.outer_div.classList.toggle("badge-octagon", true);
                break;
            case "star": this.outer_div.classList.toggle("badge-star", true);
                break;
        }
    }
    setBackground(background){
        if(background.type === "bg-color"){
            this.outer_div.style.backgroundColor = background.color;
        }
        else if(background.type === "bg-gradient"){
            this.outer_div.style.background = `linear-gradient(to bottom right, ${background.color1}, ${background.color2})`;
            // getComputedStyle(this.outer_div);
        }
        else{
            this.outer_div.style.backgroundImage = `url(${background.image_url})`;
            this.outer_div.style.backgroundPosition = `center`;
            this.outer_div.style.backgroundSize = `cover`;
            // console.log(this.outer_div.style.backgroundImage);
        }
    }
    getElement(){
        return this.outer_div;
    }

    

}
//background: #053423;
// background: -webkit-linear-gradient(top left, #053423, #85E4A4);
// background: -moz-linear-gradient(top left, #053423, #85E4A4);
// background: linear-gradient(to bottom right, #053423, #85E4A4);