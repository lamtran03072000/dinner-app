import React from 'react';
import { Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tighter">Dinner App</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Giải pháp quản lý nhà hàng thông minh trên nền tảng SaaS. Đồng hành cùng SMEs trong hành trình chuyển đổi số ngành F&B.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Sản phẩm</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Tính năng QR Code</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quản lý Bếp (KDS)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quản lý Kho</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM & Loyalty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Báo cáo quản trị</a></li>
            </ul>
          </div>

           {/* Links 2 */}
           <div>
            <h3 className="font-bold text-lg mb-6 text-white">Về chúng tôi</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Giới thiệu dự án</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Đội ngũ phát triển</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tin tức thị trường</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Liên hệ</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>1900 xxxx</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@dinnerapp.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dinner App. Đồ án tốt nghiệp Ngành Thương Mại Điện Tử.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;