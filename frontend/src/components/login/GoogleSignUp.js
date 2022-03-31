import React from 'react';
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux';
import userAction from '../../redux/actions/userAction';

function GoogleSignUp(props) {

    const responseGoogle = async (res) => {
    console.log(props)
        const userData = {
            fullName: res.profileObj.givenName + " " + res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            confirmPassword: res.profileObj.googleId,
            urlImage: res.profileObj.imageUrl,
            country: "undefined",
            from: "google",
        }
        console.log(res.profileObj)
        await props.signUpUser (userData)
    }

    return (
        <GoogleLogin
            className="buttonsocial"
            clientId="230062005644-9ssbcia4jg6pn5v8dctpb8tv6f4fvk8v.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
    />
    )
}

const mapStateToProps =(state) => {
    return{
        user: state.userReducer.user
    }
} 

const mapDispatchToProps = {
    signUpUser: userAction.signUpUser
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp)