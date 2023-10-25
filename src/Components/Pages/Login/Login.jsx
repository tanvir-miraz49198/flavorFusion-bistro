import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Login = () => {


    // Captcha Ref
    const captchaRef = useRef(null)

    // disable btn
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    // AuthContext Import
    const { login } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }


    const handleCaptcha = () => {
        const captchaValue = captchaRef.current.value;
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
        }

    }


    return (
        <>

            <Helmet>
                <title>Flavor Fusion | Order</title>
            </Helmet>

            <div className='grid md:grid-cols-2 '>

                <div className='md:min-h-screen flex items-center justify-center p-8 md:p-0'>
                    <img src="/src/assets/Images/others/authentication1.png" alt="" />
                </div>
                <div className="md:min-h-screen flex items-center justify-center  p-8 md:p-0">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
                        <h2 className="text-2xl font-semibold mb-6">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Enter Your Email'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-600 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder='Enter Your Password'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-600 font-medium">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    type="text"
                                    id="captcha"
                                    name="captcha"
                                    ref={captchaRef}
                                    placeholder='Write the captcha above'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                                <button onClick={handleCaptcha} className="btn btn-outline btn-warning btn-xs mt-2">Validate</button>

                            </div>
                            <div className="mb-6">
                                <input type="submit" value="Login" className='btn bg-orange-600 p-2 rounded-md text-white w-2/4 ' disabled={disabled} />
                            </div>
                            <div className="mb-6">

                                <p className='text-red-500 text-center'>
                                    <Link to='/registration'>
                                       Register
                                    </Link>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;