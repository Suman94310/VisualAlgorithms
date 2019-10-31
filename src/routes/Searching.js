import React from 'react'
import "../static/styles/Searching.css"

export default class Searching extends React.Component{
    constructor(){
        super()
        this.state = {
            list : [],
            listSize : 0,
            animations : [],
            key : 0
        }
    }

    generateRandomList = () =>{
        let list = []
        let listSize = Math.floor(document.getElementById("formControlRange").value/3)-1
        for (let i = 0; i < listSize; i++){
            list.push(Math.floor(Math.random() * listSize))
        }
        this.setState(
            {
                list:list,
                listSize:listSize
            }
        )
    }

    renderList = () =>{
        let List = []
        for(let i = 0; i < this.state.listSize; i++){
            List.push(
                <div id = {i} className = "listItem" style = {
                        {
                            height : Math.floor(document.getElementById("ListContainer").scrollWidth/(this.state.listSize))-2,
                            width : (Math.floor(document.getElementById("ListContainer").scrollWidth/(this.state.listSize))-2),
                            lineHeight : (document.getElementById("ListContainer").scrollWidth/(8*this.state.listSize))/2
                        }
                    }
                    >{this.state.list[i]}</div>
            )
        }
        return(List)
    }

    handleKeyChange = () =>{
        let key = document.getElementById("key-form").value
        this.setState({key:key})
    }

    // animations
    animations = []
    
    // linear search
    linear_search = () =>{
        this.animations = []
        let i = 0
        do {
            console.log(i, this.state.listSize)
            i = i + 1
            this.animations.push(i)
        } while (this.state.key != this.state.list[i] && i < this.state.listSize-1)
        this.animate_linear_search()
    }
    
    // animate linear search
    animate_linear_search = ()=>{
        for(let i = 0; i < this.animations.length + 1; i++){
            setTimeout(()=>{
                let current_item = document.getElementById(i)
                current_item.style.borderColor = "blue"
                if(i > 0){
                    let previous_item = document.getElementById(i-1)
                    previous_item.style.borderColor = "red"
                }
            },300*i)
        }
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div class="form-group col-md-2 center">
                        <select id="inputState" class="form-control">
                            <option selected>Linear Search</option>
                            <option>Selection Sort</option>
                            <option>Bubble Sort</option>
                            <option>Merge Sort</option>
                            <option>Quick Sort</option>
                        </select>
                    </div>
                    <div className="col center range-label">
                        <label for="formControlRange">List size</label>
                    </div>
                    <div class="form-group col-2 center">
                        <input type="range" class="form-control-range" id="formControlRange"/>
                    </div>
                    <div class="input-group flex-nowrap col-2">
                        <input type="text" class="form-control" id="key-form" placeholder="Key" aria-label="Key" aria-describedby="addon-wrapping" onChange = {()=>this.handleKeyChange()}/>
                    </div>
                    <div className="col center">
                        <button type="button" class="btn btn-dark" onClick = {()=>{this.generateRandomList()}}>Generate List</button>
                    </div>
                    <div className="col center">
                        <button type="button" class="btn btn-success" onClick = {()=>this.linear_search()}>Sort</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="key vertical-center">{this.state.key}</div>
                </div>

                <div className="row" id = "ListContainer">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}