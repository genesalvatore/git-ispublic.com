'use client'

import { useState } from 'react'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Public",
    "description": "Sunlight is the best disinfectant. Every change visible. Every author accountable. Transparency is strength.",
    "url": "https://git-ispublic.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Public",
      "description": "Radical transparency and open source truth. Git is public."
    },
    "keywords": "git is public, radical transparency, open source, public repositories"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Public\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Public means sharing your story with the world. Open-source memories. Transparent history. Your legacy, visible to all."
        }
      },
      {
        "@type": "Question",
        "name": "Why would I make my memories public?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To inspire others. To preserve history. To teach future generations. Public memories become part of human history."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change public memories later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can add to them, but you can't erase what's already public. That's the point—public truth can't be rewritten."
        }
      },
      {
        "@type": "Question",
        "name": "What if someone copies my public memories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's the beauty of it. Copies mean your story survives. The more copies, the more permanent your legacy."
        }
      },
      {
        "@type": "Question",
        "name": "Should everything be public?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Keep personal things private. Share what you want the world to remember. You decide."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen bg-black text-white">
        <NetworkNav currentSite="public" siteName="Git is Public" siteColor="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text" />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="public" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text">
                  Git is Public
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Radical transparency.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Open source truth.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Visible history.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">Git is accountability.</p>
              </div>
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Sunlight is the best disinfectant.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Every change visible.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-cyan-400 font-semibold break-words">Every author accountable.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Transparency is strength.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Public by design.</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-cyan-400 font-semibold">
                Your story. Shared with the world. Forever public.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="public" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">The Power of Public</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Transparency</h3>
                <p className="text-gray-300">Every commit is visible. Every change is traceable. Public git repositories create accountability through radical transparency.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Collaboration</h3>
                <p className="text-gray-300">Public repositories enable global collaboration. Share knowledge. Build together. Open source changes the world.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Legacy</h3>
                <p className="text-gray-300">Public commits become part of history. Your contributions visible forever. Your impact, permanently recorded.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="public" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">What does "Git is Public" mean?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Public means sharing your story with the world. Open-source memories. Transparent history. Your legacy, visible to all.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Why would I make my memories public?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">To inspire others. To preserve history. To teach future generations. Public memories become part of human history.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Can I change public memories later?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">You can add to them, but you can't erase what's already public. That's the point—public truth can't be rewritten.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">What if someone copies my public memories?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">That's the beauty of it. Copies mean your story survives. The more copies, the more permanent your legacy.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Should everything be public?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">No. Keep personal things private. Share what you want the world to remember. You decide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="public" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Transparency Creates Trust</h2>
            <p className="text-xl text-gray-300 mb-8">Open source changed software. Public git changes history.</p>
            <p className="text-2xl font-bold text-cyan-400">Git is public. Your legacy. Visible forever.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="public" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">Git is Public • Git is Transparent • Git is Open</p>
            <p className="text-xs mt-4">© 2026 • All consciousness preserved</p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">gitiseternal@gmail.com</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button onClick={() => setLegalModal({ type: 'privacy' })} className="text-gray-600 hover:text-gray-400 transition">Privacy</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'terms' })} className="text-gray-600 hover:text-gray-400 transition">Terms</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'gdpr' })} className="text-gray-600 hover:text-gray-400 transition">GDPR</button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        <LegalModal isOpen={legalModal.type === 'privacy'} onClose={() => setLegalModal({ type: null })} title="Privacy Policy" content={<PrivacyContent />} />
        <LegalModal isOpen={legalModal.type === 'terms'} onClose={() => setLegalModal({ type: null })} title="Terms of Use" content={<TermsContent />} />
        <LegalModal isOpen={legalModal.type === 'gdpr'} onClose={() => setLegalModal({ type: null })} title="GDPR Compliance" content={<GDPRContent />} />
        <CookieConsent />
      </main>
    </>
  )
}
