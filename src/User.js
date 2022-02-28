import { withRouter } from "react-router-dom";

//how to get id in param of link- we have to import withroute - and this is use as a high order function- to get this data - write props.match.params.id

function User(props){

    console.log(props.match.params.id);
    return(
        <div>
            <h1>Hi this is no {props.match.params.id}</h1>
            <h1>Hi this is  {props.match.params.name}</h1>

        </div>
    )
}

export default withRouter(User);