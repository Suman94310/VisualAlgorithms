import React from "react"

export default class Category extends React.Component{
    style = {
        outerbox:{
            "max-width": "16rem",
            "border-radius": "0px",
            "padding": "5px",
            "margin": "auto",
            "margin-bottom": "20px"
        },
        image: {
            "width": "100%",
            "max-width": "17rem",
            "border-radius": "0px"
        }
    }


    render(){
        return(
            <div class="card col-lg-3 col-md-4 col-sm-6" style={this.style.outerbox}>
                <img src={this.props.image} class="card-img-top" style={this.style.image} alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example </p>
                </div>
            </div>
        )
    }
}