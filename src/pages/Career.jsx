import React, { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Application submitted!');
  };

  return (
    <div className="bg-white m-0 p-0 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
        <img
          src="/assets/Career.jpg"
          alt="Office team working together"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          draggable="false"
          width={1920}
          height={480}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 flex flex-col justify-end pb-16 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44">
          <div className="relative max-w-7xl">
            <h2
              className="technum-text select-none pointer-events-none"
              style={{
                lineHeight: 1,
                fontFamily: 'Arial, sans-serif',
                fontWeight: 900,
                fontSize: '6rem',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255 255 255 / 0.3)',
                textStroke: '1px rgba(255 255 255 / 0.3)',
                userSelect: 'none',
                letterSpacing: '-0.05em',
              }}
            >
              RBrickks Technology
            </h2>
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-md -mt-4">
              CAREERS
            </h1>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-12 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Why Choose RBrickks?</h2>
          <p className="mt-2 text-gray-600 text-lg max-w-2xl mx-auto">
            Laying the Future of Innovation, One Brick at a Time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: '/assets/1.jpg',
              title: 'Innovation is Our Foundation',
              desc:
                'At RBrickks, innovation isn’t an add-on—it’s our DNA. We combine AI, automation, and cloud-first solutions to bring bold ideas to life.',
            },
            {
              img: '/assets/2.jpg',
              title: 'Team of Digital Architects',
              desc:
                'Our team blends creativity with deep technical knowledge. From app developers to branding experts, we ensure quality and creativity.',
            },
            {
              img: '/assets/3.jpg',
              title: 'Customer-First, Always',
              desc:
                'We tailor each solution to your specific needs. Every feature we build is focused on real outcomes for you and your audience.',
            },
            {
              img: '/assets/4.jpg',
              title: 'Focused on Results',
              desc:
                'Our work doesn’t just look good—it performs. Our scalable, measurable solutions grow alongside your business.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition relative"
            >
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-blue-800/80 text-white px-4 py-2 text-lg font-semibold">
                  {card.title}
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12"
        style={{ backgroundImage: "url('/assets/office.jpg')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">JOIN OUR TEAM</h2>

          <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
            {/* Left Image */}
            <div className="md:w-1/3 hidden md:block">
              <img
                src="/assets/6.jpg"
                alt="Office"
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            {/* Form */}
            <form className="w-full md:w-2/3 p-6 space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-blue-300 rounded"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
              </div>

              {/* Position & Experience */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">Position Applying For *</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="Eg. Frontend Developer"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">Experience (in years) *</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="Eg. 2"
                    required
                  />
                </div>
              </div>

              {/* LinkedIn & Portfolio */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-1">Portfolio/Website</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full p-2 border border-blue-300 rounded"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* Resume */}
              <div>
                <label className="block text-sm font-semibold mb-1">Upload Resume *</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full p-2 border border-blue-300 rounded"
                  required
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-semibold mb-1">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-blue-300 rounded"
                  placeholder="Write a brief cover letter..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;