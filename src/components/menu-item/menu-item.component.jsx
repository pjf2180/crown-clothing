import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'


export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) =>{
    console.log(match);
    console.log(history);
    return <div onClick={()=> history.push(`${match.url}${linkUrl}`)}
        className={`${size} menu-item`}>

        <div className="background-image"
            style={
                { backgroundImage: `url(${imageUrl})` }
            }></div>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop</span>
        </div>
        
    </div>
}

export default withRouter(MenuItem);