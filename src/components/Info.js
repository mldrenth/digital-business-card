import React from 'react'
import profilepic from '../profilepic.jpeg'
import { MdEmail } from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'

const Info = () => {
    
    return (
        <div id="info-div">
            <img id="profile-pic" src={profilepic} alt="Profile">
            </img>
            <h1 id="dev-name">Marijke Drenth</h1>
            <h3 id="job">Junior Software Developer</h3>
            <h4 id="website">Marijke Drenth website</h4>
            <div id="socials-div">
                <button id="email-button"><MdEmail id="mail-icon"/>Email</button>
                <button id="linkedin-button"><AiFillLinkedin/>LinkedIn</button>
            </div>

        </div>
    )
}

export default Info