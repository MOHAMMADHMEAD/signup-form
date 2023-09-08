import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import {useDataContext} from "@/context/user";
import {useRouter} from "next/router";
import CardHeader from "@/components/shared/card-header";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Invalid email address'
        ).required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {isUserExist} = useDataContext();
    const router = useRouter()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            className="w-80 mx-auto mt-8 flex flex-col gap-3 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-1">
                <CardHeader title={'Login In'}
                            iconClass='fa-lock'/>

            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={(values, {setErrors}) => {
                    if (isUserExist(values)) {
                        router.push('/account')
                    } else {
                        setErrors({password: 'Invalid username or password'});
                    }
                }}
            >
                {({values}) => (<Form className="border-b pb-4">
                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="w-full p-2 border rounded-md"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    className="w-full p-2 border rounded-md"
                                />
                                {values.password && ( // Render the button only when the password field has a value
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-0 right-0 p-2"
                                    >
                                        <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                )}
                            </div>
                            <ErrorMessage name="password" component="div" className="text-red-500"/>
                        </div>


                        <div className="flex justify-center">
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-400 w-full  first-letter:uppercase text-white p-2 rounded-md">
                                Login
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
            <div className="flex text-gray-500  justify-center gap-1"><span className="first-letter:uppercase">dont have account?</span>
                <Link href="/signup">signup</Link></div>
        </div>
    );
};

export default Login;
