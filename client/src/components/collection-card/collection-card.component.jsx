import React from 'react'
import './collection-card.styles.scss'

export default function CollectionCard({ name, realTimeUsers, totalVisits, visitDuration, imageUrl }) {
    return (
        <div className="collection-card__card">
            <div className="collection-card__image"
                style={
                    { backgroundImage: `url(${imageUrl})` }
                }></div>
            <div className="collection-card__name-container">
                <h4>{name}</h4>
            </div>
            <div className="collection-card__stats">
                <ul>
                    <li className="collection-card__stat-row">
                        <h5>
                            REALTIME USERS
                        </h5>
                        <h5>
                            {realTimeUsers}
                        </h5>
                    </li>
                    <li className="collection-card__stat-row">
                        <h5>
                            TOTAL VISITS
                        </h5>
                        <h5>
                            {totalVisits}
                        </h5>
                    </li>

                    <li className="collection-card__stat-row">
                        <h5>
                            VISIT DURATION
                        </h5>
                        <h5>
                            {visitDuration}
                        </h5>
                    </li>
                </ul>
            </div>


        </div>
    )
}
