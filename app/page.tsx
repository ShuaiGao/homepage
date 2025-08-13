"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {
    Code2,
    Database,
    Smartphone,
    Globe,
    BarChart3,
    Gamepad2,
    Brain,
    Settings,
    Users,
    Award,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Zap,
    Shield,
    Rocket,
    Server,
    Cloud,
    Cpu,
} from "lucide-react"

export default function HomePage() {
    const [showQRCode, setShowQRCode] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    const services = [
        {
            icon: <Smartphone className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "小程序开发",
            description: "微信小程序、支付宝小程序等多平台小程序开发解决方案",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <Globe className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "Web开发",
            description: "现代化Web应用开发，包括前端、后端及全栈解决方案",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: <BarChart3 className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "数据报表构建",
            description: "专业的数据可视化和商业智能报表系统开发",
            color: "from-orange-500 to-amber-500",
        },
        {
            icon: <Gamepad2 className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "小游戏开发",
            description: "H5小游戏、微信小游戏等轻量级游戏开发服务",
            color: "from-pink-500 to-rose-500",
        },
        {
            icon: <Database className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "大数据维护",
            description: "大数据平台搭建、数据处理和系统运维服务",
            color: "from-indigo-500 to-purple-500",
        },
        {
            icon: <Brain className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>,
            title: "大模型部署与应用",
            description: "AI大模型部署、优化及企业级应用集成服务",
            color: "from-violet-500 to-purple-500",
        },
    ]

    const features = [
        {
            icon: <Users className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>,
            title: "资深团队",
            description: "十余年行业经验",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <Award className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>,
            title: "专业服务",
            description: "全方位技术解决方案",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: <Zap className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>,
            title: "高效交付",
            description: "快速响应客户需求",
            color: "from-orange-500 to-amber-500",
        },
        {
            icon: <Shield className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>,
            title: "质量保障",
            description: "严格的质量控制体系",
            color: "from-purple-500 to-pink-500",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Header */}
            <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 lg:px-6 h-14 md:h-16 lg:h-18 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Code2 className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-cyan-400"/>
                        <span
                            className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              游码科技
            </span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-sm lg:text-base text-white/80 hover:text-white transition-colors"
                        >
                            服务项目
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-sm lg:text-base text-white/80 hover:text-white transition-colors"
                        >
                            关于我们
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-sm lg:text-base text-white/80 hover:text-white transition-colors"
                        >
                            联系我们
                        </button>
                    </nav>
                    <Button
                        onClick={() => setShowQRCode(true)}
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-sm md:text-base px-3 md:px-4 lg:px-6"
                    >
                        立即咨询
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/futuristic-cyber-city.png"
                        alt="Futuristic Technology Background"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-blue-900/50 to-purple-900/70"/>
                </div>
                <div className="container mx-auto px-4 lg:px-6 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge
                            className="mb-4 md:mb-6 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 text-xs md:text-sm">
                            专业IT服务提供商
                        </Badge>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            游码科技
                            <span
                                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                引领数字化未来
              </span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed px-4 md:px-0">
                            专注于技术咨询、运维服务和软件开发，为企业提供全方位的数字化解决方案。
                            我们的资深团队拥有十余年丰富经验，致力于为客户创造卓越价值。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("services")}
                                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-base md:text-lg px-6 md:px-8"
                            >
                                了解服务 <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5"/>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection("contact")}
                                className="border-white/30 text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 bg-transparent"
                            >
                                联系我们
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-20 bg-black/20">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <Badge
                            className="mb-3 md:mb-4 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 text-xs md:text-sm">
                            核心服务
                        </Badge>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">专业技术服务</h2>
                        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
                            从技术咨询到项目交付，我们提供全生命周期的专业服务
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={`/service-bg-${index + 1}.png`}
                                        alt={`${service.title} background`}
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 ease-out"
                                    />
                                </div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                                />
                                <CardHeader className="relative z-10 pb-3 md:pb-4">
                                    <div
                                        className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text group-hover:scale-110 transition-transform duration-300 mb-3 md:mb-4`}
                                    >
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-white text-lg md:text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10 pt-0">
                                    <CardDescription className="text-white/70 text-sm md:text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Showcase Section */}
            <section className="py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/abstract-tech-network.png"
                        alt="Technology Network"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>
                <div className="container mx-auto px-4 lg:px-6 relative">
                    <div className="text-center mb-12 md:mb-16">
                        <Badge
                            className="mb-3 md:mb-4 bg-green-600/20 text-green-300 border-green-500/30 text-xs md:text-sm">
                            技术实力
                        </Badge>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">前沿技术栈</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        <div className="text-center group">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-blue-500/30">
                                <Cloud className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white"/>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-2">云计算</h3>
                            <p className="text-white/60 text-sm md:text-base">AWS/阿里云/腾讯云</p>
                        </div>
                        <div className="text-center group">
                            <div
                                className="bg-gradient-to-r from-green-500 to-emerald-500 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-green-500/30">
                                <Server className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white"/>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-2">微服务</h3>
                            <p className="text-white/60 text-sm md:text-base">Docker/K8s</p>
                        </div>
                        <div className="text-center group">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-purple-500/30">
                                <Brain className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white"/>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-2">人工智能</h3>
                            <p className="text-white/60 text-sm md:text-base">GPT/LLaMA</p>
                        </div>
                        <div className="text-center group">
                            <div
                                className="bg-gradient-to-r from-orange-500 to-amber-500 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-orange-500/30">
                                <Cpu className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white"/>
                            </div>
                            <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-2">高性能计算</h3>
                            <p className="text-white/60 text-sm md:text-base">GPU集群/分布式</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-black/20">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div
                                    className={`bg-gradient-to-r ${feature.color} w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl`}
                                >
                                    <div className="text-white">{feature.icon}</div>
                                </div>
                                <h3 className="text-white font-semibold mb-2 text-base md:text-lg lg:text-xl">{feature.title}</h3>
                                <p className="text-white/70 text-sm md:text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/modern-dev-office.png" alt="Development Team"
                         className="w-full h-full object-cover opacity-15"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"/>
                </div>
                <div className="container mx-auto px-4 lg:px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <Badge
                                className="mb-3 md:mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs md:text-sm">
                                关于我们
                            </Badge>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                                资深技术团队
                                <span className="block text-cyan-400">十余年行业经验</span>
                            </h2>
                            <p className="text-white/80 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                                游码科技汇聚了一批业内资深程序员，团队成员均拥有十余年的丰富开发经验。
                                我们专注于为企业提供高质量的技术咨询、系统运维和软件开发服务。
                            </p>
                            <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                                从小程序开发到大数据维护，从Web应用到AI大模型部署， 我们始终站在技术前沿，为客户提供最优质的解决方案。
                            </p>
                            <div
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 lg:gap-10">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400">10+</div>
                                    <div className="text-white/70 text-sm md:text-base">年经验</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">100+</div>
                                    <div className="text-white/70 text-sm md:text-base">项目交付</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400">50+
                                    </div>
                                    <div className="text-white/70 text-sm md:text-base">合作客户</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-4 md:p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                                    <div
                                        className="text-center p-3 md:p-4 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors">
                                        <Settings
                                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform"/>
                                        <div className="text-white font-semibold text-sm md:text-base">技术咨询</div>
                                    </div>
                                    <div
                                        className="text-center p-3 md:p-4 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors">
                                        <Rocket
                                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform"/>
                                        <div className="text-white font-semibold text-sm md:text-base">项目开发</div>
                                    </div>
                                    <div
                                        className="text-center p-3 md:p-4 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors">
                                        <Database
                                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform"/>
                                        <div className="text-white font-semibold text-sm md:text-base">运维服务</div>
                                    </div>
                                    <div
                                        className="text-center p-3 md:p-4 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors">
                                        <Brain
                                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform"/>
                                        <div className="text-white font-semibold text-sm md:text-base">AI应用</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-20 bg-black/20">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <Badge
                            className="mb-3 md:mb-4 bg-green-600/20 text-green-300 border-green-500/30 text-xs md:text-sm">
                            联系我们
                        </Badge>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">开启合作之旅</h2>
                        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
                            让我们一起探讨您的项目需求，为您提供专业的技术解决方案
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">联系方式</h3>
                                        <div className="space-y-3 md:space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Phone className="h-6 w-6 md:h-7 md:w-7 text-cyan-400"/>
                                                <span className="text-white text-sm md:text-base">17666060650</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Mail className="h-6 w-6 md:h-7 md:w-7 text-cyan-400"/>
                                                <span
                                                    className="text-white text-sm md:text-base">boringmanman@qq.com</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <MapPin className="h-6 w-6 md:h-7 md:w-7 text-cyan-400"/>
                                                <span className="text-white text-sm md:text-base">北京市朝阳区</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">服务优势</h3>
                                        <ul className="space-y-3 text-white/80">
                                            <li className="flex items-center space-x-2">
                                                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-cyan-400"/>
                                                <span className="text-sm md:text-base">专业技术团队</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-blue-400"/>
                                                <span className="text-sm md:text-base">丰富项目经验</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-green-400"/>
                                                <span className="text-sm md:text-base">快速响应服务</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-purple-400"/>
                                                <span className="text-sm md:text-base">质量保障承诺</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center">
                                    <Button
                                        size="lg"
                                        onClick={() => setShowQRCode(true)}
                                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-base md:text-lg px-6 md:px-8"
                                    >
                                        立即联系我们
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/40 border-t border-white/10 py-8 md:py-12">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                <Code2 className="h-5 w-5 md:h-6 md:w-6 text-cyan-400"/>
                                <span className="text-lg md:text-xl font-bold text-white">游码科技</span>
                            </div>
                            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">
                                专业的IT服务提供商，致力于为企业提供全方位的数字化解决方案。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">核心服务</h4>
                            <ul className="space-y-2 text-white/70 text-sm md:text-base">
                                <li>技术咨询</li>
                                <li>软件开发</li>
                                <li>系统运维</li>
                                <li>AI应用</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">联系信息</h4>
                            <div className="space-y-2 text-white/70 text-sm md:text-base">
                                <div>电话：17666060650</div>
                                <div>邮箱：boringmanman@qq.com</div>
                                <div>地址：北京市朝阳区</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-white/70 text-xs md:text-sm">© 2024 游码科技. 保留所有权利.</div>
                        <div className="text-white/70 text-xs md:text-sm mt-4 md:mt-0">
                            <a
                                href="https://beian.miit.gov.cn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                京ICP备2022034942号-1
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* 微信二维码弹窗 */}
            <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
                <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-white/20">
                    <DialogHeader>
                        <DialogTitle className="text-center text-gray-800">扫码添加微信</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center p-6">
                        <img src="/wechat-qr.png" alt="微信二维码" className="max-w-full h-auto rounded-lg shadow-lg"/>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
