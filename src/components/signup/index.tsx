import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import {useDataContext} from "@/context/signup";
import {useRouter} from "next/router";
import CardHeader from "@/components/shared/card-header";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Invalid email address'
        ).required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must meet the criteria'
        )
        .required('Password is required'),
    dob: Yup.date().required('Date of Birth is required'),
    subscribe: Yup.boolean(),
});

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {addUser} = useDataContext();
    const router = useRouter()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            className="max-w-sm mx-auto mt-8 flex flex-col gap-3 p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-1">
                <CardHeader title={'sign up'}
                            subTitle={'Become a member - you enjoy exclusive deals,offers,invites and rewards'}
                            iconClass='fa-check-square'/>

            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    dob:'',
                    subscribe: false,
                }}
                enableReinitialize={true}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // Handle form submission here
                    addUser(values);
                    router.push('/account')
                }}
            >
                {({values}) => (<Form className="border-b pb-4">
                        <div className="mb-4">
                            <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="w-full p-2 border rounded-md"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password">Create a Password <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="at least 8 characters"
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

                        <div className="mb-4">
                            <label htmlFor="dob">Date of Birth <span className="text-red-500">*</span></label>
                            <Field type="date" name="dob" id="dob" className="w-full p-2 border rounded-md"/>
                            <ErrorMessage name="dob" component="div" className="text-red-500"/>
                        </div>

                        <div className="mb-6 gap-1 flex flex-col">
                            <label>
                                <Field type="checkbox" name="subscribe" className="mr-2"/>
                                Subscribe to Newsletter
                            </label>
                            <p className="text-sm text-gray-400">We want to give you a special treat on your
                                birthday</p>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-400 w-full  first-letter:uppercase text-white p-2 rounded-md">
                                become a member
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
            <div className="flex text-gray-500  justify-center gap-1"><span className="first-letter:uppercase">already you have account?</span>
                <Link href="/account">login</Link></div>
        </div>
    );
};

export default Signup;
