//fs 모듈 - 파일을 다루는 모듈, nodejs 모듈
//.readFile(filename, [encoding], 콜백함수)
//.writeFile(filename, data, [encoding], 콜백함수)


//파일 기록하기
var fs = require('fs');

/*fs.writeFile("./output/sample.txt", "안녕하세요", 'utf-8', function(err) {
    if(err) {
        console.log("파일 쓰기 도중 에러 발생", err);
        return;
    }
    console.log("파일 쓰기 성공");
});*/

fs.readFile("./output/sample.txt", "utf-8", function(err, data){
    if(err) {
        throw err;
    }
    console.log(data.toString());
});