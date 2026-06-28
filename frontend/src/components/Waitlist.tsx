import React, { useState } from 'react';
import { Mail, User, MessageSquare, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setIsLoading(true);
    setApiError('');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          subject: form.subject || null,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      setIsSubmitted(true);
    } catch {
      setApiError('Failed to send your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    background: 'var(--color-bg-primary)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--color-border)'}`,
    borderRadius: '4px',
    padding: '13px 14px 13px 42px',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'var(--font-primary)',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  });

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'var(--color-bg-primary)', position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px',
        background: 'rgba(227,255,4,0.03)',
        borderRadius: '50%', filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div className="container-main" style={{ position: 'relative' }}>

        {/* Section header */}
        <div style={{ marginBottom: '56px' }}>
          <div data-aos="fade-up-right" data-aos-duration="1400" style={{ marginBottom: '20px' }}>
            <span className="section-badge">Contact Us</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2
              data-aos="zoom-in-down"
              data-aos-duration="1600"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05, margin: 0 }}
            >
              <span style={{ fontWeight: 700 }}>Get in</span>{' '}
              <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>Touch</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{ color: 'var(--color-text-muted)', fontSize: '15px', maxWidth: '360px', lineHeight: 1.7, margin: 0 }}
            >
              Have a question, partnership inquiry, or feedback about the platform? We read every message.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1600"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: 'clamp(32px, 5vw, 64px)',
            position: 'relative',
          }}
        >
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '25%', right: '25%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(227,255,4,0.5), transparent)',
          }} />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                      <User size={15} color="var(--color-text-subtle)" />
                    </div>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                      disabled={isLoading}
                      style={fieldStyle(!!errors.name)}
                      onFocus={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--color-accent)'; }}
                      onBlur={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--color-border)'; }}
                    />
                  </div>
                  {errors.name && (
                    <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444', fontSize: '12px' }}>
                      <AlertCircle size={12} />{errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                      <Mail size={15} color="var(--color-text-subtle)" />
                    </div>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      disabled={isLoading}
                      style={fieldStyle(!!errors.email)}
                      onFocus={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--color-accent)'; }}
                      onBlur={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--color-border)'; }}
                    />
                  </div>
                  {errors.email && (
                    <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444', fontSize: '12px' }}>
                      <AlertCircle size={12} />{errors.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
                  Subject <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', fontSize: '11px', color: 'var(--color-text-subtle)', opacity: 0.6 }}>(optional)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <MessageSquare size={15} color="var(--color-text-subtle)" />
                  </div>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="e.g. Partnership, Feature Request, Bug Report"
                    disabled={isLoading}
                    style={fieldStyle(false)}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us how we can help..."
                  disabled={isLoading}
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'var(--color-bg-primary)',
                    border: `1px solid ${errors.message ? '#ef4444' : 'var(--color-border)'}`,
                    borderRadius: '4px',
                    padding: '13px 14px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: 'var(--font-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--color-accent)'; }}
                  onBlur={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--color-border)'; }}
                />
                {errors.message && (
                  <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444', fontSize: '12px' }}>
                    <AlertCircle size={12} />{errors.message}
                  </div>
                )}
              </div>

              {/* API Error */}
              {apiError && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '13px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '6px', padding: '10px 14px' }}>
                  <AlertCircle size={14} />{apiError}
                </div>
              )}

              {/* Submit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '4px' }}>
                <p style={{ fontSize: '12px', color: 'var(--color-text-subtle)', margin: 0 }}>
                  We typically respond within 1–2 business days.
                </p>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary"
                  style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {isLoading ? (
                    <>
                      <div style={{ width: 15, height: 15, border: '2px solid #000', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: '50%',
                border: '1px solid rgba(227,255,4,0.4)',
                background: 'rgba(227,255,4,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <CheckCircle2 size={32} color="var(--color-accent)" />
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 12px' }}>
                Message <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 400 }}>Received</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', maxWidth: '420px', lineHeight: 1.7, margin: '0 0 24px' }}>
                Thank you for reaching out. We have received your message and will get back to you within 1–2 business days.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); setApiError(''); }}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-accent)', fontSize: '13px', fontWeight: 600, textDecoration: 'underline', fontFamily: 'var(--font-primary)' }}
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
