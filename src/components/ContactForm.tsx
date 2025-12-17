'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validators'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === 'success' && (
        <div className="alert alert-success shadow-lg mb-6">
          <div>
            <svg className="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>✓ Message sent successfully! We'll contact you soon.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-error shadow-lg mb-6">
          <div>
            <svg className="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m2-2l2 2m0 0l2 2m-2-2l-2 2"></path></svg>
            <span>✗ Failed to send message. Please try again.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Full Name *</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered focus:input-primary"
            {...register('name')}
          />
          {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email Address *</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered focus:input-primary"
            {...register('email')}
          />
          {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Phone Number *</span>
          </label>
          <input
            type="tel"
            placeholder="+44 123 456 7890"
            className="input input-bordered focus:input-primary"
            {...register('phone')}
          />
          {errors.phone && <span className="text-error text-sm mt-1">{errors.phone.message}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Service Interest</span>
          </label>
          <select className="select select-bordered" {...register('service')}>
            <option value="">Select a service...</option>
            <option value="Beginner Lessons">Beginner Lessons</option>
            <option value="Test Preparation">Test Preparation</option>
            <option value="Advanced Lessons">Advanced Lessons</option>
            <option value="Manual Transmission">Manual Transmission</option>
            <option value="Intensive Package">Intensive Package</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Message *</span>
          </label>
          <textarea
            placeholder="Tell us about your experience and goals..."
            className="textarea textarea-bordered h-32 focus:textarea-primary"
            {...register('message')}
          ></textarea>
          {errors.message && <span className="text-error text-sm mt-1">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl mb-2">📱</div>
          <h4 className="font-bold mb-1">WhatsApp</h4>
          <a href="https://wa.me/+447446095099" className="link link-primary">
          +447446095099
          </a>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">☎️</div>
          <h4 className="font-bold mb-1">Call Us</h4>
          <a href="tel:+447446095099" className="link link-primary">
          +44 7446095099
          </a>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">✉️</div>
          <h4 className="font-bold mb-1">Email</h4>
          <a href="mailto:shiraj77@hotmail.co.uk" className="link link-primary">
            shiraj77@hotmail.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}