import React from 'react'
import "../static/styles/Home.css"

export default class Home extends React.Component{

    fix_homeContainer_height = ()=>{
        let homeContainer = document.getElementsByClassName("homeContainer")
    }

    render(){
        return(
            <div className = "homeContainer">
                {/* insert some data */}
            </div>
        )
    }
}