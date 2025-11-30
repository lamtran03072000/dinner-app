import React from 'react';

const stats = [
  { value: '30%', label: 'Cắt giảm nhân sự' },
  { value: '15-20p', label: 'Tăng tốc độ quay vòng bàn' },
  { value: '100%', label: 'Loại bỏ sai sót order' },
  { value: '24/7', label: 'Quản lý từ xa' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-3xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;