import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold font-mono">
              <span className="text-gradient">angelina.dev</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-grid relative px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background z-10"></div>
        <div className="container mx-auto relative z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Software Engineer</span><br />
            Building the Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
            Senior Platform Engineer crafting scalable solutions and pursuing a masters in Systems Engineering. 
            Currently building at Anaplan and co-founding auralyze.ai
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/projects"
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-3 transition-all"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-6 py-3 hover:opacity-90 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-2">auralyze.ai</h3>
              <p className="text-gray-400 mb-4">AI-powered university interview preparation platform</p>
              <div className="flex space-x-2">
                <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded">AI/ML</span>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Next.js</span>
              </div>
            </div>
            {/* Add more project cards */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Angelina Aziz. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/angelinaaziz" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/angelina-aziz-8088051a7/" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/angelina_codes/" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
