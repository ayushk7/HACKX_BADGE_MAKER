import { Badge } from "./model.js";
function getValues() {
    let badgeData = {background: {}};
    badgeData.shape_name = document.getElementById("shape_list").value;
    badgeData.background.color = document.getElementById("color_check").value;
    badgeData.background.color1 = document.getElementById("gradient1").value;
    badgeData.background.color2 = document.getElementById("gradient2").value;
    if(active_bg_option === 'bg-image'){
        if(document.getElementById("image_ip").files.length !== 0){
            badgeData.background.image_url = URL.createObjectURL(document.getElementById("image_ip").files[0]);
        }
        else{
            alert("upload the file first");
        }
    }
    badgeData.field = document.getElementById("field").value;
    badgeData.background.type = active_bg_option;
    badgeData.organization_name = document.getElementById("org-name").value;
    badgeData.field_name = document.getElementById("field").value;
    badgeData.tagline = document.getElementById("tagline").value;
    badgeData.org_name_color = document.getElementById("org-color").value;
    badgeData.tagline_color = document.getElementById("tagline-color").value;
    // badgeData.organization_name = document.getElementById("")                                                            
    return badgeData;
}

const bg_selection = document.getElementById("bg-selection-type");
const bg_options = {
    'bg-color': document.getElementById("bg-color"),
    'bg-gradient': document.getElementById("bg-gradient"),
    'bg-image': document.getElementById("bg-image"),
};

function makeBgOptionsHidden(){
    for(let item in bg_options){
        bg_options[item].classList.toggle("hidden", true);
    }
}
// console.log(bg_selection, bg_options);
let active_bg_option = 'bg-color';
bg_selection.addEventListener("input", () => {
    makeBgOptionsHidden();
    const v = bg_selection.value;
    console.log(v);
    bg_options[v].classList.toggle("hidden", false);
    active_bg_option = v;
});

const generate_btn = document.getElementById("generate-badge-btn");
const bg_panel = document.getElementById("badge-panel");
generate_btn.addEventListener("click", () => {
    const badge_data = getValues();
    const badge_gen = new Badge(badge_data);
    bg_panel.innerHTML = '';
    bg_panel.append(badge_gen.outer_div);
});






