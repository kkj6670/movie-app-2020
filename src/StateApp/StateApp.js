import React from "react";

class StateApp extends React.Component{
    
    constructor(props){
        super(props);
        console.log("생성");
    }
    

    state = {
        count : 0
    }

    add = () => {
        this.setState(curr=>({count: curr.count + 1}));
    }

    minus = () => {
        this.setState(curr=>({count: curr.count - 1}));

    }

    componentDidMount() {
        console.log("컴포넌트 마운트!!!");
    }

    componentDidUpdate() {
        console.log("컴포넌트 업데이트!!!");
    }

    componentWillUnmount(){
        console.log("컴포넌트 언마운트!!!");
    }

    render(){
        console.log("렌더링");
        return (
            <div>
                <h1>Num = {this.state.count}</h1>
                <button type="button" onClick={this.add}>+</button>
                <button type="button" onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default StateApp;