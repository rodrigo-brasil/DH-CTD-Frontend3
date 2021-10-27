import { FaLinkedin, FaGithub, FaVoicemail } from "react-icons/fa";
import './style.css'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="collum">
                        <h3>Sobre</h3>
                        <p>Primeiro projeto em react</p>
                    </div>
                    <div className="collum">
                        <h3>Contact</h3>
                        <div className="row">
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>
                    <div className="collum">
                        <h3>Follow</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quidem.</p>
                    </div>
                </div>
                <div className="row">
                    <p> &copy; Copyright 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
