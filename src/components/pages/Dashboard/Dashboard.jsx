import React, { Component } from 'react'
import TodaysReport from '../../multicellular/TodaysReport'

import './dashboard.scss'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="title-bar">
                    <label>Covid Kollam</label>
                </div>
                <div class="app-content">

                    <TodaysReport />
                </div>
            </div>
        )
    }
}
