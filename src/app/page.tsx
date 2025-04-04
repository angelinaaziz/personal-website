import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-black/50 backdrop-blur-md p-4 text-center">
          <p className="text-gradient text-xl font-bold">angelina.dev</p>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <span className="text-gradient">Engineer</span> & 
            <span className="text-gradient"> Indie Hacker</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building products that make a difference. Passionate about technology, 
            design, and creating meaningful experiences.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link 
              href="/projects" 
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="/about"
          className="group rounded-lg border border-white/10 px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about my journey, skills, and what drives me as an engineer.
          </p>
        </Link>

        <Link
          href="/resume"
          className="group rounded-lg border border-white/10 px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Resume{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore my professional experience and achievements.
          </p>
        </Link>

        <Link
          href="/stats"
          className="group rounded-lg border border-white/10 px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Stats{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Check out my GitHub stats and coding activity.
          </p>
        </Link>
      </div>
    </main>
  )
}
