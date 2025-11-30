
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Tối ưu hóa chi phí thực phẩm (Food Cost) thời bão giá',
    excerpt: 'Chiến lược kiểm soát định lượng và giảm thất thoát nguyên liệu hiệu quả cho quán ăn nhỏ.',
    category: 'Quản trị',
    date: '12/05/2024',
    author: 'Chuyên gia F&B',
    // Fresh vegetables market image from screenshot context
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Bí quyết giữ chân nhân sự Gen Z ngành nhà hàng',
    excerpt: 'Xây dựng môi trường làm việc công bằng và minh bạch nhờ công nghệ chấm công tự động.',
    category: 'Nhân sự',
    date: '10/05/2024',
    author: 'Dinner App Team',
    // Minimal abstract or team image
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Xu hướng Marketing 0 đồng: Khách hàng là người đại diện',
    excerpt: 'Tận dụng trải nghiệm gọi món QR Code để tạo điểm nhấn "check-in" và lan truyền trên mạng xã hội.',
    category: 'Marketing',
    date: '08/05/2024',
    author: 'Nguyễn Văn A',
    // Modern restaurant interior
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-secondary mb-3">Kiến thức F&B</h2>
            <p className="text-gray-500 text-lg">Chia sẻ kinh nghiệm vận hành thực chiến từ chuyên gia.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary font-bold hover:gap-2 transition-all">
            Xem tất cả <ArrowRight size={20} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Calendar size={14}/> {article.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14}/> {article.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {article.title}
                </h3>
                
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-primary font-bold text-lg">
            Xem tất cả <ArrowRight size={20} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
