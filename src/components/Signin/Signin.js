import React from "react";

const Signin = ({onRouteChange}) => {
    return (
        <div className="center">
            <article className="br3 ba b--black-10 mv4 pa3 w-100 w-50-m w-25-l mw6  shadow-3">
            <main className="pa4 white-80">
            <form className="measure white-80">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    {/* <label className="db fw6 lh-copy f6" for="email-address">Email</label> */}
                    <input className=" b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" type="email" name="email-address"  id="email-address" placeholder="Email Address"/>
                </div>
                <div className="mv3">
                    {/* <label className="db fw6 lh-copy f6" for="password">Password</label> */}
                    <input className="b pa2 input-reset ba bg-transparent hover hover-white w-100 br3 shadow-2 white" type="password" name="password"  id="password" placeholder="Password" />
                </div>
                </fieldset>
                <div className="">
                <input 
                onClick={() => onRouteChange("home")}
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
            </form>
        </main>
        </article>
        </div>
        
        
    )
    
}


export default Signin;

 
