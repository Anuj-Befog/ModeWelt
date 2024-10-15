import React from 'react'

function index() {
    return (
        <div>
            {/*Other Modal content */}
            <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isModalOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={closeModal} // Close modal on click
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 text-center space-y-6">
                            {/* Profile Section */}
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="text-left">
                                    <h1 className="text-xl font-semibold">Befog</h1>
                                    <span>Illustration Designer</span>
                                </div>
                            </div>

                            {/* View Profile Button */}
                            <button
                                onClick={closeModal} // Close modal on button click
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                            >
                                View your profile
                            </button>

                            {/* Settings and Management Section */}
                            <div className="space-y-4 text-left">
                                <div className="space-y-2">
                                    <p>Settings and Privacy</p>
                                    <p>Help</p>
                                    <p>Language</p>
                                </div>
                                <hr />
                                <div className="space-y-2">
                                    <h1 className="font-medium">Manage</h1>
                                    <div className="space-y-1">
                                        <p>Past Activities</p>
                                        <p>Job and Account</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* Sign Out Button */}
                            <div>
                                <button
                                    onClick={closeModal} // Close modal on button click
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
