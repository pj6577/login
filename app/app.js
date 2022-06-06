

//모듈
const express = require("express");
const bodyParser = require("body-Parser");
const app = express();



//라우팅
const home = require("./src/routers/home"); 

const path = require('path'); 
app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.set('views', path.join(__dirname, "./src/views")); //폴더, 폴더경로 지정
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//url을 통해 전달되는 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);  //use  - > 미들 웨어를 등록해주는 메서드.



module.exports = app;

// package.json
