import React from 'react'
import { FiUsers } from 'react-icons/fi';

function hashtag() {
    return (
        <div>
            <div>
                <div className="space-x-4 flex items-center">
                    <h2 className="text-3xl font-bold text-[#A45286]"> # Hashtags</h2>
                </div>
                <div className="mb-10 mt-6">
                    <div className="w-[847px] h-[440px] border-2 border-slate-400 flex">
                        <div className="p-3 space-x-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                                All
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300 transition duration-200">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hashtag
