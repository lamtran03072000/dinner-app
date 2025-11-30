import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface RegisterPageProps {
  onBack: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Đăng ký thành công!</h2>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã quan tâm. Đội ngũ tư vấn của Dinner App sẽ liên hệ với bạn trong vòng 24 giờ làm việc.
          </p>
          <button 
            onClick={onBack}
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-orange-700 transition-colors"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Simple Header */}
      <header className="border-b border-gray-100 py-4 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center">
          <button onClick={onBack} className="flex items-center text-gray-500 hover:text-primary transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Quay lại trang chủ
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Đăng ký tư vấn miễn phí</h1>
            <p className="text-gray-600 text-lg">
              Để lại thông tin để nhận demo 1-1 và bảng báo giá ưu đãi dành riêng cho quán của bạn.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Họ và tên <span className="text-red-500">*</span></label>
                <input required type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900 bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Số điện thoại <span className="text-red-500">*</span></label>
                <input required type="tel" placeholder="0909xxxxxx" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900 bg-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email (Tùy chọn)</label>
              <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900 bg-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Tên quán / Chuỗi cửa hàng <span className="text-red-500">*</span></label>
              <input required type="text" placeholder="Ví dụ: Cơm Tấm Sài Gòn" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900 bg-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Mô hình kinh doanh</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900">
                <option value="">Chọn mô hình</option>
                <option value="restaurant">Nhà hàng / Quán ăn</option>
                <option value="cafe">Cafe / Trà sữa</option>
                <option value="bar">Bar / Pub</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Nhu cầu tư vấn</label>
              <textarea rows={3} placeholder="Bạn đang gặp khó khăn gì? (Ví dụ: Thất thoát doanh thu, thiếu nhân sự...)" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900 bg-white"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Gửi đăng ký ngay
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Bằng việc đăng ký, bạn đồng ý với chính sách bảo mật của Dinner App. Thông tin của bạn được cam kết bảo mật tuyệt đối.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;