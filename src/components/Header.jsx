import React, {useState, useEffect} from 'react'
import {Menu, X} from 'lucide-react'
import {Button} from './ui/button'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };  

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        },[]);

        const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if(element){
                element.scrollIntoView({behavior: 'smooth'});
                setIsMobileMenuOpen(false);
            }
        };

        const navItems = [
            {label: 'Home', id: 'home'},
            {label: 'About', id: 'about'},
            {label: 'Skills', id: 'skills'},
            {label: 'Projects', id: 'projects'},
            {label: 'Education', id: 'education'},
            {label: 'Certifications', id: 'certifications'},
            {label: 'Contacts', id: 'contacts'},
        ];

        return(
            <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
                <nav className='container mx-auto px-6 py-4'>
                    <div className='flex items-center justify-between'>
                        <div className='text-2xl font-bold text-cyan-400 font-mono cursor-pointer' onClick={() => scrollToSection("home")}>
                            &It;JD/&gt;
                            </div>

                            <div className='hidden md:flex items-center gap-8'>
                                {navItems.map((item) => (
                                    <Button key={item.id} variant='ghost' onClick={() => scrollToSection(item.id)}
                                    className='text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium'>
                                        {item.label}
                                    </Button>
                                ))}
                            </div>

                            <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-slate-300 hover:text-cyan-400"
                            onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </Button>
                        </div>

                        {isMobileMenuOpen && (
                            <div className='md:hidden mt-4 pb-4 flex flex-col gap-4 '>
                                {navItems.map((item) => (
                                    <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className='text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-left'
                                >
                                    {item.label}
                                </button>
                                ))}
                            </div>
                        )}
                </nav>
            </header>
        );
};

export default Header;