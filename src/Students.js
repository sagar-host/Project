function Students(props){
console.log(props);
    return(
        <div style={{backgroundColor: "skyBlue", margin: "10px"}}>
            <h1>Student component</h1>
            <h2>Hello {props.name}</h2>
            {/* <h3>Email: {props.email} </h3>
            <h4>Address: {props.other.address}</h4>
            <h5>Mobile: {props.other.mobile}</h5> */}
        </div>
    )
}
export default Students;