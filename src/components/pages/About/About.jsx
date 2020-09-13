import React from 'react'
import TitleBar from '../../multicellular/TitleBar'
import TextBox from '../../unicellular/TextBox'
import './about.scss'

export default function About(props) {
    const data = {
        covidKollamProject: {
            title: "ABOUT COVID KOLLAM",
            content: "This project offers village based covid case details in the district of kollam (Kerala).The information is updated everyday at 7 pm. This is an open source project,so anyone who wants to develop similar projects, we encourage you to utilize the information we are sharing."
        },
        malluNerd: {
            title: "WE ?",
            content: "We are a group of Keralites, aims to  implement our knowledge for the development of various open-source projects. The purpose of our team is to help society, using technology we know. The reason why we are developing such open-source  projects is we want to share the knowledge we have to those who wants to do the same."
        },
        thanks: {
            title: "Thank you",
            content: "First of all we thank our dearest healthworkers, kerala police, other officers and our govt. for showcasing such great resistance against COVID-19. Together we can overcome this hard time. Proud to be Keralites."
        },
        contact: {
            title: "Contact US",
            rumi: "Rumi - ruminajeeb@gmail.com",
            hkv: "Harikrishnan V - brosgiant@gmail.com"
        }
    }
    return (
        <div className="about_page">
            <div className="about-us-container">
                <TextBox {...data.covidKollamProject} />
                <TextBox {...data.malluNerd} />
                <TextBox {...data.thanks} />
                <div>
                    <div className="contact-title">{data.contact.title}</div>
                    <div className="title-text-regular">{data.contact.rumi}</div>
                    <div className="title-text-regular">{data.contact.hkv}</div>
                </div>
            </div>
        </div>
    )
}
