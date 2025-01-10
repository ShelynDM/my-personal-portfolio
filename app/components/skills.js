import Image from 'next/image';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MySql from '../assets/MySQL-Logo.png';
import Python from '../assets/python-logo.png';
import PWA from '../assets/PWA.png';
import AWS from '../assets/aws.png';
import Figma from '../assets/figma.png';


export default function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full py-4'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 p'>Skills</p>
                    <p className='py-4'>Technologies I work with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={HTML} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={CSS} alt='CSS Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={JS} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={PWA} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>PWA</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={ReactJS} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>React</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={Firebase} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={Github} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Github</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={Tailwind} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={MySql} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={Python} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Python</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={AWS} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>AWS</p>
                    </div>
                    <div className='shadow-md shadow-blue-950'>
                        <Image className='mx-auto' src={Figma} alt='HTML Logo' width={50} height={50} style={{width: 'auto', height: 'auto'}} priority/>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};