import React from 'react';
import '../../../App.css';

const Login = () => {
    return (
        <div className='bg-gradient-primary'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-10 col-lg-12 col-md-9'>
                        <div className='card  o-hidden border-0 shadow-lg my-5'>
                            <div className='card-body p-0'>
                                <div className='row'>
                                    <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                                    <div className='col-lg-6'>
                                        <div className='p-5'>
                                            <div className='text-center'>
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <div>
                                                <form className='user'>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control form-control-user"
                                                            id="exampleInputEmail" described='email-help'
                                                            placeholder="Enter Email Address..." />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-checkbox small">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <a href="#!" class="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </a>
                                                    <hr />
                                                    <a href="#!" class="btn btn-google btn-user btn-block">
                                                        <i class="bi bi-google"></i> Login with Google
                                                    </a>
                                                    <a href="#!" class="btn btn-facebook btn-user btn-block">
                                                        <i class="bi bi-facebook"></i> Login with Facebook
                                                    </a>
                                                    <hr />
                                                    <div class="text-center">
                                                        <a class="small" href="#!">Forgot Password?</a>
                                                    </div>
                                                    <div class="text-center">
                                                        <a class="small" href="#!">Create an Account!</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;