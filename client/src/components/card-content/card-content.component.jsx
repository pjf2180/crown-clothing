import React from 'react';
import './card-content.styles.scss'


export default function CardContent(ContentComponent) {
    const content = (props) => (
        <div className="card-content__card">
            <h2 className="card-content__heading-container">{props.heading}</h2>
            <ContentComponent {...props} />
        </div>
    );
    return content;
}
