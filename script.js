let result =document.getElementById('result');
let reset=document.getElementById('reset');
function randomGenerator(){
    let winQutos=["Waah Munna Bahut Badhiya","Ye Badhiya tha Guru"," Proud Feel Karwa Diye Tum","Aande wala Burger"];
    let num=Math.floor(Math.random()*4);
    return winQutos[num];
}
let your_choice;
function userInput(n) {
    your_choice = n;
    console.log(your_choice);

    let comp_num = Math.floor(Math.random() * 3) + 1;
    compHand(comp_num);
    userHand(your_choice);



    let Result = WinOrLoss(comp_num, your_choice)

    if (Result == 1) {
        result.innerHTML=`<h2>${randomGenerator()} (You Win!) &#128521;</h2>`;
        reset.innerHTML='<button type="reset" onclick="restart()">Refresh Round</button>'
        document.body.style.background = "green";
    }
    else if (Result == -1) {
        result.innerHTML='<h2>Kya Gunda Banega re Tu (You Loose!) &#128541;</h2>';
        reset.innerHTML='<button type="reset" onclick="restart()">Refresh Round</button>'
        document.body.style.background = "red"
    }
    else {
        result.innerHTML='<h2>Moye.....Moye.....(Match Tied!) &#128530;</h2>';
        reset.innerHTML='<button type="reset" onclick="restart()">Refresh Round</button>'
        
    }
}
const compHand=(num)=>{
    let hand=document.getElementById('compHand');
    if (num==1) {
        hand.innerHTML='<img src="comp-fist.png" alt="">';
    }
    else if(num==2){
        hand.innerHTML='<img src="comp-paper.png" alt="">';
    }
    else{
        hand.innerHTML='<img src="comp-scissors.png" alt="">';
    }
}
const userHand=(user)=>{
    let hand=document.getElementById('userHand');
    if (user==1) {

        hand.innerHTML='<img src="user-fist.png" alt="">';
    }
    else if(user==2){
        hand.innerHTML='<img src="user-paper.png" alt="">';
    }
    else{
        hand.innerHTML='<img src="user-scissors.png" alt="">';
    }
}
const WinOrLoss = (comp_choice, your_choice) => {

    if (comp_choice == 1 && your_choice == 3) {
        return -1;
    }
    else if (comp_choice == 2 && your_choice == 1) {
        return -1;
    }
    else if (comp_choice == 3 && your_choice == 2) {
        return -1;
    }
    else if (comp_choice == 1 && your_choice == 2) {
        return 1;
    }
    else if (comp_choice == 2 && your_choice == 3) {
        return 1;
    }
    else if (comp_choice == 3 && your_choice == 1) {
        return 1;
    }
    else {
        return 0;
    }

}
function restart(){
    let hand=document.getElementById('compHand');
    let userHand=document.getElementById('userHand');
    hand.innerHTML='<img src="comp-fist.png" alt="" class="moving-hand">';
    userHand.innerHTML='<img src="user-fist.png" alt="" class="moving-hand">';
    document.body.style.background = "white"
    result.innerHTML='';
    reset.innerHTML='';

}




