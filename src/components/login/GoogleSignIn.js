import React from 'react';
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux';
import userAction from '../../redux/actions/userAction'
import '../../styles/styleSign.css'

function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
      console.log(res)
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
      buttonText=" with Google"
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