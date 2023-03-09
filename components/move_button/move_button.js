
export default function renderMove(id,style, img){
    return (`
        <button id="${id}" class="move ${style}">
        ${img}
        </button>`);
}

//<img src=${img} alt="">