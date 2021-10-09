class Badge {
    constructor(shape_name, background, field, organization_name, tagline, logo_image) {
        this.outer_div = document.createElement("div");
        this.setShape(shape_name);
        this.setBackgorund(background);

    }
    setShape(shape_name) {
        shape_name = shape_name.toLowerCase();
        this.outer_div.classList = [];
        switch (shape_name) {
            case "square": this.outer_div.classList.add("badge");
                break;
            case "rhombus": this.outer_div.classList.add("badge-rhombus");
                break;
            case "circle": this.outer_div.classList.add("badge-circle");
                break;
            case "oval": this.outer_div.classList.add("badge-oval");
                break;
            case "triagle": this.outer_div.classList.add("badge-triangle");
                break;
            case "octagon": this.outer_div.classList.add("badge-octagon");
                break;
            case "star": this.outer_div.classList.add("badge-star");
                break;
        }
    }
    setBackgorund(background){
        if(background.type === "color"){
            this.outer_div.style.backgroundColor = background.color;
        }
        else if(background.type === "gradient"){
            this.outer_div.style.backgroundColor = `linear-gradient(to bottom right, ${background.color1}, ${background.color2});`;
        }
        else{
            this.outer_div.style.backgroundImage = background.image_name;
        }
    }

}
//background: #053423;
// background: -webkit-linear-gradient(top left, #053423, #85E4A4);
// background: -moz-linear-gradient(top left, #053423, #85E4A4);
// background: linear-gradient(to bottom right, #053423, #85E4A4);