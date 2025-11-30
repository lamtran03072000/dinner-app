
import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Về chúng tôi</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Dinner App không chỉ là một công ty phần mềm. Chúng tôi là người đồng hành, mang sứ mệnh giải phóng các chủ quán ăn khỏi gánh nặng quản lý thủ công.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Tầm nhìn</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trở thành "hệ điều hành" trung tâm cho phân khúc F&B SMEs tại Việt Nam, dân chủ hóa công nghệ để mọi quán ăn đều có thể vận hành chuyên nghiệp.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Sứ mệnh</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cung cấp giải pháp công nghệ <strong>Tinh gọn - Hiệu quả - Kinh tế</strong>. Giúp chủ quán tập trung vào món ăn và khách hàng, thay vì loay hoay với sổ sách.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Giá trị cốt lõi</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lấy khách hàng làm trung tâm. Đổi mới không ngừng. Cam kết đồng hành và hỗ trợ trọn đời sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
