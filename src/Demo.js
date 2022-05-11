import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Demo extends Component {
    state={
        count:this.props.Data,
        name:["lavakumar"],
    }
componentDidUpdate=(prevProps,prevState)=>{
if(prevProps.Data ==10){
    this.setState({count:200})
}
}    
increment=(newname)=>{
  try {
      let data=this.state.name[0]+newname;
      this.setState({count:this.state.count+1})
      this.setState({name:[...this.state.name,data]});
      this.props.incre();
  } catch (error) {
      console.log(error);
  }
}
  render() {
      
    return (
        <>
        
         <div>
             {
                 this.state.name.map((data,index)=>{
                     return(
                         <h6 key={index}>{data}</h6>
                     )
                 })
             }
         <div style={{marginLeft:"30px"}}>{this.state.count}</div>
         <Button onClick={()=>this.increment(this.state.count)}>incremnet</Button>
         </div>
        </>
     
    )
  }
}
