import renderNumber from "../number/number.js";

export default function renderGuess(){
    const st='st';
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
    let imgUserEmpty = '../../img/userempty.png';
    let imgCow='../../img/cow.png';
    let imgBull='../../img/bull.png';

    strRender+='<div class="container">';
    //strRender+=renderNumber(300, stN, imgEmpty);
    strRender+=renderNumber('guess1', stN, imgEmpty);
    strRender+=renderNumber('guess2', stN, imgEmpty);
    strRender+=renderNumber('guess3', stN, imgEmpty);
    strRender+=renderNumber('guess4', stN, imgEmpty);
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