import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Mountain, Utensils, Heart, Palette, Users, Globe, Award } from 'lucide-react';

export const Home: React.FC = () => {
  const whyPakistanCards = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Nature & Landscapes",
      description: "From towering peaks to serene valleys"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Rich Culinary Culture",
      description: "Flavors that tell stories of tradition"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Warm Hospitality",
      description: "Where strangers become family"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Vibrant Local Culture",
      description: "Colors, music, and traditions alive"
    }
  ];

  const impactStats = [
    { number: "5000+", label: "Youth Engaged", icon: <Users className="h-6 w-6" /> },
    { number: "120+", label: "Exchange Projects Hosted", icon: <Globe className="h-6 w-6" /> },
    { number: "11", label: "Local Committees Across Pakistan", icon: <Award className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      quote: "The mountains of Pakistan took my breath away, but it was the warmth of the people that captured my heart forever.",
      author: "Elena Rodriguez",
      country: "🇪🇸 Spain",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Every meal was an invitation to someone's home, every conversation a bridge between cultures. Pakistan changed my perspective on hospitality.",
      author: "James Mitchell",
      country: "🇦🇺 Australia",
      image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "From the bustling streets of Lahore to the serene valleys of the north, Pakistan is a symphony of experiences that will stay with me forever.",
      author: "Marie Dubois",
      country: "🇫🇷 France",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.4)), url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/30"></div>
        </div>

        {/* Floating Nature Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-300/30 rounded-full"
              animate={{
                y: [-30, -150, -30],
                x: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 1.8,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          {/* Main Headline - Appears after 10 seconds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 10 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 10.2 }}
                whileHover={{ 
                  y: [-5, 5, -5],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-emerald-200 to-teal-200"
              >
                Explore
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 10.6 }}
                whileHover={{ 
                  y: [-3, 7, -3],
                  transition: { duration: 2.5, repeat: Infinity }
                }}
                className="inline-block text-emerald-100"
              >
                Purpose.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 11 }}
                whileHover={{ 
                  y: [-4, 6, -4],
                  transition: { duration: 3, repeat: Infinity }
                }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-blue-200 to-emerald-200"
              >
                Discover Pakistan.
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 11.5 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Join the world's largest youth-run organization in shaping a better future.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 12 }}
          >
            <motion.a
              href="https://aiesec.org/search?home_mcs=1603"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:via-teal-500 hover:to-blue-500 text-white px-10 py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-500 shadow-2xl backdrop-blur-sm border border-white/20"
            >
              <span className="mr-3">Apply Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 13 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-light tracking-wider">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Pakistan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Pakistan?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A journey filled with beauty, purpose, and people who make you feel at home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPakistanCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-emerald-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Impact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Global Youth, Local Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every year, we welcome exchange participants who help drive change across our communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-emerald-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What They Say About Pakistan
            </h2>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * testimonials.length] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8"
              style={{ width: `${(testimonials.length + 1) * 100}%` }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-96 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg"
                >
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.author}</h4>
                      <p className="text-emerald-600">{testimonial.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200')`
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full"
              animate={{
                y: [-30, -120, -30],
                x: [-15, 15, -15],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 2
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Your story starts here. Will you be the next to experience Pakistan?
            </h2>
            <motion.a
              href="https://aiesec.org/search?home_mcs=1603"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-white text-emerald-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl"
            >
              <span className="mr-2">Explore Opportunities on AIESEC.org</span>
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};