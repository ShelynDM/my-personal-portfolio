import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image for optimized image handling
import ExpenseTracker from '../assets/Projects/ExpenseTracker.png';
import SocialGrdn from '../assets/Projects/SocialGrdn.png';
import SOSRoyale from '../assets/Projects/SOSRoyale.png';
import Cluster from '../assets/Projects/Cluster.png';

export default function Projects() {
  const project = [
    {
      image: SocialGrdn,
      title: 'Social Grdn',
      description: 'A platform where landowners connect with gardening enthusiasts to promote sustainability by making use of underutilized land with the potential to grow. Built using React PWA with Tailwind CSS, Firebase, MySQl, and Google Maps API',
      url: 'https://www.youtube.com/watch?v=67cCPad7O8w',
      github: 'https://github.com/ShelynDM/socialgrdn-v1.git',
    },
    {
        image: SOSRoyale,
        title: 'SOS Royale',
        description: 'SOS Royale offers a tic-tac-toe-style gameplay experience, challenging players to strategically connect the letters "SOS" across a specified grid, aiming to fill out the entire grid. The player who successfully connects these letters the most times, wins the game. Built using React Native',
        url: 'https://youtube.com/shorts/3xJgTTC_UXE?feature=shared',
        github: 'https://github.com/ShelynDM/SOSRoyale/settings',
      },
      {
        image: Cluster,
        title: 'Cluster (Design Concept)',
        description: 'Cluster App is an idea for a platform where collectors can organize, showcase, and connect. It would feature tools for cataloging, advanced search, and chat, creating a dedicated space for discovering, sharing, and growing collections.',
        url: 'https://www.figma.com/design/a4QJJDrNGdCHdS7caje0iD/P3_Cluster_HighFidelity_Octopus?t=G99vyjs3EzPg2Pz3-1',
        github: 'https://www.figma.com/design/a4QJJDrNGdCHdS7caje0iD/P3_Cluster_HighFidelity_Octopus?t=G99vyjs3EzPg2Pz3-1',
      },
      {
        image: ExpenseTracker,
        title: 'Expense Tracker',
        description: 'A simple expense tracker app built using Next.js and Tailwind CSS',
        url: 'https://expense-calculator-shelyn-del-mundos-projects.vercel.app/',
        github: 'https://github.com/ShelynDM/expense-calculator.git',
      },
  ];

  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-gray-300 py-20" 
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full py-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500">
            Projects
          </p>
          <p className="py-6">Checkout some of my recent projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {project.map((project, index) => (
            <div
              key={index}
              className="relative shadow-lg shadow-blue-950 group container rounded-md overflow-hidden mx-auto z-0"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-blue-950 bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4 px-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                    <Link
                        href={project.url}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </Link>
                    <Link
                        href={project.github}
                        className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/projects/realestate.jpg
// https://www.youtube.com/watch?v=2kg0z1qNrkw
