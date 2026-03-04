import React from 'react'
import {skills} from '../mock'
import {Card, CardContent , CardHeader, CardTitle} from './ui/card'
import {Badge} from './ui/badge'

const Skills = () => {
    return (
        <section id='skills' className='py-20 bg-slate-950'>
            <div className='container mx-auto px-6'>
                <div className='max-w-6xl mx-auto'>
                    <div className='mb-12'>
                        <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>
                            <span className='text-cyan-400 font-mono text-xl mr-2'>02.</span>
                        Skills & Technologies
                        </h2>
                        <div className='h-1 w-20 bg-cyan-500 rounded'></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {Object.entries(skills).map(([category, skillList]) => (
                            <Card key={category} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                                <CardHeader>
                                    <CardTitle className='text-cyan-400 font-semibold text-lg'>{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-wrap gap-2'>
                                        {skillList.map((skill, idx) => (
                                            <Badge key={idx} 
                                            className='bg-slate-700 text-slate-200 hover:bg-cyan-500/50 hover:text-cyan-400 transition-all duration-300 px-3 py-1'>
                                                {skill}
                                                </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                                    </div>
                    </div>
                </div>
            
            </section>
    );
};

export default Skills;