import React from 'react'
import './status_card_small_long.scss'

export default function StatuscardSmallLong(props) {
    return (
        <div className="status_card_small_long">
            <label className="status-card-title-text white-font-color">{props.title}</label>
            <label className="status-card-count-text white-font-color">{props.count}</label>
        </div>
    )
}
