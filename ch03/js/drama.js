// 나이가 15세 이상이면 '관람가' 아니면 '관람불가' 출력
// var age = 20;
var age = prompt("나이를 입력하세요.", 15)

if(age !== null){
    if(age >= 15){
    document.write("드라마 관람가");
    }else{ // (age < 15) 생략됨
        document.write("드라마 관람불가");
    }
    document.write("<br>나이는 " + age + "세 입니다.")
}else{
document.write("입력이 취소되었습니다.")
}