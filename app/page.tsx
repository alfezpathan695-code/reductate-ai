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

<section className="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center">

  <div className="text-center max-w-4xl px-6">

    <h1 className="text-7xl font-extrabold leading-tight">

      Learn Modern <span className="text-blue-500">Tech Skills</span>
      <br />
      Faster Than Ever

    </h1>

    <p className="mt-8 text-xl text-gray-300 leading-8">

      Build real-world projects, learn from industry experts,
      and grow your career with practical learning experiences.

    </p>

    <div className="mt-10 flex gap-6 justify-center">

      <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
        Get Started
      </button>

      <button className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition">
        Explore Courses
      </button>

    </div>

  </div>

</section>

      
{/* About Section */}

<section
  id="about"
  className="py-28 bg-gradient-to-b from-white to-gray-100"
>

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">

    {/* Left Side */}
    <div>

      <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
        About Us
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-8">

        We are on a mission to transform the way students learn technology.
        Instead of just theory, we focus on <span className="font-semibold text-gray-900">real-world skills</span>,
        hands-on projects, and industry-driven learning that prepares you for the future.

      </p>

      <p className="mt-4 text-gray-600 text-lg leading-8">

        With expert mentorship, live interactive classes, and project-based training,
        we help you become confident, job-ready, and future-focused.

      </p>

      <button className="mt-8 bg-blue-600 text-white px-7 py-3 rounded-2xl hover:bg-blue-700 transition shadow-lg">
        Explore Programs
      </button>

    </div>

    {/* Right Side */}
    <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">

      <h3 className="text-3xl font-bold text-gray-900">
        Why Choose Us?
      </h3>

      <p className="mt-3 text-gray-500">
        Everything you need to grow your tech career in one place.
      </p>

      <ul className="mt-8 space-y-5 text-gray-700 text-lg">

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          Industry Expert Mentors
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          Real-World Project Building
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          Career Guidance & Placement Support
        </li>

        <li className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✔</span>
          Certification Programs
        </li>

      </ul>

      {/* Extra highlight box */}
      <div className="mt-8 p-5 bg-blue-50 rounded-2xl border border-blue-100">
        <p className="text-blue-700 font-medium">
          🚀 Learn by building real projects — not just watching videos.
        </p>
      </div>

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