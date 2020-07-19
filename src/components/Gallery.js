import React, {Component} from 'react';
import axios from 'axios';
import HitItem from "./HitItem";
import SearchHitForm from "./SearchHitForm";
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
            currentkeyword:'',
            totalPages:1,
            pages:[]
        }
    }
    componentDidMount() {
       // this.getHits();
    }

    getHits(keyword){
        let url="https://pixabay.com/api/?key=17003732-cbfe34ee6fe71ff52a5f68af4&q"
            +keyword + "&page="+this.state.currentPage +"&per_page="+this.state.pageSize;
        axios.get(url).then( (resp) =>{
            //console.log(resp);
            let totalP=(resp.data.totalHits%this.state.pageSize===0)
                ?resp.data.totalHits/this.state.pageSize:1+Math.floor(resp.data.totalHits/this.state.pageSize);
            this.setState({
                hits:resp.data.hits,
                totalPages:totalP,
                pages : new Array(totalP).fill(0),
                currentkeyword:keyword
            })
        }).catch((err=>{
            console.log(err)
        }))
    }

    search=(keyword)=>{

        this.setState({
            currentPages: 1,
            pages: []
        },()=>{
            this.getHits(keyword);
        })

    }
    gotoPage=(page)=>{
        this.setState({
            currentPage:page
        },()=>{
            this.getHits(this.state.currentkeyword);
        });
       // console.log(this.state.currentPage);
       // console.log(page);

   }
    render() {
        return (
            <div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                                <li key={index}>
                                    <button className={this.state.currentPage===index+1?'btn btn-primary':'btn btn-link'} onClick ={()=>this.gotoPage(index+1)}>{index+1}</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <SearchHitForm onSearch={this.search}/>
            <div className="row">
                {
                    this.state.hits.map(hit=>
                      <HitItem hit={hit} details={false} key={hit.id}/>
                    )
                }
            </div>

            </div>
        );
    }
}

Gallery.propTypes = {};

export default Gallery;
