let user_hand = prompt('グーかチョキかパーを入力してください');
let js_hand = getJsHand();
let judge = winlose(js_hand, user_hand);

alert('あなたは' + user_hand + '私は' + js_hand + '結果は、、、' + judge);


function getJsHand(){
  let land_num = Math.floor( Math.random() * 3 );
  let hand;
  if(land_num == 0){
    hand = "グー";
  } else if(land_num == 1){
    hand = "チョキ";
  } else{
    hand = "パー";
  }
  
  return hand;
}

function winlose(js_hand, user_hand){
  let winloseStr
  if(js_hand == "グー"){
    if(user_hand == "グー"){
      winloseStr = "あいこ";
    } else if(js_hand == "チョキ"){
      winloseStr = "負け";
    } else {
      winloseStr = "勝ち";
    }
  } else if(js_hand == "チョキ"){
    if(user_hand == "グー"){
      winloseStr = "勝ち";
    } else if(js_hand == "チョキ"){
      winloseStr = "あいこ";
    } else {
      winloseStr = "負け";
    }
  } else{
    if(user_hand == "グー"){
      winloseStr = "負け";
    } else if(js_hand == "チョキ"){
      winloseStr = "勝ち";
    } else {
      winloseStr = "あいこ";
    }
  }
  
  return winloseStr;
}