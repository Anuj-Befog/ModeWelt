import React from "react";

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="relative z-10 h-[524px] w-[957px] border-primary border-2 flex bg-background shadow-lg rounded-2xl overflow-hidden max-w-5xl">
                <div className="absolute bg-primary z-0 clip-signup-triangle w-full h-[524px]"></div>
                {/* Left Section */}
                <div className="w-1/2 p-[1rem] z-10 flex flex-col justify-center">
                    <h2 className="text-white text-6xl font-bold mb-6 w-min">WELCOME BACK !</h2>
                    <p className="w-[52.5%] text-white text-sm mb-10 uppercase">
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem ipsum has been the industry&apos;s standard dummy.
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="w-1/2 p-[1rem] flex flex-col justify-center items-center">
                    <h2 className="text-center text-[2.5rem] font-[800] text-primary mb-8">SIGN UP</h2>
                    {/* Signup heading underline */}
                    <div class="h-[0.4rem] w-[6rem] top-[4.5rem] rounded-[10px] left-[41.5rem] bg-primary absolute"></div>
                    <form className="space-y-6">
                        {/* Full Name */}
                        <div className="space-y-3">
                            <div className="relative w-[20rem]">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="FULL NAME"
                                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg
                                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="relative w-[20rem]">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="EMAIL"
                                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg
                                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 12V8a4 4 0 0 0-8 0v4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="relative w-[20rem]">
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="PHONE"
                                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg
                                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 12H2"></path>
                                        <polyline points="16 6 22 12 16 18"></polyline>
                                    </svg>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="relative w-[20rem]">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="PASSWORD"
                                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg
                                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 12V8a6 6 0 0 1 12 0v4"></path>
                                        <rect x="6" y="12" width="12" height="8" rx="2"></rect>
                                    </svg>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative w-[20rem]">
                                <input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="CONFIRM PASSWORD"
                                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg
                                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22v-2a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-primarybtn hover:bg-primary text-white py-3 px-4 rounded-full transition duration-300"
                            >
                                SUBMIT
                            </button>
                        </div>

                        {/* Login Prompt */}
                        <div className="mt-6 text-center text-sm text-gray-600 uppercase">
                            Already have an account?{" "}
                            <a href="/login" className="text-primary font-bold hover:underline">
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
