import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Play,
  Star,
  Users,
  Award,
  ArrowRight,
  Heart,
  Activity,
  Shield,
  Dumbbell,
  Target,
  Zap,
  CheckCircle,
  Flame,
  Brain,
  Phone,
  Scissors,
  Briefcase,
  Move3D,
  Mail,
  MessageSquare,
} from "lucide-react";
import { TrendingUp } from "lucide-react";
import { MapPin, Clock } from "lucide-react";
import Banner from "../assets/IMG_4765.jpg";
import logo from "../assets/logobg.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import about from "../assets/ABOUTIMG.jpg";
import bg from "../assets/bg.jpeg";
import aswin from "../assets/aswin.jpg";
import fatloss from "../assets/fatloss.jpg";
import muscle from "../assets/musclegainprograms.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hiittraining from "../assets/hiittraining.jpg";
import strength from "../assets/strength.jpg";
import boxing from "../assets/boxer.jpg";
import yoga from "../assets/yoga.jpg";
import pilates from "../assets/pilates.jpg";
import trx from "../assets/tx.jpg";
import animal from "../assets/animal.jpg";
import mindandbody from "../assets/mindandbody.jpg";
import aswin1 from "../assets/aswin.jpg";
import aswin2 from "../assets/aswin2.JPG";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function FitnessWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isScrolled, setIsScrolled] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    {
      image: fatloss,
      title: "Fat Loss Programs",
      description:
        "Scientifically designed programs to burn fat efficiently while preserving lean muscle mass",
      gradient: "from-red-500/20 to-orange-600/20",
      iconGradient: "from-red-400 to-orange-500",
    },
    {
      image: muscle,
      title: "Muscle Gain Programs",
      description:
        "Build impressive muscle mass with progressive overload and proven hypertrophy techniques",
      gradient: "from-blue-500/20 to-purple-600/20",
      iconGradient: "from-blue-400 to-purple-500",
    },
    {
      image: hiittraining,
      title: "HIIT Training",
      description:
        "High-intensity intervals for maximum calorie burn and cardiovascular conditioning",
      gradient: "from-yellow-500/20 to-orange-600/20",
      iconGradient: "from-yellow-400 to-orange-500",
    },
    {
      image: strength,
      title: "Strength & Conditioning",
      description:
        "Build functional strength and power for athletic performance and daily life",
      gradient: "from-gray-500/20 to-slate-600/20",
      iconGradient: "from-gray-400 to-slate-500",
    },
    {
      image: boxing,
      title: "Boxing",
      description:
        "Learn proper technique while getting an incredible full-body workout",
      gradient: "from-red-600/20 to-pink-600/20",
      iconGradient: "from-red-500 to-pink-500",
    },
    {
      image: yoga,
      title: "Yoga",
      description:
        "Improve flexibility, balance, and mindfulness through ancient practices",
      gradient: "from-green-500/20 to-teal-600/20",
      iconGradient: "from-green-400 to-teal-500",
    },
    {
      image: pilates,
      title: "Pilates",
      description:
        "Core-focused workouts that enhance stability, posture, and body awareness",
      gradient: "from-purple-500/20 to-indigo-600/20",
      iconGradient: "from-purple-400 to-indigo-500",
    },
    {
      image: trx,
      title: "TRX Training",
      description:
        "Suspension training for functional movement patterns and core stability",
      gradient: "from-cyan-500/20 to-blue-600/20",
      iconGradient: "from-cyan-400 to-blue-500",
    },
    {
      image: animal,
      title: "Animal Flow",
      description:
        "Ground-based movements that improve mobility, stability, and coordination",
      gradient: "from-amber-500/20 to-yellow-600/20",
      iconGradient: "from-amber-400 to-yellow-500",
    },
    {
      image: mindandbody,
      title: "Mind & Body Workouts",
      description:
        "Holistic training that connects mental focus with physical movement",
      gradient: "from-violet-500/20 to-purple-600/20",
      iconGradient: "from-violet-400 to-purple-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    return {
      mobile: 1,
      tablet: 2,
      desktop: 6,
    };
  };

  const getSlideTransform = () => {
    const mobileTransform = -currentSlide * 100;
    const tabletTransform = -currentSlide * 50;
    const desktopTransform = -currentSlide * (100 / 3);

    return {
      mobile: `translateX(${mobileTransform}%)`,
      tablet: `translateX(${tabletTransform}%)`,
      desktop: `translateX(${desktopTransform}%)`,
    };
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mbjnyqyy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        }, 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const services = [
    "Personal Training",
    "Group Fitness",
    "Nutrition Coaching",
    "Weight Loss Program",
    "Strength Training",
    "Online Coaching",
    "Other",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="bg-black text-[#DED7A3] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            <div className="flex justify-between items-center h-20 px-4 md:px-10">
              <div className="text-2xl font-bold text-red-500 h-20 w-20">
                <img src={logo} alt="Logo" className="h-full w-auto" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#aboutus"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Services
                </a>
                <a
                  href="#aboutme"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  About Me
                </a>
                <a
                  href="#programs"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Programs
                </a>
                <a
                  href="#contact"
                  className={`hover:text-black transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Contact Us
                </a>
              </div>

              <button className="hidden md:block bg-[#A9680B] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                JOIN OUR TEAM
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-[#A9680B]">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black pl-38 pt-6">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#aboutus"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#aboutme"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                About Me
              </a>
              <a
                href="#programs"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                Programs
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-[#AB6506] transition-all duration-200"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full min-h-screen"
      >
        {/* Right Side - Background Image (Shown First on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 lg:col-span-6 pt-10"
        >
          <div className="w-full h-[300px] sm:h-[400px] xl:h-[700px] relative">
            <img
              src={Banner}
              alt="Fitness Background"
              className="w-full h-full object-contain z-10 relative"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent z-20"></div>
          </div>
        </motion.div>

        {/* Left Side - Main Content (Shown Second on Mobile) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 lg:col-span-6 space-y-6 pt-10 text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            Earn Your Strength <br className="hidden sm:block" />
            Own Your Life
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Certified Personal & Group Training | Online & Offline | Tailored
            Fitness for Every Body
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="h-12 text-white bg-[#AD6B08] px-6 py-3 font-bold text-lg hover:bg-[#AB6506] transition-all duration-300 transform hover:scale-95 rounded-full">
              START YOUR JOURNEY
            </button>
            <a
              href="#contact"
              className="h-12 border-2 border-[#AD6B08] text-gray-300 px-6 py-3 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="aboutus" className="py-20 bg-black relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='0.1'%3E%3Cpath d='M30 30h-2v-2h2v2zm0-10h-2v-2h2v2zm0 20h-2v-2h2v2zm10-10h-2v-2h2v2zm-20 0h-2v-2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-red-500 to-orange-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-[#DED7A3]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#DED7A3] text-sm font-semibold tracking-wider uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              TRANSFORMING LIVES
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AD6B08] to-red-500">
                SINCE 2023
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              AD FITNESS SOLUTIONS is a freelance fitness commerce brand led by
              certified professional health specialists. Whether you're training
              solo or in a group, online or offline—we deliver results-driven
              programs built just for you.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  WHERE <span className="text-[#AD6B08]">PASSION</span> MEETS
                  PURPOSE
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a freelance trainer, I offer personalized fitness coaching
                  designed to fit your lifestyle and goals. Whether you're just
                  starting out or looking to level up, I'll guide you with
                  tailored workouts, nutrition tips, and real motivation —
                  online or in person.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This isn't just about fitness — it's about building strength,
                  confidence, and a mindset that lasts. Let's start your journey
                  together.
                </p>
              </div>

              {/* Stats with staggered animation */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
                {[
                  { value: "2023", label: "Established" },
                  { value: "100+", label: "Clients" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    className="text-center"
                  >
                    <div className="text-4xl font-black text-[#AD6B08] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-800 group-hover:border-[#AD6B08]/50 transition-all duration-500 h-[600px]">
                <img
                  src={about}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section
        id="services"
        className="py-20 bg-black relative overflow-hidden"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='0.1'%3E%3Cpath d='M30 30h-2v-2h2v2zm0-10h-2v-2h2v2zm0 20h-2v-2h2v2zm10-10h-2v-2h2v2zm-20 0h-2v-2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#DED7A3]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#DED7A3] text-sm font-semibold tracking-wider uppercase">
                We Offer
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Getting Started Is Simple
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Since 2023, we've been dedicated to providing a dynamic and
              supportive environment where individuals of all fitness levels can
              thrive.
            </p>
          </motion.div>

          {/* Main Services Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[card1, card2, card3].map((img, index) => {
              const titles = [
                "CHOOSE YOUR GOAL",
                "GET YOUR CUSTOM PLAN",
                "TRACK YOUR PROGRESS",
              ];
              const icons = [<Target />, <Users />, <TrendingUp />];
              const descriptions = [
                "Whether it's fat loss, muscle gain, or building endurance — start by picking a plan that fits your lifestyle.",
                "A customized plan crafted by experts to align with your goals. Real-time stats and expert check-ins.",
                "Track results, stay accountable, and push forward with visible progress and expert insights.",
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gray-900 rounded-3xl p-8 h-96 relative overflow-hidden border border-gray-800 hover:border-[#AD6B08] transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-black/70 to-black/90 z-10"></div>
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(icons[index], {
                            className: "text-[#AD6B08]",
                            size: 24,
                          })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#AD6B08] transition-colors">
                          {titles[index]}
                        </h3>
                        <p className="text-gray-100 text-sm leading-relaxed mb-8">
                          {descriptions[index]}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <button className="w-12 h-12 bg-transparent border-2 border-[#AD6B08] rounded-full flex items-center justify-center hover:bg-[#AD6B08] transition-all duration-300 group-hover:rotate-45">
                          <ArrowRight
                            className="text-[#AD6B08] hover:text-white"
                            size={18}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-12">
            {[Award, Activity, Zap].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-[#AD6B08]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {
                    [
                      "Personalized Goals",
                      "Expert Coaching",
                      "Real-time Tracking",
                    ][i]
                  }
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {
                    [
                      "Tailored fitness plans designed specifically for your unique objectives and lifestyle.",
                      "Professional trainers and wellness experts dedicated to guiding your fitness journey.",
                      "Advanced analytics and progress monitoring to keep you motivated and on track.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="aboutme" className="py-16 bg-black min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Animated Images */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex gap-6"
            >
              <div className="flex-1 relative mt-12">
                <img
                  src={aswin2}
                  alt="Group Training Session"
                  className="w-full h-100 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <img
                  src={aswin1}
                  alt="Personal Training"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Side - Animated Text & Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-[#DED7A3]/10 rounded-full px-6 py-2 mb-6">
                  <span className="text-[#DED7A3] text-sm font-semibold tracking-wider uppercase">
                    About Me
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  We Have a <span className="text-[#AD6B08]">Great Deal</span>{" "}
                  of Experience With{" "}
                  <span className="text-[#AD6B08]">Fitness</span>
                </h1>
                <p className="text-[#fff] text-lg leading-relaxed mb-8">
                  Meet Aswin Das, a 24-year-old champion bodybuilder and
                  certified personal trainer. A lot of people gain from
                  customized exercise regimens created by personal trainers or
                  fitness experts to target particular fitness objectives, such
                  as weight loss, muscle building, or enhanced sports
                  performance.
                </p>
              </div>

              {/* Accordion Items - Animated */}
              <div className="space-y-1">
                {[
                  "NSQF LEVEL 4 Fitness trainer (skill india,NSDC&SPEFL-SC)",
                  "Certificate of Achievement-PD aproval,UK",
                  "Certification of CPR&AED Training",
                  "Certification of Registration-REPS india",
                  "A- Category personal trainer",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[#AD6B08] font-bold text-lg">{`0${
                          i + 1
                        }`}</span>
                        <span className="text-white font-medium">{text}</span>
                      </div>
                      {/* <span className="text-[#AD6B08] text-xl font-bold">+</span> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-20 bg-black relative overflow-hidden"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#DED7A3] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#DED7A3] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#DED7A3]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#DED7A3] text-sm font-semibold tracking-wider uppercase">
                Programs We Offer
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#DED7A3] to-white bg-clip-text text-transparent">
              Transform Your Body
            </h2>
            <p className="text-xl text-[#DED7A3]/70 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of scientifically-backed
              fitness programs designed to help you achieve your goals faster
              than ever before
            </p>
          </motion.div>

          {/* Programs Grid Slider */}
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="relative overflow-hidden">
              <div className="relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform:
                      window.innerWidth >= 1024
                        ? getSlideTransform().desktop
                        : window.innerWidth >= 768
                        ? getSlideTransform().tablet
                        : getSlideTransform().mobile,
                  }}
                >
                  {programs.map((service, index) => (
                    <motion.div
                      key={index}
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 md:px-4"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="group cursor-pointer h-full">
                        <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 h-full">
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#A9680B] hover:bg-[#a9670bb3] text-white p-3 rounded-full z-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#A9680B] hover:bg-[#a9670bb3] text-white p-3 rounded-full z-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Pagination Dots */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide
                      ? "bg-[#A9680B]"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>

            {/* Mobile Slide Count */}
            <div className="md:hidden mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Slide {currentSlide + 1} of {programs.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DED7A3' fill-opacity='0.1'%3E%3Cpath d='M30 30h-2v-2h2v2zm0-10h-2v-2h2v2zm0 20h-2v-2h2v2zm10-10h-2v-2h2v2zm-20 0h-2v-2h2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#DED7A3]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#DED7A3] text-sm font-semibold tracking-wider uppercase">
                CONTACT US
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#DED7A3] to-white bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-[#DED7A3]/70 max-w-3xl mx-auto leading-relaxed">
              Have questions or ready to start your fitness journey? Reach out
              to us and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-[#DED7A3]/20"
            >
              <h3 className="text-2xl font-bold text-[#DED7A3] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#DED7A3]/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-[#DED7A3]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DED7A3]/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#DED7A3]/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-[#DED7A3]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DED7A3]/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#DED7A3]/80 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-[#DED7A3]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DED7A3]/50"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-[#DED7A3]/80 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-[#DED7A3]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DED7A3]/50"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#DED7A3]/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-gray-800 border border-[#DED7A3]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DED7A3]/50"
                    placeholder="Tell us about your fitness goals..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DED7A3] text-black px-6 py-4 font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-[1.02]"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "THANK YOU!" : "SEND MESSAGE"}
                </button>
              </form>
            </motion.div>

            {/* Image Block */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="hidden lg:flex bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-[#DED7A3]/20 h-[700px] items-center justify-center overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness gym interior"
                className="w-full h-full object-cover rounded-xl opacity-80 transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#DED7A3]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="" className="w-34 h-34 object-cover" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#DED7A3] mb-4">
                AD FITNESS
              </div>
              <p className="text-[#DED7A3]/70">
                Transform your body and mind with our premium fitness programs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#DED7A3] mb-4">COMPANY</h4>
              <ul className="space-y-2 text-[#DED7A3]/70">
                <li>
                  <a
                    href="#aboutus"
                    className="hover:text-[#AD6B08] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="hover:text-[#AD6B08] transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#AD6B08] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-[#AD6B08] transition-colors"
                  >
                    Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#DED7A3] mb-4">CONTACT</h4>
              <div className="space-y-2 text-[#DED7A3]/70">
                <p>123 Fitness Street</p>
                <p>BANGLORE</p>
                <p>+91 75101811257</p>
                <p>adfitnesssolutions@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#DED7A3]/20 mt-8 pt-8 text-center text-[#DED7A3]/70">
            <p>&copy; 2025 AD FITNESS SOLUTIONS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}