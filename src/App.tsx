import React from 'react';
import { Github, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

function LinkCard({ 
  href, 
  title, 
  description 
}: { 
  href: string; 
  title: string; 
  description?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-4 rounded-lg border border-gray-300 hover:border-gray-800 transition-all bg-white hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-700">{title}</h2>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
        <ExternalLink className="w-5 h-5 text-gray-500" />
      </div>
    </a>
  );
}

function SocialIcon({ 
  href, 
  icon: Icon 
}: { 
  href: string; 
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-800 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 py-16 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <p className="text-gray-600">Full Stack Developer & Designer</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <LinkCard
            href="https://github.com"
            title="My Portfolio"
            description="Check out my latest projects and work"
          />
          <LinkCard
            href="https://github.com"
            title="Blog"
            description="Read my thoughts on development and design"
          />
          <LinkCard
            href="https://github.com"
            title="Latest Project"
            description="E-commerce platform built with Next.js"
          />
          <LinkCard
            href="https://github.com"
            title="Contact Me"
            description="Let's work together"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <SocialIcon href="https://github.com" icon={Github} />
          <SocialIcon href="https://twitter.com" icon={Twitter} />
          <SocialIcon href="https://instagram.com" icon={Instagram} />
          <SocialIcon href="https://linkedin.com" icon={Linkedin} />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;