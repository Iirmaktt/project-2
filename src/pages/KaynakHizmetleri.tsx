import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Wrench, Settings, Shield, Award, CheckCircle } from 'lucide-react';

const KaynakHizmetleri: React.FC = () => {
  const weldingServices = [
    {
      title: "TIG Kaynak Hizmetleri",
      description: "Hassas ve yüksek kaliteli TIG kaynak işlemleri",
      features: [
        "Paslanmaz çelik kaynak uygulamaları",
        "Alüminyum ve özel alaşım kaynağı",
        "İnce malzeme kaynak işlemleri",
        "Yüksek kalite standartları"
      ],
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg"
    },
    {
      title: "MIG/MAG Kaynak Hizmetleri",
      description: "Hızlı ve verimli MIG/MAG kaynak çözümleri",
      features: [
        "Seri üretim kaynak işlemleri",
        "Kalın malzeme kaynak uygulamaları",
        "Otomatik kaynak sistemleri",
        "Yüksek üretim kapasitesi"
      ],
      icon: <Cog className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
    },
    {
      title: "Ark Kaynak Hizmetleri",
      description: "Geleneksel ve güvenilir ark kaynak uygulamaları",
      features: [
        "Saha kaynak işlemleri",
        "Onarım ve bakım kaynağı",
        "Ağır sanayi uygulamaları",
        "Çeşitli pozisyon kabiliyeti"
      ],
      icon: <Settings className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
    }
  ];

  const specialServices = [
    {
      title: "Prototip Üretimi",
      description: "Özel tasarım ve prototip kaynak işlemleri",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Seri Üretim",
      description: "Yüksek kapasiteli seri üretim kaynak hizmetleri",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Onarım Hizmetleri",
      description: "Endüstriyel ekipman onarım ve bakım kaynağı",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Özel Tasarım",
      description: "Müşteri ihtiyaçlarına özel kaynak çözümleri",
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  const qualityStandards = [
    "ISO 9001:2015 Kalite Yönetim Sistemi",
    "AWS D1.1 Yapısal Kaynak Kodu",
    "ASME IX Kaynak Prosedür Spesifikasyonu",
    "EN 1090 Çelik Yapı Standardı",
    "API 1104 Boru Hattı Kaynak Standardı",
    "IIW Uluslararası Kaynak Enstitüsü Sertifikaları"
  ];

  const capabilities = [
    { title: "Malzeme Çeşitliliği", value: "15+ Farklı Alaşım" },
    { title: "Kalınlık Aralığı", value: "0.5mm - 100mm" },
    { title: "Üretim Kapasitesi", value: "1000+ Parça/Ay" },
    { title: "Kalite Oranı", value: "%99.8 Başarı" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Profesyonel <span className="text-blue-300">Kaynak Hizmetleri</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Modern ekipmanlar ve sertifikalı operatörlerle en yüksek kalite standartlarında kaynak hizmetleri
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Capabilities Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {capability.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {capability.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kaynak <span className="text-blue-800">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknoloji ve deneyimli ekibimizle her türlü kaynak ihtiyacınıza çözüm sunuyoruz
            </p>
          </div>

          <div className="space-y-16">
            {weldingServices.map((service, index) => (
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
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-blue-800 mb-6 font-medium">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Hizmet Özellikleri:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
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
                      Teklif Al
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Özel <span className="text-blue-800">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza özel kaynak çözümleri ve destek hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Kalite <span className="text-blue-800">Standartlarımız</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tüm kaynak işlemlerimizde uluslararası kalite standartlarına uygun çalışıyoruz. 
                Sertifikalı operatörlerimiz ve modern kalite kontrol sistemlerimizle mükemmel sonuçlar garanti ediyoruz.
              </p>
              
              <div className="space-y-3">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Kalite Kontrol" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmet <span className="text-blue-800">Sürecimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerinizi baştan sona profesyonel bir süreçle yönetiyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Proje Analizi", description: "İhtiyaçlarınızı detaylı analiz ederiz" },
              { step: "02", title: "Planlama", description: "Optimal kaynak yöntemini belirleriz" },
              { step: "03", title: "Üretim", description: "Sertifikalı operatörlerle üretim yaparız" },
              { step: "04", title: "Kalite Kontrol", description: "Rigorous kalite testleri uygularız" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kaynak Projelerinizi Güvenle Teslim Edin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Profesyonel ekibimiz ve modern ekipmanlarımızla kaynak projelerinizi en yüksek kalitede tamamlıyoruz
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