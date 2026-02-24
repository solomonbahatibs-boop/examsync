import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  LayoutDashboard, 
  Bell, 
  Search,
  ShieldAlert,
  Phone,
  AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const PrincipalDashboard = () => {
  const navigate = useNavigate();
  const [school, setSchool] = useState<any>(null);
  const [isSuspended, setIsSuspended] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const currentSchool = JSON.parse(localStorage.getItem('alakara_current_school') || '{}');
      const allSchools = JSON.parse(localStorage.getItem('alakara_schools') || '[]');
      
      const updatedSchool = allSchools.find((s: any) => s.id === currentSchool.id);
      
      if (updatedSchool) {
        setSchool(updatedSchool);
        setIsSuspended(updatedSchool.status === 'Suspended');
      } else {
        navigate('/login');
      }
    };

    checkStatus();
    // Poll for status changes in this demo
    const interval = setInterval(checkStatus, 2000);
    return () => clearInterval(interval);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('alakara_current_school');
    navigate('/login');
  };

  if (!school) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-kenya-black text-white flex flex-col shrink-0">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-kenya-green p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Alakara <span className="text-kenya-red">Principal</span></span>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-kenya-green text-white rounded-xl font-bold transition-all">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all ${isSuspended ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSuspended}>
              <Users className="w-5 h-5" />
              Staff Management
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all ${isSuspended ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSuspended}>
              <BookOpen className="w-5 h-5" />
              Academic Records
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all ${isSuspended ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSuspended}>
              <Settings className="w-5 h-5" />
              School Settings
            </button>
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-kenya-red transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="font-bold text-kenya-black text-lg">{school.name}</h2>
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isSuspended ? 'bg-kenya-red/10 text-kenya-red' : 'bg-kenya-green/10 text-kenya-green'}`}>
              {school.status}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-kenya-red relative">
              <Bell className="w-5 h-5" />
              {!isSuspended && <span className="absolute top-2 right-2 w-2 h-2 bg-kenya-red rounded-full border-2 border-white" />}
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-kenya-black">Principal</p>
                <p className="text-xs text-gray-500">{school.location}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          {isSuspended && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-kenya-red p-8 rounded-[2rem] text-white shadow-2xl shadow-kenya-red/30 flex flex-col md:flex-row items-center gap-8 border-4 border-white/20"
            >
              <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-md">
                <AlertTriangle className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Account Suspended</h2>
                <p className="text-xl font-bold text-white/90 mb-6">
                  Access to school management features has been restricted by the system administrator.
                </p>
                <div className="inline-flex items-center gap-4 bg-white text-kenya-red px-8 py-4 rounded-2xl font-black text-2xl shadow-lg">
                  <Phone className="w-8 h-8" />
                  REQUEST AN ADMIN TO ACTIVATE YOUR USAGE CALL 0713209373
                </div>
              </div>
            </motion.div>
          )}

          <div className={`space-y-8 ${isSuspended ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-kenya-black">{school.students}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Active Teachers</p>
                <p className="text-3xl font-bold text-kenya-black">42</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Upcoming Exams</p>
                <p className="text-3xl font-bold text-kenya-black">12</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-kenya-black mb-6">School Performance Overview</h3>
              <div className="h-64 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">Performance analytics will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
