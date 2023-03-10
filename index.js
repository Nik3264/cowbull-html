
import renderGuess from "./components/guess/guess.js";
import renderAnswer from "./components/answer/answer.js";
import renderContainer from "./components/container_numbers/container_numbers.js";

const lineOfNumbers=document.querySelector('.line-of-numbers');
const guess=document.querySelector('.guess');
const answers=document.querySelector('.answers');
const chooseNumbers=document.querySelector('.choose-numbers');
const modal=document.querySelector('.modal');
const maxResponseNumber=7;

const getGuessNumbers=()=>{
    const randomArray=[0,0,0,0];
    const arrNumbers=[0,1,2,3,4,5,6,7,8,9];
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    for (let i=0;i<4;i++){
        let index=getRandomInt(arrNumbers.length);
        randomArray[i]=arrNumbers[index];
        arrNumbers.splice(index,1);
    }      
    return randomArray;
};

let win;
let guessNumbers;
let response;
let responseNumber;


function init (){
    lineOfNumbers.innerHTML=renderContainer(0);
    guess.innerHTML=renderGuess();
    answers.innerHTML=renderAnswer(1);
    chooseNumbers.innerHTML=renderContainer(10);
    win=false;
    guessNumbers=getGuessNumbers();
    response=[['','','','']];
    responseNumber=1;
    modal.classList.remove('anime');      
    modal.classList.add('hidden');
}

init();

document.addEventListener( "contextmenu", function(e) {
    e.preventDefault();
  });

document.addEventListener("mousedown", (e)=>{
    let idClicked=400;
    e.preventDefault();
    //event.button == 0 – левая кнопка
    //event.button == 2 – правая кнопка
    const mouseButton=e.button;

    let target = e.target;

    if (target.tagName == 'HTML' || target.tagName == 'BODY'){return;}

    while (target.parentNode.tagName !='BODY' && target.getAttribute("id") === null) {
       target = target.parentNode;
    } //while

    if (target.getAttribute("id") !== null){
        idClicked=target.getAttribute("id");
    }

    if (idClicked=='start'){
        //rerender all
        init();
    }

    if (mouseButton==0 && (idClicked<=10)){
        markSelectLineNumber(idClicked);
    }

    if (mouseButton==2 && (idClicked<=10)){
        markDeleteLineNumber(idClicked);
    }

    if (mouseButton==0 && (idClicked>=responseNumber*10+1) && (idClicked<=responseNumber*10+4)){
        markUserNumber(idClicked);
    }

    if (mouseButton==0 && (idClicked>=100) && (idClicked<110)){
        setUserNumber(idClicked);
    }

    if (mouseButton==0 && (idClicked==(responseNumber*10+5))){   
        moveHandler();    
    }//кнопка move

    if (mouseButton==0 && (idClicked=='guess3')){
        if (e.altKey && e.shiftKey) {
           showRes(); 
        }        
    }

    return;
});


function markSelectLineNumber(id){
    const button=document.getElementById(id);
    button.classList.toggle('selected');
}

function markDeleteLineNumber(id){
    const button=document.getElementById(id);
    button.classList.toggle('deleted');
}

function markUserNumber(id){
    const button=document.getElementById(id);
    for (let i=responseNumber*10+1; i<=responseNumber*10+4;i++){
        let elemetn=document.getElementById(i);
        elemetn.classList.remove('selected');
    }
    button.classList.add('selected');
}

function setUserNumber(id){
    const button=document.getElementById(id);
    for (let i=100; i<110;i++){
        let elemetn=document.getElementById(i);
        elemetn.classList.remove('selected');
    }
    button.classList.add('selected');
    let i=1;
    while(i<=4){
        let responseNumberSelected=document.getElementById(`${responseNumber*10+i}`);
        if (responseNumberSelected.classList.contains('selected')){
            responseNumberSelected.innerHTML=`
                <img src="img/${id-100}.png" alt="">
            `;
            responseNumberSelected.classList.remove('selected');
            response[responseNumber-1][i-1]=id-100;
            console.log(response);

            if(i===4){
                responseNumberSelected=document.getElementById(`${responseNumber*10+1}`);
                responseNumberSelected.classList.add('selected');
            } else {
                responseNumberSelected=document.getElementById(`${responseNumber*10+i+1}`);
                responseNumberSelected.classList.add('selected');
            }
            i=5;
        } else i++;
    } 
}

