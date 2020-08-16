import * as firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
}

firebase.initializeApp(config)
firebase.analytics();

// const googleProvider = new firebase.auth.GoogleAuthProvide();    

const database = firebase.database().ref()
const db = firebase.firestore()

// export const dailyDataDB = database.child('dailyData')

export const dailyDataDB = db.collection('dailyData')
