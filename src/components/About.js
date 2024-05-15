import React, { useState } from 'react'

export default function About() {
    const [textOption,setTextOption] = useState("Enable Dark Mode")
    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const toglleDarkMode = ()=>{
        if(myStyle.color === "black"){
            setMyStyle({
                color:"white",
        backgroundColor:"#3F3F3F",    
        border:"1px solid white"
            })
            setTextOption("Enable Light Mode")
            // document.body.style.backgroundColor = "#C8C8C8"
        }
        else{
            setMyStyle({
                color:"black",
        backgroundColor:"white"
            })
            setTextOption("Enable Dark Mode")
            // document.body.style.backgroundColor = "white"
        }
    }
    
    return (
        <>
            <div className="container" style={myStyle}>
                <h1>About</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Devloped By?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Aarav Aggarwal.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Updated Time Interval?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Every Day.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Maintained By?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Aarav Aggarwal.</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <button type = "button" onClick={toglleDarkMode} className="btn btn-primary my-3 mx-3">{textOption}</button>
            </div>
        </>
    )
}
