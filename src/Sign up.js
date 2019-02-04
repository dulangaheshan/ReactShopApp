import React, { Component } from 'react';



class Signup extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">
         
<form class="text-center border border-light p-5">

    <p class="h4 mb-4">Register Here</p>

    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline1">Customer</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline2">Admin</label>
</div>

    <div class="form-row mb-4">
        <div class="col">

            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Firstname"/>
        </div>
    </div>

    <div class="form-row mb-4">

        <div class="col">
        
            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Mobile"/>
        </div>
    </div>

    <div class="form-row mb-4">

<div class="col">

    <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Lastname"/>
</div>
</div>

    
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"/>

    
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Confirm password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    
    
    <button class="btn btn-unique my-4 btn-block" type="submit">Sign up</button>


</form>
<hr/>
</div>
</div>






      </div>
    );
  }
}

export default Signup;
