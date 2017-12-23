import React from 'react';



//React 시맨틱 UI를 이용해서 여러가지 기능 구현하기

//https://react.semantic-ui.com/collections/form#form-example-form
//관련 사이트




//시맨틱 ui react기능을 설치한후 거기서 {Button}을 꺼내온다
//그리고 이 버튼에 대한 스타일을 적용하고 싶으면 
//<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />를 
//public에 index.html에 이것을 head태그사이에 넣어줘야한다
//import { Button } from 'semantic-ui-react';


import { Button, Checkbox, Form } from 'semantic-ui-react';


//axios를 가져다 쓰기위해서 import를 함
import axios from 'axios';


import './Login.css';


class Login extends React.Component{
    
    
    constructor(){
        
        super();
        
        this.state={
            
            username:'',
            userpass:''
        
        }
        
        this.handleUserName=this.handleUserName.bind(this);
        this.handleUserPass=this.handleUserPass.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    
    }
    
    
    
    
    
//handleUserName과 handleUserPass라는 사용자 메소드를 만듬
//이 메소드는 해당 input태그에 입력했을때 그 입력한 값이 위의 this.state의 username과 userpass로 들어간다
    handleUserName(event){
        
//    event를 매개변수로 가져와서 그 안에 있는 target속성을 통해 value를 찍으면 해당 벨류값을 가져올수 있다
        console.log('UserName값:',event.target.value);
        
        this.setState({username:event.target.value});
        
        
    }
    
    
    handleUserPass(event){
        
        console.log('UserPass값:',event.target.value);
        
        this.setState({userpass:event.target.value});
        
    }
    
    
    handleSubmit(event){
        
//axios.post를 통해 4000번 login이라는 라우터로 실행한다
        axios.post('http://localhost:4000/login', 
        {   username:this.state.username, 
            userpass:this.state.userpass}).then( (response)=>{
//then의 의미는 해당 axios.post를 성공하면 실행한다는 의미이다
            
//axios를 통해 넘어온 여러개중에 data를 찍어낸다            

            console.log(response.data);
            
            
            let {success, error}=response.data;
            
//이렇게 적어주면 밑에서 this.props.history가 아닌 history만 적어줄수 있다
//            let {history}=this.props;
            
            if(success===1){
                        
                this.props.history.push('/company');
                        
            }else if(success===2){
                
                this.props.history.push('/register');
                
            }else if(error===-1){
                
                alert('비밀번호가 맞지 않습니다');
                
//에러 1이 뜨면 그냥 아무것도 실행시키지 않고 return해줌
                return;
                
            }
        });
            
    }  
                
    
    
    
    
    
    
    
    
    
//onChange는 해당 값이 변할때마다 일어나는 이벤트이다    
    
    render(){

         return(
            <div className="login-bg">
            
            <div className="login">
            
            <h3>===Login.js===</h3>
            
            <Form>
            <Form.Field>
                  <label>User Name</label>
                  <input placeholder='User Name' onChange={this.handleUserName}/>
            </Form.Field>
            
            <Form.Field>
                  <label>User Password</label>
                  <input placeholder='User Password' onChange={this.handleUserPass}/>
            </Form.Field>

            <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
            
            
            </div>
            
            </div>

         )
    }
    
    
    


}



export default Login;


//return에 이것도 실습해보기
//color를 주고 green을 주면 쉽게 버튼을 구현하고 스타일을 구현할수 있다
//<Button color="green">전송</Button>


//
//            <Form>
//            <Form.Field>
//                  <label>User Name</label>
//                  <input placeholder='User Name' />
//            </Form.Field>
//            <Form.Field>
//                  <label>User Password</label>
//                  <input placeholder='User Password' />
//                </Form.Field>
//
//            <Button>Submit</Button>
//            </Form>
            
//이것의 내용은 해당 react 시맨틱 홈페이지에 Form태그 관련 메뉴에 가장 첫번째 기능을 가져온 것이다







