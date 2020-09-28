import React from 'react'

import styles from '../css/styles.module.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.divBottom}>
                <p> Powered by me and my dog ©</p>
            </div>
        )
    }
}