import React, { Component } from 'react'
import Demo from './Demo'

export default class MultipleComponents extends Component {
    state={
        count:[
            {
                id:1,
                value:4
            },
            {
                id:2,
                value:6
            }, {
                id:3,
                value:7
            },
            {
                id:4,
                value:8
            }
        ],
        newcount:0
    }


   Incre=()=>{
       try {
           this.setState({newcount:this.state.newcount+1})
       } catch (error) {
           console.log(error);
       }
   }
  render() {
      
    return (
     <>
     <div>{this.state.newcount}</div>
     {
         this.state.count.map((data,index)=>{
             return(
                 <Demo key={index} Data={data.value} incre={this.Incre}/>
             )
         })
     }
     </>
    )
  }
}
