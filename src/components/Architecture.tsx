import { Database, Layout, Server, Shield } from 'lucide-react';

export const Architecture = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Architecture</h2>
            <h3 className="text-4xl font-bold mb-6">Built on World-Class Infrastructure</h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              ExamSync leverages the latest cloud technologies to ensure your school's data is always available, secure, and lightning-fast.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-800 p-3 rounded-xl">
                  <Layout className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Frontend: Next.js on Vercel</h4>
                  <p className="text-blue-200 text-sm">High-performance, SEO-optimized interface with global edge delivery.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-800 p-3 rounded-xl">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Backend: Supabase</h4>
                  <p className="text-blue-200 text-sm">Postgres database, real-time subscriptions, and secure file storage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-800 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Security: Auth & Encryption</h4>
                  <p className="text-blue-200 text-sm">Enterprise-grade authentication and end-to-end data encryption.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-800 p-3 rounded-xl">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Scalability: Cloud Native</h4>
                  <p className="text-blue-200 text-sm">Automatically scales to handle thousands of concurrent exam takers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-800/50 backdrop-blur-xl border border-blue-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-blue-300 font-mono">system-architecture.config</span>
              </div>
              <pre className="font-mono text-sm text-blue-200 overflow-x-auto">
                {`{
  "stack": {
    "frontend": "Next.js 14",
    "deployment": "Vercel",
    "database": "Supabase (Postgres)",
    "auth": "Supabase Auth",
    "storage": "Supabase Storage"
  },
  "security": {
    "ssl": true,
    "encryption": "AES-256",
    "gdpr": "compliant"
  },
  "performance": {
    "uptime": "99.99%",
    "latency": "< 100ms"
  }
}`}
              </pre>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400 rounded-full blur-[80px] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
