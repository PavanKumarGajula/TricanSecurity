import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';

const schema = z.object({
  name:         z.string().min(1, 'Name is required'),
  company:      z.string().optional(),
  phone:        z.string().optional(),
  email:        z.email('Please enter a valid email address'),
  propertyType: z.string().min(1, 'Please select a property type'),
  needs:        z.string().min(1, 'Please select a service'),
  message:      z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const propertyTypes = ['Office', 'Retail', 'Warehouse', 'Multi-Tenant', 'Government', 'Construction', 'Other'];
const needsOptions  = ['Surveillance', 'Badge Access & Access Control', 'Alarms & Monitoring', 'Fire Alarm', 'Network & Cabling', 'Trailer Rental', 'Not sure'];

const fadeSlide = {
  initial:  { opacity: 0, y: 12 },
  animate:  { opacity: 1, y: 0  },
  exit:     { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          className="msg-row success"
          {...fadeSlide}
        >
          <span className="font-mono text-sm">✓</span>
          <div>
            <p className="font-body font-semibold text-sm">Message sent.</p>
            <p className="font-body text-sm mt-0.5 opacity-80">We'll get back to you within one business day.</p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label block mb-1.5">Name *</label>
              <input {...register('name')} className="form-input" placeholder="Your full name" />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="form-label block mb-1.5">Company</label>
              <input {...register('company')} className="form-input" placeholder="Company or organization" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label block mb-1.5">Phone</label>
              <input {...register('phone')} type="tel" className="form-input" placeholder="Your phone number" />
            </div>
            <div>
              <label className="form-label block mb-1.5">Email *</label>
              <input {...register('email')} type="email" className="form-input" placeholder="your@email.com" />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label block mb-1.5">Property type *</label>
              <select {...register('propertyType')} className="form-input form-select">
                <option value="">Select property type</option>
                {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <AnimatePresence>
                {errors.propertyType && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.propertyType.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="form-label block mb-1.5">What do you need? *</label>
              <select {...register('needs')} className="form-input form-select">
                <option value="">Select a service</option>
                {needsOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              <AnimatePresence>
                {errors.needs && (
                  <motion.p
                    className="form-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.needs.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <label className="form-label block mb-1.5">Message</label>
            <textarea
              {...register('message')}
              rows={5}
              className="form-input resize-none"
              placeholder="Tell us about your property, your concerns, or anything else that would help us prepare."
            />
          </div>

          <AnimatePresence>
            {status === 'error' && (
              <motion.div
                className="msg-row error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="font-mono text-sm">✕</span>
                <p className="font-body text-sm">Something went wrong. Please call us at 410-645-7121.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </motion.button>

        </motion.form>
      )}
    </AnimatePresence>
  );
}
