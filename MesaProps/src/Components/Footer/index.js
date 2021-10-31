import { FaLinkedin, FaGithub } from "react-icons/fa";
import './style.css'

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="collum">
                        <h3>Sobre</h3>
                        <p>Primeiro projeto em react, consumindo a <a href="https://unsplash.com/"><em>unsplash api</em></a> para popular a galeria com fotos aleatórias</p>
                    </div>
                    <div className="collum">
                        <h3>Entre em contato</h3>
                        <a target="_blank" href="https://www.linkedin.com/in/rodrigo-brasil-272312178/"><FaLinkedin color="#777" size="1.5em" />Linkedin</a>
                        <a target="_blank" href="https://github.com/rodrigo-brasil"><FaGithub color="#777" size="1.5em" />GitHub</a>
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
