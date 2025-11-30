
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Dinner App có phù hợp với quán quy mô nhỏ (dưới 10 bàn) không?",
    answer: "Rất phù hợp. Dinner App có gói 'Khởi động' hoàn toàn miễn phí dành riêng cho các quán nhỏ, giúp bạn làm quen với công nghệ gọi món qua QR Code mà không tốn chi phí."
  },
  {
    question: "Tôi có cần mua máy POS hay thiết bị chuyên dụng không?",
    answer: "Không cần. Dinner App hoạt động trên nền tảng đám mây (SaaS), bạn có thể sử dụng ngay trên điện thoại di động, máy tính bảng hoặc laptop sẵn có của mình."
  },
  {
    question: "Khách hàng lớn tuổi không biết quét mã thì sao?",
    answer: "Nhân viên phục vụ vẫn có thể sử dụng Dinner App trên điện thoại của họ để tạo đơn hàng giúp khách (tính năng 'Tạo đơn hộ'). Quy trình vẫn được đồng bộ xuống bếp và thu ngân như bình thường."
  },
  {
    question: "Nếu rớt mạng Internet thì hệ thống có hoạt động không?",
    answer: "Hệ thống được thiết kế tối ưu với chế độ Offline-first cho các tác vụ cơ bản. Tuy nhiên, để đồng bộ đơn hàng xuống bếp và thanh toán online, bạn cần duy trì kết nối Internet ổn định."
  },
  {
    question: "Tôi có thể tích hợp máy in hóa đơn cũ không?",
    answer: "Dinner App hỗ trợ kết nối với hầu hết các dòng máy in LAN/Wifi/Bluetooth phổ biến trên thị trường hiện nay."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Câu hỏi thường gặp</h2>
          <p className="text-gray-600">
            Giải đáp những thắc mắc phổ biến của chủ quán trong quá trình chuyển đổi số.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index ? 'border-primary shadow-md' : 'border-gray-200'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-secondary'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
