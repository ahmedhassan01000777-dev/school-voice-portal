import { useState } from "react";
import { MessageSquareCode, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { IMAGES } from "@/constants/data";

interface ComplaintCardProps {
  isOpen: boolean;
  onToggle: (state: boolean) => void;
}

export function ComplaintCard({ isOpen, onToggle }: ComplaintCardProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("تم تقديم الشكوى بنجاح");
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(false);
    setIsSubmitted(false);
  };

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
                <div className="p-4 bg-red-50 rounded-full">
                  <MessageSquareCode className="w-12 h-12 text-red-600" />
                </div>
              </div>
              <CardTitle className="text-3xl font-black text-black">الشكاوي</CardTitle>
              <CardDescription className="text-sm font-medium mt-1">قسم الشكاوي والاقتراحات</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center p-8">
              <img 
                src={IMAGES.complaints} 
                alt="صندوق الشكاوي" 
                className="w-48 h-32 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow"
              />
            </CardContent>
          </>
        ) : (
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-black">تقديم شكوى</h3>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-bold">شكراً لك!</p>
                <p className="text-lg">سوف يتم الرد عليك في غضون 48 ساعه</p>
                <Button 
                  className="mt-6 bg-green-600 hover:bg-green-700" 
                  onClick={handleClose}
                >
                  العودة للرئيسية
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="font-bold">اسم الطالب</Label>
                  <Input id="studentName" required className="bg-slate-50 border-slate-200" placeholder="أدخل اسم الطالب" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guardianName" className="font-bold">اسم ولي الامر</Label>
                  <Input id="guardianName" required className="bg-slate-50 border-slate-200" placeholder="أدخل اسم ولي الأمر" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bold">رقم هاتف ولي الامر</Label>
                  <Input id="phone" type="tel" required className="bg-slate-50 border-slate-200" placeholder="01xxxxxxxxx" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complaint" className="font-bold">الشكوه</Label>
                  <Textarea id="complaint" required className="bg-slate-50 border-slate-200 min-h-[120px]" placeholder="اكتب تفاصيل الشكوى هنا..." />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-bold bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  تقديم الشكوه
                </Button>
              </form>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}