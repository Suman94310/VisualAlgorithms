import React from 'react'
import "../static/styles/Home.css"
import Particles from 'react-particles-js';
import { number } from 'prop-types';


export default class Home extends React.Component{

    centerBannerText = ()=>{
        // let bannerHeight = document.getElementsByClassName("banner-bg")[0].style
        // console.log(bannerHeight)
        let bannerHeight = 500
        document.getElementsByClassName("banner-text")[0].style.top = -500
    }

    componentDidMount=()=>{
        this.centerBannerText()
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
                        <h1>Visual Algos</h1>
                    </div>
                </div>
            </div>
        )
    }
}