
import React from 'react';
import { ArrowRight, QrCode } from 'lucide-react';

interface HeroProps {
  onRegister: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const scrollToDemo = () => {
    const section = document.getElementById('qr-ordering-detail');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Giải pháp SaaS cho SMEs ngành F&B
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.2] tracking-tight">
              Quản lý quán ăn <br/>
              <span className="text-primary">Tinh gọn & Thông minh</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hệ thống quản lý trên nền tảng đám mây tích hợp <strong>QR Code tại bàn</strong>. Loại bỏ độ trễ thông tin, cắt giảm chi phí nhân sự và tối ưu hóa quy trình vận hành.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onRegister}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Dùng thử miễn phí
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToDemo}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <QrCode size={20} className="text-primary" />
                Trải nghiệm QR Demo
              </button>
            </div>

            <div className="pt-4 text-sm text-gray-500 font-medium">
              * Phù hợp cho quán ăn, cafe, trà sữa quy mô vừa và nhỏ
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
               {/* Simulating the Digital Menu & Dashboard */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Dinner App Interface" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700 ease-out opacity-90"
                  />
                  {/* Floating Elements for effect */}
                  <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                    <div className="flex items-center gap-2">
                        <QrCode size={20} className="text-primary"/>
                        <span className="font-bold text-secondary">Đơn hàng mới: Bàn 5</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Vừa xong • 2 món</div>
                  </div>
                   <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary">
                    <div className="text-xs text-gray-500">Hiệu quả vận hành</div>
                    <div className="text-lg font-bold text-gray-800">Giảm 30% nhân sự</div>
                  </div>
               </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/30 to-red-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
