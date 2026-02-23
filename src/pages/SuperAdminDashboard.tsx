import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  LayoutDashboard, 
  School, 
  Bell, 
  Search,
  TrendingUp,
  ShieldCheck,
  MoreVertical
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const SuperAdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Schools', value: '1,284', change: '+12%', icon: School, color: 'text-kenya-green', bg: 'bg-kenya-green/10' },
    { label: 'Active Exams', value: '45,201', change: '+18%', icon: BookOpen, color: 'text-kenya-red', bg: 'bg-kenya-red/10' },
    { label: 'Total Students', value: '892,400', change: '+7%', icon: Users, color: 'text-kenya-black', bg: 'bg-kenya-black/10' },
    { label: 'System Health', value: '99.9%', change: 'Stable', icon: ShieldCheck, color: 'text-kenya-green', bg: 'bg-kenya-green/10' },
  ];

  const recentSchools = [
    { name: 'Oakwood Academy', location: 'Nairobi, KE', students: '1,200', status: 'Active', date: '2 hours ago' },
    { name: 'City High School', location: 'Mombasa, KE', students: '2,450', status: 'Active', date: '5 hours ago' },
    { name: 'Global International', location: 'Kisumu, KE', students: '850', status: 'Pending', date: '1 day ago' },
    { name: 'St. Mary\'s College', location: 'Nakuru, KE', students: '1,100', status: 'Active', date: '2 days ago' },
  ];

  const handleLogout = () => {
    navigate('/super-admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'var(--background-kenya-pattern)', backgroundSize: '40px 40px' }} />
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col relative z-10">
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
          <div className="bg-kenya-green p-1.5 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-kenya-black tracking-tight">Alakara <span className="text-kenya-red">KE</span></span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-kenya-green/10 text-kenya-green rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            <School className="w-5 h-5" />
            Schools
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            <Users className="w-5 h-5" />
            Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            <BookOpen className="w-5 h-5" />
            Exams
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            <TrendingUp className="w-5 h-5" />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:text-kenya-red hover:bg-kenya-red/5 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search schools, exams, or users..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-kenya-green/20 focus:border-kenya-green transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-kenya-red relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-kenya-red rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-kenya-black">Super Admin</p>
                <p className="text-xs text-gray-500">System Controller</p>
              </div>
              <img 
                src="https://picsum.photos/seed/admin-avatar/100/100" 
                alt="Admin" 
                className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-kenya-black">System Overview</h1>
            <p className="text-gray-500">Welcome back, here's what's happening across the Kenyan network.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-kenya-green/10 text-kenya-green' : 'bg-gray-50 text-gray-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-kenya-black">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity & Schools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold text-kenya-black">Recently Joined Kenyan Schools</h3>
                  <Button variant="ghost" size="sm" className="text-kenya-green">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">School Name</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Students</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Joined</th>
                        <th className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentSchools.map((school) => (
                        <tr key={school.name} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <p className="font-bold text-kenya-black">{school.name}</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{school.location}</td>
                          <td className="px-6 py-4 text-sm text-kenya-black font-medium">{school.students}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              school.status === 'Active' ? 'bg-kenya-green/10 text-kenya-green' : 'bg-kenya-red/10 text-kenya-red'
                            }`}>
                              {school.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{school.date}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-kenya-black mb-6">System Health</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Database Load</span>
                      <span className="font-bold text-kenya-black">24%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-kenya-green rounded-full" style={{ width: '24%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Storage Usage</span>
                      <span className="font-bold text-kenya-black">68%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-kenya-red rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">API Latency</span>
                      <span className="font-bold text-kenya-black">42ms</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-kenya-green rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-kenya-black via-kenya-red to-kenya-green p-6 rounded-2xl text-white shadow-lg shadow-kenya-black/20">
                <h3 className="font-bold mb-2">Need Support?</h3>
                <p className="text-gray-100 text-sm mb-6 leading-relaxed">
                  Our technical team is available 24/7 for system-wide emergencies in Kenya.
                </p>
                <Button variant="secondary" size="sm" className="w-full">Open Support Ticket</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
