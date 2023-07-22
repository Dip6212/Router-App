import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


function SignupForm({ setIsLoggedIn }) {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        position:""
    })

    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);

    function changehandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submithandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("passwords doesn't match");
        }
        else {
            setIsLoggedIn(true);
            toast.success("Accounnt Created");
            navigate("/dashboard");
        }
    }

    const input_style = `
        @apply   bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[100%] max-xs:w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500; 
      `


    return (
        <div className='text-white max-xs:w-[100%] flex flex-col max-lg:items-center max-xs:text-[10px]'>
            <div>
                <label for="Toggle4" className="inline-flex items-center rounded-3xl py-1 px-1 cursor-pointer bg-richblack-800 dark:text-white-800">
                    <input id="Toggle4" type="checkbox" className="hidden peer" name='position' value={formData.position} onChange={changehandler} />
                    <span className="px-4  max-xs:px-2  py-2 rounded-3xl  bg-richblack-800 peer-checked:dark:bg-richblack-900">Student</span>
                    <span className="px-4 max-xs:px-2  py-2 rounded-3xl  dark:bg-richblack-900 peer-checked:bg-richblack-800">Teacher</span>
                </label>
            </div>

            <form onSubmit={submithandler} className='max-xs:w-[100%]'>
                {/* first name and lastName */}
                <div className='flex sm:gap-3 flex-wrap max-xs:flex-col max-xs:w-[100%]'>
                    <label>
                        <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changehandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className={input_style}
                        />
                    </label>

                    <label>
                        <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changehandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className={input_style}
                        />
                    </label>
                </div>

                <div className='w-[68%] max-xs:w-[100%] max-lg:w-[100%]'>
                    {/* email Add */}
                    <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email Address<sup>*</sup></p>
                    <label >
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changehandler}
                            placeholder="Enter Email Address "
                            value={formData.email}
                            className={input_style}
                        />
                    </label>

                    {/* createPassword and Confirm Password */}

                    <label className='relative'>
                        <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword1 ? ("text") : ("password")}
                            name="password"
                            onChange={changehandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className={input_style}

                        />
                        <span className='absolute top-[46px] right-[14px] text-xl z-10' onClick={() => setShowPassword1((prev)=>!prev)}>
                            {showPassword1 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword2 ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changehandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className={input_style}
                        />
                        <span className='absolute top-[46px] right-[14px] text-xl z-10' onClick={() => setShowPassword2((prev)=>!prev)}>
                            {showPassword2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button className='mt-5 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 w-[68%] max-lg:w-[100%] rounded-lg'>
                    Create Account
                </button>
            </form>

        </div>
    )

}


export default SignupForm;