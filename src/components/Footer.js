import React, { useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"


const Footer = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const baseUrl = "http://localhost:8000";
    const handleSubmit = async () => {


        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // HANDLING ERRORS
            .then((res) => {
                console.log(res);
                if (res.status > 199 && res.status < 300) {
                    alert("Send Successfully !");
                }
            });
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-contact-info">
                            <h1 className="footer-heading">Lets <br/> Connect!</h1>
                            <p className="footer-contact-access"><b>Email:</b> harshrathore7514@gmail.com</p>

                        </div>
                        <div className="social-links">
                            <h1 className="social-title">Social Links</h1>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/rathoreharsh-o1/" target="_blank" ><i><FaLinkedin /></i></a>
                                <a href="https://github.com/RoGue-sudo1" target="_blank" ><i><FaGithub /></i></a>
                                <a href="https://twitter.com/HarshRatho13467" target="_blank" ><i><FaTwitter /></i></a>
                                <a href="https://www.instagram.com/harsh_rathoree/" target="_blank" ><i><FaInstagram /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <form className="form-control" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                required
                                placeholder="Enter your name"
                                value={data.name}
                                onChange={handleChange}
                                name="name" />
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={data.email}
                                onChange={handleChange}
                                name="email" />
                            <input
                                type="text"
                                required
                                placeholder="Enter your subject..."
                                value={data.subject}
                                onChange={handleChange}
                                name="subject" />
                            <textarea
                                type="text"
                                required
                                placeholder="Anything I can help you with? Let me know"
                                cols="30"
                                rows="5"
                                value={data.message}
                                onChange={handleChange}
                                name="message" />
                            <button type="submit" className="btn"><i><AiOutlineMail /></i>Send</button>

                        </form>
                    </div>
                    



                </div>
                <div className="footer-declaration">
                    <hr
                        style={{
                            background: "grey",
                            height: "1px",
                            width: "200rem",
                            border: "none",
                        }}
                    />

                    <p className="copyright"><span style={{ color: "grey" }}>Created by</span> Harsh Rathore <span style={{ color: "grey" }}>| © 2023</span></p>
                </div>

            

            </footer>


        </>
    )
}

export default Footer;