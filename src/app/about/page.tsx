export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-gradient">About Me</span>
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Hi! I'm Angelina, a Senior Platform Engineer with a passion for building scalable solutions 
            and creating meaningful experiences. I'm currently pursuing my masters in Systems Engineering 
            while working at Anaplan and co-founding auralyze.ai.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Background</h2>
          <p className="mb-6">
            With a strong foundation in software engineering and a keen interest in emerging technologies, 
            I've dedicated my career to developing innovative solutions that address real-world challenges. 
            My experience spans across various domains, from cloud infrastructure to machine learning applications.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Languages</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>Java</li>
                <li>Go</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Technologies</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>React/Next.js</li>
                <li>Node.js</li>
                <li>Docker/Kubernetes</li>
                <li>AWS/GCP</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Git</li>
                <li>CI/CD</li>
                <li>Terraform</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Current Focus</h2>
          <p className="mb-6">
            I'm currently focused on building auralyze.ai, an AI-powered platform that helps students 
            prepare for university interviews. This project combines my passion for education technology 
            with cutting-edge AI solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Beyond Coding</h2>
          <p className="mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge through technical writing and mentoring. I believe in the 
            power of technology to create positive change and am always excited to learn and grow.
          </p>

          <div className="mt-12 p-6 bg-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="mb-4">
              I'm always interested in connecting with fellow developers, potential collaborators, 
              and anyone passionate about technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/angelinaaziz" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/angelina-aziz-8088051a7/" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/angelina_codes/" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 