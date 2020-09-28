import React from 'react'
import {Link, Element} from 'react-scroll'

// import Navigation from './old/Navigation'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import styles from './css/styles.module.css'

class App extends React.Component {
    render() {
        return (

            <div className={styles.main}>
                <ul className={styles.navbar}>
                    <li style={{float: 'left'}}>
                        <Link activeClass="active"
                            className={styles.navlist_a} 
                            to="homeElement"
                            spy={true}
                            smooth={true}
                            duration={500}
                            style={{padding: '0px',
                                transform: 'translateY(50%)',
                                paddingLeft: '10px',
                                fontSize: '30px'}}> James Rockett
                        </Link>
                    </li>
                    <li className={styles.navlist} style={{marginRight: '50px'}}>
                        <Link activeClass="active" 
                            className={styles.navlist_a} 
                            to="aboutMeElement" 
                            spy={true} 
                            smooth={true} 
                            duration={500}> About Me
                        </Link>
                    </li>
                    <li className={styles.navlist}>
                        <Link activeClass="active" 
                            className={styles.navlist_a} 
                            to="homeElement" 
                            spy={true} 
                            smooth={true} 
                            duration={500}> Home
                        </Link>
                    </li>
                </ul>

                <Element name="homeElement"></Element>
                <Home/>

                <Element name="aboutMeElement"></Element>
                <AboutMe/>

                <Element name="skillsElement"></Element>
                <Skills/>

                <Element name="skillsElement"></Element>
                <Portfolio/>

                <Element name="skillsElement"></Element>
                <Footer/>


                {/* <MRouter/> */}
            </div>
        )
    }
};

export default App