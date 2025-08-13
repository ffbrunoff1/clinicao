import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Package, Truck, Shield, Clock, Gift, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Package,
      title: "RaÃ§Ã£o Premium",
      description: "SeleÃ§Ã£o especial de raÃ§Ãµes super premium para todas as idades e portes. NutriÃ§Ã£o balanceada para uma vida saudÃ¡vel e cheia de energia.",
      features: ["Ingredientes naturais", "Sem conservantes artificiais", "Rica em proteÃ­nas", "FÃ¡cil digestÃ£o"],
      color: "from-orange-500 to-red-500",
      image: "ð"
    },
    {
      icon: Gift,
      title: "Brinquedos Interativos",
      description: "Brinquedos educativos e divertidos que estimulam a inteligÃªncia e proporcionam horas de diversÃ£o para seu melhor amigo.",
      features: ["Estimula a mente", "Material resistente", "Seguro e atÃ³xico", "VÃ¡rias modalidades"],
      color: "from-purple-500 to-pink-500",
      image: "ð¾"
    },
    {
      icon: Heart,
      title: "AcessÃ³rios de Luxo",
      description: "Coleiras, guias, camas e acessÃ³rios premium que combinam estilo, conforto e funcionalidade para o seu cÃ£o.",
      features: ["Design exclusivo", "Material premium", "Conforto mÃ¡ximo", "Durabilidade garantida"],
      color: "from-blue-500 to-purple-500",
      image: "ð"
    },
    {
      icon: Shield,
      title: "Cuidados & Higiene",
      description: "Produtos de higiene e cuidados especializados para manter seu cÃ£o sempre limpo, saudÃ¡vel e cheiroso.",
      features: ["FÃ³rmulas suaves", "Dermatologicamente testado", "FragrÃ¢ncia agradÃ¡vel", "ProteÃ§Ã£o natural"],
      color: "from-green-500 to-teal-500",
      image: "ð"
    },
    {
      icon: Sparkles,
      title: "Snacks Gourmet",
      description: "Petiscos artesanais e saborosos, feitos com ingredientes selecionados para recompensar e agradar seu cÃ£o.",
      features: ["Sabores Ãºnicos", "Ingredientes naturais", "Baixo em gordura", "Rico em vitaminas"],
      color: "from-yellow-500 to-orange-500",
      image: "ð¦´"
    },
    {
      icon: Truck,
      title: "Entrega Expressa",
      description: "ServiÃ§o de entrega rÃ¡pida e segura para que seu cÃ£o nÃ£o fique nem um dia sem seus produtos favoritos.",
      features: ["Entrega em 24h", "Embalagem segura", "Rastreamento online", "Frete grÃ¡tis*"],
      color: "from-indigo-500 to-blue-500",
      image: "ð"
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Nossos Produtos</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Tudo que seu cÃ£o{' '}
            <span className="gradient-text">ama e precisa</span>
            <br />em um sÃ³ lugar
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa seleÃ§Ã£o exclusiva de produtos premium, cuidadosamente escolhidos 
            para proporcionar o melhor para seu melhor amigo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {service.image}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-4 h-4" />
                  <span>Quero Este Produto</span>
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="w-8 h-8" />
          </motion.div>

          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para fazer seu cÃ£o mais feliz?
          </h3>
          
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a proporcionar 
            uma vida ainda melhor para seu melhor amigo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="w-5 h-5" />
              <span>Falar Conosco Agora</span>
            </motion.button>

            <motion.div
              className="flex items-center space-x-2 text-orange-100"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Truck className="w-5 h-5" />
              <span className="font-medium">Entrega rÃ¡pida em toda regiÃ£o</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { icon: Shield, text: "Garantia Total", subtext: "100% Seguro" },
            { icon: Truck, text: "Entrega RÃ¡pida", subtext: "24h-48h" },
            { icon: Heart, text: "Suporte Especializado", subtext: "24/7" },
            { icon: Star, text: "Qualidade Premium", subtext: "Aprovado" }
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.text}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-800">{item.text}</h4>
                <p className="text-sm text-gray-600">{item.subtext}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}