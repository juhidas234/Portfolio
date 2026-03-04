import React, { useState } from 'react'
import { projects } from '../mock'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ExternalLink, Code2 } from 'lucide-react'
import { Badge } from './ui/badge'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id='projects' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          
          {/* Section Title */}
          <div className='mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>
              <span className='text-cyan-400 font-mono text-xl mr-2'>03.</span>
              Featured Projects
            </h2>
            <div className='h-1 w-20 bg-cyan-500 rounded'></div>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className='flex items-start justify-between mb-2'>
                    <div className='p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300'>
                      <Code2 className='text-cyan-400' size={28} />
                    </div>

                    <Badge variant='outline' className='border-cyan-500 text-cyan-100 px-2 py-1 text-sm'>
                      {project.category}
                    </Badge>
                  </div>

                  <CardTitle className='text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300'>
                    {project.title}
                  </CardTitle>

                  <CardDescription className='text-slate-400 mt-2'>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className='bg-slate-700 text-slate-200 hover:bg-cyan-500/50 hover:text-cyan-400 transition-all duration-300 px-3 py-1'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-cyan-300 border-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300'
                  >
                    View Details
                    <ExternalLink className='ml-2' size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div
              className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
              onClick={() => setSelectedProject(null)}
            >
              <Card
                className="bg-slate-800 border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <CardHeader>
                  <div className='flex items-start justify-between mb-4'>
                    <Badge variant="outline" className='border-cyan-500 text-cyan-400'>
                      {selectedProject.category}
                    </Badge>

                    <Button
                      variant="ghost"
                      size='sm'
                      onClick={() => setSelectedProject(null)}
                      className='text-slate-400 hover:text-slate-200'
                    >
                      X
                    </Button>
                  </div>

                  <CardTitle className='text-3xl text-slate-100'>
                    {selectedProject.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant='secondary'
                        className="bg-slate-700 text-slate-200 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Projects