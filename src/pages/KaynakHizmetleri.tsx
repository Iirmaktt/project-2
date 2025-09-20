import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const KaynakHizmetleri: React.FC = () => {
  const successfulProjects = [
    {
      title: "Endüstriyel Çelik Konstrüksiyon",
      category: "İnşaat Sektörü",
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg"
    },
    {
      title: "Otomotiv Parça Üretimi",
      category: "Otomotiv Sanayi",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
    },
    {
      title: "Gemi İnşa Projesi",
      category: "Denizcilik",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
    },
    {
      title: "Petrol Boru Hattı",
      category: "Enerji Sektörü",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
    },
    {
      title: "Madencilik Ekipmanları",
      category: "Ağır Sanayi",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg"
    },
    {
      title: "Havacılık Komponenti",
      category: "Havacılık",
      image: "https://images.pexels.com/photos/159298/science-chemistry-lab-laboratory-159298.jpeg"
    },
    {
      title: "Köprü İnşaatı",
      category: "Altyapı",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
    },
    {
      title: "Rafineri Ekipmanları",
      category: "Petrokimya",
      image: "https://images.pexels.com/photos/3825882/pexels-photo-3825882.jpeg"
    },
    {
      title: "Raylı Sistem Projeleri",
      category: "Ulaştırma",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    }
  ];

  const stats = [
    { number: "150+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "15+", label: "Yıllık Deneyim" },
    { number: "99%", label: "Başarı Oranı" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Başarılı <span className="text-blue-300">Kaynak Projelerimiz</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Farklı sektörlerde gerçekleştirdiğimiz başarılı kaynak projelerimizi keşfedin
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Başarılı <span className="text-blue-800">Projelerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çeşitli sektörlerde gerçekleştirdiğimiz kaliteli kaynak işleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successfulProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-80">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sizin Projeniz de Bir Sonraki Başarı Hikayemiz Olsun
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Profesyonel kaynak hizmetlerimizle projenizi hayata geçirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
            >
              Proje Teklifi Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Ürünlerimizi İncele
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaynakHizmetleri;