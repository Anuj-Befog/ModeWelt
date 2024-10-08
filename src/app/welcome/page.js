import Link from "next/link";

export default function Welcome() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            {/* Checkmark Section */}
            <div className="text-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full">
                        <svg
                            className="h-24 w-24 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 12l2 2 4-4"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    </div>
                    <button className="mt-4 bg-green-600 w-[200px] h-[39px] text-white py-2 px-8 rounded-full font-semibold">
                        COMPLETE
                    </button>
                </div>
            </div>

            {/* Welcome Back Text */}
            <div className="text-center mt-12">
                <h1 className="text-3xl md:text-5xl font-bold text-primary">
                    WELCOME BACK! TO MODEWELT
                </h1>
                <p className="mt-4 uppercase text-sm w-[60%] mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
                    since the 1500s.
                </p>
            </div>

            {/* Go to Home Page Button */}
            <div className="mt-12">
                <Link href='/'>
                    <button className="bg-primarybtn hover:bg-primary text-white py-3 px-8 rounded-full font-semibold">
                        GO TO HOME PAGE
                    </button>
                </Link>
            </div>
        </div>
    );
}
