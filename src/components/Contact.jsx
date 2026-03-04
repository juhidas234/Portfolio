import React,{useState} from 'react'
import {personalInfo} from '../mock'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from './ui/card.tsx'
import {Input} from './ui/input'
import {Textarea} from './ui/textarea'
import {Button} from './ui/button'
import {Mail, Phone, Linkedin , Github, ExternalLink, Send} from 'lucide-react'
import {useToast} from '../hooks/use-toast'

const Contact=() =>{
    const {toast} =useToast();
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    });

    const handleSubmit=(e)=> {
        e.preventDefault();

        toast({
            title:"Message Sent!",
            description: "Thankyou for reaching out. I'lll get back to you soon!",
        });

        setFormData({name:'',email:'',message:''});
    };

    const handleChange=(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" 
        className='py-20 bg-slate-900'>
            <div className='="conatiner mx-auto px-6'>
                <div className='max-w-6xl mx-auto'>
                    <div className='mb-12'>
                        <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-4'>
                            <span className='tet-cyan-400 font-mono text-xl mr-2'></span>
                                Get In Touch
                            
                        </h2>
                        <div className='h-1 w-20 bg-cyan-500 rounded'></div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div>
                            <h3 className='text-2xl font-semibold text-slate-100 mb-6'>
                                Let's Connect
                            </h3>
                            <p className='text-slate-300 text-lg leading-relaxed mb-8'>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be partof your visions.
                            </p>

                            <div className='space-y-4'>
                                <a href={`mailto:${personalInfo.email}`}
                                className='flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group'>
                                    <div className='p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 tarnsition-colors duartion-200'>
                                    <Mail className='text-cyan-400' size={24} />
                                    </div>
                                    <span>{personalInfo.email}</span>
                                </a>

                                <a href={`tel:${personalInfo.phone}`}
                                className='flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group'>
                                    <div className='p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-200'>
                                    <Phone className="text-cyan-400" size={24} />
                                    </div>
                                    <span>{personalInfo.phone}</span>
                                </a>

                                <a href={personalInfo.linkedIn}
                                target='_blank'
                                rel="noorpener noreferrer"
                                className='flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group'>
                                    <div className='p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-200'>
                                    <Linkedin className='text-cyan-400' size={24} />
                                    </div>
                                    <span>LinkedIn Profile</span>
                                </a>

                                <a href={personalInfo.github}
                                target='_blank'
                                rel="noorpener noreferrer"
                                className='flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group'>
                                    <div className='p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-200'>
                                    <Github className='text-cyan-400' size={24} />
                                    </div>
                                    <span>GitHub Profile</span>
                                </a>

                              <a href={personalInfo.geeksforgeeks}
                                target='_blank'
                                rel="noorpener noreferrer"
                                className='flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group'>
                                    <div className='p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-200'>
                                    <ExternalLink className='text-cyan-400' size={24} />
                                    </div>
                                    <span>GeeksforGeeks Profile</span>
                                </a>
                            </div>
                        </div>
                        
                        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className='text-2xl text-slate-100 mb-4'>Send Me A Message</CardTitle>
                            <CardDescription className='text-slate-300 mb-6'>
                                Whether you have a question or just want to say hi, my inbox is open for all.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}
                            className='space-y-6'>
                                <div>
                                    <input type="text"
                                    name='name'
                                    placeholder='Your Name'
                                    value={handleChange}
                                    required
                                    className='bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500' />
                                </div>
                                <div>
                                    <input type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={handleChange}
                                    required
                                    className='bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500' />
                                </div>

                                <div>
                                    <Textarea 
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className='bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500' />
                                </div>

                                <Button type='submit'
                                className='bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold transition-all duration-300 hover:scale-105'>
                                    Send Message
                                    <Send className='ml-2' size={16} />
                                </Button>
                            </form>
                            </CardContent>
                        </Card>
                                
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;