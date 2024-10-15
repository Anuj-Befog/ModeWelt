import React from 'react'

function index() {
  return (
    <div>
        {/* search modal content */}
        <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isSearchOpen ? 'flex' : 'hidden'} overflow-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow z-50">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                        <div className="flex flex-col items-center justify-start p-4 w-[370px] h-full text-center space-y-3">
                            <h2 className="text-xl font-semibold mb-4">Related Search</h2>

                            <div className="w-full space-y-3 flex-1 p-2 overflow-hidden">
                                {/* Jobs Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left p-2">Jobs</p>
                                    <div className="p-2 space-y-2">
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">Job Title</span>
                                                <span className="text-gray-500">Company Name</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">Job Title</span>
                                                <span className="text-gray-500">Company Name</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-left">See all <span>(20)</span></p>
                                </div>

                                {/* User Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left p-2">Users</p>
                                    <div className="p-2 space-y-2">
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">User Name</span>
                                                <span className="text-gray-500">User Description</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">User Name</span>
                                                <span className="text-gray-500">User Description</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-left">See all <span>(20)</span></p>
                                </div>

                                {/* Articles Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left">Articles</p>
                                    <div className="flex items-center">
                                        <Image src='' alt='articles' />
                                        <div className="ml-2">
                                            <span className="font-semibold">Article Title</span>
                                            <span className="text-gray-500">Author Name</span>
                                        </div>
                                    </div>
                                    <p className="text-blue-500">See all <span>(20)</span></p>
                                </div>
                            </div>

                            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md">All Results <span>(120+ results)</span></button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default index
