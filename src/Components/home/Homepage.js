import React from 'react'
import './scss/style.css'
import Logo from "./images/logo.svg"
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="is-boxed has-animations">
            <div className="body-wrap">
                <header className="site-header">
                    <div className="container">
                        <div className="site-header-inner">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <Link to='/'>
                                        <img className="header-logo-image" src={Logo} alt="Logo"></img>
                                    </Link>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-inner">
                                <div className="hero-copy">
                                    <h1 className="hero-title mt-0">Quiz.io</h1>
                                    <p className="hero-paragraph" style={{color: "#8A94A7"}}>A One stop platform for Quizzes. Platform designed to compete with peers.</p>
                                    <div className="hero-cta">
                                        <Link className="button button-primary" to="/signin">Sign In</Link>
                                        <Link className="button" to="/signup">Sign Up</Link>
                                    </div>
                                </div>
                                <div className="hero-figure anime-element">
                                    <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                        <rect width="528" height="396" style={{"fill":"transparent"}} />
                                    </svg>
                                    <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-05" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-06" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-07" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg" style={{visibility: "visible"}}></div>
                                    <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg" style={{visibility: "visible"}}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Homepage
