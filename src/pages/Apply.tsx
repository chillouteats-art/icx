import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, ArrowRight, Clock, Users, Globe } from 'lucide-react';

export const Apply: React.FC = () => {
  const timelineSteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sign Up",
      description: "Complete your application form"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Get Matched",
      description: "Find your perfect project match"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Fly In",
      description: "Arrive in Pakistan for your adventure"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Live the Experience",
      description: "Immerse yourself in local culture"
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Make a Difference",
      description: "Create lasting positive impact"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Ready to begin your exchange journey?
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Check out global opportunities and sign up on AIESEC.org.
          </p>
          <motion.a
            href="https://aiesec.org/search?home_mcs=1603"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore Opportunities
          </motion.a>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Your ICX Journey Timeline
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Follow these simple steps to embark on your transformative experience in Pakistan
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-teal-200 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative text-center group"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {step.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Your Adventure Awaits
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a life-changing experience that will broaden your horizons, develop your leadership skills, and create lasting memories in the beautiful country of Pakistan.
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-100">
              <Clock className="h-6 w-6" />
              <span className="font-medium">Applications are open year-round</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};