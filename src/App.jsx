import profile from "./assets/profile.jpg"

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen">

{/* NAVBAR */}
<nav className="flex justify-between p-6 bg-black shadow-lg sticky top-0">
  <h1 className="text-2xl font-bold text-blue-400">Sneha Portfolio</h1>
  <div className="space-x-6">
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

{/* PROFILE */}
<section className="text-center p-10">
  <img 
    src={profile}
    className="w-56 h-56 mx-auto border-4 border-blue-500 shadow-lg hover:scale-110 transition duration-300"
  />
  <h2 className="text-4xl mt-4 font-bold">Sneha Borude</h2>
  <p className="text-xl mt-2 text-gray-400">Full Stack Developer</p>
  <p className="text-md text-gray-300 mt-2">📧 snehaborude21@gmail.com</p>

  <div className="mt-4 space-x-4">
    <a 
      href="https://linkedin.com/in/Sneha-Borude" 
      target="_blank"
      className="bg-blue-600 px-4 py-2 rounded"
    >
      LinkedIn
    </a>

    <a 
      href="https://github.com/snehaborude" 
      target="_blank"
      className="bg-gray-700 px-4 py-2 rounded"
    >
      GitHub
    </a>
  </div>
</section>

{/* EDUCATION */}
<section id="education" className="p-10 text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-400">Education</h2>

  <div className="bg-gray-800 p-6 rounded shadow-lg max-w-xl mx-auto">
    <p>SSC – 96.80% (2021)</p>
    <p>SRVSKV, Shrigonda Maharashtra</p><br/>

    <p>HSC – 75.83% (2023)</p>
    <p>SCSM College, Shrigonda Maharashtra</p><br/>

    <p>B.E Computer Engineering – CGPA: 8.82</p>
    <p>BSIOTR Wagholi (SPPU) Pune</p>
    <p>2023 - Present</p>
  </div>
</section>

{/* ACHIEVEMENT */}
<section className="p-10 text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-400">Achievement</h2>

  <div className="bg-gray-800 p-6 rounded shadow-lg max-w-xl mx-auto">
    <h3 className="font-bold">
      Lila Poonawalla Foundation Scholar (Lila Girl 2023)
    </h3>
    <p className="text-gray-400 mt-2">
      Selected as a scholar based on academic excellence.
    </p>
  </div>
</section>

{/* SKILLS */}
<section id="skills" className="p-10">
<h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">Skills</h2>

<div className="flex flex-wrap justify-center gap-3 mb-8">

<span className="bg-blue-600 px-4 py-2 rounded">HTML</span>
<span className="bg-green-600 px-4 py-2 rounded">CSS</span>
<span className="bg-yellow-600 px-4 py-2 rounded">JavaScript</span>
<span className="bg-purple-600 px-4 py-2 rounded">React</span>

<span className="bg-pink-600 px-4 py-2 rounded">Node.js</span>
<span className="bg-indigo-600 px-4 py-2 rounded">Express</span>

<span className="bg-teal-600 px-4 py-2 rounded">MongoDB</span>
<span className="bg-orange-600 px-4 py-2 rounded">MySQL</span>

<span className="bg-blue-800 px-4 py-2 rounded">Java & DSA</span>

</div>

<h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">Tools</h2>

<div className="flex flex-wrap justify-center gap-3">

<span className="bg-gray-600 px-4 py-2 rounded">GitHub</span>
<span className="bg-red-600 px-4 py-2 rounded">VS Code</span>
<span className="bg-cyan-600 px-4 py-2 rounded">Netlify</span>

</div>

</section>


{/* PROJECTS */}
<section id="projects" className="p-10 text-center">
<h2 className="text-3xl font-bold mb-4 text-blue-400">Projects</h2>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-gray-800 p-6 rounded shadow-lg">
<h3 className="text-xl font-bold">Location Tracker</h3>
<p>Mini backend project using Node & EJS</p>
<a href="https://github.com/snehaborude/locationtracker" className="text-blue-400">View</a>
</div>

<div className="bg-gray-800 p-6 rounded shadow-lg">
<h3 className="text-xl font-bold">EngineersHub</h3>
<p> Website using html,css,js&ml</p>
<a href="https://engineershub2k25.netlify.app/" className="text-blue-400">View</a>
</div>
<div className="bg-gray-800 p-6 rounded shadow-lg">
<h3 className="text-xl font-bold">careercrossroads</h3>
<p>  Educational Website using html,css,js</p>
<a href="https://github.com/snehaborude/icp-8.0-html-css-javascript-group-project-3" className="text-blue-400">View</a>
</div>


</div>
</section>

{/* CERTIFICATES */}
<section className="p-10 text-center">
<h2 className="text-3xl font-bold mb-4 text-blue-400">Certificates</h2>

<div className="bg-gray-800 p-6 rounded shadow-lg max-w-xl mx-auto">
<p>✔ Java & DSA by Talent Battle</p>
<p>✔ FrontEnd WebDevelopment by devTown</p>
<p>✔ Backend Webdevelopment by devTown</p>
</div>
</section>

{/* CONTACT */}
<section id="contact" className="text-center p-10">
<h2 className="text-3xl font-bold mb-4 text-blue-400">Contact</h2>
<p>Email: snehaborude21@gmail.com</p>
</section>

</div>
  )
}

export default App