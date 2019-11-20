import React from 'react'
import "../static/styles/Sorting.css"


export default class Sorting extends React.Component{
    constructor(){
        super()
        this.state = {
            list : [],
            listSize : 0,
            animations : []
        }
    }

    componentDidMount(){
        this.generateRandomList()
    }

    generateRandomList = () =>{
        let list = []
        let listSize = document.getElementById("formControlRange").value
        for(let i = 0; i < listSize; i++){
            list.push(Math.floor(Math.random() * listSize))
        }
        this.setState({
            list : list,
            listSize : listSize
        })
        let bars = document.getElementsByClassName("bar")
        for (let i =0; i<bars.length; i++){
            bars[i].style.background = "#8c8c8c"
        }
    }

    createBars = () =>{
        let bars = []
        for(let i = 0; i < this.state.listSize; i++){
            let height = this.state.list[i] 
            bars.push(
                <div className="bar" id = {i} style = {{height: height*450/(this.state.listSize), width:(document.getElementById("barContainer").scrollWidth/(this.state.listSize))-2, transform:"translate(0,"+(450-(height*450/(this.state.listSize)))+"px)"}}>
                </div>
            )
        }
        return(bars)
    }

    animations = []

    //========================================

    insertionSort = ()=>{
        var List = Object.assign([], this.state.list)
        let list_size = this.state.listSize
        let animations = []
        for (let i=1; i < list_size; i++){
            let j = i - 1
            let temp = List[i]
            while(temp < List[j] && j > -1){
                animations.push([j,j+1])
                List[j+1] = List[j]
                j--
            }
            List[j+1] = temp
        }
        this.animations = animations
        this.animate()
    }

    animate = () =>{
        let animations = this.animations
        console.log(animations)
        let list = Object.assign([], this.state.list)
        console.log(list)
        for(let i=0; i < animations.length; i++){
            setTimeout(()=>{
                console.log(list[animations[i][0]]+ " "+ list[animations[i][1]])
                if(i>0){
                    if(animations[i-1][1]>2){
                        document.getElementById(animations[i-1][1]-2).style.background = "#8c8c8c"
                    }
                    document.getElementById(animations[i-1][0]).style.background = "#8c8c8c"
                }
                let temp = list[animations[i][0]]
                document.getElementById(animations[i][0]).style.background = "#bcb6ff"
                if(animations[i][1]>2){
                    document.getElementById(animations[i][1]-2).style.background = "#a9fff7"
                }
                list[animations[i][0]] = list[animations[i][1]]
                list[animations[i][1]] = temp
                this.setState({list:list})
                if(i == animations.length -1 ){
                    let bars = document.getElementsByClassName("bar")
                    for (let i =0; i<bars.length; i++){
                        bars[i].style.background = "#94fbab"
                    }
                }
            },i*100)
        }
    }

    //=================Merge sort=====================
    
    doMergeSort = ()=>{
        let list = Object.assign([], this.state.list)
        this.mergeSort(list)
        this.animateMergeSort()
    }

    mergeSort = (list, first_id=0)=>{
        if(list.length <= 1){
            return(list)
        }
        else{
            let left =  list.slice(0,Math.floor(list.length/2))
            let right = list.slice(Math.floor(list.length/2),list.length)
            return(this.merge(this.mergeSort(left,first_id),this.mergeSort(right,first_id+Math.floor(list.length/2)),first_id))
        }
    }

    merge = (left,right,first_id)=>{
        let newList = []
        let i = 0
        let j = 0
        while (i<left.length || j<right.length){
            if(i === left.length){
                newList.push(right[j])
                this.animations.push([first_id+left.length+j,first_id+i+j])
                j++
            }
            else if(j === right.length ||left[i]<=right[j]){
                newList.push(left[i])
                i++
            }
            else{
                newList.push(right[j])
                this.animations.push([first_id+left.length+j,first_id+i+j])
                j++
            }
        }

        return(newList)
    }

    animateMergeSort = ()=>{
        console.log(this.animations)
        let list = Object.assign([], this.state.list)
        for(let i=0; i<this.animations.length;i++){
            setTimeout(()=>{
                let val = list[this.animations[i][0]]
                console.log(this.animations[i][0],this.animations[i][1])
                for(let j=this.animations[i][0]; j>this.animations[i][1]; j--){
                    list[j] = list[j-1]
                }
                list[this.animations[i][1]] = val
                this.setState({list:list})
            },100*i)
        }
    }

    //====================Render=======================
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div class="form-group col-md-2 center">
                        <select id="inputState" class="form-control">
                            <option selected>Insertion Sort</option>
                            <option>Selection Sort</option>
                            <option>Bubble Sort</option>
                            <option>Merge Sort</option>
                            <option>Quick Sort</option>
                        </select>
                    </div>
                    <div className="col center range-label">
                        <label for="formControlRange">List size</label>
                    </div>
                    <div class="form-group col-5 center">
                        <input type="range" class="form-control-range" id="formControlRange"/>
                    </div>
                    <div className="col center">
                        <button type="button" class="btn btn-dark" onClick = {()=>{this.generateRandomList()}}>Generate List</button>
                    </div>
                    <div className="col center">
                        <button type="button" class="btn btn-success" onClick = {()=>this.doMergeSort()}>Sort</button>
                    </div>
                </div>
                <div className="row" id="barContainer">
                    {this.createBars()}
                </div>
            </div>
        )
    }
}