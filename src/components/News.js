import React from 'react'

const News=(props)=> {
 
  
    let {title,desc,img,url,date}=props;
    var s = new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    return (
        <>
      <div className="card my-4" id="cards" >
      <span class="badge rounded-pill bg-success">{s}</span>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,40):""}</h5>
    <p className="card-text">{desc?desc.slice(0,80):""}</p>
    <a href={url} className='btn btn-primary'>Read more</a>
  </div>
</div>
      </>
    )
  
}

export default News
