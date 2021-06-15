//상세설명 보기 클릭하면 text 보이기
function showText(){
    // var text = document.getElementById("desc");
    // text.style.display = "block"; //수직으로 보이기
    document.getElementById("desc").style.display = "block";


    // var button = document.getElementById("btn");
    // button.style.display = "none";
    document.getElementById("btn").style.display = "none";
}

//상세설명 보기 클릭하면 text 숨기기
function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none"; //텍스트 숨기기

    var button = document.getElementById("btn");
    button.style.display = "block";
}