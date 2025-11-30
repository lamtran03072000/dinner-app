import React from 'react';
import { QrCode, ChefHat, Smartphone, Layers, BarChart3, CloudLightning } from 'lucide-react';
import { Product } from '../types';

// Data based on Chapter 4: Functional Specification
const products: Product[] = [
  {
    id: 'qr-ordering',
    title: 'Gọi món qua QR Code',
    description: 'Khách tự gọi món tại bàn, đồng bộ giỏ hàng nhóm. Loại bỏ độ trễ và sai sót khi ghi order thủ công.',
    icon: <QrCode size={32} />,
  },
  {
    id: 'kds',
    title: 'Hệ thống hiển thị Bếp (KDS)',
    description: 'Đồng bộ đơn hàng tức thì xuống bếp. Sắp xếp món theo FIFO, cập nhật trạng thái chế biến thời gian thực.',
    icon: <ChefHat size={32} />,
  },
  {
    id: 'payment',
    title: 'Thanh toán đa kênh',
    description: 'Tích hợp MoMo, ZaloPay, VietQR. Tự động đối soát doanh thu, ngăn chặn thất thoát tiền mặt.',
    icon: <Smartphone size={32} />,
  },
  {
    id: 'inventory',
    title: 'Quản lý Kho & Menu',
    description: 'Trừ kho tự động theo định lượng (BOM). Tự động ẩn món trên menu khi hết nguyên liệu.',
    icon: <Layers size={32} />,
  },
  {
    id: 'admin',
    title: 'Dashboard Quản trị',
    description: 'Báo cáo doanh thu, hiệu suất nhân viên, lợi nhuận theo thời gian thực. Truy cập mọi lúc mọi nơi.',
    icon: <BarChart3 size={32} />,
  },
  {
    id: 'saas',
    title: 'Nền tảng Cloud SaaS',
    description: 'Không cần đầu tư máy chủ. Triển khai nhanh chóng, chi phí thuê bao linh hoạt cho SMEs.',
    icon: <CloudLightning size={32} />,
  }
];

interface SolutionsProps {
  onNavigate: (view: any) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const handleCardClick = (productId: string) => {
    if (productId === 'qr-ordering') {
      const section = document.getElementById('qr-ordering-detail');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Other features can be linked similarly later
  };

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tính năng cốt lõi của <span className="text-primary">Dinner App</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Giải quyết triệt để các "nút thắt cổ chai" trong vận hành nhà hàng bằng công nghệ tự động hóa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleCardClick(product.id)}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              <div className="h-16 w-16 bg-orange-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                Xem chi tiết <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;