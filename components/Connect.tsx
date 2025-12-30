
import Link from 'next/link';
import { Linkedin, Instagram, Github, MessageCircle } from 'lucide-react';

export default function Connect() {
    return (<div className='flex justify-center dark:bg-zinc-950'>
        <ul className='flex justify-around w-[80%] mb-2 sm:w-[400px] bg-black p-4 rounded-2xl mt-[-20px] shadow-md shadow-cyan-800'>
            <li><Link href="https://linkedin.com/in/althaf-abdul-raheem-4a422a22b" target="_blank"><Linkedin color="white" /></Link></li>
            {/* <li><Link href="https://www.instagram.com/althaf_abdul_raheem/" target="_blank"><Instagram color="white" /></Link></li> */}
            <li><Link href="https://github.com/althafabdulraheem" target="_blank"><Github color="white" /></Link></li>
            <li>
                <a
                    href="https://wa.me/9710542955779?text=Hello"
                    target="_blank"

                >
                    <MessageCircle color="white" />
                </a>
            </li>

        </ul>
    </div>)
}