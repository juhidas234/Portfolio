import React from 'react'
import {ArrowRight , Github, Linkedin , ExternalLink} from 'lucide-react'
import {Button} from './ui/button'
import { personalInfo } from '../mock'

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }   
    };

    return (
        <section id='home' className='min-h-screen flex items-center justify-center bg-slate-950 pt-20'>
            <div className='conatiner mx-auto px-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='mb-6 animate-fade-in'>
                        <span className='text-cyan-400 font-mono text-lg'>Hi, my name is</span>
                        </div>

                        <h1 className='text-5xl md:text-7xl font-bold mb-4 text-slate-100 animate-slide-up '>
                            {personalInfo.name}
                        </h1>

                        <h2 className='text-3xl md:text-5xl font-bold mb-6 text-slate-400 animate-slide-up-delay'>
                            {personalInfo.subtitle}
                        </h2>
                        <p className='text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay'>
                            {personalInfo.tagline}
                        </p>

                        <div className='flex flex-wrap gap-4 justify-center mb-12 animate-fade-indealy-2'>
                            <Button size="lg"
                            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold transition-all duration-300 hover:scale-105"
                            onClick={()=>scrollToSection('projects')}>
                                View my works
                                <ArrowRight className='ml-2' size={20} />
                            </Button>
                            <Button
                            size="lg"
                            variant="outline"
                            className="text-cyan-300 border-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                            onClick={()=>scrollToSection('contact')}
                            ></Button>
                        </div>
                        <div className='flex gap-6 justify-center animate-fade-in-dealy-3'>
                            <a href={personalInfo.github}
                            target="_blank"
                            rel= "noopener noreferrer"
                            className='text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110'
                            aria-label="GitHub"
                            >
                                <Github size={28} />
                            </a>
                            <a href={personalInfo.linkedIn}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110'
                            aria-label="LinkedIn">
                                <linkedIn size={28} />
                            </a>

                            <a href={personalInfo.geeksforgeeks}
                            target='="_blank'
                            rel="noopener noreferrer"
                            className='text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110'
                            aria-label='GeeksforGeeks'>
                                <ExternalLink size={28} />
                            </a>
                        
                    </div>
                </div>
            </div>
            </section>
    );
};

export default Home;