import heroImage from "@/assets/hero-investments.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Building2, Coins, Leaf, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const investments = [
    {
      id: "cdb",
      title: "CDB",
      description: "Certificado de Depósito Bancário - renda fixa segura",
      icon: Shield,
      path: "/cdb"
    },
    {
      id: "lci",
      title: "LCI",
      description: "Letra de Crédito Imobiliário - isento de IR",
      icon: Building2,
      path: "/lci"
    },
    {
      id: "lca",
      title: "LCA",
      description: "Letra de Crédito do Agronegócio - isento de IR",
      icon: Leaf,
      path: "/lca"
    },
    {
      id: "acoes",
      title: "Ações",
      description: "Participação em empresas na bolsa de valores",
      icon: TrendingUp,
      path: "/acoes"
    },
    {
      id: "fundos",
      title: "Fundos de Investimento",
      description: "Gestão profissional de carteiras diversificadas",
      icon: BarChart3,
      path: "/fundos"
    },
    {
      id: "cripto",
      title: "Criptomoedas",
      description: "Ativos digitais descentralizados",
      icon: Coins,
      path: "/cripto"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(22, 163, 74, 0.1), rgba(255, 255, 255, 0.95)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Finanças Sustentáveis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Aprenda o Básico de <span className="text-primary">Investimentos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Construa um futuro financeiro sólido e sustentável. Entenda como seus investimentos podem contribuir para uma economia mais responsável e próspera.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que aprender sobre investimentos?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A educação financeira é fundamental para construir uma economia sustentável. Compreender diferentes tipos de investimentos permite que você tome decisões informadas, faça seu dinheiro trabalhar para você e contribua para um desenvolvimento econômico responsável e inclusivo, alinhado aos Objetivos de Desenvolvimento Sustentável (ODS).
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Segurança Financeira</h3>
                <p className="text-sm text-muted-foreground">Proteja seu futuro com investimentos inteligentes</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Crescimento Patrimonial</h3>
                <p className="text-sm text-muted-foreground">Faça seu dinheiro render acima da inflação</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Economia Sustentável</h3>
                <p className="text-sm text-muted-foreground">Contribua para um futuro mais responsável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Fund Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Primeiro Passo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Reserva de Emergência
              </h2>
              <p className="text-lg text-muted-foreground">
                Antes de investir, é essencial construir sua rede de segurança financeira
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>O que é?</CardTitle>
                  <CardDescription className="text-base">
                    A reserva de emergência é um montante de dinheiro guardado para cobrir imprevistos como perda de emprego, problemas de saúde ou despesas urgentes. É sua proteção financeira para momentos difíceis.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Quanto guardar?</CardTitle>
                  <CardDescription className="text-base">
                    O ideal é ter entre 6 a 12 meses de suas despesas mensais guardados. Se você gasta R$ 3.000 por mês, sua reserva deve ser de R$ 18.000 a R$ 36.000.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Onde guardar?</CardTitle>
                  <CardDescription className="text-base">
                    Mantenha em investimentos de alta liquidez e baixo risco, como Tesouro Selic, CDB com liquidez diária ou poupança. O importante é ter acesso rápido ao dinheiro.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Por que é importante?</CardTitle>
                  <CardDescription className="text-base">
                    Evita que você se endivide em momentos de crise, reduz o estresse financeiro e permite que você invista com mais tranquilidade nos outros ativos.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <p className="text-foreground font-medium">
                💡 <strong>Dica importante:</strong> Só comece a investir em ativos mais arriscados depois de ter sua reserva de emergência completa. Ela é a base para uma vida financeira saudável e sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Investimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore diferentes opções de investimento e encontre a que melhor se adequa ao seu perfil e objetivos financeiros.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {investments.map((investment) => {
              const Icon = investment.icon;
              return (
                <Link key={investment.id} to={investment.path}>
                  <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{investment.title}</CardTitle>
                      <CardDescription className="text-base">{investment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-between group">
                        Saiba mais
                        <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comece Sua Jornada Financeira Hoje
            </h2>
            <p className="text-lg opacity-90">
              Dê o primeiro passo rumo à independência financeira e contribua para uma economia mais sustentável.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
