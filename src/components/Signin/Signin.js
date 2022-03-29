import React from "react";

class Signin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: "",
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }
    
    onSubmitSignIn = () => {
        fetch("http://localhost:3000/signin", { 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "Success!") {
                this.props.onRouteChange("home")
            }
        })
        
    }


    render() {
        const {onRouteChange} = this.props
       return (
           
        <div className="center">
            <article className="br3 ba b--black-10 mv4 pa3 w-100 w-50-m w-25-l mw6  shadow-3">
                <main className="pa4 white-80">
                    <div className="measure white-80">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            {/* <label className="db fw6 lh-copy f6" for="email-address">Email</label> */}
                            <input 
                            className=" b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" 
                            type="email" name="email-address"  id="email-address" placeholder="Email Address"
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            {/* <label className="db fw6 lh-copy f6" for="password">Password</label> */}
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" 
                            type="password" name="password"  id="password" placeholder="Password" 
                            onChange = {this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white br4 shadow-2" 
                        type="submit" 
                        value="Sign in" 
                        
                        />
                        </div>
                        <div className="lh-copy mt3 pointer">
                        <p
                        onClick={() => onRouteChange("register")} 
                        className="f6 link dim white db">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        </div> 
    
    
        
        
    )
       }
}


export default Signin;

 
