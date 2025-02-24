'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        sexo: '',
        puntaje: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPhoto');
            setUser(null);
            window.location.href = process.env.NODE_ENV === 'production' ? '/primerizos/' : '/';
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Error al cerrar sesión. Por favor, intenta de nuevo.');
        }
    };

    return (
        <header className="header-container">
            <nav className="header-nav">
                {/* Logo y botón de menú móvil */}
                <div className="header-logo">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="mobile-menu-button"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <Link href="/">
                        <Image
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life"
                            width={128}
                            height={128}
                            quality={100}
                            priority
                        />
                    </Link>

                    {/* Botón de usuario móvil */}
                    <div className="md:hidden">
                        {user ? (
                            <button className="user-button">
                                {user.initial}
                            </button>
                        ) : (
                            <Link href="/login" className="button-secondary">
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>

                {/* Menú móvil */}
                <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="mobile-menu-items">
                        <Link href="/" className="nav-link">INICIO</Link>
                        <Link href="/modulos" className="nav-link">MODULOS</Link>
                        <Link href="/valoracion" className="nav-link">VALORACIÓN</Link>
                        <Link href="/consejosRapidos" className="nav-link">CONSEJO RÁPIDO</Link>
                        <Link href="/contacto" className="nav-link">CONTACTO</Link>
                        <button
                            onClick={() => setShowRatingModal(true)}
                            className="button-primary w-full"
                        >
                            Calificar App
                        </button>
                    </div>
                </div>

                {/* Menú escritorio */}
                <div className="nav-links">
                    <Link href="/" className="nav-link">INICIO</Link>
                    <Link href="/modulos" className="nav-link">MODULOS</Link>
                    <Link href="/valoracion" className="nav-link">VALORACIÓN</Link>
                </div>

                <div className="nav-links">
                    <Link href="/consejosRapidos" className="nav-link">CONSEJO RÁPIDO</Link>
                    <Link href="/contacto" className="nav-link">CONTACTO</Link>

                    <button
                        onClick={() => setShowRatingModal(true)}
                        className="button-primary"
                    >
                        Calificar App
                    </button>

                    {!user ? (
                        <Link href="/login" className="button-secondary">
                            LOGIN
                        </Link>
                    ) : (
                        <div className="user-menu">
                            <button className="user-button">
                                {user.initial}
                            </button>
                            <div className="user-dropdown">
                                <div className="py-1">
                                    <p className="px-4 py-2 text-sm text-gray-700 border-b">
                                        {user.name}
                                    </p>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Modal de calificación */}
            {showRatingModal && (
                <div className="rating-modal-overlay">
                    <div className="rating-modal">
                        <h2 className="text-2xl font-bold text-[#824058] mb-6">
                            Califique la aplicación
                        </h2>
                        <form onSubmit={handleSubmit} className="rating-form">
                            {/* Aquí va tu formulario existente usando las nuevas clases */}
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
