import React from 'react'

import text from '../assets/Text'
import styles from '../css/styles.module.css'


export default class AboutMe extends React.Component {
    render() {
        return (
            <div className={styles.divAboutMe}>
                <div>
                    <h2 className={styles.headers}>About Me</h2>
                </div>
                <div style={{maxWidth: '600px', margin: 'auto', textAlign: 'center'}}>
                    <p1 className={styles.text_aboutme}> 
                        <br></br>{text.aboutMe1} <br></br> {text.aboutMe2}
                    </p1>
                </div>
            </div>
        )
    }
}