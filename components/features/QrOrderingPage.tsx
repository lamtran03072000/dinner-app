import React from 'react';
import { ArrowLeft, Smartphone, Users, Zap, CheckCircle, ArrowRight, Plus } from 'lucide-react';

interface QrOrderingPageProps {
  onBack: () => void;
  onRegister: () => void;
}

const QrOrderingPage: React.FC<QrOrderingPageProps> = ({ onBack, onRegister }) => {
  return (
    <div className="bg-white">
      {/* Hero Section specific to QR Ordering */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-primary transition-colors font-medium mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại trang chủ
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                Tính năng nổi bật nhất
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.2]">
                Gọi món tại bàn <br/>
                <span className="text-primary">Thông minh & Tốc độ</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Biến điện thoại của khách hàng thành công cụ gọi món quyền năng. Không cần tải app, không cần chờ nhân viên, mọi thứ diễn ra tức thì.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onRegister}
                  className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Đăng ký tư vấn
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
               <div className="relative w-[320px] h-[640px] bg-secondary rounded-[3rem] shadow-2xl border-8 border-secondary overflow-hidden ring-1 ring-gray-900/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-secondary rounded-b-xl z-20"></div>
                  
                  {/* Mockup Screen Content */}
                  <div className="w-full h-full bg-gray-50 overflow-hidden flex flex-col font-sans relative">
                      
                      {/* Header Image */}
                      <div className="h-48 relative shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop" 
                            className="w-full h-full object-cover" 
                            alt="Cơm Tấm" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-bold text-xl">Cơm Tấm Sài Gòn</h3>
                              <p className="text-white/90 text-sm">Bàn 05</p>
                          </div>
                      </div>

                      {/* Content Container */}
                      <div className="flex-1 bg-gray-50 relative rounded-t-3xl -mt-4 flex flex-col">
                          
                          {/* Categories */}
                          <div className="p-4 pb-2 flex gap-3 overflow-x-auto no-scrollbar">
                              <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-sm shadow-orange-200">
                                Món mới
                              </button>
                              <button className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                                Cơm tấm
                              </button>
                              <button className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                                Đồ uống
                              </button>
                          </div>

                          {/* List Items */}
                          <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-24">
                              {[1, 2].map((i) => (
                                <div key={i} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=200&auto=format&fit=crop" 
                                            alt="Cơm Sườn" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-0.5">
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">Cơm Sườn Bì Chả</h4>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Sườn nướng than...</p>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <span className="text-primary font-bold text-sm">55.000đ</span>
                                            <button className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-600 transition-colors">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                              ))}
                              
                              {/* Faded item for visual continuity */}
                              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 opacity-50">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=200&auto=format&fit=crop" 
                                            alt="Cơm Sườn" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-0.5">
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">Cơm Sườn Bì Chả</h4>
                                            <p className="text-[10px] text-gray-500 mt-0.5">Sườn nướng than...</p>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <span className="text-primary font-bold text-sm">55.000đ</span>
                                            <button className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                          </div>

                          {/* Floating Cart Bar */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-8">
                              <div className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-between cursor-pointer active:scale-95 transition-transform">
                                  <div className="flex flex-col">
                                      <div className="flex items-center gap-2">
                                          <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">3 món</span>
                                          <span className="text-xs text-orange-100">Xem giỏ hàng</span>
                                      </div>
                                      <span className="font-bold text-lg leading-tight">165.000đ</span>
                                  </div>
                                  <div className="bg-white/20 p-2 rounded-full">
                                      <ArrowRight size={20} />
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Không cần tải App</h3>
              <p className="text-gray-600">
                Khách hàng chỉ cần mở Camera hoặc Zalo quét mã là xem được menu ngay. Loại bỏ hoàn toàn rào cản cài đặt ứng dụng.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Đồng bộ giỏ hàng nhóm</h3>
              <p className="text-gray-600">
                Đi ăn đông người? Mọi người cùng quét 1 mã, thêm món vào giỏ chung. Ai cũng thấy được thực đơn của bàn mình.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Chốt đơn xuống Bếp tức thì</h3>
              <p className="text-gray-600">
                Đơn hàng sau khi khách xác nhận sẽ chạy thẳng vào màn hình KDS trong bếp. Không còn cảnh nhân viên chạy đi chạy lại đưa giấy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-secondary mb-16">Quy trình đơn giản hóa</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { title: "Bước 1: Quét mã", desc: "Mỗi bàn có 1 mã QR định danh riêng. Khách ngồi bàn nào quét mã bàn đó.", step: "01" },
              { title: "Bước 2: Chọn món & Tùy chỉnh", desc: "Giao diện trực quan, hình ảnh hấp dẫn. Khách dễ dàng chọn thêm topping, ghi chú ít cay/không hành.", step: "02" },
              { title: "Bước 3: Xác nhận & Thưởng thức", desc: "Đơn hàng được gửi đi. Trạng thái món ăn (Đang nấu/Đã xong) được cập nhật liên tục trên điện thoại khách.", step: "03" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 md:gap-10 items-start">
                <div className="text-5xl font-black text-gray-200 shrink-0 select-none">{item.step}</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Bạn đã sẵn sàng đổi mới quy trình phục vụ?</h2>
          <button 
            onClick={onRegister}
            className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Trải nghiệm miễn phí ngay
          </button>
        </div>
      </section>
    </div>
  );
};

export default QrOrderingPage;