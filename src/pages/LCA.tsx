import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Leaf, TrendingUp, Clock, AlertCircle } from "lucide-react";

const LCA = () => {
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
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Renda Fixa - Isento de IR</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              LCA - Letra de Crédito do Agronegócio
            </h1>
            <p className="text-xl text-muted-foreground">
              Investimento sustentável que financia o agronegócio brasileiro
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que é LCA?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A LCA é um título de renda fixa emitido por instituições financeiras para financiar o setor do agronegócio. Similar à LCI, também é isenta de Imposto de Renda para pessoas físicas, tornando-a uma opção atrativa para investidores conservadores.
              </p>
              <p>
                Ao investir em LCA, você está contribuindo para o desenvolvimento do agronegócio brasileiro, um dos setores mais importantes da economia nacional, alinhando-se aos princípios de economia sustentável.
              </p>
              <p>
                Conta com proteção do FGC até R$ 250.000 por CPF e por instituição financeira.
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
                  <li>• Isenção total de Imposto de Renda</li>
                  <li>• Proteção do FGC até R$ 250.000</li>
                  <li>• Apoia o desenvolvimento sustentável</li>
                  <li>• Rentabilidade competitiva</li>
                  <li>• Baixo risco de crédito</li>
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
                  <li>• Prazo de carência (geralmente 90 dias)</li>
                  <li>• Aplicação mínima pode ser elevada</li>
                  <li>• Liquidez restrita</li>
                  <li>• IOF para resgates antes de 30 dias</li>
                  <li>• Risco de crédito da instituição emissora</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                LCA e Sustentabilidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                O agronegócio brasileiro é responsável por uma parte significativa do PIB nacional e das exportações do país. Ao investir em LCA, você:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Apoia o financiamento de atividades agrícolas sustentáveis</li>
                <li>• Contribui para a segurança alimentar do país</li>
                <li>• Participa do desenvolvimento de tecnologias agrícolas</li>
                <li>• Ajuda na geração de empregos no campo</li>
                <li>• Promove práticas agrícolas mais eficientes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Tipos de LCA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCA Prefixada</h3>
                <p className="text-muted-foreground">
                  Rentabilidade fixa conhecida no momento da aplicação. Indicada quando há expectativa de queda nos juros.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCA Pós-fixada</h3>
                <p className="text-muted-foreground">
                  Atrelada ao CDI, acompanha as variações da taxa básica de juros. Mais comum no mercado.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCA Híbrida</h3>
                <p className="text-muted-foreground">
                  Combina taxa fixa com IPCA, garantindo rentabilidade real acima da inflação.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/30 border-accent">
            <CardHeader>
              <CardTitle>Para quem é indicado?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                A LCA é ideal para investidores que buscam segurança, isenção de IR e querem contribuir para setores produtivos da economia. É especialmente vantajosa para quem pode deixar o dinheiro aplicado por prazos mais longos e valoriza investimentos com impacto social e econômico positivo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LCA;
