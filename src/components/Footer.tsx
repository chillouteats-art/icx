import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-emerald-800 to-blue-800 text-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-emerald-400/30 rounded-full blur-lg"></div>
                <img src="/aiesec.png" alt="AIESEC" className="h-10 w-10 relative z-10 opacity-90" />
              </div>
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                ICX AIESEC in Pakistan
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-300 mb-6 max-w-md leading-relaxed"
            >
              Empowering global youth to create positive impact through meaningful exchange experiences in Pakistan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              <motion.a
                href="https://www.instagram.com/experiencepakistan_aiesec/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-full hover:from-emerald-500/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <Instagram className="h-5 w-5 text-slate-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/aiesec-in-pakistan/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-full hover:from-emerald-500/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <Linkedin className="h-5 w-5 text-slate-300 hover:text-white transition-colors" />
              </motion.a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="/about" className="hover:text-emerald-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  About AIESEC
                </a>
              </li>
              <li>
                <a href="/discover-pakistan" className="hover:text-emerald-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Discover Pakistan
                </a>
              </li>
              <li>
                <a href="/apply" className="hover:text-emerald-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Apply Now
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mr-3"></div>
                Global Volunteer
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3"></div>
                Global Talent
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mr-3"></div>
                Global Teacher
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-emerald-700/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-400"
        >
          <div className="flex items-center space-x-2 text-sm">
            <span>Designed with purpose by</span>
            <span className="text-emerald-300 font-medium">RJ</span>
            <div className="flex items-center space-x-2">
              <motion.a
                href="https://www.linkedin.com/in/rabia-jamil-339796179/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1 hover:bg-emerald-700/20 rounded transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4 text-slate-400 hover:text-emerald-300 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/venturingtoto/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1 hover:bg-emerald-700/20 rounded transition-colors duration-300"
              >
                <Instagram className="h-4 w-4 text-slate-400 hover:text-emerald-300 transition-colors" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};