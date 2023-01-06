import React from 'react';

export const Login = () => {
  return (
    <div>
       <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4 my-5">
          
        
          <h1 className="display-4 text-center mb-3">
            Sign in
          </h1>
          
    
          <p className="text-muted text-center mb-5">
            Free access to our dashboard.
          </p>
          
        
          <form>

         
            <div className="form-group">

           
              <label>Email Address</label>

              <!-- Input -->
              <input type="email" className="form-control" placeholder="name@address.com">

            </div>

            <!-- Password -->
            <div className="form-group">

              <div className="row">
                <div className="col">
                      
                  <!-- Label -->
                  <label>Password</label>

                </div>
                <div className="col-auto">
                  
                  <!-- Help text -->
                  <a href="password-reset.html" className="form-text small text-muted">
                    Forgot password?
                  </a>

                </div>
              </div> <!-- / .row -->

              <!-- Input group -->
              <div className="input-group input-group-merge">

                <!-- Input -->
                <input type="password" className="form-control form-control-appended" placeholder="Enter your password">

                <!-- Icon -->
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fe fe-eye"></i>
                  </span>
                </div>

              </div>
            </div>

            <!-- Submit -->
            <button className="btn btn-lg btn-block btn-primary mb-3">
              Sign in
            </button>

            <!-- Link -->
            <div className="text-center">
              <small className="text-muted text-center">
                Don't have an account yet? <a href="sign-up.html">Sign up</a>.
              </small>
            </div>
            
          </form>
          </div>
          </div>
          </div>
    </div>
  );
};
