import React from 'react';
import {connect}from 'react-redux';

import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId :'271372892379-qr61fj65vvfbtqq24apcffm905qopks1.apps.googleusercontent.com',
                scope:'email'})
                .then(()=>{
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // console.log(this.auth);
                    this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
            // console.log(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut(); 
        }
    }

    onSignInClick = ()=>{
        this.auth.signIn();
    }
    
    onSignOutClick = ()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null ;
        }
        else if(this.props.isSignedIn===true){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else{
            return(
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Log in with Google
                </button>
            );
        }
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToprops = (state)=>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToprops,{
    signIn,
    signOut
})(GoogleAuth);