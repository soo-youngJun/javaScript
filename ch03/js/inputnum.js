var n = 1;
var i = prompt("자연수를 입력하세요", 1);

if(i !==  null){
    while(true){
    document.write(n + "<br>");
    n += 1;
    if(n > i){ //반복 조건문
        break;
    }
}
}else{
    document.write("입력이 취소되었습니다.");
}