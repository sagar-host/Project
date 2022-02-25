import React, {Component} from "react";



class  Students extends Component{


    render(){
        console.log(this.props)

        return(
            <div style={{backgroundColor: "pink",margin:"50px"}}>
                <h1>Student component {this.props.name} </h1>
                <h3>{this.props.mobile}</h3>
                     {/* can we change props from where we recive props ? like we make props in app.js and recive on students.js?
       no we cant change props from where we recieve props */}
           
            </div>
        )
  
            }
  }

export default Students;