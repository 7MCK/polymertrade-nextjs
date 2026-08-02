'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [state, handleSubmit] = useForm('mgvzqlpk')

  if (!open) return null

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        {state.succeeded ? (
          <div className="modal-confirm">
            <div className="check">✅</div>
            <h3>You&apos;re on the list</h3>
            <p>We will be in touch as PolymerTrade opens for verified members.</p>
          </div>
        ) : (
          <>
            <span className="badge-soon">Join the marketplace</span>
            <h2>Join PolymerTrade</h2>
            <p>Register your interest as a producer, processor, compounder or buyer. We will follow up with verification steps as the marketplace opens.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" placeholder="Company name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="you@company.com" required />
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
                  <option>Other</option>
                </select>
              </div>
              <button className="form-submit" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Join the Marketplace'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
