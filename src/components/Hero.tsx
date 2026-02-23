import { motion } from 'motion/react';
import { CheckCircle2, Play, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 fill-blue-700" />
              The Future of School Examinations
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Automate Your Exams with <span className="text-blue-600">Precision & Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              ExamSync empowers schools with a secure, cloud-based platform to create, manage, and grade exams automatically. Real-time results, deep analytics, and zero paperwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <img
                src="https://picsum.photos/seed/examsync-dash/1200/800"
                alt="ExamSync Dashboard Preview"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-green-100 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Secure & Encrypted</p>
                <p className="text-xs text-gray-500">GDPR Compliant</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 hidden lg:flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Real-time Results</p>
                <p className="text-xs text-gray-500">Instant Grading</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 w-full mb-4">Trusted by 500+ Institutions</p>
            <img src="https://picsum.photos/seed/school1/120/40" alt="Partner" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/school2/120/40" alt="Partner" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/school3/120/40" alt="Partner" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/school4/120/40" alt="Partner" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};
