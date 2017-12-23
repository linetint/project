import React from 'react';

const Card=(props)=>{
    
    
//    {this.props.company}가 아닌 {props.company}라고 써주면 된다(this는 생략해도 됨)
//    어차피 함수형 컴포넌트는 상위 컴포넌트로부터 데이터만 받을수 있기떄문에
    
//    삼항식을 이용해서 props.favorite이 1과 같은 조건이면 참이면 왼쪽을 실행, 거짓이면 오른쪽을 실행한다
    let classes=(props.favorite===1) ? 'favorite active' : 'favorite';

    return(

       <div>
        
        <div className="card">
                
                
                    <div className="thums">
                        <div className="img"></div>
                        <div className="logo"></div>
                    </div>


                    <div className="info">
                        <h3>{props.title}</h3>
                        <div className="company">{props.company}</div>
                        <div className="rebate">채용 보상금 {props.rebate.toLocaleString('en')}원</div>
                    </div>


                    <div className="opt">
                        <div className="recom">
                        
                            {(props.recom > 0) && <span>{props.recom}명 추천</span>}
                        
                        </div>
                        
                        <div className={classes} style={props.styles}></div>
                    </div>
                
                
        </div>

        </div>

    )
    
//    {props.rebate.toLocaleString('en')}은 세자리숫자마다 콤마가 찍히게 하는 자바스크립트 함수이다
    
    
//    {(props.recom > 0) && <span>{props.recom}명 추천</span>}
//    props.recom이 0보다 크면 {props.recom}을 보여줘라
//    {props.recom}을 <span></span>으로 감싸준 이유는 하나의 태그임을 알리기위해서
    

}

export default Card;