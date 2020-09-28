import React from 'react';
import ppic from '../assets/profile_pic.png'

export default class MePic extends React.Component {
    render() {
        return (
            <img 
                src={ppic}
                alt='profile'
                width={500}
            />
        )
    }
}