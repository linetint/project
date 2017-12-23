//기본 초기화를 시켜줌
const express=require('express');

const app=express();

const bodyParser=require('body-parser');

const cors=require('cors')();


//bodyParser를 사용하기 위해서는 선언해줘야 함
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors);

//axios통신시 필요한 코드이다
//body를 통해서 데이터가 전달될때 json형태의 데이터로 받는다는 의미이다
app.use(bodyParser.json());


const user=[
    
    {username:'admin', userpass:'1234'},
    {username:'front', userpass:'5678'},
    {username:'back', userpass:'9012'}
        
]



//post명령을 통해 /login라우터로 접속시 해당 함수를 실행함
//post로 던지면 body로 써줘야함
app.post('/login',function(request,response){
    
    
    
     
    let id=request.body.username;
    let pass=request.body.userpass;
    
    
    
    
    var idcheck=user.filter(function(v){

        return id===v.username;
        
        
    });
    
    
    if(idcheck.length>0){
        
        if(idcheck[0].userpass===pass){
            
            response.json({success:1, message:'login success'});
            
        }else{
       
            response.json({error:-1, message:'not match password'});
        }
        
        }else{
     
            response.json({success:2, message:'go to register'});
        }
    
    
    
    
})




//같은폴더내에 있는 data의 내용을 가져와서 상수(변하지 않는 수) companyList에 넣는다는 의미이다
const companyList=require('./data');



//이 경로로 들어오면 함수를 실행해서 밑에 내용을 준다는 의미이다
//response.json(companyList); :json형태로 응답한다(응답 내용은 companyList의 내용)
//get은 요청할때를 의미한다

app.get('/company',(request,response)=>{
    
   response.json(companyList);
    
});




const server=app.listen(4000);


