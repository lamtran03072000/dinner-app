import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PricingProps {
  onRegister: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onRegister }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Khởi động',
      description: 'Dành cho quán nhỏ, mới mở muốn thử nghiệm chuyển đổi số.',
      price: '0',
      period: 'mãi mãi',
      features: [
        'Gọi món qua QR Code (Tối đa 10 bàn)',
        'Menu điện tử cơ bản',
        'Quản lý danh sách món',
        'Báo cáo doanh thu ngày',
      ],
      notIncluded: [
        'Quản lý kho & Định lượng',
        'Thanh toán online (MoMo/ZaloPay)',
        'In bếp tự động (KDS)',
        'Quản lý nhân viên',
      ],
      cta: 'Dùng thử ngay',
      popular: false,
    },
    {
      name: 'Chuyên nghiệp',
      description: 'Giải pháp toàn diện cho quán SMEs để tối ưu vận hành.',
      price: isAnnual ? '199.000' : '249.000',
      period: 'tháng',
      features: [
        'Không giới hạn số lượng bàn',
        'Gọi món & Đồng bộ giỏ hàng nhóm',
        'Hệ thống hiển thị bếp (KDS)',
        'Quản lý kho & Trừ tồn kho tự động',
        'Thanh toán đa kênh (Ví điện tử, VietQR)',
        'Phân quyền nhân viên chi tiết',
        'Báo cáo lãi lỗ, hiệu suất món ăn',
      ],
      notIncluded: [
        'API tích hợp bên thứ 3',
        'Quản lý đa chi nhánh',
      ],
      cta: 'Đăng ký ngay',
      popular: true,
      badge: 'Khuyên dùng',
    },
    {
      name: 'Doanh nghiệp',
      description: 'Dành cho chuỗi nhà hàng cần quản lý tập trung và tùy biến.',
      price: 'Liên hệ',
      period: '',
      features: [
        'Mọi tính năng gói Chuyên nghiệp',
        'Quản lý đa chi nhánh (Chain)',
        'API mở rộng (ERP, CRM riêng)',
        'Tùy biến giao diện thương hiệu',
        'Hỗ trợ kỹ thuật 24/7 ưu tiên',
        'SLA cam kết độ ổn định 99.9%',
      ],
      notIncluded: [],
      cta: 'Nhận tư vấn',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Bảng giá linh hoạt
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Chi phí tối ưu cho từng giai đoạn phát triển của quán. Tiết kiệm hơn 20% khi thanh toán theo năm.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-secondary' : 'text-gray-400'}`}>Thanh toán tháng</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-primary rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div 
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-6' : ''}`}
              ></div>
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-secondary' : 'text-gray-400'}`}>
              Thanh toán năm <span className="text-primary text-xs ml-1">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105 z-10' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-secondary">{plan.price}</span>
                  {plan.price !== '0' && plan.price !== 'Liên hệ' && (
                    <span className="text-xl font-bold text-secondary text-sm align-top ml-1">đ</span>
                  )}
                  {plan.period && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 decoration-gray-300">
                    <X size={18} className="text-gray-300 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onRegister}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-orange-700 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-50 text-secondary hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;