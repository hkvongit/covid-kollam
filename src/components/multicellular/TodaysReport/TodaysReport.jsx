import React from 'react'
import StatusCardLarge from '../../unicellular/StatusCardLarge'
import './todays_report.scss'

const data = {
    title: "Today's Report",
    date: "30 July 2020 - Thursday",
    statusCardDatas: [
        {
            title: "Positive Case",
            count: "126",
            backgroundColor: "var(--status-yellow)"
        },
        {
            title: "Cured",
            count: "173",
            backgroundColor: "var(--status-green)"
        },
        {
            title: "Death",
            count: "3",
            backgroundColor: "var(--status-red)"
        }
    ]

}
export default function TodaysReport() {
    return (
        <div className="todays-report-container">
            <label className="title-text-regular">
                {data.title} : 
                <span className="title-text-thin">
                    {data.date}
                </span>
            </label>
            <div className="status-container">
                {data.statusCardDatas.map((individualStatusData) => {
                    return (
                        <StatusCardLarge {...individualStatusData} key={individualStatusData.title}/>
                    )
                })}
            </div>
        </div>
    )
}
