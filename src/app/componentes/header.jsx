'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import '@/app/styles/header.css';

const Header = () => {
    const getImagePath = (path) => {
        const basePath = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
        return `${basePath}${path}`;
      };

    const [user, setUser] = useState(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        sexo: '',
        puntaje: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if (userName) {
            setUser({
                name: userName,
                initial: userName.charAt(0).toUpperCase()
            });
        }
    }, []);

    useEffect(() => {
        if (user && showRatingModal) {
            setFormData(prev => ({
                ...prev,
                nombre: user.name
            }));
        }
    }, [showRatingModal, user]);

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPhoto');
            setUser(null);
            const basePath = process.env.NODE_ENV === 'production' 
                ? '/primerizos/' 
                : '/';
            window.location.href = basePath;
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Error al cerrar sesión. Por favor, intenta de nuevo.');
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.nombre || formData.nombre.length < 2) {
            errors.nombre = 'El nombre debe tener al menos 2 caracteres';
        }
        
        const edad = parseInt(formData.edad);
        if (!formData.edad || isNaN(edad) || edad <= 18 || edad === 0) {
            errors.edad = 'La edad debe ser un número mayor a 18';
        }
        
        const puntaje = parseInt(formData.puntaje);
        if (!formData.puntaje || isNaN(puntaje) || puntaje < 1 || puntaje > 7) {
            errors.puntaje = 'El puntaje debe ser un número entre 1 y 7';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                const ratingData = {
                    ...formData,
                    timestamp: new Date(),
                    edad: parseInt(formData.edad),
                    puntaje: parseInt(formData.puntaje)
                };

                await addDoc(collection(db, 'ratings'), ratingData);
                
                setShowRatingModal(false);
                setFormData({ nombre: '', edad: '', sexo: '', puntaje: '' });
                alert('¡Gracias por tu calificación!');
            } catch (error) {
                console.error('Error al guardar:', error);
                alert(`Error al guardar: ${error.message}`);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setFormErrors(errors);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <header className="navbar">
            <div className="menu-container">
                <div className="menu-top">
                    <div className="menu-links">
                        <Link href="/" className="menu-link">INICIO</Link>
                        <Link href="/modulos" className="menu-link">MODULOS</Link>
                        <Link href="/valoracion" className="menu-link">VALORACIÓN</Link>
                    </div>

                    <div className="menu-logo">
                        <Link href="/">
                            <Image 
                                src={getImagePath('/inicio/logo.png')}
                                alt="Baby Life" 
                                width={100} 
                                height={40} 
                                className="logo"
                            />
                        </Link>
                    </div>

                    <div className="menu-links">
                        <Link href="/consejosRapidos" className="menu-link">CONSEJO RÁPIDO</Link>
                        <Link href="/contacto" className="menu-link">CONTACTO</Link>
                        <button 
                            className="rate-button" 
                            onClick={() => setShowRatingModal(true)}
                        >
                            Calificar App
                        </button>
                        {!user ? (
                            <Link href="/login" className="login-button">
                                LOGIN
                            </Link>
                        ) : (
                            <button 
                                className="user-button" 
                                onClick={handleSignOut}
                            >
                                {user.initial}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Versión móvil */}
            <div className="mobile-menu-container">
                <button 
                    className="mobile-rate-button" 
                    onClick={() => setShowRatingModal(true)}
                >
                    Calificar App
                </button>

                <div className="mobile-logo">
                    <Link href="/">
                        <Image 
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life" 
                            width={100} 
                            height={40} 
                            className="logo"
                        />
                    </Link>
                </div>

                <button 
                    className="hamburger-button"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

      
            <div className={`slide-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            
            <div className={`slide-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <div className="slide-menu-header">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image 
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life" 
                            width={100} 
                            height={40} 
                            className="logo"
                        />
                    </Link>
                    <button 
                        className="close-menu"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        ✕
                    </button>
                </div>
                
                <nav className="slide-menu-nav">
                    <Link href="/" className="slide-menu-link" onClick={() => setMobileMenuOpen(false)}>
                        INICIO
                    </Link>
                    <Link href="/modulos" className="slide-menu-link" onClick={() => setMobileMenuOpen(false)}>
                        MODULOS
                    </Link>
                    <Link href="/valoracion" className="slide-menu-link" onClick={() => setMobileMenuOpen(false)}>
                        VALORACIÓN
                    </Link>
                    <Link href="/consejosRapidos" className="slide-menu-link" onClick={() => setMobileMenuOpen(false)}>
                        CONSEJO RÁPIDO
                    </Link>
                    <Link href="/contacto" className="slide-menu-link" onClick={() => setMobileMenuOpen(false)}>
                        CONTACTO
                    </Link>
                </nav>
                
                <div className="slide-menu-footer">
                    <button 
                        className="slide-menu-button rate"
                        onClick={() => {
                            setShowRatingModal(true);
                            setMobileMenuOpen(false);
                        }}
                    >
                        Calificar App
                    </button>
                    
                    {!user ? (
                        <Link 
                            href="/login" 
                            className="slide-menu-button login"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            LOGIN
                        </Link>
                    ) : (
                        <button 
                            className="slide-menu-button logout"
                            onClick={() => {
                                handleSignOut();
                                setMobileMenuOpen(false);
                            }}
                        >
                            Cerrar Sesión ({user.name})
                        </button>
                    )}
                </div>
            </div>

            {/* Modal de calificación */}
            {showRatingModal && (
                <div className="modal-overlay" onClick={(e) => {
                    if (e.target.classList.contains('modal-overlay')) {
                        setShowRatingModal(false);
                    }
                }}>
                    <div className="modal-content">
                        <h2 className="modal-title">Califique la aplicación</h2>
                        <button 
                            className="modal-close"
                            onClick={() => setShowRatingModal(false)}
                        >
                            ✕
                        </button>
                        
                        <form onSubmit={handleSubmit} className="rating-form">
                            <div className="form-field">
                                <label>Nombre *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    placeholder="Ingrese su nombre"
                                    disabled={isSubmitting}
                                />
                                {formErrors.nombre && <span className="form-error">{formErrors.nombre}</span>}
                            </div>
                            
                            <div className="form-field">
                                <label>Edad *</label>
                                <input
                                    type="number"
                                    name="edad"
                                    value={formData.edad}
                                    onChange={handleInputChange}
                                    placeholder="Ingrese su edad"
                                    disabled={isSubmitting}
                                />
                                {formErrors.edad && <span className="form-error">{formErrors.edad}</span>}
                            </div>
                            
                            <div className="form-field">
                                <label>Sexo</label>
                                <div className="radio-options">
                                    {['Masculino', 'Femenino', 'Otro'].map(option => (
                                        <label key={option} className="radio-option">
                                            <input
                                                type="radio"
                                                name="sexo"
                                                value={option}
                                                checked={formData.sexo === option}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="form-field">
                                <label>Puntaje (1-7) *</label>
                                <input
                                    type="number"
                                    name="puntaje"
                                    value={formData.puntaje}
                                    onChange={handleInputChange}
                                    min="1"
                                    max="7"
                                    placeholder="Ingrese un puntaje del 1 al 7"
                                    disabled={isSubmitting}
                                />
                                {formErrors.puntaje && <span className="form-error">{formErrors.puntaje}</span>}
                            </div>
                            
                            <div className="form-buttons">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowRatingModal(false);
                                        setFormData({ nombre: '', edad: '', sexo: '', puntaje: '' });
                                        setFormErrors({});
                                    }}
                                    className="form-button cancel"
                                    disabled={isSubmitting}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="form-button submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
