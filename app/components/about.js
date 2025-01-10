
export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-blue-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
                    <div className=" sm:text-right text-4xl font-bold ">
                        <p>Hi, I&apos;m Shelyn, its very nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I took a basic programming course in my previous education, and I believe in continuous innovation which is why I became interested in programming. 
                        I enjoy building, and problem-solving and am always eager to challenge the limit. What motivates me is knowing that technology is limitless. 
                        I&apos;ve witnessed how technology evolves and it never failed to amaze me. I also enjoy talking with different people and sharing different ideas. 
                        I am a goal-driven person and a constant learner. 
                        I am also excited to know and explore, through software development, how I will be able to contribute and execute my ideas while learning more.
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}