function User(props){
    const data ={name:"sagar",contact:"rebel house",email:"mail@.com"}

    return(
    <div>
        <h2>user component</h2>
        <h3>user name: </h3>
        <button onClick={()=>props.alert(data)}>click me</button>
    </div>
      
    )
}
export default User