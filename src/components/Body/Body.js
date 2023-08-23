import React from "react"
import { FaGithub ,FaLinkedin } from "react-icons/fa"
import {AiOutlineDownload}from "react-icons/ai"

import Avatar from "../../assets/Software.jpg"

const Body=()=>{
    return (
        <div className="body">
            <div className="body-container">
                <div className="body-profile">
                <img className="body-img" alt="avatar" src={Avatar}/>
                </div>

                <div className="body-content">
                    <div className="body-headline">Harsh Rathore</div>
                    <div className="body-text">Front-End Developer</div>
                </div>

                <div className="body-icons">
                <a href="https://github.com/RoGue-sudo1" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/rathoreharsh-o1/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                </div>
                <div className="body-download">
                   <a href="https://drive.google.com/file/d/1gWzuYm23vvxbfy0lp-LiopZvoAvC1dHo/view?usp=sharing" target="_blank"> <button ><div className="download"><i><AiOutlineDownload fontSize="1.5rem"  / ></i> Download CV</div></button></a>
                </div>
            </div>
        </div>
    )
}

export default Body;
