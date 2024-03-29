import React from 'react'
import "../static/styles/Home.css"
import Particles from 'react-particles-js';
// import { number } from 'prop-types';

//===========importing image ==============
import card from "../static/images/code.jpg"

//==========importing category card===========
import Category from "../components/Category"


export default class Home extends React.Component{

    //===========center the banner text=============
    centerBannerText = ()=>{
        // let bannerHeight = document.getElementsByClassName("banner-bg")[0].style
        // console.log(bannerHeight)
        let bannerHeight = 500
        document.getElementsByClassName("banner-text")[0].style.top = -500
    }

    


    componentDidMount=()=>{
        this.centerBannerText()
        // this.manageNavbar()
        // console.log(screen.width)
    }

    render(){
        return(
            <div>
                <div className="banner">
                    <Particles className="banner-bg"
                        height = "500px"
                        params={{
                            particles:{
                                number:{
                                    value:75,
                                    density:{
                                        enabel:true
                                    }
                                }
                            }
                        }}
                    />
                    <div className="banner-text">
                        <h1>Visualgorithm</h1>
                        <h1>s</h1>
                    </div>
                </div>
                <div className = "categories container">
                    <div className = "row">
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                    
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                   
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                        <Category image = {card} />
                    </div>
                </div>
            </div>
        )
    }
}