import React from 'react';

//Company.css를 가져옴
import './Company.css';


import Card from '../components/Card.js';

//http를 통신하기위해서 axios기능을 가져온다
import axios from 'axios';


class Company extends React.Component{
    
    
    constructor(){
        
        
        super();
        
//        this.state에 밑에서 정의한 companyArray를 넣어서 사용할수 있다(실습해보고 지운 상태)
        
        this.state={
            
        companyArray:[
            
               {company:"GS SHOP",
                title:"보안 솔류션 담당자",
                rebate:1000000,
                recom:11,
                favorite:0},
            
            
            
        ]
            ,type:"전체"
        
        }
        
        this.handleClick=this.handleClick.bind(this);
        this.handleCategory=this.handleCategory.bind(this);
        
    }
    
//    componentDidMount는 랜더링을 한번 마친후 실행시키는 메소드이다
//    (최초 1회 한번만 실행함)
//    근데 여기서 this.state를 수정하게 되면 다시 한번 랜더링을 하게 된다
    
        componentDidMount(){
        
            
        
//    axios를 통해 'http://localhost:4000/company'의 경로에서 해당 경로에 있는 데이터를 가져온다는 의미이다
//            아까 만들었던 데이터를 가져옴
        axios.get('http://localhost:4000/company').then( (response)=>{
        

    //            concat은 배열과 배열을 합함
            const data=this.state.companyArray.concat(response.data.company);
            

            console.log(response.data);
            
            this.setState({
                
                companyArray:data
                
            })
            
            
                
            });
            
        }
    
    
//    카드를 클릭했을때 실행하는 메소드이다
    handleClick(company_id){
        
        console.log(company_id);
        
        this.props.history.push(`/company/${company_id}`);
        
        
    }
    
    handleCategory(event){
        
//        event안에 있는 target의 innerHTML(HTML내부에 있는 내용)을 가져옴
        this.setState({type:event.target.innerHTML});
        
    }
    

    
    
    
    
    render(){
        
//여기서 user_style의 값을 만든후 이 값을 styles라고 하는 것을 통해 Card.js의 props로 넘겨준다
//대신 여기서 this.user_style라고 쓸 이유가 없는 것이 user_style은 함수내에서 사용한 것이기 때문이다            
        let user_style={
        
        backgroundColor:"red",
        
        }
        
//이렇게 위에서 배열형태로 객체정보를 만들어서 밑에서 가져다 쓸수도 있다
//        const companyArray=[
//            
//               {company:"GS SHOP",
//                title:"보안 솔류션 담당자",
//                rebate:1000000,
//                recom:11,
//                favorite:0},
//            
//               {company:"망고 플레이트",
//                title:"Web Frontend Software Engine",
//                rebate:1000000,
//                recom:36,
//                favorite:1},
//            
//               {company:"매스프레소",
//                title:"Android Develop",
//                rebate:1000000,
//                recom:0,
//                favorite:0},
//            
//               {company:"매스프레소",
//                title:"iOS Develop",
//                rebate:1000000,
//                recom:0,
//                favorite:0},
//            
//        ]
        
        
        
        const {companyArray, type}=this.state;
        
        
        const newArray=companyArray.filter((v)=>{
            
            if(type==='전체'){
                
                return v;
                
            }
            
            return v.type===type;
            
            
        });
        
        
        
        
        
        
        
//        list를 만들고 거기에는 companyArray를 map하는 함수내용을 담고 밑에 리턴값안에 {list}를 써서 뿌려줄수있다
//        배열 갯수만큼 뿌려지니 4번 뿌려진다

//        const list=companyArray.map((value)=>{
        const list=newArray.map((value)=>{
            
           return (
           
               <Card
                   cardLink={this.handleClick}
                   key={value.id}
                   company_id={value.id}
                   company={value.name}
                   title={value.title}
                   rebate={value.rebate}
                   recom={value.recommendation}
                   favorite={value.favorite}
               
               />
           
           )
            
        });
        
        

         return(

            <div>
            
             <ul className="category">
               
                <li onClick={this.handleCategory}>전체</li>
                <li onClick={this.handleCategory}>프론트엔드개발자</li>
                <li onClick={this.handleCategory}>백엔드개발자</li>
                <li onClick={this.handleCategory}>앱개발자</li>
             
             </ul>
             
               
            <div className="list">
                

                  
                   {list}
             
             
            </div>
                
                
            </div>
        
         )
        
//        rebate={1000000}는 1000000을 숫자로 넘길때 {}를 사용한다
//        favorite={0}과 favorite={1}은 0일때는 동그란 태그를 흰색으로 1일때는 빨간색으로 채운다
    }


}



export default Company;



//                  <Card title="보안 솔루션 담당자" company="GS SHOP" recom={11} rebate="1000000" favorite={0}/>
//                  <Card title="Web Frontend Software" company="망고 플레이트" recom={36} rebate={1000000} styles={user_style} favorite={1} />
//                  <Card title="Android Develop" company="매스프레소" rebate="1000000"/>
//                  <Card title="iOS Develop" company="매스프레소" rebate="1000000"/>

//이것들을 여기서 일단 구현해보고 구현하고 난후 나중에 여기에 있는 이것을 지워주고 Card.js에 붙여넣기 

//                <div className="card">
//                
//                
//                    <div className="thums">
//                        <div className="img"></div>
//                        <div className="logo"></div>
//                    </div>
//
//
//                    <div className="info">
//                        <h3>보안 솔루션 담당자</h3>
//                        <div className="company">GS SHOP</div>
//                        <div className="rebate">채용 보상금 1,000,000원</div>
//                    </div>
//
//
//                    <div className="opt">
//                        <div className="recom">11명 추천</div>
//                        <div className="favorite"></div>
//                    </div>
//                
//                
//                </div>
//                
//                
//                
//                <div className="card">
//                
//                
//                    <div className="thums">
//                        <div className="img"></div>
//                        <div className="logo"></div>
//                    </div>
//
//
//                    <div className="info">
//                        <h3>Web Frontend Software</h3>
//                        <div className="company">망고 플레이트</div>
//                        <div className="rebate">채용 보상금 1,000,000원</div>
//                    </div>
//
//
//                    <div className="opt">
//                        <div className="recom">36명 추천</div>
//                        <div className="favorite"></div>
//                    </div>
//                
//                
//                </div>
//                
//                
//                
//                 <div className="card">
//                
//                
//                    <div className="thums">
//                        <div className="img"></div>
//                        <div className="logo"></div>
//                    </div>
//
//
//                    <div className="info">
//                        <h3>Android Develop</h3>
//                        <div className="company">매스프레소</div>
//                        <div className="rebate">채용 보상금 1,000,000원</div>
//                    </div>
//
//
//                    <div className="opt">
//                        <div className="recom"></div>
//                        <div className="favorite"></div>
//                    </div>
//                
//                
//                </div>
//                
//                
//                
//                <div className="card">
//                
//                
//                    <div className="thums">
//                        <div className="img"></div>
//                        <div className="logo"></div>
//                    </div>
//
//
//                    <div className="info">
//                        <h3>iOS Develop</h3>
//                        <div className="company">매스프레소</div>
//                        <div className="rebate">채용 보상금 1,000,000원</div>
//                    </div>
//
//
//                    <div className="opt">
//                        <div className="recom"></div>
//                        <div className="favorite"></div>
//                    </div>
//                
//                
//                </div>





              
