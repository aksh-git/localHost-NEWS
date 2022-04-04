import React from 'react'
import '../App.css'

export default function Spinner(props) {

    let theme = props.theme==='light'?'black':'white';
    return (
        <div className="container text-center">
            <div className="lds-ellipsis"><div style={{background:theme}}></div><div style={{background:theme}}></div><div style={{background:theme}}></div></div>
        </div> 
    )
}
