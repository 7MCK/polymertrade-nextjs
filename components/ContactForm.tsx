'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mgvzqlpk')

  if (state.succeeded) {
    return (
      <div className="contact-form" style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
        <h3 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>Message received</h3>
        <p style={{ color: 'var(--slate)', fontSize: '14px' }}>We will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Jane" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="jane@company.com" required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label>I am a...</label>
          <select name="role">
            <option value="">Select your role</option>
            <option>Producer</option>
            <option>Processor / Recycler</option>
            <option>Compounder</option>
            <option>Trader / Distributor</option>
            <option>Buyer / Converter</option>
            <option>Investor</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Tell us about your interest in PolymerTrade..." />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>
        <button className="form-submit" type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
