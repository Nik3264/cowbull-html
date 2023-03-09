import renderNumber from "../number/number.js";

export default function renderContainer(idStart){
    const st='st';
    const stN='stN';

    let strRender='';
    let img0='img/0.png';//'../../img/0.png';
    let img1='img/1.png';//'../../img/1.png';
    let img2='img/2.png';//'../../img/2.png';
    let img3='img/3.png';//'../../img/3.png';
    let img4='img/4.png';//'../../img/4.png';
    let img5='img/5.png';//'../../img/5.png';
    let img6='img/6.png';//'../../img/6.png';
    let img7='img/7.png';//'../../img/7.png';
    let img8='img/8.png';//'../../img/8.png';
    let img9='img/9.png';//'../../img/9.png';

    strRender+='<div class="container">';
    strRender+=renderNumber(idStart*10+0, st, img0);
    strRender+=renderNumber(idStart*10+1, st, img1);
    strRender+=renderNumber(idStart*10+2, st, img2);
    strRender+=renderNumber(idStart*10+3, st, img3);
    strRender+=renderNumber(idStart*10+4, st, img4);
    strRender+=renderNumber(idStart*10+5, st, img5);
    strRender+=renderNumber(idStart*10+6, st, img6);
    strRender+=renderNumber(idStart*10+7, st, img7);
    strRender+=renderNumber(idStart*10+8, st, img8);
    strRender+=renderNumber(idStart*10+9, st, img9);

    return(strRender);
    /*
    return ('<div class="container">'+ renderNumber(stN) + renderNumber(stN) + renderNumber(st) + renderNumber(st) + renderNumber(st) + renderNumber(st) + renderNumber(stN) + renderNumber(stN) + renderNumber(stN) +renderNumber(stN) + '</div>');
    */
}