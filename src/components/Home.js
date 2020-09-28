import React from 'react'

import styles from '../css/styles.module.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.background_home}>
                <h1 className={styles.home}>James<br></br>Rockett</h1> 
                {/* <h1 className={styles.home}> Developer </h1>
                <h1 className={styles.home} style={{paddingLeft: '35%',
                                                paddingBottom: '200px'}}> James Rockett</h1>
                <p className={styles.bottom_div} style={{paddingBottom: '400px'}}> </p> */}
            </div>
        )
    }
}