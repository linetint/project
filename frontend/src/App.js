import React from 'react';

import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import Login from './routes/Login.js';

import Company from './routes/Company.js';

import Details from './routes/Details.js';


export default class App extends React.Component{
    
    render(){
        
        
//:id ->  /company뒤에 어떤 변수가 들어왔을때 그곳으로 이동
        
//exact는 정확히 이 주소로만 들어왔을때 보여준다는 것임
        return(
            
        <Router>
            <div className="container">
                <Switch>

                   
                    <Route path="/login" component={Login}></Route>        
                    <Route exact path="/company" component={Company}></Route>        
                    <Route path="/company/:id" component={Details}></Route>
                            
                            
                </Switch>
            </div>
        </Router>    
            
        
        
        )
        
        
    }
    
    
}