function moveHandler(){    
    //перевірити чи нема повторів 
    let repeat=isRepeat();
    if(!repeat){            
        removeUserSelect();//прибрати виділення
        let {cow,bull}=countCowBull();//підрахувати cow bull 

        if (bull===4){
            win=true;
        }
        //вивести результат: cow responseNumber*10+6, bull responseNumber*10+7
        renderCowBull(cow,bull);
        console.log('1');
        hiddenMoveButton();
        console.log('2');
        if(!win && responseNumber<maxResponseNumber){
            responseNumber++;
            response[responseNumber-1]=['','','',''];
            addUserResponse();// додавання нового рядка відповіді
            console.log('3');
        } else {//game over
            showGuessNumbers();
            setTimeout(()=>{
                showModal();
            },1000);                
        }   
    } 
}//moveHendler

function isRepeat(){
    let repeat=false;
    for (let i=0; i<4;i++){
        let n=response[responseNumber-1][i];
        for (let j=i+1;j<4;j++){
            if (typeof(n)!='number' || 
                typeof(response[responseNumber-1][j])!='number' || 
                n==response[responseNumber-1][j]){
                repeat=true;
            }
        }
    }
    return repeat;
}

function removeUserSelect(){
    let elemetn;
    for (let i=responseNumber*10+1; i<=responseNumber*10+4;i++){
        elemetn=document.getElementById(i);
        elemetn.classList.remove('selected');
    }
}

function countCowBull(){
    let cow=0, bull=0;  
    for(let i=0;i<4;i++){
        if(response[responseNumber-1][i]===guessNumbers[i]){
            bull++;
        }
        if (guessNumbers.indexOf(response[responseNumber-1][i])>-1 &&
            guessNumbers.indexOf(response[responseNumber-1][i])!=i
        ){
            cow++;
        }
    }
    return {cow,bull};
}

function renderCowBull(cow,bull){
    let responseElement=document.getElementById(`${responseNumber*10+6}`);
    responseElement.innerHTML=`
                <img src="img/${cow}.png" alt="">
            `;
    responseElement=document.getElementById(`${responseNumber*10+7}`);
    responseElement.innerHTML=`
                <img src="img/${bull}.png" alt="">
            `;
}

function hiddenMoveButton(){
    let responseElement=document.getElementById(`${responseNumber*10+5}`);    
    responseElement.classList.add('hidden');
}

function addUserResponse(){
    let template = document.createElement('template');
    template.innerHTML = renderAnswer(responseNumber).trim();
    answers.appendChild(template.content.firstChild);
    //виділити першу клітинку
    let elemetn=document.getElementById(responseNumber*10+1);
    elemetn.classList.add('selected');    
}

function showGuessNumbers(){
    for (let i=0;i<4;i++){
        let showGuess=document.querySelector(`#guess${i+1}`);
        showGuess.innerHTML=`
            <img src="img/${guessNumbers[i]}.png" alt="">
        `;
    }
}

function showModal(){
    let modalHeader=document.querySelector('.modal-header');
    if (win){                        
        modalHeader.innerText = 'You win!';
    } else {
        modalHeader.innerText = 'Try again!';
    }
    modal.classList.remove('hidden');      
    modal.classList.add('anime');
}

function showRes(){
    showGuessNumbers();
    setTimeout(()=>{
        hideGuessNumbers();
    },1000);
}

function hideGuessNumbers(){
    for (let i=0;i<4;i++){
        let showGuess=document.querySelector(`#guess${i+1}`);
        showGuess.innerHTML='<img src="img/userEmpty.png" alt="">';
    }
}

