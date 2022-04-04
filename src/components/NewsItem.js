import React from 'react'
import logo from '../not-found.jpg'

export default function NewsItem(props) {
    let { title, description, imageUrl, readMoreUrl, author, date, source,theme } = props;

    return (
        <>
<div className={`card bg-${theme}`} >
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}> 
                    <span className="news-badge badge bold">{source}</span>
                </div>
<img src={!imageUrl ? logo : imageUrl} className="card-img-top news-image" alt="Article img"/>
                <div className="card-body">
                    <h5 className={`bold ${theme}`}>{title}</h5>
                    <p style={{height:'100px',overflow:'hidden'}} className={`card-text ${theme}`}>{description}</p>
                    <br/>
                    <a style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '5px',marginTop:'-20px'}} rel="noreferrer" href={readMoreUrl} target="_blank" className="readMoreBtn btn btn-secondary btn-sm">Read more</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Published on {new Date(date).toGMTString()} by {!author ? "Unknown" : author}</small>
                </div>
            </div>
        </>
    )
}


