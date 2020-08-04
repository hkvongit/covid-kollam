import React, { Component } from 'react'
import TodaysReport from '../../multicellular/TodaysReport'
import TotalReport from '../../multicellular/TotalReport'
import VillageDialyPositiveReport from '../../multicellular/VillageDailyPositiveReport'
import data from '../../../data'
import TitleBar from '../../multicellular/TitleBar'
import './dashboard.scss'

export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <TitleBar history={this.props.history} isHomeButtonDisabled/>
                <div className="app-content">
                    <TodaysReport {...data.TodaysReportData} />
                    <VillageDialyPositiveReport data={data.VillageStatsData} />
                    <TotalReport {...data.TotalReportData} />
                </div>
            </div>
        )
    }
}
