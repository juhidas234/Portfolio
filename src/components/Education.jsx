import React from 'react'
import { education } from '../mock'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

const Education = () => {
  return (
    <section id='education' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>

          {/* Section Title */}
          <div className='mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>
              <span className='text-cyan-400 font-mono text-xl mr-2'>04.</span>
              Education & Achievements
            </h2>
            <div className='h-1 w-20 bg-cyan-500 rounded'></div>
          </div>

          {/* Education Section */}
          <div className='mb-12'>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2'>
              <GraduationCap size={28} />
              Education
            </h3>

            <div className='space-y-6'>
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className='flex flex-col md:flex-row md:items-start justify-between gap-4'>
                      <div className='flex-1'>
                        <CardTitle className='text-xl text-slate-100 mb-2'>
                          {edu.degree}
                        </CardTitle>

                        <CardDescription className='text-slate-400 mb-2'>
                          {edu.institution}
                        </CardDescription>

                        <Badge
                          variant="outline"
                          className={`border-cyan-500 ${
                            edu.status === "In Progress"
                              ? "text-cyan-400"
                              : "text-slate-400"
                          }`}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className='flex flex-col md:flex-row gap-4 text-slate-400'>
                      <span className='flex items-center gap-1'>
                        <MapPin size={16} className='text-cyan-400' />
                        {edu.location}
                      </span>

                      <span className='flex items-center gap-1'>
                        <Calendar size={16} className='text-cyan-400' />
                        {edu.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2'>
              <Award size={28} />
              Achievements
            </h3>

          
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education