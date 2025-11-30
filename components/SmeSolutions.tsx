
import React from 'react';
import { TrendingUp, ShieldCheck, Clock, PiggyBank } from 'lucide-react';

const SmeSolutions: React.FC = () => {
  return (
    <section id="sme-solutions" className="py-20 bg-orange-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tại sao <span className="text-primary">SMEs</span> chọn Dinner App?
          </h2>
          <p className="text-gray-600 text-lg">
            Giải pháp được "may đo" riêng cho các quán ăn vừa và nhỏ, giải quyết bài toán chi phí và vận hành một cách thực dụng nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <PiggyBank size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Chi phí đầu tư = 0 đồng</h3>
                <p className="text-gray-600 leading-relaxed">
                  Không cần mua máy POS đắt tiền hay máy chủ riêng. Tận dụng ngay điện thoại sẵn có của nhân viên và khách hàng (BYOD). Chuyển đổi chi phí đầu tư (CapEx) thành chi phí vận hành nhỏ (OpEx).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Triển khai thần tốc "Cắm là chạy"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Thiết lập menu và sơ đồ bàn chỉ trong 15 phút. Giao diện trực quan, nhân viên lớn tuổi cũng có thể sử dụng thành thạo ngay mà không cần đào tạo phức tạp.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Vận hành ổn định, không gián đoạn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hệ thống hoạt động mượt mà ngay cả khi mạng chập chờn. Cơ chế đồng bộ dữ liệu thông minh đảm bảo không mất đơn hàng trong giờ cao điểm.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            {/* Background shape */}
            <div className="absolute inset-0 bg-orange-200 rounded-[2.5rem] transform rotate-3 scale-95 opacity-50 translate-x-4 translate-y-4"></div>
            
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop" 
              alt="Chủ quán vui vẻ sử dụng Dinner App" 
              className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover z-10 border-4 border-white"
            />
            
            {/* Testimonial Card Overlay */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary animate-bounce-slow">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} className="text-green-500" />
                <span className="font-bold text-secondary">Hiệu quả thực tế</span>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "Từ ngày dùng Dinner App, tôi giảm được 2 nhân viên chạy bàn mà khách vẫn khen phục vụ nhanh."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmeSolutions;
