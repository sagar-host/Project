import {useState} from "react"


function Profile(){
    const [loggedIn, setLoggedIn] = useState()
    //we can also use variable here because here , no state is changing 
    // const loggedIn = 1
    //1,2,3

     //this is not recommended
    // if(loggedIn){
    //     return(

    //         <div>
    //             <h1>Welcome Sagar you are logged in</h1>
    //         </div>
    
    //     )
    // }else{
    //     return(

    //         <div>
    //             <h1>Welcome guest you are not logged in</h1>
    //         </div>
    
    //     )}


    return(
    //  this is recommended to use conditions in react
    //if we want three condition if else and else if then in intial we use 1 in usestate
                <div>
                <h1>condition in react</h1>
               {loggedIn==1? <h1>Welcome user1 </h1>: loggedIn==2 ?<h1>Welcome user2 </h1>:  <h1>Welcome user3 </h1>}
                </div>
        
            )







    
}
export default Profile;