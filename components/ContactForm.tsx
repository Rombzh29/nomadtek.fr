'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/



const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()

  if (!form.name || !form.email || !form.project) {
    setStatus('error')
    setErrorMessage('Tous les champs sont obligatoires.')
    return
  }

  if (!emailRegex.test(form.email)) {
    setStatus('error')
    setErrorMessage('Adresse email invalide.')
    return
  }

  setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', project: '' })
      } else {
        setStatus('error')
        setErrorMessage('Une erreur est survenue, réessayez.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Une erreur est survenue, réessayez.')
    }
  }

  return (
    <section className="py-10 px-4 bg-[#202936]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Parlons de votre projet</h2>
        <p className="text-gray-100 mb-10">Décrivez-nous votre besoin, nous revenons vers vous sous 48h.</p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-100 mb-1">Nom</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f39c12] transition"
            />
          </div>

          <div>
            <label className="block text-gray-100 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f39c12] transition"
            />
          </div>

          <div>
            <label className="block text-gray-100 mb-1">Description du projet</label>
            <textarea
              name="project"
              value={form.project}
              onChange={handleChange}
              placeholder="Van, food truck, dimensions, équipements souhaités..."
              rows={5}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f39c12] transition resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm text-center">Message envoyé, nous revenons vers vous sous 48h.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">{errorMessage || 'Une erreur est survenue, réessayez.'}</p>
          )}
        </div>
      </div>
    </section>
  )
}