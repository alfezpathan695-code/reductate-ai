 "use client";

import { useState } from "react";

 export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>

      {/* Navbar */}



<header className="bg-black text-white px-8 py-5 sticky top-0 z-50 shadow-lg">

  <div className="flex justify-between items-center">

    <h1 className="text-3xl font-extrabold text-blue-400">
      Reductate.ai
    </h1>

    
    {/* Desktop Menu */}

    <nav className="hidden md:block">

      <ul className="flex gap-8 text-lg">

        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
        </li>

        <li>
          <a href="#testimonials" className="hover:text-blue-400 transition">
            Testimonials
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </li>

      </ul>

    </nav>


    {/* Desktop Button */}

    <button className="hidden md:block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold">
      Join Now
    </button>


    {/* Mobile Menu Button */}

    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>


  {/* Mobile Menu */}

  {menuOpen && (

    <div className="md:hidden mt-6 bg-gray-900 rounded-2xl p-6">

      <ul className="flex flex-col gap-6 text-lg">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <button className="mt-6 w-full bg-blue-500 py-3 rounded-xl">
        Join Now
      </button>

    </div>

  )}

</header>

{/* HERO Section */}

<section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

  {/* Background Glow Effects */}
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px] rounded-full animate-pulse"></div>

  {/* Grid Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

  {/* Main Container */}
  <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT CONTENT */}
    <div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

        <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>

        <span className="text-sm text-gray-300">
          AI Powered Learning Platform
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black leading-tight">

        Learn
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {" "}Modern Skills
        </span>

        <br />

        Build Your Future 🚀

      </h1>

      {/* Description */}
      <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">

        Master real-world development skills with live mentorship,
        practical projects, and AI-powered learning experiences
        designed for future developers.

      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5">

        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 font-semibold shadow-2xl">

          Start Learning

        </button>

        <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">

          Explore Courses

        </button>

      </div>

      {/* Stats */}
      <div className="mt-14 flex flex-wrap gap-10">

        <div>
          <h3 className="text-3xl font-bold">10K+</h3>
          <p className="text-gray-400 mt-1">Students</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">120+</h3>
          <p className="text-gray-400 mt-1">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">4.9★</h3>
          <p className="text-gray-400 mt-1">Ratings</p>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center">

      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-cyan-500 to-purple-500 blur-[100px] opacity-30 rounded-full animate-pulse"></div>

      {/* Glass Card */}
      <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-5 shadow-2xl">

<img
  src="/hero.jpg"
  alt="Hero"
  className="w-[500px] hover:scale-105 transition duration-500"
/>

        {/* Floating Card 1 */}
        <div className="absolute -top-5 -left-5 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl">

          🚀 Live Projects

        </div>

        {/* Floating Card 2 */}
        <div className="absolute bottom-5 -right-5 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl">

          ⚡ AI Powered

        </div>

      </div>

    </div>

  </div>

</section>
      
{/* About Section */}
 
<section
  id="about"
  className="py-28 bg-white"
>

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">

    {/* Left Image Side */}
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="About"
        className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
      />

      {/* Floating badge */}
      <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-lg animate-bounce">
        🚀 Learning Platform
      </div>

    </div>

    {/* Right Text Side */}
    <div>

      <h2 className="text-5xl font-bold text-gray-900">
        About Us
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-8">
        We help students learn modern technology through real-world projects,
        live mentorship, and practical experience that builds real skills.
      </p>

      <p className="mt-4 text-gray-600 text-lg leading-8">
        Our focus is simple — learn, build, and grow into a job-ready developer.
      </p>

      {/* Points */}
      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          <p className="text-gray-700">Live Interactive Classes</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          <p className="text-gray-700">Real-World Projects</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          <p className="text-gray-700">Career Guidance & Mentorship</p>
        </div>

      </div>

      {/* Button */}
      <button className="mt-10 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition shadow-lg">
        Explore More
      </button>

    </div>

  </div>

</section>

 

{/* Features Section */}

<section
  id="features"
  className="py-24 bg-gray-100"
>

  <h2 className="text-5xl font-bold text-center mb-16">
    Our Features
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">


    {/* Card 1 */}

    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="Live Classes"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          Live Classes
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Interactive live sessions with expert mentors.
        </p>

      </div>

    </div>


    {/* Card 2 */}

    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Projects"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          Real Projects
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Build practical projects for your portfolio.
        </p>

      </div>

    </div>


    {/* Card 3 */}

    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Certificates"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          Certifications
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Earn industry-recognized certifications.
        </p>

      </div>

    </div>


    {/* Card 4 */}

    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
        alt="Career Support"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          Career Support
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Get mentorship and career guidance support.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Testimonials Section */}

<section
  id="testimonials"
  className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
>

  <h2 className="text-5xl font-bold text-center mb-16">
    What Students Say
  </h2>

  <div className="grid md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">

    {/* Card 1 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <h3 className="font-bold">Alfej Pathan</h3>
          <p className="text-sm text-gray-300">Frontend Student</p>
        </div>

      </div>

      <div className="text-yellow-400 mb-3">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-300 leading-7">
        “Amazing platform! I improved my development skills and built real projects.”
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold">
          S
        </div>

        <div>
          <h3 className="font-bold">Ashh Khan</h3>
          <p className="text-sm text-gray-300">Full Stack Learner</p>
        </div>

      </div>

      <div className="text-yellow-400 mb-3">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-300 leading-7">
        “Mentors are very supportive and classes are highly practical.”
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <h3 className="font-bold">Amaan Khan</h3>
          <p className="text-sm text-gray-300">UI/UX Student</p>
        </div>

      </div>

      <div className="text-yellow-400 mb-3">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-300 leading-7">
        “One of the best learning experiences for students who want real skills.”
      </p>

    </div>

  </div>
</section>

 

{/* Contact Section */}

<section
  id="contact"
  className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
>

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

    {/* Left Side */}

    <div>

      <h2 className="text-6xl font-extrabold leading-tight">
        Let's Build
        <br />
        Your Future Together 🚀
      </h2>

      <p className="mt-8 text-xl text-gray-200 leading-8">

        Join our learning platform and start building
        modern tech skills with practical experience
        and expert mentorship.

      </p>

      <div className="mt-10 space-y-4 text-lg">

        <p>📧 support@reductate.ai</p>
        <p>📞 +91 9876543210</p>
        <p>📍 India</p>

      </div>

    </div>


    {/* Right Side Form */}

    <div className="bg-white p-10 rounded-3xl shadow-2xl">

      <h3 className="text-3xl font-bold text-black">
        Contact Us
      </h3>

      <form className="mt-8 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl border outline-none text-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl border outline-none text-black"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 rounded-xl border outline-none text-black"
        ></textarea>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-bold text-lg"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>

<footer className="bg-black text-white py-8 text-center">

  <h2 className="text-3xl font-bold text-blue-400">
    Reductate.ai
  </h2>

  <p className="mt-4 text-gray-400">
    Empowering students with modern technology education.
  </p>

  <p className="mt-6 text-gray-500">
    © 2026 Reductate.ai. All Rights Reserved.
  </p>

</footer>
    </div>
  );
}