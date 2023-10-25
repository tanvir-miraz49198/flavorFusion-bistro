import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })

    };


    return (
        <>

            <Helmet>
                <title>Flavor Fusion | Register</title>
            </Helmet>

            <div className='grid md:grid-cols-2 '>

                <div className='md:min-h-screen flex items-center justify-center p-8 md:p-0'>
                    <img src="/src/assets/Images/others/authentication1.png" alt="" />
                </div>
                <div className="md:min-h-screen flex items-center justify-center  p-8 md:p-0">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
                        <h2 className="text-2xl font-semibold mb-6">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder='Enter Your Name'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                {errors.name && <span className="text-red-500 ">This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder='Enter Your Email'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"

                                />
                                {errors.email && <span className="text-red-500 ">This field is required</span>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-600 ">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,

                                        pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    name="password"
                                    placeholder='Enter Your Password'
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                {errors.password?.type === 'required' && <p className="text-red-500 ">This field is required</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-500 ">The password have to be one lower case , one upper case , one special character and one number.</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500 ">The password must be minimum 6 characters</p>}



                            </div>

                            <div className="mb-6">
                                <input type="submit" value="register" className='btn bg-orange-600 hover:bg-red-700 p-2 rounded-md text-white w-2/4 ' />
                            </div>
                            <div>
                                <p className='text-red-500 text-center'>
                                    <Link to='/login'>
                                        Login
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

export default Register;