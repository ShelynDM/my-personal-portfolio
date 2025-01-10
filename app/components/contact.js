
export default function About() {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-gray-300 flex justify-center items-center p-4 '>
            <form method='POST' action="https://getform.io/f/awnnzgdb" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-600">Contact</p>
                    <p className="py-4">Submit the form below or email me @ dm.shelyn@gmail.com</p>
                </div>
                <input type="text" placeholder="Name" name="name" className="p-2 border-2 border-blue-600"/>
                <input type="email" placeholder="Email" name="email" className="p-2 my-2 border-2 border-blue-600"/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className=" p-2 border-2 border-blue-600"></textarea>
                <button type="submit" className="border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">Let&apos;s Collaborate</button>
            </form>
            
        </div>
    )
}