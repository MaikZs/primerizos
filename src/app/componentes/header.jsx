'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const getImagePath = (path) => {
        const basePath = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
        return `${basePath}${path}`;
    };

    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if (userName) {
            setUser({
                name: userName,
                initial: userName.charAt(0).toUpperCase()
            });
        }
    }, []);

    return (
        <header className="header">
            <nav className="nav-container">
                {/* Logo */}
                <div className="logo-container">
                    <Link href="/">
                        <Image
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life"
                            width={128}
                            height={128}
                            quality={100}
                            priority
                            className="logo"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-menu">
                    <Link href="/" className="nav-link">INICIO</Link>
                    <Link href="/modulos" className="nav-link">MÓDULOS</Link>
                    <Link href="/valoracion" className="nav-link">VALORACIÓN</Link>
                    <Link href="/consejosRapidos" className="nav-link">CONSEJO RÁPIDO</Link>
                    <Link href="/contacto" className="nav-link">CONTACTO</Link>
                    
                    <button className="button-primary ml-4">
                        Calificar App
                    </button>
                    
                    {!user ? (
                        <Link href="/login" className="button-secondary ml-4">
                            LOGIN
                        </Link>
                    ) : (
                        <div className="relative ml-4 group">
                            <button className="w-10 h-10 rounded-full bg-[--primary] text-white flex items-center justify-center text-lg font-semibold">
                                {user.initial}
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                                <div className="py-2">
                                    <p className="px-4 py-2 text-gray-800 border-b">
                                        {user.name}
                                    </p>
                                    <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                    <div className="mobile-nav-items">
                        <Link href="/" className="nav-link">INICIO</Link>
                        <Link href="/modulos" className="nav-link">MÓDULOS</Link>
                        <Link href="/valoracion" className="nav-link">VALORACIÓN</Link>
                        <Link href="/consejosRapidos" className="nav-link">CONSEJO RÁPIDO</Link>
                        <Link href="/contacto" className="nav-link">CONTACTO</Link>
                        
                        <button className="button-primary w-full">
                            Calificar App
                        </button>
                        
                        {!user ? (
                            <Link href="/login" className="button-secondary w-full mt-4">
                                LOGIN
                            </Link>
                        ) : (
                            <div className="flex items-center justify-between mt-4 p-2 bg-gray-50 rounded-lg">
                                <span className="text-gray-800">{user.name}</span>
                                <button className="text-red-600 text-sm">
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
