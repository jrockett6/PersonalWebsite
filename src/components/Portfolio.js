import React from 'react'

import iconResume from '../assets/iconresume.png'
import iconGithub from '../assets/icongithub.png'
import iconLinkedIn from '../assets/iconlinkedin.png'
import styles from '../css/styles.module.css'

export default class Portfolio extends React.Component {
    render() {
        return (
<div className={styles.divPortfolio}>   

    <h2 className={styles.headers} style={{maxWidth: '130px'}}>
        Portfolio
    </h2>
    <div style={{margin: 'auto', textAlign: 'center'}}>
        <p className={styles.text_aboutme} style={{maxWidth: 'none', paddingTop: '20px', paddingBottom: '10px'}}>
        If you'd like to see more, please check out my:  </p>
    </div>
    <div style={{display: 'inline-block'}}>
        <a href='/Users/jrockett/Documents/cs/react_practice/my-app/src/assets/resume.pdf' download 
            style={{float: 'left', textDecoration: 'none'}}>
                <img src={iconResume} alt='IconResume' className={styles.logos} title='Resume'
                style={{marginLeft: '30px', marginRight: '30px', marginBottom: '0px'}}/>
                <p className={styles.text_aboutme} style={{color: '#000'}}>Resume</p>
        </a>
        <a href='https://github.com/jrrockett' target='_blank' 
            style={{float: 'left', textDecoration: 'none'}}>
                <img src={iconGithub} alt='IconGithub' className={styles.logos} title='Github'
                style={{marginLeft: '30px', marginRight: '30px', marginBottom: '0px'}}/>
                <p className={styles.text_aboutme} style={{color: '#000'}}>Github</p>
        </a>
        <a href='https://www.linkedin.com/in/jamesvrockett/' target='_blank' 
            style={{float: 'left', textDecoration: 'none'}}>
                <img src={iconLinkedIn} alt='IconLinkedIn' className={styles.logos} title='LinkedIn'
                style={{marginLeft: '30px', marginRight: '30px', marginBottom: '0px'}}/>
                <p className={styles.text_aboutme} style={{color: '#000'}}>LinkedIn</p>
        </a>
    </div>
    <div style={{paddingTop: '40px'}}>
        <p className={styles.text_aboutme} style={{float: 'center', maxWidth: '400px'}}> Contact me: <span>jr.rockett@gmail.com</span></p>
    </div>
</div>
        )
    }
}