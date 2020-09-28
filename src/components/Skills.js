import React from 'react'

import styles from '../css/styles.module.css'
import logoPython from '../assets/logopython.png'
import logoC from '../assets/logoc.png'
import logoPostgres from '../assets/logopostgres.png'
import logoDocker from '../assets/logodocker.png'
import logoGit from '../assets/logogit.png'
import logoGRPC from '../assets/logogrpc.png'
import logoAWS from '../assets/logoaws.png'
import logoS3 from '../assets/logos3.png'
import logoEC2 from '../assets/logoec2.png'
import logoECS from '../assets/logoecs.png'
import logoJS from '../assets/logoJS.png'
import logoCPP from '../assets/logocpp.png'
import logoReact from '../assets/logoreact.png'
import logoKafka from '../assets/logokafka.png'

export default class Skills extends React.Component {
    render() {
        return (
<div className={styles.divSkills}>
    <div>
        <h2 className={styles.headers} style={{maxWidth: '190px'}}>
            Technologies
        </h2>
    </div>
    <div className={styles.div_logos}>
        <p className={styles.text_aboutme} style={{paddingTop: '20px', paddingBottom: '10px'}}>
            I primarily work with: </p>
        <a href='https://www.python.org/' target='_blank'>
            <img src={logoPython} alt='LogoPython' className={styles.logos} title='Python'/>
        </a>
        <a href='https://en.wikipedia.org/wiki/C_(programming_language)' target='_blank'>
            <img src={logoC} alt='LogoC' className={styles.logos} title='C'/>
        </a>
        <a href='https://www.postgresql.org/' target='_blank'>
            <img src={logoPostgres} alt='LogoPG'className={styles.logos} title='PostgreSQL'></img>
        </a>
        <br></br>

        <a href='https://aws.amazon.com/' target='_blank'>
            <img src={logoAWS} alt='LogoAWS'className={styles.logos} title='AWS'></img>
        </a>
        <a href='https://aws.amazon.com/s3/' target='_blank'>
            <img src={logoS3} alt='LogoS3'className={styles.logos} title='AWS S3'></img>
        </a>
        <a href='https://aws.amazon.com/ec2/' target='_blank'>
            <img src={logoEC2} alt='LogoEC2'className={styles.logos} title='AWS EC2'></img>
        </a>
        <a href='https://aws.amazon.com/ecs/' target='_blank'>
            <img src={logoECS} alt='LogoECS'className={styles.logos} title='AWS ECS'></img>
        </a>
        <a href='https://www.docker.com/' target='_blank'>
            <img src={logoDocker} alt='LogoDocker'className={styles.logos} title='Docker'></img>
        </a>
        <a href='https://git-scm.com/' target='_blank'>
            <img src={logoGit} alt='LogoGit'className={styles.logos} title='Git'></img>
        </a>
        <a href='https://grpc.io/' target='_blank'>
            <img src={logoGRPC} alt='LogoGRPC'className={styles.logos} title='gRPC'></img>
        </a>
        {/* <br></br> */}

        <br></br>
        <p className={styles.text_aboutme} style={{paddingTop: '20px', paddingBottom: '10px'}}>
            but I also have experience with: </p>

        <a href='http://www.cplusplus.com/' target='_blank'>
            <img src={logoCPP} alt='LogoC++'className={styles.logos} title='C++'></img>
        </a>
        <a href='https://www.javascript.com/' target='_blank'>
            <img src={logoJS} alt='LogoJS'className={styles.logos} title='Javascript'></img>
        </a>
        <a href='https://reactjs.org/' target='_blank'>
            <img src={logoReact} alt='LogoReact'className={styles.logos} title='React'></img>
        </a>
        <a href='https://kafka.apache.org/' target='_blank'>
            <img src={logoKafka} alt='LogoKafka'className={styles.logos} title='Kafka'></img>
        </a>
    </div>
</div>
        )
    }
}