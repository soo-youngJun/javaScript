var count = 0;
var n=parseInt(prompt=("숫자를 입력하세요", 1));

for(var i=1; i<=100; i++){
    if(i % n === 0){
        document.write(i + ', ');
        count += 1;
    }
}
document.write('<br>');
document.write(n + "<p>의 배수의 개수 : " + count + "</p>");