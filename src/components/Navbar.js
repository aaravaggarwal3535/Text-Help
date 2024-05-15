import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    const light = ()=>{
        props.toogleMode('light')
        document.body.style.backgroundColor = 'white'
        document.getElementsByClassName("navbar")[0].style.backgroundColor="#F0F0F0"
        document.getElementsByClassName("h1")[0].style.color="black"
        document.getElementsByClassName("h1")[1].style.color="black"
        document.getElementsByClassName("h1")[2].style.color="black"
        document.getElementsByClassName("h1")[3].style.color="black"
        document.getElementsByClassName("h1")[4].style.color="black"
        document.getElementsByClassName("h1")[5].style.color="black"
        document.getElementsByClassName("h1")[6].style.color="black"
        document.getElementsByClassName("navbar-brand")[0].style.color="black"
        document.getElementsByClassName("nav-link")[0].style.color="black"
        document.getElementsByClassName("nav-link")[1].style.color="black"
        props.showAlert("Light Theme Enabled", "success")
        document.getElementsByClassName("btn-back-color")[0].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[1].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[2].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[3].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[4].style.backgroundColor="blue"
    }
    const dark = ()=>{
        props.toogleMode('dark')
        document.body.style.backgroundColor = 'black'
        document.getElementsByClassName("navbar")[0].style.backgroundColor="gray"
        document.getElementsByClassName("h1")[0].style.color="white"
        document.getElementsByClassName("h1")[1].style.color="white"
        document.getElementsByClassName("h1")[2].style.color="white"
        document.getElementsByClassName("h1")[3].style.color="white"
        document.getElementsByClassName("h1")[4].style.color="white"
        document.getElementsByClassName("h1")[5].style.color="white"
        document.getElementsByClassName("h1")[6].style.color="white"
        document.getElementsByClassName("navbar-brand")[0].style.color="white"
        document.getElementsByClassName("nav-link")[0].style.color="white"
        document.getElementsByClassName("nav-link")[1].style.color="white"
        props.showAlert("Dark Theme Enabled", "primary")
        document.getElementsByClassName("btn-back-color")[0].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[1].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[2].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[3].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[4].style.backgroundColor="gray"
    }
    const blue = ()=>{
        props.toogleMode('blue')
        document.body.style.backgroundColor = '#265EF1'
        document.getElementsByClassName("navbar")[0].style.backgroundColor="#3568F0"
        document.getElementsByClassName("h1")[0].style.color="white"
        document.getElementsByClassName("h1")[1].style.color="white"
        document.getElementsByClassName("h1")[2].style.color="white"
        document.getElementsByClassName("h1")[3].style.color="white"
        document.getElementsByClassName("h1")[4].style.color="white"
        document.getElementsByClassName("h1")[5].style.color="white"
        document.getElementsByClassName("h1")[6].style.color="white"
        document.getElementsByClassName("navbar-brand")[0].style.color="white"
        document.getElementsByClassName("nav-link")[0].style.color="white"
        document.getElementsByClassName("nav-link")[1].style.color="white"
        props.showAlert("Blue Theme Enabled", "danger")
        document.getElementsByClassName("btn-back-color")[0].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[1].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[2].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[3].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[4].style.backgroundColor="gray"
    }
    const green = ()=>{
        props.toogleMode('green')
        document.body.style.backgroundColor = 'green'
        document.getElementsByClassName("navbar")[0].style.backgroundColor="#549421"
        document.getElementsByClassName("h1")[0].style.color="white"
        document.getElementsByClassName("h1")[1].style.color="white"
        document.getElementsByClassName("h1")[2].style.color="white"
        document.getElementsByClassName("h1")[3].style.color="white"
        document.getElementsByClassName("h1")[4].style.color="white"
        document.getElementsByClassName("h1")[5].style.color="white"
        document.getElementsByClassName("h1")[6].style.color="white"
        document.getElementsByClassName("navbar-brand")[0].style.color="white"
        document.getElementsByClassName("nav-link")[0].style.color="white"
        document.getElementsByClassName("nav-link")[1].style.color="white"
        props.showAlert("Green Theme Enabled", "warning")
        document.getElementsByClassName("btn-back-color")[0].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[1].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[2].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[3].style.backgroundColor="gray"
        document.getElementsByClassName("btn-back-color")[4].style.backgroundColor="gray"
    }
    const orange = ()=>{
        props.toogleMode('orange')
        document.body.style.backgroundColor = 'orange'
        document.getElementsByClassName("navbar")[0].style.backgroundColor="#F38835"
        document.getElementsByClassName("h1")[0].style.color="black"
        document.getElementsByClassName("h1")[1].style.color="black"
        document.getElementsByClassName("h1")[2].style.color="black"
        document.getElementsByClassName("h1")[3].style.color="black"
        document.getElementsByClassName("h1")[4].style.color="black"
        document.getElementsByClassName("h1")[6].style.color="black"
        document.getElementsByClassName("h1")[5].style.color="black"
        document.getElementsByClassName("navbar-brand")[0].style.color="black"
        document.getElementsByClassName("nav-link")[0].style.color="black"
        document.getElementsByClassName("nav-link")[1].style.color="black"
        props.showAlert("Orange Theme Enabled", "success")
        document.getElementsByClassName("btn-back-color")[0].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[1].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[2].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[3].style.backgroundColor="blue"
        document.getElementsByClassName("btn-back-color")[4].style.backgroundColor="blue"
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-dark`}>
                            <button type="button" onClick={light} className="btn btn-light">Light</button>
                            <button type="button" onClick={dark} className="btn btn-secondary">Dark</button>
                            <button type="button" onClick={blue} className="btn btn-primary">Blue</button>
                            <button type="button" onClick={green} className="btn btn-success">Green</button>
                            <button type="button" onClick={orange} className="btn btn-danger">Orange</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
