let max = 100;
let num = 1;
let count = 0;

while(max > num){
  num = num * 2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要な回数は' + count + '回');