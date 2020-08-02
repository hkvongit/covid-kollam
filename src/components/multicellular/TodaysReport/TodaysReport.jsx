import React from 'react'
import StatusCardLarge from '../../unicellular/StatusCardLarge'
import StatuscardSmallLong from '../../unicellular/StatuscardSmallLong'
import './todays_report.scss'

// const dummyData = {
//     title: "Today's Report",
//     date: "30 July 2020 - Thursday",
//     statusCardDataMain: [
//         {
//             title: "Positive Case",
//             count: "126",
//             backgroundColor: "var(--status-yellow)"
//         },
//         {
//             title: "Cured",
//             count: "173",
//             backgroundColor: "var(--status-green)"
//         },
//         {
//             title: "Death",
//             count: "3",
//             backgroundColor: "var(--status-red)"
//         }
//     ],
//     statusCardDataSub: [
//         {
//             title: "Active Case",
//             count: "1502",
//             backgroundColor: "var(--status-yellow)"
//         },
//         {
//             title: "Quarentined",
//             count: "11203",
//             backgroundColor: "var(--status-green)"
//         }
//     ]

// }
export default function TodaysReport(props) {
    const data = props
    return (
        <div className="todays-report-container">
            <label className="title-text-regular">
                {data.title} :
                <span className="title-text-thin">
                    {data.date}
                </span>
            </label>
            <div className="status-container-main">
                {data.statusCardDataMain.map((individualStatusData) => {
                    return (
                        <StatusCardLarge {...individualStatusData} key={individualStatusData.title} />
                    )
                })}

            </div>
            <div className="status-container-main">
                {data.statusCardDataSub.map((individualStatusData) => {
                    return (
                        <StatuscardSmallLong {...individualStatusData} key={individualStatusData.title} />
                    )
                })}
            </div>
        </div>
    )
}
