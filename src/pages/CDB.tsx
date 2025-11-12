import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, TrendingUp, Clock, AlertCircle } from "lucide-react";

const CDB = () => {
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Renda Fixa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              CDB - Certificado de Depósito Bancário
            </h1>
            <p className="text-xl text-muted-foreground">
              Um dos investimentos de renda fixa mais populares do Brasil
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que é CDB?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                O CDB é um título de renda fixa emitido por bancos para captar recursos. Ao investir em um CDB, você está emprestando dinheiro ao banco em troca de uma remuneração, que pode ser prefixada, pós-fixada ou híbrida.
              </p>
              <p>
                É considerado um investimento seguro, pois conta com a proteção do Fundo Garantidor de Créditos (FGC) para valores de até R$ 250.000 por CPF e por instituição financeira.
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
                  <li>• Proteção do FGC até R$ 250.000</li>
                  <li>• Rentabilidade previsível</li>
                  <li>• Diversas opções de prazo e liquidez</li>
                  <li>• Aplicação mínima acessível</li>
                  <li>• Mais rentável que a poupança</li>
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
                  <li>• Incidência de Imposto de Renda</li>
                  <li>• IOF para resgates em menos de 30 dias</li>
                  <li>• Rentabilidade limitada comparada a renda variável</li>
                  <li>• Pode ter carência para resgate</li>
                  <li>• Risco de crédito da instituição emissora</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Tipos de CDB
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">CDB Prefixado</h3>
                <p className="text-muted-foreground">
                  Você sabe exatamente quanto vai receber no vencimento. Taxa fixa definida no momento da aplicação (ex: 12% ao ano).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">CDB Pós-fixado</h3>
                <p className="text-muted-foreground">
                  Rentabilidade atrelada a um indicador, geralmente o CDI (ex: 100% do CDI ou CDI + 1%).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">CDB Híbrido</h3>
                <p className="text-muted-foreground">
                  Combina taxa fixa com indicador de inflação (ex: IPCA + 5% ao ano), protegendo contra a inflação.
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
                O CDB é ideal para investidores que buscam segurança e previsibilidade. É uma excelente opção para compor a reserva de emergência, objetivos de curto e médio prazo, ou para a parcela conservadora da sua carteira de investimentos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CDB;
