import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Trican Security Inc. — Free Site Assessment',
  description:
    'Get a free security assessment. Trican Security serves Maryland, the Baltimore–Washington region, and Virginia. Call 410-645-7121 or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="relative bg-canvas section-pad-hero overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-blue-400 opacity-20" />
        <div className="relative page-container">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow">Contact</p>
            <h1 className="font-display font-semibold text-[52px] lg:text-[60px] text-ink tracking-tight leading-[1.04] mb-6">
              Let's talk about your site.
            </h1>
            <p className="font-body text-ink-muted text-lg leading-relaxed">
              Tell us what's keeping you up at night — or just that you're not sure where to start. We'll schedule a free assessment, walk your property, and put together options that fit your budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact + Form ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">

            <div className="lg:col-span-2 fade-up">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">Phone</p>
                  <a href="tel:4106457121" className="font-display font-semibold text-2xl text-ink hover:text-blue-400 transition-colors">
                    410-645-7121
                  </a>
                </div>
                <div>
                  <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">Email</p>
                  <a href="mailto:info@tricansecurity.com" className="font-body text-base text-ink hover:text-blue-400 transition-colors">
                    info@tricansecurity.com
                  </a>
                </div>
                <div>
                  <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">Service Area</p>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    Maryland · Baltimore–Washington region · Virginia (VA DCJS licensed)
                  </p>
                </div>
                <div className="pt-8">
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    No high-pressure sales. No obligation. We'll walk your site, listen to your concerns, and put together options that make sense for your budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 fade-up">
              <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-8">Send us a message</p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
