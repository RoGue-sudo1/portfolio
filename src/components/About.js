import React from "react"
import IMG from "../assets/Detective.png"

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">Hey there!</h1>
            <div className="about-info">
                <p className="about-desc">Welcome to my website! I'm a passionate frontend developer specializing in React. With expertise in modern web development, I create exceptional digital experiences by blending design and functionality. I thrive on challenges and finding elegant solutions, ensuring sleek user interfaces. My diverse project background allows me to tailor experiences to target audiences. Prioritizing user needs, I deliver visually appealing, intuitive, and accessible interfaces. Explore my portfolio showcasing responsive web apps, optimized performance, and dynamic React UIs. Let's collaborate on your project or enhance your existing app. Together, we'll create impactful frontend experiences. Thank you for visiting! </p>
                {/* <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div> */}
            </div>
        </div>
    )

}

export default About;