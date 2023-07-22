import Loginform from './Loginform';
import Signupform from './Signupform';
import frameimg from '../assets/frame.png';
import {FcGoogle} from 'react-icons/fc'


function Template({ title, description1, description2, image, formType, setIsLoggedIn }) {
    return (
        <div className='text-white py-[100px] max-xs:py-[130px] flex max-lg:flex-col max-lg:justify-center px-5 xl:justify-between max-xs:w-[100%]'>
            <div className='w-[558px] max-md:w-[100%] max-xs:w-[100%] flex flex-col max-lg:items-center max-lg:mb-4'>
                <h1 className='text-xl max-xs:text-[11px] xl:pr-[114px] '>{title}</h1>
                <p className='text-sm  max-xs:text-[8px] my-2 xl:pr-[215px] text-blue-600'>
                    <span>{description1}</span>
                    <span>{description2}</span>
                </p>

                {
                    formType === 'signup' ?
                     (<Signupform setIsLoggedIn={setIsLoggedIn}/>) :
                     (<Loginform setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div className='py-2 flex items-center max-lg:justify-center gap-2'>
                <div className='h-[1px] w-[31%] bg-slate-400'></div>
                <div>OR</div>
                <div className='h-[1px] w-[31%] bg-slate-400'></div>
                </div>
                <button className='flex w-[68%] text-sm py-2 px-4 justify-center items-center gap-2 border rounded-xl border-slate-400'>
                    <FcGoogle/>
                    Sign In With Google
                </button>
            </div>

            <div className='relative h-[490px] w-[558px] max-sm:w-[100%] '>
                <div className='absolute  h-[100%] w-[100%] top-0 left-0 z-20'>
                    <img src={image}
                        alt="Students"
                        width={558}
                        height={490}
                        loading="lazy">
                    </img>
                </div>
                <div className='absolute  h-[100%] w-[100%] top-[20px] left-[20px] z-10'>
                    <img src={frameimg}
                        alt="frame"
                        width={558}
                        height={490}
                        loading="lazy">
                    </img>
                </div>
            </div>
        </div>
    );
}

export default Template;