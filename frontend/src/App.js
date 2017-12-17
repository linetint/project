import React from 'react';

import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import Login from './routes/Login.js';

import Company from './routes/Company.js';


export default class App extends React.Component{
    
    render(){
        
        
//:id ->  /company뒤에 어떤 변수가 들어왔을때 그곳으로 이동
        return(
            
        <Router>
            <div className="container">
                <Switch>

                   
                    <Route path="/login" component={Login}></Route>        
                    <Route path="/company" component={Company}></Route>        
                    <Route path="/company/:id"></Route>
                            
                            
                </Switch>
            </div>
        </Router>    
            
        
        
        )
        
        
    }
    
    
}



