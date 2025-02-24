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

    useEffect(() => {
        if (user && showRatingModal) {
            setFormData(prev => ({
                ...prev,
                nombre: user.name
            }));
        }
    }, [showRatingModal, user]);

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
                console.error('Error detallado:', {
                    message: error.message,
                    code: error.code,
                    stack: error.stack
                });
                alert(`Error al guardar: ${error.message}. Por favor, verifica la conexión a Firestore.`);
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
        <header className="w-full bg-white shadow-lg">
            {/* Mobile Header */}
            <div className="md:hidden">
                <div className="flex items-center justify-between px-4 py-3">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life"
                            width={96}
                            height={96}
                            quality={100}
                            priority
                            className="h-12 w-auto"
                        />
                    </Link>

                    {user ? (
                        <div className="relative">
                            <button 
                                className="w-8 h-8 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-sm font-semibold"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {user.initial}
                            </button>
                        </div>
                    ) : (
                        <Link 
                            href="/login"
                            className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                            LOGIN
                        </Link>
                    )}
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } px-4 pt-2 pb-4 bg-white border-t border-gray-200`}
                >
                    <div className="flex flex-col space-y-3">
                        <Link href="/" className="text-black text-base font-semibold hover:text-gray-600">
                            INICIO
                        </Link>
                        <Link href="/modulos" className="text-black text-base font-semibold hover:text-gray-600">
                            MODULOS
                        </Link>
                        <Link href="/valoracion" className="text-black text-base font-semibold hover:text-gray-600">
                            VALORACIÓN
                        </Link>
                        <Link href="/consejosRapidos" className="text-black text-base font-semibold hover:text-gray-600">
                            CONSEJO RÁPIDO
                        </Link>
                        <Link href="/contacto" className="text-black text-base font-semibold hover:text-gray-600">
                            CONTACTO
                        </Link>
                        <button
                            onClick={() => {
                                setShowRatingModal(true);
                                setIsMenuOpen(false);
                            }}
                            className="bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] w-full text-center"
                        >
                            Calificar App
                        </button>
                        {user && (
                            <button
                                onClick={handleSignOut}
                                className="text-red-600 text-base font-semibold hover:text-red-700 text-left"
                            >
                                Cerrar Sesión
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop Header */}
            <nav className="hidden md:block max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-6">
                        <Link href="/" className="text-black text-lg font-semibold hover:text-gray-600 transition duration-300">
                            INICIO
                        </Link>
                        <Link href="/modulos" className="text-black text-lg font-semibold hover:text-gray-600 transition duration-300">
                            MODULOS
                        </Link>
                        <Link href="/valoracion" className="text-black text-lg font-semibold hover:text-gray-600 transition duration-300">
                            VALORACIÓN
                        </Link>
                    </div>

                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={getImagePath('/inicio/logo.png')}
                            alt="Baby Life"
                            width={128}
                            height={128}
                            quality={100}
                            priority
                            className="h-16 w-auto"
                        />
                    </Link>

                    <div className="flex items-center space-x-6">
                        <Link href="/consejosRapidos" className="text-black text-lg font-semibold hover:text-gray-600 transition duration-300">
                            CONSEJO RÁPIDO
                        </Link>
                        <Link href="/contacto" className="text-black text-lg font-semibold hover:text-gray-600 transition duration-300">
                            CONTACTO
                        </Link>

                        <button
                            onClick={() => setShowRatingModal(true)}
                            className="bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] transition-all duration-300"
                        >
                            Calificar App
                        </button>

                        {!user ? (
                            <Link
                                href="/login"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                LOGIN
                            </Link>
                        ) : (
                            <div className="relative group">
                                <button className="w-10 h-10 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-lg font-semibold hover:bg-[#e55a9d] transition-colors">
                                    {user.initial}
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
                </div>
            </nav>

            {/* Rating Modal */}
           {showRatingModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#824058] mb-6">Califique la aplicación</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Nombre *</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2"
                        placeholder="Ingrese su nombre"
                        disabled={isSubmitting}
                    />
                    {formErrors.nombre && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Edad *</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2"
                        placeholder="Ingrese su edad"
                        disabled={isSubmitting}
                    />
                    {formErrors.edad && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.edad}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Sexo</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        {['Masculino', 'Femenino', 'Otro'].map((option) => (
                            <label key={option} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="sexo"
                                    value={option}
                                    checked={formData.sexo === option}
                                    onChange={handleInputChange}
                                    className="text-[#FF6FB0]"
                                    disabled={isSubmitting}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Puntaje (1-7) *</label>
                    <input
                        type="number"
                        name="puntaje"
                        value={formData.puntaje}
                        onChange={handleInputChange}
                        min="1"
                        max="7"
                        className="w-full border rounded-md p-2"
                        placeholder="Ingrese un puntaje del 1 al 7"
                        disabled={isSubmitting}
                    />
                    {formErrors.puntaje && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.puntaje}</p>
                    )}
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end space-y-4 space-y-reverse sm:space-y-0 sm:space-x-4 mt-6">
                    <button
                        type="button"
                        onClick={() => {
                            setShowRatingModal(false);
                            setFormData({ nombre: '', edad: '', sexo: '', puntaje: '' });
                            setFormErrors({});
                        }}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 text-center"
                        disabled={isSubmitting}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF6FB0] text-white rounded-md hover:bg-[#e55a9d] transition-colors disabled:opacity-50 text-center"
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
