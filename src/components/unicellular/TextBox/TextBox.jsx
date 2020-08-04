import React from 'react'
import './text_box.scss'

export default function TextBox(props) {
    return (
        <div className="text_box">
            <div className="text_box_title-container">
                <label className="text_box_title">{props.title}</label>
            </div>
            <div className="text_box_content">
                <p className="text_box_content-para title-text-regular">
                    {props.content}
                </p>
            </div>
        </div>
    )
}
