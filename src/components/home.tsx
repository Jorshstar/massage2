import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ServiceCard from "./ServiceCard";
import TestimonialSlider from "./TestimonialSlider";
import FloatingAnimation from "./FloatingAnimation";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";

const Home = () => {
  // Smooth scrolling implementation
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleNavLinkClick);
    return () => document.removeEventListener("click", handleNavLinkClick);
  }, []);

  // Services data
  const services = [
    {
      id: 1,
      name: "Deep Tissue Massage",
      description:
        "Targets deeper layers of muscle and connective tissue to release chronic tension. Our skilled therapists apply firm pressure to reach problem areas, providing relief from persistent pain and improving mobility. Perfect for those with chronic aches or recovering from injuries.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",

      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 2,
      name: "Heated Stone Massage",
      description:
        "Experience deep relaxation as smooth, heated stones are placed on key points of your body. The warmth penetrates muscles to release tension while our therapist uses the stones to apply gentle pressure. This therapeutic treatment improves circulation and promotes a profound sense of well-being.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 3,
      name: "Thai Massage",
      description:
        "This ancient healing system combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. Our therapists use their hands, knees, legs, and feet to move you into a series of stretches while applying pressure along energy lines. Experience improved flexibility, circulation, and energy levels.",
      image:
        "/images/gallery/rita-mas1.jpg",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 4,
      name: "Cupping Massage",
      description:
        "This traditional therapy uses special cups to create suction on your skin, increasing blood flow and loosening fascia. The negative pressure helps release tight muscles, reduce inflammation, and promote healing. Many clients report relief from chronic pain and improved recovery after physical activity.",
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 5,
      name: "Sensual Massage",
      description:
        "Explore the art of relaxation and heightened awareness with our sensual massage. This intimate experience is designed to awaken the senses, promoting a deep connection between mind and body. Through gentle, flowing strokes, Marlenewellness skilled therapist creates an atmosphere of tranquility and comfort",
      image:
        "/images/gallery/rita-sens.webp",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 6,
      name: "Geriatric Massage",
      description:
        "Gentle techniques designed specifically for the elderly to improve circulation and mobility. Our therapists use light pressure and shorter sessions to accommodate sensitive skin and joints. Regular sessions can help reduce pain, improve range of motion, and enhance overall quality of life.",
      image:
        "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 7,
      name: "Shiatsu Massage",
      description:
        "This Japanese technique uses rhythmic pressure on specific points along the body's meridians. Our therapists apply pressure using their fingers, palms, and thumbs to balance your energy flow and promote natural healing. Experience reduced stress, improved circulation, and a deep sense of relaxation.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 8,
      name: "Swedish Massage",
      description:
        "Our most popular massage combines long, flowing strokes with kneading and circular movements. This classic technique improves circulation, eases muscle tension, and induces deep relaxation. Perfect for first-time clients or those seeking a gentle yet effective full-body experience.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
    {
      id: 9,
      name: "Aromatherapy Massage",
      description:
        "Enhance your massage experience with the therapeutic benefits of essential oils. Our therapists blend oils specifically chosen for your needs, whether for relaxation, energy, or immune support. The combination of massage and aromatherapy creates a multi-sensory experience that nurtures both body and mind.",
      image:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80",
      bookingLink: "#contact",
      isReversed: false,
    },
    {
      id: 10,
      name: "Custom Massage",
      description:
        "A personalized blend of techniques tailored to your specific needs and preferences. Our experienced therapists will consult with you to understand your concerns and create a unique treatment plan. This adaptable approach ensures you receive exactly the care your body requires for optimal wellness.",
      image:
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80",
      bookingLink: "#contact",
      isReversed: true,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The deep tissue massage was exactly what I needed. My chronic back pain has significantly improved after just three sessions!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "I've tried many massage therapists over the years, but this experience was truly exceptional. The attention to detail and personalized approach made all the difference.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "The hot stone massage was incredibly relaxing. The ambiance of the space combined with the therapist's expertise created the perfect escape from my busy life.",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      id: 4,
      name: "David Thompson",
      text: "As someone with sports injuries, I was skeptical about massage therapy. But after my first session, I was convinced. My recovery time has improved dramatically.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4f0] to-[#f0f4f8] text-gray-800">
      {/* Floating animations in background */}
      <FloatingAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80')] bg-cover bg-center opacity-60 bg-fixed"
        ></div>
        <div className="container mx-auto z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WELCOME TO MarleneWellness
          </motion.h1>
          <motion.p
            className="mb-6 text-gray-700 leading-relaxed "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MarleneWellness anticipates the needs and desires of  guests, delights each sense with natural ingredients, and enhances centuries old treatments to provide a unique spa experience. <br/>MarleneWellness is committed to quality, comfort and environment.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="px-8 py-3 bg-[#588157] text-white rounded-full hover:bg-[#3a5a40] transition-colors duration-300 shadow-lg"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-[#588157] text-[#588157] rounded-full hover:bg-[#588157] hover:text-white transition-colors duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white bg-opacity-70">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80"
                alt="Massage Therapist"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#588157]">
                MY HISTORY
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
              At Marlenewellness, I embrace the ancient belief that beauty, health, and spirit are inseparable, and I dedicate myself to nurturing the complete well-being of every guest. Each experience is thoughtfully designed in a peaceful environment, tailored to rejuvenate and revitalize your body, mind, and spirit. I offer a variety of treatments, using only the finest products like Payot, L’Oreal, OPI, and more, ensuring every service is personalized to meet your unique needs and preferences.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#588157]">
                MY PHILOSOPHY
              </h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
              At Marlenewellness, I am dedicated to anticipating your every need and desire, blending natural ingredients with time-honored treatments to create a spa experience that is truly unique. My commitment to quality, comfort, and sustainability shines through in every service, carefully crafted to pamper, heal, nourish, and rejuvenate. Since 1993, I have been guiding guests on their wellness journey, starting in the Dominican Republic and now expanding my services to new destinations, including Mexico, Jamaica, and beyond.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#588157]">
                MY MISSION
              </h3>
              <p className="text-gray-700 leading-relaxed">
              At Marlenewellness, my goal is to create authentic experiences that provide complete relaxation and rejuvenation. My spa offers a personalized and serene environment, designed to pamper, heal, and revitalize. Every treatment is tailored to your needs, using high-quality products and techniques that balance beauty, health, and spirit.<br/>
              
              Guided by four core values—respect, honesty, creativity, and personal recognition—Marlenewellness ensures that every guest enjoys an exceptional and harmonious experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#f8f4f0]">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <div className="flex flex-col space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  image={service.image}
                  bookingLink={service.bookingLink}
                  isReversed={service.isReversed}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Gallery
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Image 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md w-48 h-48"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/images/gallery/marwell1.jpg"
                alt="Massage therapy room"
                className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Video 1 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md w-48 h-48"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <video
                className="w-full h-full object-fit"
                style={{ objectFit: 'cover' }}
                loop
                muted
                playsInline
                autoPlay
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source
                  src="/videos/gallery/marwell-vid1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md w-48 h-48"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/images/gallery/marwell2.jpg"
                alt="Massage oils and stones"
                className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
              />
            </motion.div>

            {/* Video 2 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md w-48 h-48"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <video
                className="w-full h-full object-fit"
                style={{ objectFit: 'cover' }}
                loop
                muted
                playsInline
                autoPlay
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source
                  src="/videos/gallery/marwell-vid2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Image 4 */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md w-48 h-48"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/images/gallery/marwell4.jpg"
                alt="Relaxation area"
                className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-[#e9ecef] bg-opacity-70"
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3a5a40]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f8f4f0] p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#588157]">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[#588157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[#588157]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@relaxmassage.com</span>
                </p>
                
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-[#588157]">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <FaTelegram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <FaTiktok className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#588157] hover:text-[#3a5a40] transition-colors"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#588157] focus:border-transparent transition"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#588157] text-white rounded-md hover:bg-[#3a5a40] transition-colors duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a5a40] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Relax Massage Therapy. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm opacity-75">
            Designed with care for your wellness journey.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
