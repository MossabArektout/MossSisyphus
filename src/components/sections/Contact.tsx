import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Using Formspree for form submission
      // Replace 'xeqyzqjw' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xeqyzqjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const email = 'mossab.arektout@example.com';

  return (
    <div className="text-gray-300 space-y-6 font-mono">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Contact</h2>

      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 space-y-4">
        <div className="space-y-1">
          <p className="text-gray-400 text-sm">$ ping mossab.arektout</p>
          <p className="text-green-400 text-sm">PING successful - User is online</p>
          <p className="text-green-400 text-sm">Response time: &lt;1ms</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
        <h3 className="text-lg text-green-400 mb-4 flex items-center gap-2">
          <MessageSquare size={20} />
          Send Message
        </h3>
        
        {isSubmitted && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-400 text-sm">
              ❌ {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400 flex items-center gap-2">
                <User size={16} />
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:border-blue-500/50 focus:outline-none transition-all duration-200 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400 flex items-center gap-2">
                <Mail size={16} />
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:border-blue-500/50 focus:outline-none transition-all duration-200 disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-gray-400">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:border-blue-500/50 focus:outline-none transition-all duration-200 disabled:opacity-50"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-400">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={5}
              className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:border-blue-500/50 focus:outline-none transition-all duration-200 resize-none disabled:opacity-50"
              placeholder="Tell me about your project, opportunity, or just say hello..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-lg py-3 px-4 hover:bg-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Quick Contact Links */}
      <div className="space-y-3">
        <h3 className="text-lg text-green-400">Direct Contact</h3>

        <a
          href={`mailto:${email}`}
          className="block w-full bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded">
              <Mail size={20} className="text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">Email Directly</p>
              <p className="text-gray-200 group-hover:text-blue-400 transition-colors">
                {email}
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/mossabarektout"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded">
              <Github size={20} className="text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-200 group-hover:text-blue-400 transition-colors">
                @mossabarektout
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/mossab-arektout"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded">
              <Linkedin size={20} className="text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-gray-200 group-hover:text-blue-400 transition-colors">
                Mossab Arektout
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
        <p className="text-gray-400 text-sm">
          <span className="text-green-400">Status:</span> Available for opportunities
        </p>
        <p className="text-gray-400 text-sm mt-1">
          <span className="text-green-400">Response Time:</span> Usually within 24 hours
        </p>
      </div>
    </div>
  );
}