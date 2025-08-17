import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { BarChart3, TrendingUp, Users, CheckCircle, Phone, Mail, MessageCircle, Star, Target, Zap, Award } from 'lucide-react'
import dashboardVarejo1 from './assets/dashboard-varejo-1.png'
import dashboardVarejo2 from './assets/dashboard-varejo-2.png'
import dashboardComercial from './assets/dashboard-comercial.jpg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    desafio: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Dados do formulário:', formData)
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Power BI Expert</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#processo" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#exemplos" className="text-gray-700 hover:text-blue-600 transition-colors">Exemplos</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Especialista em Power BI para Comércio
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Suas Decisões de Negócio, 
                <span className="text-blue-600"> Baseadas em Dados.</span>
                <br />
                <span className="text-gray-600">Não em Achismos.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ajudamos comerciantes e prestadores de serviço no RS a transformar seus dados de vendas, 
                estoque e finanças em dashboards inteligentes que geram resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agende um Diagnóstico Gratuito
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Ver Nossos Serviços
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">180+</div>
                  <div className="text-sm text-gray-600">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={dashboardVarejo1} 
                  alt="Dashboard de Vendas Power BI" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Dashboard Real
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Você se identifica com algum destes desafios?
            </h2>
            <p className="text-xl text-gray-600">
              Problemas comuns que impedem o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8 text-red-500" />,
                title: "Produtos Mais Lucrativos",
                description: "Dificuldade em saber quais produtos/serviços dão mais lucro?"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-red-500" />,
                title: "Fluxo de Caixa",
                description: "Insegurança sobre o fluxo de caixa e a saúde financeira do negócio?"
              },
              {
                icon: <Users className="h-8 w-8 text-red-500" />,
                title: "Comportamento do Cliente",
                description: "Perda de vendas por não entender o comportamento do seu cliente?"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-red-500" />,
                title: "Planilhas Complexas",
                description: "Planilhas complexas que consomem seu tempo e não trazem clareza?"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-red-50 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Inteligência de Dados para o Comércio Gaúcho
            </h2>
            <p className="text-xl text-gray-600">
              Soluções flexíveis e personalizadas para transformar seus dados em resultados
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Treinamento In Company */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-800">Mais Popular</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Treinamento In Company</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Capacite sua equipe com um treinamento de Power BI adaptado à realidade da sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Soluções Customizadas:</strong> Conteúdo e formato flexíveis para atender às necessidades específicas do seu negócio
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Impacto Direto:</strong> Foco na aplicação prática para que sua equipe utilize o Power BI no dia a dia
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Resultados Comprovados:</strong> Dashboards que otimizam a gestão e impulsionam o crescimento
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento Personalizado
                </Button>
              </CardContent>
            </Card>

            {/* Treinamento Individual */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-100 text-orange-800">Premium</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">Treinamento Individual Premium</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Acompanhamento exclusivo e intensivo para profissionais que buscam domínio completo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Acompanhamento Exclusivo:</strong> Atenção total e personalizada para suas dúvidas e objetivos
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Aprendizado Acelerado:</strong> Metodologia focada em resultados rápidos e efetivos
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Dashboards de Alto Impacto:</strong> Projetos reais e técnicas avançadas de análise
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Agendar Sessão Individual
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600">
              Um processo estruturado e transparente para garantir o sucesso do seu projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico Gratuito",
                description: "Conversa de 30 minutos para entender seus desafios e fontes de dados disponíveis.",
                color: "bg-blue-500"
              },
              {
                step: "2", 
                title: "Proposta Sob Medida",
                description: "Desenho de uma solução (dashboard + treinamento) focada nos seus objetivos específicos.",
                color: "bg-green-500"
              },
              {
                step: "3",
                title: "Implementação e Treinamento", 
                description: "Construção do dashboard e realização dos encontros práticos de capacitação.",
                color: "bg-orange-500"
              },
              {
                step: "4",
                title: "Suporte Contínuo",
                description: "Acompanhamento para garantir que você extraia o máximo valor dos seus dashboards.",
                color: "bg-purple-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="exemplos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exemplos de Dashboards Criados
            </h2>
            <p className="text-xl text-gray-600">
              Veja alguns exemplos de dashboards que já desenvolvemos para diferentes segmentos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: dashboardVarejo1,
                title: "Dashboard Financeiro",
                description: "Controle de receitas, despesas, fluxo de caixa e indicadores financeiros em tempo real.",
                tags: ["Financeiro", "KPIs"]
              },
              {
                image: dashboardVarejo2,
                title: "Dashboard de Vendas",
                description: "Análise de performance de vendas, metas, comissões e ranking de vendedores.",
                tags: ["Vendas", "Ranking"]
              },
              {
                image: dashboardComercial,
                title: "Dashboard Operacional",
                description: "Controle de estoque, produção, logística e indicadores operacionais críticos.",
                tags: ["Operações", "Estoque"]
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-white/90 text-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pronto Para Transformar Seus Dados?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Agende seu diagnóstico gratuito e descubra como dashboards Power BI podem revolucionar sua gestão
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-800 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-blue-200">(11) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-800 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-200">contato@powerbiespecialista.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-800/50 rounded-lg">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Garantias
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Diagnóstico 100% gratuito e sem compromisso</li>
                  <li>✓ Satisfação garantida ou dinheiro de volta</li>
                  <li>✓ Suporte técnico conforme contratado</li>
                  <li>✓ Entrega no prazo acordado</li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl">Diagnóstico Gratuito</CardTitle>
                <CardDescription>
                  Preencha o formulário e receba contato em até 2 horas úteis para agendarmos seu diagnóstico gratuito.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="whatsapp"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="desafio"
                      placeholder="Descreva brevemente seu principal desafio com dados..."
                      value={formData.desafio}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Agendar Diagnóstico Grátis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Power BI Expert</span>
              </div>
              <p className="text-gray-400">
                Especialista em transformar dados em decisões inteligentes através de dashboards Power BI profissionais.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Treinamentos In Company</li>
                <li>Treinamento Individual</li>
                <li>Consultoria em Power BI</li>
                <li>Diagnóstico Gratuito</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 99999-9999</li>
                <li>contato@powerbiespecialista.com</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Power BI Expert - Treinamentos. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido para transformar dados em decisões inteligentes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

