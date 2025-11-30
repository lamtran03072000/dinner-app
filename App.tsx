
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import SmeSolutions from './components/SmeSolutions';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import QrOrderingPage from './components/features/QrOrderingPage';
import QrOrderingDetail from './components/QrOrderingDetail';
import DashboardFeature from './components/DashboardFeature';

type ViewState = 'home' | 'register' | 'qr-ordering';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleRegister = () => {
    handleNavigate('register');
  };

  const handleBackToHome = () => {
    handleNavigate('home');
  };

  if (currentView === 'register') {
    return <RegisterPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900">
      <Header onRegister={handleRegister} onNavigate={handleNavigate} currentView={currentView} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero onRegister={handleRegister} />
            <Stats />
            <SmeSolutions />
            <Solutions onNavigate={handleNavigate} />
            <QrOrderingDetail onRegister={handleRegister} />
            <DashboardFeature onRegister={handleRegister} />
            <Pricing onRegister={handleRegister} />
            
            {/* Testimonial Section - Updated to match Screenshot */}
            <section className="py-24 bg-orange-50/30">
              <div className="container mx-auto px-4 md:px-6">
                
                {/* Dashed Border Container */}
                <div className="relative border-2 border-dashed border-blue-400/50 rounded-[2rem] p-8 md:p-12 bg-white/50 backdrop-blur-sm">
                    
                    <div className="text-center mb-12">
                       <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Khách hàng nói về chúng tôi</h2>
                    </div>

                    {/* Carousel Container */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                      
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="snap-center min-w-[100%] md:min-w-[calc(33.333%-16px)] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                          <div className="flex gap-1 text-yellow-400 mb-6 text-lg">
                            {'★★★★★'}
                          </div>
                          <p className="text-gray-600 mb-8 italic text-lg leading-relaxed flex-1">
                            "Hệ thống vận hành rất ổn định, giúp tôi tiết kiệm được 30% thời gian quản lý và tránh thất thoát doanh thu đáng kể."
                          </p>
                          <div className="flex items-center gap-4 mt-auto">
                            <img 
                                src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80`} 
                                alt="Nguyễn Văn A" 
                                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
                            />
                            <div>
                              <div className="font-bold text-secondary text-lg">Nguyễn Văn A</div>
                              <div className="text-sm text-gray-500 font-medium">Chủ chuỗi Cafe The Cup</div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                    
                    {/* Decorative text based on screenshot instruction (hidden in production but kept for context) */}
                    {/* <div className="text-center text-blue-400 text-sm mt-4">phần này làm carousel lướt qua lại luôn</div> */}
                </div>

              </div>
            </section>

            <Blog />
            <AboutUs />
            <FAQ />

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sẵn sàng bùng nổ doanh số?</h2>
                <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Đăng ký ngay để nhận tư vấn miễn phí và trải nghiệm hệ sinh thái công nghệ F&B hàng đầu Việt Nam.
                </p>
                <button 
                  onClick={handleRegister}
                  className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Đăng ký tư vấn ngay
                </button>
              </div>
            </section>
          </>
        )}

        {currentView === 'qr-ordering' && (
          <QrOrderingPage onBack={handleBackToHome} onRegister={handleRegister} />
        )}

      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;
