import React from 'react'
import CustomReactTable from '../CustomReactTable'
import './village_daily_positive_report.scss'

export default function VillageDialyPositiveReport(props) {
    const title = "Local Administration Daily Data ( Villages ) "
    const data = props.villageData
    const columns = React.useMemo(
        () => [
            {
                Header: 'Locality / Village',
                accessor: 'locality',
                align: "center",
                Cell: props => { return <span style={{ display: 'block', width: '100%', textAlign: props.cell.column.align }}>{props.cell.value}</span> }
            },
            {
                Header: "Today's Positive cases",
                accessor: 'count',
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                align: "center",
                Cell: props => { return <span style={{ display: 'block', width: '100%', textAlign: props.cell.column.align }}>{props.cell.value}</span> }
                // disableFilters: true
            }
        ],
        []
    )
    return (
        <div className="village_daily_positive_report-container">
            <div className="village_daily_positive_report-title-and-dowload">
                <label className="village_daily_positive_report-title title-text-regular">
                    {title}
                </label>
                <a
                    className="text-title-micro download-report-anchor"
                    href={props.reportDocLink}>
                    Download Report
                </a>
            </div>
            <CustomReactTable data={data} columns={columns} />
        </div>
    )
}
