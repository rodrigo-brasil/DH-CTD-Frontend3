import { useState } from "react";
import { FaSearch, FaTimes, FaArrowRight, FaBars } from "react-icons/fa";
import { AiOutlineBug } from "react-icons/ai";
import './style.css'


export default function Header() {

    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState(false);

    const menuToggle = () => setToggle(prev => !prev);
    const searchToggle = () => setSearch(prev => !prev);

    return (
        <header id="header">
            <nav className="navbar">
                <button className="navbar-toggler" onClick={menuToggle}>
                    {toggle ? <FaTimes /> : <FaBars />}
                </button>

                <a href="#header" className="logo">{"<"}C<AiOutlineBug size="1.1em" color="#ffa500" />de{"/>"} </a>

                <div className={toggle ? "navbar-menu active" :"navbar-menu"}>
                    <a href="#">Home</a>
                    <a href="#">Banners</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </div>
                <input type="checkbox" id="show-search" />
                <label for="show-search" className="search-icon" onClick={searchToggle}>
                    {search ? <FaTimes /> : <FaSearch />}
                </label>
                <div className="search-box">
                    <input type="text" placeholder="Pesquisar..." required />
                    <button type="button">
                        <FaArrowRight size="1.8em" color="#0c9" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
