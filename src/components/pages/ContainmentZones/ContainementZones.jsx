import React from 'react'
import CustomReactTable from '../../multicellular/CustomReactTable'
import CradleLoader from '../../unicellular/CradleLoader'
import { containmentZonesDB } from '../../../config/firebase'

// import data from './data.json'
import './containment_zone.scss'

export default function ContainementZones() {
    const containmentZoneDataSessioned = sessionStorage.getItem("containementZoneData")
    const [data, setData] = React.useState(containmentZoneDataSessioned ? JSON.parse(containmentZoneDataSessioned) : null)
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
        const isContainmentZoneDataSessioned = !!sessionStorage.getItem("containementZoneData")
        console.log("isContainmentZoneDataSessioned",isContainmentZoneDataSessioned)
        if(!isContainmentZoneDataSessioned){
            containmentZonesDB.orderBy("dateInNumber", 'desc').limit(1).get().then((documents) => {
                documents.forEach((doc) => {
                    sessionStorage.setItem("containementZoneData",JSON.stringify(doc.data()))
                    setData(JSON.parse(sessionStorage.getItem("containementZoneData")))
                })
            })
        }
        else{
            setData(JSON.parse(sessionStorage.getItem("containementZoneData")))
        }
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
    if (!data) {
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
