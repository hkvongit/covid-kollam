import React from 'react'
import './nav_bar.scss'
import NavBarButton from '../../unicellular/NavBarButton/index'
import { HomeButtonSVG, ContainmentZoneSVG, AboutButtonSVG } from '../../svg'
import {
    DASHBOARD_PAGE,
    CONTAINMENT_ZONE_PAGE,
    ABOUT_PAGE
} from '../../constants/NumberConstants'

export default function NavBar(props) {
    const [homeButtonState, setHomeButtonState] = React.useState(false)
    const [containamentZonesButtonState, setContainamentZonesButtonState] = React.useState(false)
    const [aboutButtonState, setAboutButtonState] = React.useState(false)
    React.useEffect(() => {
        switch (props.activePage) {
            case DASHBOARD_PAGE:
                setHomeButtonState(true)
                setContainamentZonesButtonState(false)
                setAboutButtonState(false)
                break;
            case CONTAINMENT_ZONE_PAGE:
                setHomeButtonState(false)
                setContainamentZonesButtonState(true)
                setAboutButtonState(false)
                break;
            case ABOUT_PAGE:
                setHomeButtonState(false)
                setContainamentZonesButtonState(false)
                setAboutButtonState(true)
                break;

        }
    }, [props.activePage])

    const handleButtonClick = (path) => {
        props.history.push(path)
    }
    return (
        <div className="nav_bar">
            <NavBarButton
                primaryText="Home"
                // secondaryText="text"
                enabled={homeButtonState}
                render={
                    <HomeButtonSVG
                        enabled={homeButtonState}
                    />
                }
                onClick={() => handleButtonClick('/')}
            />
            <NavBarButton
                // primaryText="Containment"
                // secondaryText="Zones"
                primaryText="Zones"
                render={
                    <ContainmentZoneSVG
                        enabled={containamentZonesButtonState}
                    />
                }
                enabled={containamentZonesButtonState}
                onClick={() => handleButtonClick('/containment-zones')}

            />
            <NavBarButton
                primaryText="About Us"
                enabled={aboutButtonState}
                render={
                    <AboutButtonSVG
                        enabled={aboutButtonState}
                    />
                }
                onClick={() => handleButtonClick('/about')}
            />
        </div>
    )
}
