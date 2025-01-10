
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
                        I&apos;ve always had a passion for creativity—whether it&apos;s drawing, designing, or building something from the ground up. That creative spark is what drew me to programming. I love how it combines logic with imagination, making every project feel like solving a complex puzzle, which is something I&apos;ve always enjoyed.
                        Back in school, I gravitated toward projects that challenged me to think critically about code logic, and that passion has carried over to everything I do today. Though I&apos;m still new to this field, I find it thrilling how programming constantly evolves, presenting new opportunities to learn and grow with each project.
                        When I&apos;m not coding or designing, I love spending time outdoors, especially hiking during the summer. It&apos;s a great way to recharge and find inspiration for the next big challenge.
                        I&apos;m eager to keep exploring, learning, and creating, and I can&apos;t wait to see where this journey takes me!
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}