import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Heart, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "Entre em contato conosco",
      action: "Ligue agora",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "Envie sua mensagem",
      action: "Escreva para nÃ³s",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MapPin,
      title: "LocalizaÃ§Ã£o",
      content: "Venha nos visitar",
      action: "Ver no mapa",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8:00 - 18:00" },
    { day: "SÃ¡bado", hours: "8:00 - 16:00" },
    { day: "Domingo", hours: "9:00 - 14:00" }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            <span className="text-orange-800 font-semibold">Entre em Contato</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Vamos cuidar juntos{' '}
            <span className="gradient-text">do seu melhor amigo</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar vocÃª a escolher os melhores produtos para seu cÃ£o. 
            Entre em contato conosco e receba atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={info.title}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-gray-600 mb-2">{info.content}</p>
                        <motion.button
                          className={`text-sm font-medium bg-gradient-to-r ${info.color} bg-clip-text text-transparent hover:underline`}
                          whileHover={{ x: 5 }}
                        >
                          {info.action} â
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Business Hours */}
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Clock className="w-5 h-5" />
                </motion.div>
                <h3 className="text-lg font-semibold">HorÃ¡rios de Atendimento</h3>
              </div>
              
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className="flex justify-between items-center py-1 border-b border-white/20 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-orange-100">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Envie sua mensagem
                </h3>
                <p className="text-gray-600">
                  Preencha o formulÃ¡rio abaixo e retornaremos seu contato o mais breve possÃ­vel.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos como podemos ajudar vocÃª e seu cÃ£o..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-3 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-xl hover:scale-[1.02]'
                    }`}
                    whileHover={!isSubmitting ? { y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Success/Error Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span>
                      {submitStatus === 'success' 
                        ? 'Mensagem enviada com sucesso! Retornaremos em breve.' 
                        : 'Erro ao enviar mensagem. Tente novamente.'}
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-5 h-5" />
            <span>Estamos ansiosos para conhecer seu melhor amigo!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}