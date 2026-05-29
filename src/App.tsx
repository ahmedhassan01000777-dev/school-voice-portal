import { useState } from "react";
import { Toaster } from "sonner";
import { StaffCard } from "./components/StaffCard";
import { ComplaintCard } from "./components/ComplaintCard";

export default function App() {
  const [activeCard, setActiveCard] = useState<'staff' | 'complaint' | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-12 font-sans relative overflow-x-hidden" dir="rtl">
      {/* Credit Section */}
      <div className="absolute top-4 left-4 text-[10px] md:text-xs font-medium text-black/60 hover:text-black transition-colors select-none" dir="ltr">
        by ahmed hassan
      </div>

      {/* Page Header */}
      <header className="mb-16 text-center space-y-4">
        <div className="inline-block px-8 py-4 bg-white/40 backdrop-blur-sm rounded-3xl border-2 border-green-200/50 shadow-sm">
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight drop-shadow-sm" 
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            مدرسة الحصاينه الإعدادية المشتركة
          </h1>
        </div>
        <p className="text-xl text-green-900 font-medium">أهلاً بكم في الموقع الرسمي للمدرسة</p>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <StaffCard 
          isOpen={activeCard === 'staff'} 
          onToggle={(open) => setActiveCard(open ? 'staff' : null)} 
        />
        <ComplaintCard 
          isOpen={activeCard === 'complaint'} 
          onToggle={(open) => setActiveCard(open ? 'complaint' : null)} 
        />
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-green-900/40 text-sm font-medium">
        © {new Date().getFullYear()} مدرسة الحصاينه الإعدادية المشتركة - جميع الحقوق محفوظة
      </footer>

      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}