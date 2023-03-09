
export default function renderNumber(id,style, img){
    return (`
        <div id="${id}" class="number ${style}">
        <img src=${img} alt="">
        </div>`);
}

