import React from 'react'
import HomeButtonSVG from '../../svg/HomeButtonSVG'
import './nav_bar_button.scss'

export default function NavBarButton(props) {
    let customContainerClass = props.enabled ? 'enable_nav_button' : ''
    let enabledTextColor = props.enabled ? 'enable_nav_button_text' : ''
    const ButtonText = (text) => {
        return (
            <label className="nav_bar_button-primary-text nav-bar-text">
                {text}
            </label>
        )
    }
    return (
        <div className={`nav_bar_button ${customContainerClass}`} onClick={() => props.onClick()}>
            <div className={`nav_bar_button_inner_container ${customContainerClass}`}>
                {/* <HomeButtonSVG 
                    enabled = {props.enabled}
                /> */}
                {props.render}
                <div className={`nav_bar_button-text-container ${enabledTextColor}`}>
                    {props.primaryText ? ButtonText(props.primaryText) : null}
                    {props.secondaryText ? ButtonText(props.secondaryText) : null}
                </div>
            </div>
        </div>
    )
}
