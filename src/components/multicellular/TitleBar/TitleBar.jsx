import React from 'react'
import './title_bar.scss'

export default function TitleBar(props) {
    const handleOnClickAbout = () => {
        let path = '/about'
        props.history.push(path)
    }
    const handleOnClickHome = () => {
        let path = '/'
        props.history.push(path)
    }
    return (
        <div className="title-bar">
            <button className={`title-bar-btn ${props.isHomeButtonDisabled ? 'btn-disabled' : ''}`} onClick={handleOnClickHome} disabled={props.isHomeButtonDisabled}>Home</button>
            <label>Covid Kollam</label>
            <button className={`title-bar-btn ${props.isAboutButtonDisabled ? 'btn-disabled' : ''}`} onClick={handleOnClickAbout}  disabled={props.isAboutButtonDisabled}>About us</button>
        </div>
    )
}
