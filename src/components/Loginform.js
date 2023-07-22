import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


function Loginform({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changehandler(event) {

        setFormData((prevdata) => ({


            ...prevdata,
            [event.target.name]: event.target.value
        }))

    }

    const [showPassword, setShowPassword] = useState(false);

    function submithandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    const input_style =`
        @apply   bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500; 
      `


    return (
        <div className="w-[68%]">
            <form onSubmit={submithandler}>

                <label>
                    <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address
                        <sup>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changehandler}
                        placeholder="Enter Email Adress"
                        value={formData.email}
                        className={input_style}
                    />
                    {console.log(formData.e)}
                </label>
                <label className="relative">
                    <p className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password

                        <sup>*</sup>
                    </p>

                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        name="password"
                        onChange={changehandler}
                        value={formData.password}
                        className={input_style}
                    />
                    {console.log(formData.p)}

                    <span className='absolute top-[47px] left-[349px] text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>

                <button className='mt-5 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 w-[100%] rounded-lg'>
                    sign in
                </button>
            </form>
        </div>
    );
}

export default Loginform;