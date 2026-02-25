import React from 'react';

interface SchoolSettings {
  name: string;
  motto: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  letterheadTemplate: string;
}

export const Letterhead: React.FC<{ settings: SchoolSettings }> = ({ settings }) => {
  const renderLogo = (size: string = "w-20 h-20") => {
    if (settings.logo) {
      return <img src={settings.logo} alt="School Logo" className={`${size} object-contain mx-auto`} />;
    }
    return (
      <div className={`${size} mx-auto border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[8px] text-gray-400 font-bold text-center p-2 uppercase`}>
        Affix School Logo
      </div>
    );
  };

  if (settings.letterheadTemplate === 'modern') {
    return (
      <div className="flex items-start gap-6 w-full border-b-4 border-kenya-green pb-6 mb-8 text-left">
        <div className="flex-shrink-0">
          {renderLogo("w-24 h-24")}
        </div>
        <div className="flex-1">
          <div className="mb-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Republic of Kenya</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Ministry of Education</p>
          </div>
          <h2 className="text-3xl font-black text-kenya-black uppercase tracking-tight leading-none mb-1">{settings.name || 'SCHOOL NAME'}</h2>
          <p className="text-sm font-bold text-kenya-green mb-4 italic">"{settings.motto || 'School Motto'}"</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <p>Address: {settings.address || 'P.O. BOX 12345'}</p>
            <p>Email: {settings.email || 'info@school.ac.ke'}</p>
            <p>Phone: {settings.phone || '+254 700 000 000'}</p>
            <p>Website: {settings.website || 'www.school.ac.ke'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (settings.letterheadTemplate === 'minimal') {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between items-end border-b-2 border-kenya-black pb-4 mb-4">
          <div>
            <div className="mb-1">
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Republic of Kenya • Ministry of Education</p>
            </div>
            <h2 className="text-2xl font-black text-kenya-black uppercase tracking-tighter">{settings.name || 'SCHOOL NAME'}</h2>
          </div>
          <div className="flex-shrink-0">
            {renderLogo("w-12 h-12")}
          </div>
        </div>
        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span>{settings.address}</span>
          <span>{settings.phone}</span>
          <span>{settings.email}</span>
        </div>
      </div>
    );
  }

  // Standard template
  return (
    <div className="text-center space-y-3 w-full border-b-2 border-gray-100 pb-8 mb-8">
      <div className="mb-2">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Republic of Kenya</p>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Ministry of Education</p>
      </div>
      <div className="flex justify-center mb-4">
        {renderLogo()}
      </div>
      <h2 className="text-3xl font-black text-kenya-black uppercase tracking-tight">{settings.name || 'SCHOOL NAME'}</h2>
      <p className="text-base font-bold italic text-kenya-green">"{settings.motto || 'School Motto'}"</p>
      <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest pt-4 flex justify-center gap-4 border-t border-gray-50 mt-4">
        <span>{settings.address}</span>
        <span>•</span>
        <span>Tel: {settings.phone}</span>
        <span>•</span>
        <span>Email: {settings.email}</span>
      </div>
    </div>
  );
};
