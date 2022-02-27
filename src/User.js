function User (props){
    return(
        <div>
  <span>User Component: {props.data.name}</span>
  <span>User Component: {props.data.email}</span>
  <span>User Component: {props.data.contact}</span>

        </div>
      
    )
}
export default User;