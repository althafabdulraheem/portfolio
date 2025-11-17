import Link from 'next/link';
import { Linkedin,Instagram,Github,MessageCircle } from 'lucide-react';
export default function Connect(){
    return(<div className='flex justify-center '>
                <ul className='flex justify-around w-[400px] bg-black p-4 rounded-2xl mt-[-20px] shadow-md shadow-cyan-800'>
                    <li><Link href="https://www.linkedin.com/in/althaf-abdul-raheem-4a422a22b/" target="_blank"><Linkedin  color="white"/></Link></li>
                    <li><Instagram color="white"/></li>
                    <li><Github color="white"/></li>
                    <li><MessageCircle color="white"/></li>
                </ul>
        </div>)
}