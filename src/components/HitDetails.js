import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./HitItem";

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            hit:null
        }
    }
    getHits(id){
        let url="https://pixabay.com/api/?key=17003732-cbfe34ee6fe71ff52a5f68af4&id="+id;

        axios.get(url).then( (resp) =>{

            this.setState({
                hit:resp.data.hits[0]

            });
        }).catch((err=>{
            console.log(err)
        }))
    }
    componentDidMount() {
        this.getHits(this.props.match.params.id)
    }

    render() {
        if(this.state.hit!=null)
        return (

            <HitItem hit={this.state.hit} details={true}/>
        );
        else{
            return <div></div>
        }
    }
}

export default HitDetails;