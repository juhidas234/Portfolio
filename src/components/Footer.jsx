import React from 'react'
import {Github, Linkedin, ExternalLink , Heart} from 'lucide-react'
import { personalInfo } from '../mock'
import { Button } from './ui/button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-12 bg-slate-950 border-t border-slate-800 text-center text-slate-400'>
            <div className='container mx-auto px-6'>
                <div className='max-w-6xl mx-auto'>    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>

                    </div>
                    <div className='text-2xl font-bold text-cyan-400 font-mono mb-3'>
                        &It;JD/&gt;
                        </div>
                        <p className='text-slate-400 text-sm'>
                            Building innovative solutions with AI and data-driven technologies.
                        </p>
                    </div>

                    <div>
                        <h4 className='text-slate-100 font-semibold mb-3'>Quick Links</h4>
                        <ul className='space-y-2'>
                            {['About', 'Projects', 'Skills', 'Education', 'Certifications'].map((item) => (
                                <li key={item}>
                                    <Button 
                                    onClick={()=> {
                                        const element = document.getElementById(item.toLowerCase());
                                        if(element){
                                            element.scrollIntoView({behavior: 'smooth'});
                                        }
                                    }}
                                    className='text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm'>
                                        {item}
                                    </Button>
                                    </li>
                            ))} 
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-slate-100 font-semibold mb-3'>Connect</h4>
                        <div className='flex gap-4'>
                            <a href={personalInfo.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 transition-all duration-200'
                            aria-label="GitHub">
                                <Github size={20} />
                            </a>
                             <a href={personalInfo.linkedIn}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 transition-all duration-200'
                            aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                             <a href={personalInfo.geeksforgeeks}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 transition-all duration-200'
                            aria-label="GeeksforGeeks">
                                <ExternalLink size={20} />
                            </a>
                            
                            
                        </div>
                    </div>
                    </div>
                    <div className='pt-8 border-t border-slate-800'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                            <p className='text-slate-400 text-sm'>
                                &copy; {currentYear} JD. All rights reserved.
                            </p>
                            <p className='text-slate-400 text-sm flex items-center gap-1'>
                            </p>
                        </div>
                        </div>
                        
                        </footer>
    );
};
export default Footer;