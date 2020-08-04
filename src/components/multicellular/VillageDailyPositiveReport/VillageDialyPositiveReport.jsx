import React from 'react'
import { useTable } from 'react-table'
import CustomReactTable from '../CustomReactTable'
// import VillageDataTable from '../VillageDataTable'
import {downloadLink} from '../../../data'
import './village_daily_positive_report.scss'

export default function VillageDialyPositiveReport(props) {
    const title = "Local Administration Daily Data ( Villages ) "
    const data = props
    return (
        <div className="village_daily_positive_report-container">
            <div className="village_daily_positive_report-title-and-dowload">
                <label className="village_daily_positive_report-title title-text-regular">
                    {title}
                </label>
                <a
                    className="text-title-micro download-report-anchor"
                    href={downloadLink}>
                    Download Report
                </a>
            </div>
            <CustomReactTable {...data} />
        </div>
    )
}
