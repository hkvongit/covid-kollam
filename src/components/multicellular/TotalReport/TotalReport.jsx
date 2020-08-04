import React from 'react'
import StatusCardLarge from '../../unicellular/StatusCardLarge'

export default function TotalReport(props) {
    // const data = {
    //     title: "Total Report",
    //     statusCardDataMain: [
    //         {
    //             title: "Positive Case",
    //             count: "986",
    //             backgroundColor: "var(--status-yellow)"
    //         },
    //         {
    //             title: "Cured",
    //             count: "786",
    //             backgroundColor: "var(--status-green)"
    //         },
    //         {
    //             title: "Death",
    //             count: "15",
    //             backgroundColor: "var(--status-red)"
    //         }
    //     ]
    // }
    const data = props
    const opacityLevel = 'level-1'
    return (
        <div className="todays-report-container">
            <label className="title-text-regular">
                {data.title}
            </label>
            <div className="status-container-main">
                {data.statusCardDataMain.map((individualStatusData) => {
                    return (
                        <StatusCardLarge {...individualStatusData} key={individualStatusData.title} opacityLevel={opacityLevel} />
                    )
                })}
            </div>
        </div>
    )
}
