import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Clock, Star, Shield, Award } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Nossos Produtos', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ]

  const productCategories = [
    'Ração Premium',
    'Brinquedos Interativos',
    'Acessórios de Luxo',
    'Cuidados & Higiene',
    'Snacks Gourmet',
    'Entrega Expressa'
  ]

  const trustFeatures = [
    { icon: Shield, text: "Garantia Total" },
    { icon: Award, text: "Qualidade Premium" },
    { icon: Star, text: "5 Estrelas" },
    { icon: Heart, text: "Atendimento 24/7" }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Heart className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Clinicao
                </h3>
                <span className="text-orange-300 text-sm font-medium">
                  Petshop Premium
                </span>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Cuidando do seu melhor amigo com amor, dedicação e produtos de qualidade premium. 
              Porque cada cão merece o melhor.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-center space-x-2 bg-white/10 rounded-lg p-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-gray-300">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Links Rápidos</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Nossos Produtos</h4>
            <div className="space-y-3">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category}
                  className="flex items-center space-x-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span className="text-sm">{category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Contato</h4>
            
            <div className="space-y-4 mb-6">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Entre em contato</p>
                  <p className="text-orange-300 font-medium">Fale conosco</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">E-mail</p>
                  <p className="text-orange-300 font-medium">Envie sua mensagem</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Horário</p>
                  <p className="text-orange-300 font-medium">Seg-Sex: 8h-18h</p>
                  <p className="text-orange-300 font-medium">Sáb: 8h-16h</p>
                  <p className="text-orange-300 font-medium">Dom: 9h-14h</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contato')}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-4 h-4" />
              <span>Falar Conosco</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2023 Clinicao. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Criado com{' '}
                <motion.span
                  className="text-red-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ♥
                </motion.span>
                {' '}por{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300"
                >
                  Papum
                </a>
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={() => scrollToSection('#inicio')}
              className="group bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↑
              </motion.div>
              <span className="hidden md:inline text-sm font-medium">Voltar ao Topo</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}