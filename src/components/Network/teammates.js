import React from 'react'
import { FiUsers } from 'react-icons/fi';

function teammates() {
    return (
        <div>
            <div>
                <div className="space-x-4 flex items-center">
                    <FiUsers className="text-[#A45286] w-6 h-6" />
                    <h2 className="text-3xl font-bold text-[#A45286]">Teammates</h2>
                </div>

                <div className="mb-10 mt-6">
                    <div className="w-[847px] h-[440px] border-2 border-slate-400 flex justify-center items-center">
                        <section className="text-center">
                            <div>
                                <div className="text-3xl mb-2">Icon</div> {/* Adjusted size and spacing for the icon */}
                                <p className="text-lg">No Teammates</p> {/* Adjusted font size */}
                            </div>
                        </section>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default teammates
