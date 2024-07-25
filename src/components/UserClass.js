import React from "react"

class UserClass extends React.Component {

    //constructor to get props.
    constructor(props){
        super(props);
        // console.log(props); //{name: 'adarsh (class based component)'}. we receive the props in object form.
        //Initialize the state variable
        this.state = {
            userInfo: {
                name: "DummyName",
                location: "Default",
            }
            
            // count: 0,
            // count1: 1,
        };
        // console.log(this.props.name+"Child Constructor")
    }

    // making it async fn
    async componentDidMount(){
    // console.log(this.props.name+"Child Component Did Mount")
    // Fetch data from the GitHub API
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log(json);

    // Update the state variable with the fetched data
    this.setState({
        userInfo: json,
    }) 
    //bad thing of SPA.(we should do componentWillUnmount)
    // this.timer = setInterval(() => {
    //     console.log("SetInterval call class")
    // }, 1000);
  };

    // 
    componentDidUpdate(prevProps, prevState){
        //Check if the state variables have changed and perform actions accordingly
        if(this.state.count !== prevState.count){
            // Do something
           }
        if(this.state.count1 !== prevState.count1){
            // Do something else
        }
        // console.log("component did Update");
    }

    componentWillUnmount(){
        // Perform cleanup tasks before the component is unmounted
        // it will clear our setInterval
        // clearInterval(this.timer);
        // console.log("component will Unmount");
    }

    render(){

        //destructure
        //    const {name,location} = this.props;
        //    const {count,count1} = this.state;
        // Destructure values from state
        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;

        //    console.log(this.props.name+"Child Render")

        return (
            <div className="user-card">
                {/* <h1>This is a class based component</h1> */}
                {/* <h1>Count : {count}</h1> */}
                {/* <button
                onClick={()=>{
                    // Never update state variable directly
                    this.setState({count:this.state.count + 1,
                    count1: this.state.count1 + 1, 
                    })
                }}
                >Count Incr</button>
                <h1>Count1 : {count1}</h1>
                */}
                <img src={avatar_url} alt={`${name}'s avatar`}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3> 
            </div>
        );

    };
};

export default UserClass;

