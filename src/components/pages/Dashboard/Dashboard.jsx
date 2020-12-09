import React, { Component } from 'react'
import TodaysReport from '../../multicellular/TodaysReport'
import TotalReport from '../../multicellular/TotalReport'
import VillageDialyPositiveReport from '../../multicellular/VillageDailyPositiveReport'
import CradleLoader from '../../unicellular/CradleLoader'
import { dailyDataDB } from '../../../config/firebase'
import './dashboard.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const dailyDataSessioned = sessionStorage.getItem("dailyData")
        if (!dailyDataSessioned) {
            dailyDataDB.orderBy("dateInNumber", 'desc').limit(1).get().then((documents) => {
                documents.forEach((doc) => {
                    sessionStorage.setItem("dailyData", JSON.stringify(doc.data()))
                    this.setState({ data: true })
                })
            })
        }
        else{
            this.setState({ data: true })
        }
    }
    render() {
        if (this.state.data == null) {
            return (
                <div className="loader-carrier">
                    <CradleLoader />
                    <label className="covid-kollam-loader-text">COVID-19 KOLLAM DAILY UPDATES</label>
                </div>
            )
        }
        const data = JSON.parse(sessionStorage.getItem("dailyData"))
        return (
            <div className="dashboard">
                <div className="app-content">
                    <TodaysReport {...data.TodaysReportData} />
                    <VillageDialyPositiveReport villageData={data.VillageStatsData} reportDocLink={data.reportDocLink} />
                    <TotalReport {...data.TotalReportData} />
                </div>
            </div>
        )
    }
}
