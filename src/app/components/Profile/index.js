import React from 'react';

function Page() {
    return (
        <div className="h-auto w-full p-4">
            {/* Main content area */}
            <div className="flex space-y-4">
                {/* Top section with image and info */}
                <div className="flex flex-col">
                    {/* Left side with images and details */}
                    <div className="h-96 w-[52rem] shadow-lg bg-white p-6 rounded-lg">
                        {/* First image */}
                        <div className="mb-4">
                            <div className="h-32 bg-gray-200">Image 1</div>
                        </div>

                        {/* Second image with text */}
                        <div className="flex items-start space-x-4">
                            {/* Second image */}
                            <div className="h-24 w-24 bg-gray-200 rounded-full">Image 2</div>

                            {/* Text details */}
                            <div>
                                <h1 className="text-2xl font-bold">Name</h1>
                                <p className="text-gray-600 mt-2">Description goes here. Lorem ipsum dolor sit amet consectetur.</p>

                                {/* Buttons */}
                                <div className="mt-4 space-x-2">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Contact Info
                                    </button>
                                    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                                        Connections
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other sections */}
                    <div className=" mt-12 shadow-lg h-14 flex items-center">
                        <div className="space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Profile
                            </button>
                            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                                Activity & Interest
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                Articles
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 w-[52rem] shadow-lg ">
                        <div className='m-4'>
                            <h1 className='font-bold'>About</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nobis quo veritatis ullam doloribus, earum cupiditate minima provident officia ex eveniet debitis aliquam mollitia fuga praesentium veniam. Iste, illo delectus.</p>
                            <span>See more</span>
                        </div>
                    </div>
                    <div className="ml-4">woi</div>
                    <div className="ml-4">pewoej</div>
                    <div className="ml-4">kfek</div>
                    <div className="ml-4">ewoei</div>
                </div>

                {/* Other content area */}
                <div className="h-32 bg-gray-200">Additional content here</div>
            </div>
        </div>
    );
}

export default Page;
