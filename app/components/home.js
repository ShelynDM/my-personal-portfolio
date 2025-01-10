import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

export default function Home() {
    return (
        <div name='home' className='w-full h-screen bg-gradient-to-r from-blue-950 to-blue-800'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-700'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-cyan-50'>Shelyn Del Mundo</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I recently completed the Software Development Program at SAIT.</h2>
                <p className='text-gray-300 py-4 max-w-[700px]'>
                    I took a basic programming course in my previous education, and I believe in continuous innovation which is why I became interested in programming. 
                    I enjoy building, and problem-solving and am always eager to challenge the limit. What motivates me is knowing that technology is limitless. 
                    I&apos;ve witnessed how technology evolves and it never failed to amaze me. I also enjoy talking with different people and sharing different ideas. 
                    I am a goal-driven person and a constant learner. 
                    I am also excited to know and explore, through software development, how I will be able to contribute and execute my ideas while learning more.
                </p>
                <div>
                    <Link to="projects" smooth={true} duration={500}>

                        <button className='text-cyan-50 group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>View Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}