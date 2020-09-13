import React from 'react'
import CustomReactTable from '../../multicellular/CustomReactTable'
import CradleLoader from '../../unicellular/CradleLoader'
import { containmentZonesDB } from '../../../config/firebase'

// import data from './data.json'
import './containment_zone.scss'

export default function ContainementZones() {
    const [data, setData] = React.useState(null)
    const title = "Containment Zones in Kollam"
    const columns = React.useMemo(
        () => [
            {
                Header: 'Locality / Village',
                accessor: 'Locality / Village',
                align: "center",
                Cell: props => { return <span style={{ display: 'block', width: '100%', textAlign: props.cell.column.align }}>{props.cell.value}</span> }
            },
            {
                Header: "Wards",
                accessor: 'Wards',
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                // disableFilters: true
            }
        ],
        []
    )
    React.useEffect(() => {
        containmentZonesDB.orderBy("dateInNumber", 'desc').limit(1).get().then((documents) => {
            documents.forEach((doc) => {
                setData(doc.data())
            })
        })
    }, [])
    /*
    componentDidMount() {
        dailyDataDB.orderBy("dateInNumber", 'desc').limit(1).get().then((documents) => {
            documents.forEach((doc) => {
                this.setState({ data: doc.data() })
            })
        })
    }
    */
    if (data == null) {
        return (
            <div className="loader-carrier">
                <CradleLoader />
            </div>
        )
    }
    return (
        <div className="containment_zone-container">
            <label className="title-text-bold containment_zone-title">
                {title}
            </label>

            <CustomReactTable data={data.containmentZoneData} columns={columns} pageSize={15} />
        </div>
    )
}
