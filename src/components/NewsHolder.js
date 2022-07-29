import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsHolder extends Component {
    static  propTypes={
        pagesize:PropTypes.number,
        country:PropTypes.string,
        cotegory:PropTypes.string

    }
   
    articles=[];
    page=1;
    constructor(props) {
        super(props)
    
        this.state = {
             articles:this.articles,
             page:1,
             loading:false
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cotegory}&apikey=62dd7a8109394aa9802954964d5b9da6&pageSize=${this.props.pagesize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            
        })
        }
    increment=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cotegory}&apikey=62dd7a8109394aa9802954964d5b9da6&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        this.setState({
            loading:true
        });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading:false
        })

    }
     decrement=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cotegory}&apikey=62dd7a8109394aa9802954964d5b9da6&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
           
        })
    }
  render() {
    return (
     <>
     <div className="container">
         <div className="text-center mt-3">
         <h2>NewsMeme</h2> 
         {this.state.loading &&<Spinner/>}
         </div>
     
     <div className="row">
         {!this.state.loading && this.state.articles.map((element)=>{
         return(
  <div className="col-md-4 " key={element.url}>
  <News  title={element.title} desc={element.description} img={element.urlToImage} url={element.url} date={element.publishedAt}/>
  
  </div>  )    })}
  </div>
  <div className="container d-flex justify-content-between mb-4">
  <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.decrement}>&larr; Previous</button>
  <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.increment}>Next&rarr;</button>
  </div>
  </div>

 
     </>
    )
  }
}

export default NewsHolder