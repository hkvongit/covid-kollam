import React from 'react'
import './status_card_large.scss'
export default function StatusCardLarge(props) {
    return (
        <div className={`status-card-large ${props.opacityLevel ? ` opacity-${props.opacityLevel}` : null}`} style={{ backgroundColor: props.backgroundColor }}>
            <label className="status-card-title-text white-font-color" >{props.title}</label>
            <label className="status-card-count-text white-font-color">{props.count}</label>
        </div>
    )
}
