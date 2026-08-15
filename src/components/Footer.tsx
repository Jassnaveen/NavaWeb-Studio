import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  const socials = [
    { label: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
    { label: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
    { label: 'GitHub', icon: Github, href: siteConfig.social.github },
    { label: 'WhatsApp', icon: MessageCircle, href: siteConfig.social.whatsapp },
  ];

  return (
    <footer className="relative w-full border-t border-ink-800 bg-ink-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-3xl font-bold tracking-tighter text-ink-50 sm:text-4xl">
              NAVA<span className="text-ember">WEB</span> STUDIO
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              AI-POWERED WEBSITES<br />
              FOR GROWING BUSINESSES.
            </p>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <span className="text-label text-ink-500">LOCATION</span>
            <p className="mt-3 text-sm text-ink-300">
              Madurai,<br />
              Tamil Nadu, India
            </p>
          </div>

          {/* Social */}
          <div className="lg:col-span-4">
            <span className="text-label text-ink-500">CONNECT</span>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all hover:border-ember hover:text-ember"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            DESIGNED + BUILT WITH AI-ASSISTED WORKFLOWS
          </p>
          <p className="font-mono text-xs text-ink-600">
            © {new Date().getFullYear()} NAVAWEB STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
