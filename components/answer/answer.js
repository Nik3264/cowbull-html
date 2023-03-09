import renderNumber from "../number/number.js";
import renderMove from "../move_button/move_button.js";

export default function renderAnswer(numberAnswer){
    const st='st';
    const hidden='st hidden';
    const stN='stN';

    let strRender='';
    let img0='../../img/0.png';
    let img1='../../img/1.png';
    let img2='../../img/2.png';
    let img3='../../img/3.png';
    let img4='../../img/4.png';
    let img5='../../img/5.png';
    let img6='../../img/6.png';
    let img7='../../img/7.png';
    let img8='../../img/8.png';
    let img9='../../img/9.png';
    let imgEmpty = 'img/empty.png';
    let imgUserEmpty = 'img/userempty.png';
    let imgCow='../../img/cow.png';
    let imgBull='../../img/bull.png';
    let imgMove = '../../img/move.png';

    strRender+='<div class="container">';
    //strRender+=renderNumber(300, stN, imgEmpty);
    strRender+=renderNumber(numberAnswer*10+1, st+' selected', imgEmpty);
    strRender+=renderNumber(numberAnswer*10+2, st, imgEmpty);
    strRender+=renderNumber(numberAnswer*10+3, st, imgEmpty);
    strRender+=renderNumber(numberAnswer*10+4, st, imgEmpty);
    //strRender+=renderNumber(300, hidden, imgEmpty);
    //strRender+=renderNumber(numberAnswer*10+5, st, imgMove);
    strRender+=renderMove(numberAnswer*10+5, "", "Move");
    strRender+=renderNumber(numberAnswer*10+6, st, imgUserEmpty);
    strRender+=renderNumber(numberAnswer*10+7, st, imgUserEmpty);
    //strRender+=renderNumber(300, stN, imgEmpty);
    //strRender+=renderNumber(300, stN, imgCow);
    //strRender+=renderNumber(300, stN, imgBull);
    //strRender+=renderNumber(300, stN, imgEmpty);
    //strRender+=renderNumber(300, stN, imgEmpty);

    return(strRender);
    /*
    return ('<div class="container">'+ renderNumber(stN) + renderNumber(stN) + renderNumber(st) + renderNumber(st) + renderNumber(st) + renderNumber(st) + renderNumber(stN) + renderNumber(stN) + renderNumber(stN) +renderNumber(stN) + '</div>');
    */
}