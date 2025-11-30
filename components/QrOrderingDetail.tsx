
import React, { useState } from 'react';
import { Smartphone, Users, Zap, ArrowRight, ScanLine, Plus, RefreshCw, CheckCircle, Wifi, Battery, Signal } from 'lucide-react';

interface QrOrderingDetailProps {
  onRegister: () => void;
}

const MENU_ITEMS = [
  { id: 1, name: "Cơm Sườn Bì Chả", price: 55000, desc: "Sườn nướng than hoa, bì, chả trứng, mỡ hành.", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Cơm Gà Xối Mỡ", price: 45000, desc: "Gà góc tư chiên giòn, da giòn rụm, sốt mắm tỏi.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" },
  { id: 3, name: "Trà Đào Cam Sả", price: 35000, desc: "Thanh mát, giải nhiệt, topping đào miếng.", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" },
];

const QrOrderingDetail: React.FC<QrOrderingDetailProps> = ({ onRegister }) => {
  const [demoStep, setDemoStep] = useState<'camera' | 'scanning' | 'menu'>('camera');
  const [cart, setCart] = useState<Record<number, number>>({ 1: 1, 2: 1, 3: 1 }); // Pre-fill for demo look
  const [activeCategory, setActiveCategory] = useState('Món mới');

  const handleScan = () => {
    setDemoStep('scanning');
    setTimeout(() => {
      setDemoStep('menu');
    }, 1000);
  };

  const handleAddToCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleReset = () => {
    setDemoStep('camera');
    setCart({ 1: 1, 2: 1, 3: 1 });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  // Fixed total for demo consistency with screenshot if needed, but calculating real is fine
  const totalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = MENU_ITEMS.find(i => i.id === Number(id));
    return total + (item ? item.price * qty : 0);
  }, 0);

  return (
    <section id="qr-ordering-detail" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro / Hero Part of Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
              Tính năng nổi bật nhất
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.15]">
              Gọi món tại bàn <br/>
              <span className="text-primary">Thông minh & Tốc độ</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Biến điện thoại của khách hàng thành công cụ gọi món quyền năng. Không cần tải app, không cần chờ nhân viên, mọi thứ diễn ra tức thì.
            </p>
            
            {/* Steps List matching screenshot */}
            <div className="space-y-6 bg-white rounded-2xl">
                <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-50 text-green-600 p-1 rounded-full shrink-0">
                      <CheckCircle size={20} className="fill-green-100" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block text-lg">Bước 1: <span className="font-normal text-gray-600 text-base">Khách tự quét mã QR, không cần tải app.</span></span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-50 text-green-600 p-1 rounded-full shrink-0">
                      <CheckCircle size={20} className="fill-green-100" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block text-lg">Bước 2: <span className="font-normal text-gray-600 text-base">Xem menu sinh động, chọn món & tùy chỉnh.</span></span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-50 text-green-600 p-1 rounded-full shrink-0">
                      <CheckCircle size={20} className="fill-green-100" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block text-lg">Bước 3: <span className="font-normal text-gray-600 text-base">Đồng bộ đơn hàng xuống bếp tức thì.</span></span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={onRegister}
                className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Đăng ký tư vấn
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Interactive Phone Demo */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000 relative">
             {/* Dashed placeholder box visual from screenshot */}
             <div className="absolute inset-0 border-2 border-dashed border-blue-300 rounded-3xl -z-10 translate-x-4 translate-y-4 hidden lg:block opacity-50"></div>

             <div className="relative group">
                 {/* Reset Button */}
                 {demoStep !== 'camera' && (
                     <button 
                        onClick={handleReset}
                        className="absolute -right-4 top-20 lg:-right-12 lg:top-10 bg-white p-3 rounded-full shadow-xl text-gray-500 hover:text-primary transition-all z-30 hover:scale-110"
                        title="Thử lại"
                     >
                         <RefreshCw size={20} />
                     </button>
                 )}

                 <div className="relative w-[340px] h-[680px] bg-black rounded-[3.5rem] shadow-2xl border-[10px] border-black overflow-hidden transform transition-all duration-700 ease-out hover:scale-[1.01] ring-1 ring-white/10">
                    {/* Dynamic Island */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 pointer-events-none"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-black overflow-hidden relative font-sans select-none">
                        
                        {/* CAMERA MODE - MATCHING SCREENSHOT */}
                        {demoStep === 'camera' && (
                            <div className="absolute inset-0 bg-black animate-in fade-in duration-500 flex flex-col">
                                {/* Simulated Camera View */}
                                <div className="flex-1 relative overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                        alt="Table background" 
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    {/* Dark Overlay with Cutout */}
                                    <div className="absolute inset-0 bg-black/40">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[3px] border-primary/80 rounded-3xl shadow-[0_0_0_999px_rgba(0,0,0,0.5)]">
                                            {/* Corner Accents */}
                                            <div className="absolute top-[-2px] left-[-2px] w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>
                                            <div className="absolute top-[-2px] right-[-2px] w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>
                                            <div className="absolute bottom-[-2px] left-[-2px] w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>
                                            <div className="absolute bottom-[-2px] right-[-2px] w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl"></div>
                                            
                                            {/* Scan Icon */}
                                            <ScanLine size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 animate-pulse" strokeWidth={1} />
                                        </div>
                                    </div>
                                    
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-40 text-white font-medium text-sm text-center w-full px-8">
                                        Quét mã QR tại bàn để gọi món
                                    </p>
                                </div>

                                {/* Bottom Controls */}
                                <div className="h-32 bg-black flex items-center justify-center pb-6">
                                    <button 
                                        onClick={handleScan}
                                        className="w-20 h-20 rounded-full border-4 border-white/80 flex items-center justify-center active:scale-95 transition-transform"
                                    >
                                        <div className="w-16 h-16 bg-white rounded-full"></div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* SCANNING LOADING */}
                        {demoStep === 'scanning' && (
                            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-50">
                                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* MENU MODE - Cơm Tấm Sài Gòn */}
                        {demoStep === 'menu' && (
                            <div className="w-full h-full flex flex-col bg-gray-50 animate-in slide-in-from-bottom duration-500">
                                
                                {/* Header Image */}
                                <div className="h-44 relative shrink-0">
                                    <img src="https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Header" />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="font-bold text-xl mb-1">Cơm Tấm Sài Gòn</h3>
                                        <p className="text-xs opacity-90">Bàn 05</p>
                                    </div>
                                </div>

                                {/* Category Pills */}
                                <div className="bg-white px-4 py-3 border-b border-gray-100 flex gap-2 overflow-x-auto no-scrollbar sticky top-0 z-10">
                                    <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">Món mới</button>
                                    <button className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border border-gray-200">Cơm tấm</button>
                                    <button className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border border-gray-200">Đồ uống</button>
                                </div>

                                {/* Menu Items */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-24 scrollbar-hide bg-gray-50">
                                    {MENU_ITEMS.map((item) => (
                                        <div key={item.id} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3">
                                            <div className="w-20 h-20 bg-gray-100 rounded-xl shrink-0 overflow-hidden">
                                                <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-0.5">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                                    <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{item.desc}</p>
                                                </div>
                                                <div className="flex justify-between items-end">
                                                    <span className="text-primary font-bold text-sm">{item.price.toLocaleString('vi-VN')}đ</span>
                                                    <button 
                                                        onClick={() => handleAddToCart(item.id)}
                                                        className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-600"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Faded extra item to show scrolling */}
                                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 opacity-50">
                                        <div className="w-20 h-20 bg-gray-100 rounded-xl shrink-0"></div>
                                        <div className="flex-1 space-y-2 py-2">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Cart Bar - Exact Match */}
                                <div className="absolute bottom-6 left-4 right-4 z-40">
                                    <div className="bg-primary text-white p-3 rounded-xl shadow-lg flex items-center justify-between cursor-pointer active:scale-95 transition-transform">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <div className="bg-white text-primary text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center justify-center min-w-[20px]">
                                                    {totalItems}
                                                </div>
                                                <span className="text-xs font-medium">món</span>
                                            </div>
                                            <span className="font-bold text-lg leading-none">{totalPrice.toLocaleString('vi-VN')}đ</span>
                                        </div>
                                        <div className="flex items-center gap-1 pr-2">
                                            <span className="text-sm font-bold">Xem giỏ hàng</span>
                                            <div className="w-1.5 h-1.5 bg-white rounded-full ml-1"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                 </div>
                 
                 <p className="text-center text-primary/60 text-sm mt-4 lg:hidden animate-bounce">
                    ↓ Lướt xuống để xem thêm
                 </p>
             </div>
          </div>
        </div>

        {/* Benefits Carousel - Horizontal Scroll */}
        <div className="mt-8 relative">
            <div className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-2xl pointer-events-none hidden md:block"></div>
            <div className="p-6 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-6 md:grid md:grid-cols-3 md:gap-8">
                
                <div className="snap-center min-w-[85%] md:min-w-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Smartphone size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">Không cần tải App</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Khách hàng chỉ cần mở Camera hoặc Zalo quét mã là xem được menu ngay. Loại bỏ hoàn toàn rào cản cài đặt ứng dụng.
                    </p>
                </div>

                <div className="snap-center min-w-[85%] md:min-w-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">Đồng bộ giỏ hàng nhóm</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Đi ăn đông người? Mọi người cùng quét 1 mã, thêm món vào giỏ chung. Ai cũng thấy được thực đơn của bàn mình.
                    </p>
                </div>

                <div className="snap-center min-w-[85%] md:min-w-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">Chốt đơn xuống Bếp tức thì</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Đơn hàng sau khi khách xác nhận sẽ chạy thẳng vào màn hình KDS trong bếp. Không còn cảnh nhân viên chạy đi chạy lại.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default QrOrderingDetail;
