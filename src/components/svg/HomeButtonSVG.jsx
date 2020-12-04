import React from 'react'

export default function HomeButtonSVG(props) {
    return (
        <svg width={props.width ? props.width : "19"} height={props.height ? props.height : "19"} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.19785 15.655V10.655H11.1979V15.655C11.1979 16.205 11.6479 16.655 12.1979 16.655H15.1979C15.7479 16.655 16.1979 16.205 16.1979 15.655V8.655H17.8979C18.3579 8.655 18.5779 8.085 18.2279 7.785L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655H2.19785V15.655C2.19785 16.205 2.64785 16.655 3.19785 16.655H6.19785C6.74785 16.655 7.19785 16.205 7.19785 15.655Z" fill={props.enabled ? "#000000" : "#8d989c"} />
        </svg>
    )
}
