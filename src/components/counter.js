import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes, {array, number} from 'prop-types';

class Counter extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            list: [0]
        }
}
compute=(op)=>{
        let sign=op==='+'?1:-1;
         if(this.state.counter===1 && op==='-') sign=0;
        let c=this.state.counter+sign;

        this.setState({
            counter:c,
            list:new Array(c).fill(0)
        });
}
    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                        {this.props.title?this.props.title:'defaulte page'} : {this.state.counter}
                    </strong>
                    </div>
                <div className="ml-auto">
                    <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={()=>this.compute('-')} className="btn btn-primary m-2">-</button>
                </div>
                <div className="card-body">
                    {
                        this.state.list.map((v,index)=>
                            <span key={index}>
                                {index}
                            <img width={100} src={this.props.image?this.image:'images/lg.png'} alt=""/>
                            </span>
                        )
                    }

                   </div>
                </div>

        );
    }
}


export default Counter;
