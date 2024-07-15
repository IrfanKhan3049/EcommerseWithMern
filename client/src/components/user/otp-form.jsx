import React from 'react';
import UserStore from '../../store/UserStore.js';
import SubmitButton from "../layout/SubmitButton.jsx"
import ValidationHelper from './../../utility/ValidationHelper';
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"

const OtpForm = () => {

  let navigate=useNavigate();
  let {OtpFormOnChange,OtpFormData,VerifyLoginRequest}=UserStore();


  
  const onFormSubmit= async()=>{
    if(ValidationHelper.IsEmpty(OtpFormData.otp)){
      toast.error("Valid Pin Required")
    }else{
      let res= await VerifyLoginRequest(OtpFormData.otp);
      res?navigate("/"):toast.error("Somthing went wrong !")
    }
  }

  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Verification Code</h4>
            <p>A verification code has been sent to the email address you provide</p>
            <input value={OtpFormData.otp} onChange={(e)=>{OtpFormOnChange("otp",e.target.value)}} placeholder="Verification" type="text" className="form-control"/>
            <SubmitButton onClick={onFormSubmit} submit={false} className="btn mt-3 btn-success" text="Submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;