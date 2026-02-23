import { Button } from './Button';

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your School Examination Process Today
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Join 500+ schools that have already automated their exams with ExamSync. Start your 14-day free trial now. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10">
                Talk to an Expert
              </Button>
            </div>
            <p className="mt-8 text-blue-200 text-sm">
              Secure, Encrypted, and GDPR-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
