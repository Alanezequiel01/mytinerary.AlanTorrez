import React from 'react';
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux';
import userAction from '../../redux/actions/userAction'

function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
     const userData = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(userData)
  }

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
      buttonText="Log in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
    signInUser: userAction.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);