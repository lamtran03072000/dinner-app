
import React from 'react';
import { BarChart3, Users, Box, Settings, ArrowRight } from 'lucide-react';

interface DashboardFeatureProps {
  onRegister: () => void;
}

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Báo cáo kinh doanh Real-time",
    description: "Theo dõi doanh thu, lợi nhuận, và hiệu suất bán hàng từng giây. Biểu đồ trực quan giúp ra quyết định tức thì.",
    color: "bg-blue-50"
  },
  {
    icon: <Box className="w-6 h-6 text-orange-600" />,
    title: "Quản lý Kho & Định lượng",
    description: "Tự động trừ kho theo công thức món (Recipe). Cảnh báo nhập hàng khi chạm ngưỡng an toàn.",
    color: "bg-orange-50"
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Quản lý & Phân quyền Nhân viên",
    description: "Chấm công, tính lương tự động. Phân quyền chi tiết cho từng vị trí (Thu ngân, Bếp, Quản lý).",
    color: "bg-green-50"
  },
  {
    icon: <Settings className="w-6 h-6 text-purple-600" />,
    title: "Cấu hình hệ thống linh hoạt",
    description: "Thiết lập Menu, chương trình khuyến mãi, sơ đồ bàn ăn dễ dàng. Đồng bộ đa chi nhánh trong 1 click.",
    color: "bg-purple-50"
  }
];

const DashboardFeature: React.FC<DashboardFeatureProps> = ({ onRegister }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
              Dành cho Quản lý
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
              Dashboard Quản trị <br />
              <span className="text-primary">"Bộ não" điều hành</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Kiểm soát mọi hoạt động của quán từ xa thông qua ứng dụng Admin trên điện thoại hoặc Laptop. Số liệu minh bạch, chặt chẽ, loại bỏ thất thoát.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button 
                onClick={onRegister}
                className="group flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                Xem báo cáo mẫu
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-95 opacity-70 -z-10"></div>
            
            <div className="relative bg-white p-2 rounded-xl shadow-2xl border border-gray-100">
               {/* Laptop Mockup Style */}
               <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               </div>
               <div className="overflow-hidden rounded-b-lg aspect-[16/10] bg-gray-50 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Admin Dashboard Interface" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Analytics Card */}
                  <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-64 animate-in slide-in-from-bottom-10 fade-in duration-1000">
                      <div className="flex justify-between items-end mb-2">
                          <div>
                              <p className="text-xs text-gray-500 font-medium">Doanh thu hôm nay</p>
                              <p className="text-xl font-bold text-secondary">12.500.000đ</p>
                          </div>
                          <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded">+15%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full w-[70%]"></div>
                      </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardFeature;
