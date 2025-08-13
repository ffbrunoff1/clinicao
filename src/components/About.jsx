import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Award, Sparkles, Users, Clock, Star } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Amor GenuÃ­no",
      description: "Cada produto Ã© selecionado pensando no bem-estar e felicidade do seu cÃ£o."
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com marcas confiÃ¡veis e produtos testados."
    },
    {
      icon: Award,
      title: "ExcelÃªncia no Atendimento",
      description: "Nossa equipe especializada estÃ¡ sempre pronta para ajudar vocÃª e seu pet."
    },
    {
      icon: Sparkles,
      title: "Produtos Exclusivos",
      description: "Itens Ãºnicos e especiais que vocÃª nÃ£o encontra em qualquer lugar."
    }
  ]

  const stats = [
    { number: "1000+", label: "Clientes Felizes", icon: Users },
    { number: "5+", label: "Anos de ExperiÃªncia", icon: Clock },
    { number: "500+", label: "Produtos DisponÃ­veis", icon: Star },
    { number: "100%", label: "SatisfaÃ§Ã£o Garantida", icon: Award }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-white via-orange-50 to-purple-50">
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
            <Heart className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Sobre a Clinicao</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Cuidando do seu{' '}
            <span className="gradient-text">melhor amigo</span>
            <br />com dedicaÃ§Ã£o total
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Clinicao, acreditamos que cada cÃ£o merece o melhor cuidado e carinho. 
            Somos especializados em produtos premium que proporcionam qualidade de vida, 
            saÃºde e felicidade para o seu companheiro de quatro patas.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                Nossa missÃ£o Ã© simples: fazer seu cÃ£o mais feliz e saudÃ¡vel
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundada com amor e dedicaÃ§Ã£o aos animais, a Clinicao nasceu do desejo de 
                oferecer produtos e serviÃ§os de alta qualidade para cÃ£es. Sabemos que seu 
                pet nÃ£o Ã© apenas um animal, mas um membro da famÃ­lia que merece todo cuidado 
                e atenÃ§Ã£o especial.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa equipe Ã© formada por especialistas apaixonados por animais, que 
                trabalham incansavelmente para selecionar os melhores produtos do mercado, 
                garantindo que cada item atenda aos mais altos padrÃµes de qualidade e seguranÃ§a.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">Nosso Compromisso</h4>
              </div>
              <p className="text-orange-100 leading-relaxed">
                "Tratamos cada cliente como famÃ­lia e cada pet como se fosse nosso. 
                Essa filosofia nos guia em tudo o que fazemos."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                className="bg-gradient-to-br from-orange-400 to-purple-600 aspect-square rounded-3xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center text-white p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Heart className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Amor em Cada Detalhe</h3>
                  <p className="text-orange-100">
                    Selecionamos cada produto pensando no bem-estar do seu cÃ£o
                  </p>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              NÃºmeros que falam por si
            </h3>
            <p className="text-orange-100 text-lg">
              A confianÃ§a dos nossos clientes Ã© nossa maior conquista
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}