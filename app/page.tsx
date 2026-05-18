 "use client";

import { useState } from "react";

 export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>

     
     
{/* PREMIUM DARK NAVBAR */}

<header className="sticky top-0 z-50 bg-black border-b border-white/10 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>


  {/* Grid Overlay */}

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


  {/* Navbar Container */}

  <div className="relative max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">


    {/* LOGO */}

    <h1 className="text-3xl md:text-4xl font-black cursor-pointer group">

      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:tracking-widest transition-all duration-500">

        Reductate.ai

      </span>

    </h1>


    {/* DESKTOP MENU */}

    <nav className="hidden md:flex">

      <ul className="flex gap-10 text-lg font-medium text-white">


        <li className="relative group">

          <a href="#" className="transition duration-300 hover:text-cyan-400">

            Home

          </a>

          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>

        </li>


        <li className="relative group">

          <a href="#about" className="transition duration-300 hover:text-cyan-400">

            About

          </a>

          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>

        </li>


        <li className="relative group">

          <a href="#features" className="transition duration-300 hover:text-cyan-400">

            Features

          </a>

          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>

        </li>


        <li className="relative group">

          <a href="#testimonials" className="transition duration-300 hover:text-cyan-400">

            Testimonials

          </a>

          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>

        </li>


        <li className="relative group">

          <a href="#contact" className="transition duration-300 hover:text-cyan-400">

            Contact

          </a>

          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>

        </li>

      </ul>

    </nav>


    {/* DESKTOP BUTTON */}

    <button className="hidden md:block relative overflow-hidden px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 transition duration-500">

      <span className="relative z-10">

        Join Now 🚀

      </span>

      <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition duration-500"></div>

    </button>


    {/* MOBILE BUTTON */}

    <button
      className="md:hidden text-4xl text-white hover:text-cyan-400 transition duration-300"
      onClick={() => setMenuOpen(!menuOpen)}
    >

      {menuOpen ? "✕" : "☰"}

    </button>

  </div>


  {/* MOBILE MENU */}

  <div
    className={`md:hidden overflow-hidden transition-all duration-500 ${
      menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >

    <div className="mx-6 mb-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-2xl">

      <ul className="flex flex-col gap-8 text-lg text-center text-white font-medium">


        <li>
          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Home
          </a>
        </li>


        <li>
          <a href="#about" className="hover:text-cyan-400 transition duration-300">
            About
          </a>
        </li>


        <li>
          <a href="#features" className="hover:text-cyan-400 transition duration-300">
            Features
          </a>
        </li>


        <li>
          <a href="#testimonials" className="hover:text-cyan-400 transition duration-300">
            Testimonials
          </a>
        </li>


        <li>
          <a href="#contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>
        </li>

      </ul>


      {/* Mobile Join Button */}

      <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 font-semibold shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-500">

        Join Now 🚀

      </button>

    </div>

  </div>

</header>

 
{/* HERO SECTION */}

<section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>


  {/* Grid Overlay */}

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


  {/* Main Container */}

  <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">


    {/* LEFT CONTENT */}

    <div>

      {/* Badge */}

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 animate-pulse">

        <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>

        <span className="text-sm text-gray-300">
          Full Stack Developer
        </span>

      </div>


      {/* Heading */}

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

        Hi, I'm{" "}

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

          Alfej Pathan

        </span>

        <br />

        Building Modern
        <br />

        Web Experiences 🚀

      </h1>


      {/* Description */}

      <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">

        Passionate frontend developer creating modern,
        responsive and user-friendly web applications
        using React.js, Next.js and Tailwind CSS.

      </p>


      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-110 hover:shadow-cyan-500/50 hover:shadow-2xl transition duration-300 font-semibold">

          View Projects

        </button>

        <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition duration-300">

          Contact Me

        </button>

      </div>


{/* Stats */}

<div className="mt-14 flex flex-wrap justify-center items-center gap-16 text-center">

  <div className="hover:scale-110 transition duration-300">
    <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
    <p className="text-gray-400 mt-2">Projects</p>
  </div>

  <div className="w-[1px] h-14 bg-white/20 hidden md:block"></div>

  <div className="hover:scale-110 transition duration-300">
    <h3 className="text-4xl font-bold text-purple-400">2+</h3>
    <p className="text-gray-400 mt-2">Years Learning</p>
  </div>

  <div className="w-[1px] h-14 bg-white/20 hidden md:block"></div>

  <div className="hover:scale-110 transition duration-300">
    <h3 className="text-4xl font-bold text-pink-400">100%</h3>
    <p className="text-gray-400 mt-2">Passion</p>
  </div>

</div>

    </div>


    {/* RIGHT SIDE IMAGE */}

    <div className="relative flex justify-center">


      {/* Glow */}

      <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-cyan-500 to-purple-500 blur-[100px] opacity-30 rounded-full animate-pulse"></div>


      {/* Glass Card */}

      <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-5 shadow-2xl hover:scale-105 transition duration-500">

        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-[450px] rounded-[25px]"
        />


        {/* Floating Card 1 */}

        <div className="absolute -top-5 -left-5 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl animate-bounce">

          🚀 Live Projects

        </div>


        {/* Floating Card 2 */}

        <div className="absolute bottom-5 -right-5 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl animate-pulse">

          ⚡ Modern UI

        </div>

      </div>

    </div>

  </div>

</section>   


{/* ABOUT SECTION */}

<section
  id="about"
  className="py-24 bg-[#f3f3f3]"
>

  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">


    {/* LEFT IMAGE */}

    <div className="flex justify-center">

      <div className="relative group">

        {/* Image */}

        <img
          src="/About.jpeg"
          alt="About"
          className="w-[600px] rounded-lg shadow-2xl group-hover:scale-105 transition duration-500"
        />

        {/* Small Floating Box */}

        <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg animate-bounce">

          🚀 Developer

        </div>

      </div>

    </div>


    {/* RIGHT CONTENT */}

    <div>

      {/* Heading */}

      <h2 className="text-5xl font-extrabold text-black">

        About Us

      </h2>


      {/* Small Title */}

      <p className="mt-4 text-lg text-gray-700">

        Front-end Developer &{" "}

        <span className="text-blue-500 font-semibold">
          Designer
        </span>

      </p>


      {/* Line */}

      <div className="w-24 h-1 bg-blue-500 mt-3 rounded-full"></div>


      {/* Description */}

      <p className="mt-6 text-gray-600 leading-8">

        Passionate developer focused on building
        modern and responsive web applications
        using React.js, Next.js and Tailwind CSS.

      </p>

      <p className="mt-4 text-gray-600 leading-8">

        I create clean UI designs, smooth user
        experiences and interactive websites
        with modern technologies.

      </p>


      {/* Button */}

      <button className="mt-8 bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">

        Hire Me

      </button>

    </div>

  </div>

</section>

 

{/* FEATURES SECTION */}

<section
  id="features"
  className="py-28 bg-[#0f172a] overflow-hidden"
>

  {/* Heading */}

  <div className="text-center px-6">

    <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
      Our Features
    </p>

    <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-white">
      Amazing Features
    </h2>

    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
      Modern UI with smooth animations, premium cards
      and interactive experiences.
    </p>

  </div>


  {/* Cards */}

  <div className="max-w-7xl mx-auto mt-24 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">


    {/* CARD 1 */}

    <div className="relative pt-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl hover:-translate-y-5 hover:border-cyan-400 transition duration-500 group">

      {/* Profile Image */}

      <div className="absolute -top-10 left-1/2 -translate-x-1/2">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="Feature"
          className="w-24 h-24 rounded-full object-cover border-4 border-cyan-400 shadow-2xl group-hover:rotate-[360deg] transition duration-700"
        />

      </div>

      <div className="text-center">

        <h3 className="text-2xl font-bold text-white">
          Modern UI
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          Create premium responsive websites
          with modern frontend technologies.
        </p>

        <button className="mt-7 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-2xl transition duration-300 hover:scale-105">

          Explore

        </button>

      </div>

    </div>


    {/* CARD 2 */}

    <div className="relative pt-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl hover:-translate-y-5 hover:border-purple-400 transition duration-500 group">

      <div className="absolute -top-10 left-1/2 -translate-x-1/2">

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Feature"
          className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 shadow-2xl group-hover:rotate-[360deg] transition duration-700"
        />

      </div>

      <div className="text-center">

        <h3 className="text-2xl font-bold text-white">
          Live Mentorship
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          Learn directly from developers with
          practical mentorship and guidance.
        </p>

        <button className="mt-7 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl transition duration-300 hover:scale-105">

          Learn More

        </button>

      </div>

    </div>


    {/* CARD 3 */}

    <div className="relative pt-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl hover:-translate-y-5 hover:border-pink-400 transition duration-500 group">

      <div className="absolute -top-10 left-1/2 -translate-x-1/2">

        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="Feature"
          className="w-24 h-24 rounded-full object-cover border-4 border-pink-400 shadow-2xl group-hover:rotate-[360deg] transition duration-700"
        />

      </div>

      <div className="text-center">

        <h3 className="text-2xl font-bold text-white">
          Real Projects
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          Build portfolio-ready projects with
          modern animations and effects.
        </p>

        <button className="mt-7 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl transition duration-300 hover:scale-105">

          Discover

        </button>

      </div>

    </div>


    {/* CARD 4 */}

    <div className="relative pt-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl hover:-translate-y-5 hover:border-green-400 transition duration-500 group">

      <div className="absolute -top-10 left-1/2 -translate-x-1/2">

        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Feature"
          className="w-24 h-24 rounded-full object-cover border-4 border-green-400 shadow-2xl group-hover:rotate-[360deg] transition duration-700"
        />

      </div>

      <div className="text-center">

        <h3 className="text-2xl font-bold text-white">
          Career Growth
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          Improve your development skills and
          grow your professional career.
        </p>

        <button className="mt-7 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl transition duration-300 hover:scale-105">

          Start Now

        </button>

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

       <img
         src="/About.jpeg"
         alt="Student"
         className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
       />

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

       <img
         src="/term2.webp"
         alt="Student"
         className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
       />

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

       <img
         src="/term3.jpeg"
         alt="Student"
         className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
       />

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

        <p>📧 alfejpathan722@gmail.com</p>
        <p>📞 +91 7878351281</p>
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

{/* FOOTER SECTION */}

<footer className="relative bg-black text-white overflow-hidden pt-24 pb-10">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>


  {/* Grid Overlay */}

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


  {/* Main Footer */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">


    {/* Logo + About */}

    <div>

      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

        Reductate.ai

      </h2>

      <p className="mt-6 text-gray-400 leading-8">

        Empowering students with modern web development,
        real-world projects and career-focused learning experiences.

      </p>


      {/* Social Icons */}

      <div className="flex gap-4 mt-8">

        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition duration-300 cursor-pointer">

          🌐

        </div>

        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300 cursor-pointer">

          📸

        </div>

        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition duration-300 cursor-pointer">

          💼

        </div>

      </div>

    </div>


    {/* Quick Links */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li className="hover:text-cyan-400 transition cursor-pointer">
          Home
        </li>

        <li className="hover:text-cyan-400 transition cursor-pointer">
          About
        </li>

        <li className="hover:text-cyan-400 transition cursor-pointer">
          Features
        </li>

        <li className="hover:text-cyan-400 transition cursor-pointer">
          Testimonials
        </li>

      </ul>

    </div>


    {/* Services */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Services
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li className="hover:text-purple-400 transition cursor-pointer">
          Frontend Development
        </li>

        <li className="hover:text-purple-400 transition cursor-pointer">
          React Projects
        </li>

        <li className="hover:text-purple-400 transition cursor-pointer">
          UI/UX Design
        </li>

        <li className="hover:text-purple-400 transition cursor-pointer">
          Mentorship
        </li>

      </ul>

    </div>


    {/* Newsletter */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Stay Updated
      </h3>

      <p className="text-gray-400 leading-7">

        Subscribe to get updates about
        new courses and projects.

      </p>


      {/* Input */}

      <div className="mt-6 flex flex-col gap-4">

        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500"
        />

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 rounded-2xl py-4 font-semibold shadow-2xl">

          Subscribe

        </button>

      </div>

    </div>

  </div>


  {/* Bottom Footer */}

  <div className="relative z-10 border-t border-white/10 mt-20 pt-8 text-center">

    <p className="text-gray-500">

      © 2026 Reductate.ai — All Rights Reserved 🚀

    </p>

  </div>

</footer>
    </div>
  );
}