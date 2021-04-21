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
                                    <Link to='/quizio/'>
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
                                        <Link className="button button-primary" to="/quizio/signin">Sign In</Link>
                                        <Link className="button" to="/quizio/signup">Sign Up</Link>
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

                    <section className="pricing section">
                        <div className="container-sm">
                        <div className="pricing-inner section-inner">
                            <div className="pricing-header text-center">
                            <div style={{display: 'flex', justifyContent: 'center'}}><img src="https://img.icons8.com/fluent/240/000000/test.png" alt="quiz-img"/></div>
                            <h2 className="section-title mt-0">Practice Questions</h2>
                            <p className="section-paragraph mb-0">
                                Practice Questions as per your need in variety of categories. Learn and reach to the top of the leaderboard. 
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="container-sm">
                        <div className="pricing-inner section-inner">
                            <div className="pricing-header text-center">
                            <div style={{display: 'flex', justifyContent: 'center'}}><img src="https://img.icons8.com/cute-clipart/256/000000/poll-topic.png" alt="poll-img"/></div>
                            <h2 className="section-title mt-3">Custom Polls</h2>
                            <p className="section-paragraph mb-0">
                                Host your very own polls and know what's in the mind of others.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="container-sm">
                        <div className="pricing-inner section-inner">
                            <div className="pricing-header text-center">
                            <div style={{display: 'flex', justifyContent: 'center'}}><img src="https://img.icons8.com/fluent/240/000000/financial-analytics.png" alt="analytics-img"/></div>
                            <h2 className="section-title mt-0">Performance Analytics</h2>
                            <p className="section-paragraph mb-0">
                                Analyze your performance in all Categories of quiz that you have attempted.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className="cta section">
                        <div className="container">
                        <div className="cta-inner section-inner">
                            <h3 className="section-title mt-0">Still not convinced?</h3>
                            <div className="cta-cta">
                            <Link to="/quizio/signup" className="button button-primary button-wide-mobile">Try Now!</Link>
                            </div>
                        </div>
                        </div>
                    </section>
                </main>

                <footer className="site-footer">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <Link to="/quizio/">
                                    <img className="header-logo-image" src={Logo} alt="Logo" />
                                </Link>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <Link to="#">Contact</Link>
                                </li>
                                <li>
                                    <Link to="#">About us</Link>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <Link to="#">
                                        <span className="screen-reader-text">Facebook</span>
                                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="screen-reader-text">Twitter</span>
                                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="screen-reader-text">Google</span>
                                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <div className="footer-copyright">© 2021 Quiz.io, all rights reserved</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Homepage
