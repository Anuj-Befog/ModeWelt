export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <p className="mt-4 text-lg">Scroll down to see the smooth scrolling effect!</p>
      </div>
      <div className="h-[200vh] bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl">Enjoy Smooth Scrolling!</h2>
        <p className="text-white">This area is designed for scrolling.</p>
      </div>
    </div>
  );
}
