import React from "react";
import { certifications } from "../mock";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 bg-slate-900 text-slate-300"> 
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto"> 
                <div className="mb-12">

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                        <span className="text-cyan-400 font-mono text-xl mr-2">05.</span>
                        Certifications
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded"></div>
                </div>
                <div className="space-y-6">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">       
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl text-slate-100 font-semibold">{cert.title}</h3>  
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500 transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                            <p className="text-slate-400">{cert.issuer}</p>
                            <p className="text-slate-500 text-sm mt-1">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Certifications;