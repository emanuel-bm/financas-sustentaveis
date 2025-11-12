import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, Clock, AlertCircle } from "lucide-react";

const Fundos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-4">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Gestão Profissional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fundos de Investimento
            </h1>
            <p className="text-xl text-muted-foreground">
              Investimento coletivo com gestão profissional de especialistas
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que são Fundos de Investimento?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Fundos de investimento são uma forma de aplicação coletiva, onde diversos investidores se unem para investir em uma carteira de ativos gerenciada por um gestor profissional. Cada investidor compra cotas do fundo e participa proporcionalmente dos resultados.
              </p>
              <p>
                É uma excelente alternativa para quem não tem tempo ou conhecimento para gerenciar os próprios investimentos, mas quer ter acesso a uma carteira diversificada e gestão especializada.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Vantagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gestão profissional especializada</li>
                  <li>• Diversificação automática</li>
                  <li>• Acesso a mercados sofisticados</li>
                  <li>• Aplicação mínima acessível</li>
                  <li>• Transparência e regulação da CVM</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  Desvantagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Taxa de administração</li>
                  <li>• Possível taxa de performance</li>
                  <li>• Come-cotas em alguns fundos</li>
                  <li>• Menos controle sobre os ativos</li>
                  <li>• Resultados podem variar</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-secondary" />
                Principais Tipos de Fundos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fundos de Renda Fixa</h3>
                <p className="text-muted-foreground">
                  Investem principalmente em títulos de renda fixa (CDBs, títulos públicos, etc.). São mais conservadores e indicados para quem busca segurança e previsibilidade.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fundos Multimercado</h3>
                <p className="text-muted-foreground">
                  Podem investir em diversos tipos de ativos (renda fixa, ações, câmbio, etc.). Oferecem flexibilidade para o gestor buscar as melhores oportunidades.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fundos de Ações</h3>
                <p className="text-muted-foreground">
                  Devem investir no mínimo 67% em ações. São mais voláteis, mas oferecem potencial de maior retorno no longo prazo.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fundos Imobiliários (FIIs)</h3>
                <p className="text-muted-foreground">
                  Investem em imóveis ou títulos do setor imobiliário. Distribuem rendimentos mensais isentos de IR para pessoas físicas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fundos Cambiais</h3>
                <p className="text-muted-foreground">
                  Investem no mínimo 80% em ativos relacionados à variação cambial. Úteis para proteção contra oscilações do dólar.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Custos e Taxas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Taxa de Administração</h3>
                <p className="text-muted-foreground">
                  Cobrada anualmente sobre o patrimônio investido. Varia de 0,5% a 3% ou mais, dependendo do tipo de fundo e estratégia.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Taxa de Performance</h3>
                <p className="text-muted-foreground">
                  Cobrada quando o fundo supera um índice de referência (benchmark). Geralmente é de 20% do que exceder a meta.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Come-Cotas</h3>
                <p className="text-muted-foreground">
                  Antecipação do IR em fundos de renda fixa e multimercado, cobrada semestralmente (maio e novembro).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Como Escolher um Fundo?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="space-y-2">
                <li>• Analise o histórico de rentabilidade (mínimo 12 meses)</li>
                <li>• Compare com fundos similares e com o benchmark</li>
                <li>• Avalie a consistência dos resultados</li>
                <li>• Verifique as taxas cobradas</li>
                <li>• Leia a lâmina do fundo (documento com informações essenciais)</li>
                <li>• Considere o tamanho do patrimônio do fundo</li>
                <li>• Avalie a reputação do gestor e da instituição</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/30 border-accent">
            <CardHeader>
              <CardTitle>Para quem é indicado?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Fundos de investimento são indicados para investidores de todos os perfis, desde conservadores até arrojados. A escolha do tipo de fundo deve estar alinhada com seu perfil de risco, objetivos financeiros e prazo de investimento. São especialmente úteis para quem busca diversificação e gestão profissional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Fundos;
