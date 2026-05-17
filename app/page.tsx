 export default function Home() {
  return (
    <div>

      {/* Navbar */}

<header className="bg-black text-white flex justify-between items-center px-8 py-5 sticky top-0 z-50 shadow-lg">

  <h1 className="text-3xl font-extrabold text-blue-400">
    Reductate.ai
  </h1>

  <nav>
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

  <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold">
    Join Now
  </button>

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
  className="py-24 bg-white"
>

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

    <div>

      <h2 className="text-5xl font-bold">
        About Us
      </h2>

      <p className="mt-8 text-gray-600 text-lg leading-8">

        Reductate.ai helps students master modern technologies
        through mentorship, live classes, real-world projects,
        and career-focused learning.

      </p>

      <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
        Learn More
      </button>

    </div>

    <div className="bg-gray-100 p-10 rounded-3xl shadow-xl">

      <h3 className="text-3xl font-bold">
        Why Choose Us?
      </h3>

      <ul className="mt-6 space-y-4 text-gray-700 text-lg">

        <li>✅ Industry Expert Mentors</li>
        <li>✅ Practical Project Based Learning</li>
        <li>✅ Career Guidance & Support</li>
        <li>✅ Certification Programs</li>

      </ul>

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

  <div className="grid md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">

    <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">

      <div className="text-5xl">
        🚀
      </div>

      <h3 className="mt-6 text-3xl font-bold">
        Live Classes
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Interactive live sessions with experienced mentors.
      </p>

    </div>

    <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">

      <div className="text-5xl">
        💻
      </div>

      <h3 className="mt-6 text-3xl font-bold">
        Real Projects
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Work on practical applications and build your portfolio.
      </p>

    </div>

    <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">

      <div className="text-5xl">
        🎓
      </div>

      <h3 className="mt-6 text-3xl font-bold">
        Certifications
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Get industry-recognized certificates after completion.
      </p>

    </div>

  </div>

</section>

{/* Testimonials Section */}

<section
  id="testimonials"
  className="py-24 bg-black text-white"
>

  <h2 className="text-5xl font-bold text-center mb-16">
    What Students Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">

    <div className="bg-gray-900 p-8 rounded-3xl shadow-lg">

      <p className="text-gray-300 leading-7">
        “Amazing platform! I improved my development skills
        and built real projects.”
      </p>

      <h3 className="mt-6 text-xl font-bold">
        Rahul Sharma
      </h3>

    </div>

    <div className="bg-gray-900 p-8 rounded-3xl shadow-lg">

      <p className="text-gray-300 leading-7">
        “The mentors are very supportive and classes are
        highly practical.”
      </p>

      <h3 className="mt-6 text-xl font-bold">
        Priya Verma
      </h3>

    </div>

    <div className="bg-gray-900 p-8 rounded-3xl shadow-lg">

      <p className="text-gray-300 leading-7">
        “One of the best learning experiences for students
        who want real skills.”
      </p>

      <h3 className="mt-6 text-xl font-bold">
        Aman Singh
      </h3>

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