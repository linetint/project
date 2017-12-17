//기본 초기화를 시켜줌
const express=require('express');

const app=express();

const bodyParser=require('body-parser');


//bodyParser를 사용하기 위해서는 선언해줘야 함
app.use(bodyParser.urlencoded({extended:true}));



























const server=app.listen(4000);