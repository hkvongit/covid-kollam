import React from 'react'

export default function ContainmentZoneSVG(props) {
    return (
        <svg width={props.width ? props.width : "20"} height={props.height ? props.height : "20"}
            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.66667C5.40001 1.66667 1.66667 5.40001 1.66667 10C1.66667 14.6 5.40001 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.40001 14.6 1.66667 10 1.66667ZM10.8333 14.1667H9.16667V12.5H10.8333V14.1667ZM10.8333 10.8333H9.16667V5.83334H10.8333V10.8333Z"
                fill={props.enabled ? "#000000" : "#8d989c"}
            />
        </svg>
    )
}
