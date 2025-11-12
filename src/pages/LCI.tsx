import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2, TrendingUp, Clock, AlertCircle } from "lucide-react";

const LCI = () => {
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
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Renda Fixa - Isento de IR</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              LCI - Letra de Crédito Imobiliário
            </h1>
            <p className="text-xl text-muted-foreground">
              Investimento em crédito imobiliário sem cobrança de Imposto de Renda
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que é LCI?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A LCI é um título de renda fixa emitido por bancos para financiar o setor imobiliário. O grande diferencial é que a rentabilidade é isenta de Imposto de Renda para pessoas físicas, tornando-a mais atrativa em comparação com outros investimentos de renda fixa.
              </p>
              <p>
                Assim como o CDB, a LCI conta com a proteção do Fundo Garantidor de Créditos (FGC) para valores de até R$ 250.000 por CPF e por instituição financeira.
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
                  <li>• Isenção de Imposto de Renda</li>
                  <li>• Proteção do FGC até R$ 250.000</li>
                  <li>• Rentabilidade geralmente atrativa</li>
                  <li>• Contribui para o setor imobiliário</li>
                  <li>• Previsibilidade de retorno</li>
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
                  <li>• Prazo de carência mínimo (geralmente 90 dias)</li>
                  <li>• Aplicação mínima mais alta que CDB</li>
                  <li>• Menor liquidez</li>
                  <li>• IOF para resgates em menos de 30 dias</li>
                  <li>• Risco de crédito da instituição</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Tipos de LCI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCI Prefixada</h3>
                <p className="text-muted-foreground">
                  Taxa de rentabilidade definida no momento da aplicação. Ideal quando a expectativa é de queda na taxa de juros.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCI Pós-fixada</h3>
                <p className="text-muted-foreground">
                  Rentabilidade atrelada ao CDI. Oferece proteção em cenários de alta de juros.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCI Híbrida</h3>
                <p className="text-muted-foreground">
                  Combina taxa fixa com índice de inflação (IPCA), garantindo ganho real acima da inflação.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Comparação: LCI x CDB</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Para avaliar se a LCI é mais vantajosa que o CDB, é importante comparar a rentabilidade líquida. Por exemplo:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• CDB pagando 110% do CDI com IR ≈ LCI pagando 88% do CDI (prazo de 1 ano)</li>
                <li>• CDB pagando 120% do CDI com IR ≈ LCI pagando 96% do CDI (prazo de 1 ano)</li>
              </ul>
              <p className="pt-2">
                Quanto maior o prazo, mais vantajosa tende a ser a LCI devido à isenção de IR.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent/30 border-accent">
            <CardHeader>
              <CardTitle>Para quem é indicado?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                A LCI é ideal para investidores que não precisarão do dinheiro no curto prazo e buscam uma rentabilidade líquida superior a outros investimentos de renda fixa. É especialmente vantajosa para quem está em faixas mais altas de IR.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LCI;
