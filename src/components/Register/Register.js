import React from "react";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            name : "",
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch("http://localhost:3000/register", { 
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user)
                this.props.onRouteChange("home")
            }
        })
        
    }



    render() {
        const {onRouteChange} = this.props;
        return (
            <div className="center">
                <article className="br3 ba b--black-10 mv4 pa3 w-100 w-50-m w-25-l mw6  shadow-3">
                    <main className="pa4 white-80">
                        <div className="measure white-80">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                {/* <label className="db fw6 lh-copy f6" for="email-address">Email</label> */}
                                <input 
                                className=" b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" 
                                type="text" name="name"  id="name" placeholder="Full Name"
                                onChange={this.onNameChange}/>
                            </div>
                            <div className="mt3">
                                {/* <label className="db fw6 lh-copy f6" for="email-address">Email</label> */}
                                <input 
                                className=" b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" 
                                type="email" name="email-address"  id="email-address" placeholder="Email Address"
                                onChange = {this.onEmailChange}/>
                            </div>
                            <div className="mv3">
                                {/* <label className="db fw6 lh-copy f6" for="password">Password</label> */}
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" 
                                type="password" name="password"  id="password" placeholder="Password"
                                onChange = {this.onPasswordChange} />
                            </div>
                            </fieldset>
                            <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white br4 shadow-2" 
                            type="submit" 
                            value="Register" 
                            />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
            
        )
    }
    
    
}


export default Register;

 
