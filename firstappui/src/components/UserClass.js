import React from "react"
import UserContext from "../utils/UserContext";

// class based component normal js component

class UserClass extends React.Component{
    constructor(props){
        super(props); //we can use super() only in place of super(props) id i don,t want to use in constructoer
        console.log(this.props.name);
        this.state={
            message:"Hello from the other side",
            count:0,
            userInfo:{
                name:"Prakhar",
                location:"India"
            }

        }        
    }
    async componentDidMount()
    {
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json= await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })

    }

    render()
    {return <div><h1>This is a user class message: {this.state.message}</h1>
        <h2>Count:{this.state.count}</h2>
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Location:{this.state.userInfo.location}</h3>
        <h4>Avatar
            <img src={this.state.userInfo.avatar_url}/>
        </h4>
        <div>
            Logged in User:<UserContext.Consumer>
                {(data)=>{
                    return <span className="text-xl font-bold">{data.loggedInUser}</span>
                }}
                </UserContext.Consumer> 
        </div>
        <button onClick={()=>{
            
            this.setState({
            count:this.state.count+1
        })}}> Increase</button>
        <h1>{this.props.name}</h1>
    </div>}
}
export default UserClass;
