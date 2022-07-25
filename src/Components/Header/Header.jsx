import React, { useState } from "react"
import './Header.scss'
import { HeaderImg } from '../../assets/index.js'
import { HashLink as Link } from 'react-router-hash-link';
import PlayButton from "../PlayButton/PlayButton"
import Twitter from '../../assets/icons8-twitter.svg';
import Discord from '../../assets/icons8-discord.svg';
import Instagram from '../../assets/icons8-instagram.svg';
import Telegram from '../../assets/icons8-telegram.svg'
import GitHub from '../../assets/icons8-gitHub.svg'
import Youtube from '../../assets/icons8-youtube.svg'
import ExploreMultiverse from "../ExploreMultiverse/ExploreMultiverse";

const Header = () => {
    const [click, setClick] = useState(false)

    const btnclick = () => {
        if (!click) setClick(true)
        else setClick(false)
    }
    const LinkClick = () => {
        setClick(false)
    }
    const [hoveClick, sethoveClick] = useState(false)
    const HoverClick = () => {
        sethoveClick(false)
    }
    return (
        // <div className={window.location.pathname === '/' ? 'bg-col' : null}>
        <div className={click ? 'header bg' : "header"}>
            <nav className="navbar" id="navbar">
                <div className="brand">
                    <Link to="/">
                        <img src={HeaderImg.Logo} alt="logo" />
                    </Link>
                </div>
                <div className={click ? "active menu" : "menu"} id="menu">
                    <ul>
                        <div className="m-link">
                        <li className="about">
                            <Link to="/"  >Home</Link>
                        </li>
                            <li className="about">
                                <Link to="/"  >About</Link>
                                <img src={HeaderImg.more} alt="" className="more" />
                                <div className="about_dropdown">
                                    <li><Link to='/team'>Our Team</Link></li>
                                    <li> <a  href='https://utopia42club.gitbook.io/docs/' target="_blank">Info</a></li>
                                   
                                    <li> <a  href={require('../../Files/Utopia42_Whitepaper_v1.pdf')} target="_blank">Whitepaper</a></li>
                                    <li><Link to='/roadmap'>Roadmap</Link></li>
                                </div>
                            </li>
                            <li>
                                <Link to='/#FAQ'>Support & FAQ</Link>
                            </li>
                            <li className="social">
                                <Link to="/">Social</Link>
                                <img src={HeaderImg.more} alt="" className="more" />
                                <div className="social_dropdown">
                                    <li className="s-link">
                                        <a href="https://discord.gg/TphaKUZzHx" target="_blank" ><img src={Discord} alt="" />
                                            Join Discord Server
                                        </a>
                                    </li>
                                    <li className="s-link">
                                        <a href="https://twitter.com/utopia42c" target="_blank" ><img src={Twitter} alt="" />
                                            Follow on Twitter
                                        </a>
                                    </li>
                                    <li className="s-link">
                                        <a href="https://www.instagram.com/utopia42.club" target="_blank" ><img src={Instagram} alt="" />
                                            Follow on Instagram
                                        </a>
                                    </li>
                                    <li className="s-link">
                                        <a href="https://t.me/Utopia42_Club" target="_blank" ><img src={Telegram} alt="" />
                                            Follow on Telegram
                                        </a>
                                    </li>
                                    <li className="s-link">
                                        <a href="https://github.com/Utopia42-club/" target="_blank" ><img src={GitHub} alt="" />
                                            Follow on Github
                                        </a>
                                    </li>
                                    <li className="s-link">
                                        <a href="https://www.youtube.com/channel/UCIICxLP-hLhQg8OPrmEEPtQ" target="_blank" ><img src={Youtube} alt="" />
                                            Follow on Youtube
                                        </a>
                                    </li>
                                </div>
                            </li>
                            <li className="DApp">
                                <a target="_blank" href="https://dapp.utopia42.club/">DApp</a>
                            </li>
                        </div>

                    </ul>
                </div>
                <div className={click ? "active menu" : "menu"} id="menu">
                    <ul>

                        <li className="ply">
                            <ExploreMultiverse />
                        </li>

                    </ul>
                </div>
                <div className="hamburger" id="hamburger" onClick={btnclick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>
    )
}
export default Header