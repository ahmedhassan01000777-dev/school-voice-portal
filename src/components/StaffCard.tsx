import { Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES, STAFF_LIST } from "@/constants/data";

interface StaffCardProps {
  isOpen: boolean;
  onToggle: (state: boolean) => void;
}

export function StaffCard({ isOpen, onToggle }: StaffCardProps) {
  return (
    <div 
      className={`card-transition ${!isOpen ? 'card-hover cursor-pointer' : ''}`}
      onClick={() => !isOpen && onToggle(true)}
    >
      <Card className={`overflow-hidden h-full shadow-lg border-2 border-white/50 bg-white/80 backdrop-blur-sm ${!isOpen ? 'aspect-square flex flex-col justify-center' : ''}`}>
        {!isOpen ? (
          <>
            <CardHeader className="text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full">
                  <Users className="w-12 h-12 text-green-700" />
                </div>
              </div>
              <CardTitle className="text-3xl font-black text-black">طاقم المدرسه</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center gap-6 p-8">
              {[IMAGES.maleTeacher, IMAGES.femaleTeacher].map((img, idx) => (
                <div key={idx} className="relative group">
                  <img 
                    src={img} 
                    alt="معلم" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-green-100 opacity-50 group-hover:ring-green-300 transition-all"></div>
                </div>
              ))}
            </CardContent>
          </>
        ) : (
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-black">تفاصيل طاقم المدرسة</h3>
              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onToggle(false); }}>
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </div>
            <ul className="space-y-4 text-lg">
              {STAFF_LIST.map((staff, idx) => (
                <li key={idx} className={`flex items-center gap-3 p-4 rounded-xl border ${staff.isPrimary ? 'bg-green-50/50 border-green-100/50 font-bold text-green-900' : 'bg-white border-slate-100'}`}>
                  <span className={`w-2 h-2 rounded-full ${staff.isPrimary ? 'bg-green-600' : 'bg-slate-400'}`} />
                  {staff.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}