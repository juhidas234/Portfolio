import React from 'react'
import { personalInfo } from '../mock'
import {Card, CardContent} from './ui/card'
import {User} from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='py-20 bg-slate-900/90 backdrop-blur-sm'>
        <div className='container mx-auto px-6'>
            <div className='max-w-4xl mx-auto'>
                <div className='mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>
                        <span className='text-cyan-400 font-mono text-xl mr-2'>0.1</span>
                        About Me
                    </h2>
                    <div className='h-1 w-20 bg-cyan-500 rounded'></div>
                </div>

                <Card className="bg-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                    <div className='flex flex-col md:flex-row gap-8 items-start'>
                        <div className='flex-shrink-0'>
                            <div className='w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center'>
                                <User size={64} className='text-white-100' />
                                </div>
                                </div>

                                <div className='felx-1'>
                                    <p className='text-slate-300 leading-relaxed text-lg mb-6'>
                                        {personalInfo.Bio}
                                    </p>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                                                <span className='text-slate-400'>Full-Stack Development</span>
                                            </div>
                                              <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                                                <span className='text-slate-400'>Data Analytics & BI</span>
                                            </div>
                                              <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                                                <span className='text-slate-400'>Problem Solving</span>
                                            </div>
                                        
                                    </div>
                                </div>
                                </div>
                                </CardContent>
                                </Card>
            </div>
        </div>
        </section>
  );
};

export default About;