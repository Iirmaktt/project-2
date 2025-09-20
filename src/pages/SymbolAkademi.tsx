import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

const SymbolAkademi: React.FC = () => {
  const courses = [
    {
      title: "Temel Kaynak Eğitimi",
      description: "Kaynak teknolojilerine giriş ve temel beceriler",
      duration: "40 Saat",
      level: "Başlangıç",
      features: [
        "Kaynak güvenliği ve iş sağlığı",
        "Temel kaynak yöntemleri",
        "Malzeme bilgisi",
        "Pratik uygulamalar"
      ],
      icon: <BookOpen className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
    },
    {
      title: "İleri Seviye Kaynak Teknikleri",
      description: "Uzman seviye kaynak uygulamaları ve özel teknikler",
      duration: "80 Saat",
      level: "İleri",
      features: [
        "TIG ve MIG/MAG ileri teknikleri",
        "Özel alaşım kaynağı",
        "Kaynak hatası analizi",
        "Kalite kontrol yöntemleri"
      ],
      icon: <Award className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg"
    },
    {
      title: "Kaynak Güvenliği ve Standartları",
      description: "İş güvenliği ve uluslararası kaynak standartları",
      duration: "24 Saat",
      level: "Tüm Seviyeler",
      features: [
        "İş güvenliği mevzuatı",
        "Kişisel koruyucu donanım",
        "Risk analizi ve önlemleri",
        "Acil durum prosedürleri"
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
    }
  ];

  const trainingPrograms = [
    {
      title: "Bireysel Eğitim Programları",
      description: "Kişisel gelişim odaklı esnek eğitim seçenekleri",
      features: [
        "Esnek zaman programı",
        "Birebir eğitim desteği",
        "Kişiselleştirilmiş müfredat",
        "Sertifika programları"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Kurumsal Eğitim Paketleri",
      description: "Şirketlerin ihtiyaçlarına özel toplu eğitim çözümleri",
      features: [
        "Şirket içi eğitim",
        "Özelleştirilmiş içerik",
        "Grup indirimleri",
        "Sürekli destek"
      ],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Online Eğitim Platformu",
      description: "Uzaktan erişilebilir dijital eğitim içerikleri",
      features: [
        "7/24 erişim",
        "İnteraktif içerikler",
        "Video dersler",
        "Online sınavlar"
      ],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Uygulamalı Atölye Çalışmaları",
      description: "Modern atölyelerde pratik beceri geliştirme",
      features: [
        "Modern ekipmanlar",
        "Gerçek proje uygulamaları",
        "Uzman eğitmen desteği",
        "Sınırlı kontenjan"
      ],
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    "AWS (American Welding Society) Sertifikaları",
    "IIW (International Institute of Welding) Belgeleri",
    "ASME IX Kaynak Operatörü Sertifikası",
    "EN ISO 9606 Kaynak Yeterliliği Belgesi",
    "Mesleki Yeterlilik Kurumu (MYK) Sertifikaları",
    "Özel Sektör Kaynak Sertifikaları"
  ];

  const stats = [
    { number: "500+", label: "Mezun Öğrenci" },
    { number: "25+", label: "Eğitim Programı" },
    { number: "10+", label: "Uzman Eğitmen" },
    { number: "95%", label: "İş Bulma Oranı" }
  ];

  const facilities = [
    "Modern kaynak atölyeleri",
    "Son teknoloji kaynak ekipmanları",
    "Güvenlik donanımları",
    "Teorik eğitim sınıfları",
    "Dijital eğitim araçları",
    "Kalite kontrol laboratuvarı"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-blue-300">Symbol Akademi</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Kaynak teknolojileri ve endüstriyel beceri geliştirme alanında kapsamlı eğitim programları
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

      {/* Main Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eğitim <span className="text-blue-800">Programlarımız</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teorik bilgi ile pratik uygulamayı harmanlayan kapsamlı eğitim programları
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full">
                    {course.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {course.title}
                    </h3>
                    <p className="text-lg text-blue-800 mb-6 font-medium">
                      {course.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Eğitim İçeriği:
                      </h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
                    >
                      Kayıt Ol
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eğitim <span className="text-blue-800">Formatları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun farklı eğitim format seçenekleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sertifika <span className="text-blue-800">Programları</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Eğitim programlarımızı başarıyla tamamlayan katılımcılarımıza, sektörde geçerli 
                uluslararası sertifikalar kazandırıyoruz. Bu sertifikalar, kariyer gelişiminizde 
                önemli avantajlar sağlar.
              </p>
              
              <div className="space-y-3 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                Sertifika Programları Hakkında Bilgi Al
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Sertifika Programları" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eğitim <span className="text-blue-800">Tesislerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknoloji ile donatılmış eğitim tesislerimizde en iyi öğrenme deneyimini sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Neden <span className="text-blue-300">Symbol Akademi?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Uzman Eğitmenler", description: "Sektörde deneyimli, sertifikalı eğitmenler", icon: <Users className="w-6 h-6" /> },
              { title: "Modern Ekipmanlar", description: "Son teknoloji kaynak ekipmanları", icon: <Award className="w-6 h-6" /> },
              { title: "Esnek Programlar", description: "İhtiyaçlarınıza uygun zaman seçenekleri", icon: <Clock className="w-6 h-6" /> },
              { title: "İş Garantisi", description: "%95 mezun iş bulma oranı", icon: <CheckCircle className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-blue-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kariyerinizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Symbol Akademi'nin kapsamlı eğitim programları ile kaynak teknolojileri alanında uzmanlaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Eğitime Başla
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SymbolAkademi;