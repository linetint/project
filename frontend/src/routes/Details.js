import React from 'react';

import './Details.css';


import axios from 'axios';


class Details extends React.Component{
    
    
    
    constructor(){
        
        super();
        
        
        this.state={
            
            details:null,
            
            
        }
    }
    
    
//    ajax를 호출할때는 componentDidMount에서 호출한다
    componentDidMount(){
        
//        this.props.match.params.id값을 company_id에 가져온다
        const company_id=this.props.match.params.id;
        
//       ES6방법으로 ``을 써서 문자열 2개를 붙일수 있다(대신 변수 구별은 ${}를 통해 구분할수 있다)
        axios.get(`http://localhost:4000/company/${company_id}`).then((response)=>{
            
            
            console.log(response.data);
            console.log(response.data[0]);
            
//            this.setState가 변화가 생기면 랜더링을 다시 함
            this.setState({details:response.data[0]})
            
            
        });
    }

    
    
    
    
    
    render(){

//{this.props.match.params.id}:기본적으로 props를 넘겨받게 되는데 거기에는 match가 있다.
//그 match안에 있는 것중 params.id를 찍으면 해당 주소에 친 내용이 똑같이 창에 들어온다
        
//        history:유저가 어떻게 움직였는지
//        match:주소같은 값들을 넘겨받음
        
        
        
//    위에서 response.data를 통해 받아온 데이터를 밑에서 뿌려줘야 마지막으로 끝낸다
        
        
        
        const {details}=this.state;
        
        
        
         return(

            <div>
                
                <div className="details">
                    
                    <div className="left">
                        
                        <div className="photo"></div>
                        <div className="desc">
                            
                            <div className="desc_info">
                                
                                <h2>{details && details.recruit}</h2>
                                <div>{details && details.name}</div>
                                
                            </div>
                            
                            <div className="desc_body">{details && details.name} 채용 정보</div>
                            
                        </div>
                        
                    </div>
                    
                    <div className="right">{details && details.recommendation}</div>
                    
                </div>
            
            </div>

         )
    
    }


}



export default Details;

//return에 이것도 해보기
//                <h4>Details.js</h4>
//                <div>{this.props.match.params.id}</div>
//                <div>{console.log(this.props.match.params.id)}</div>