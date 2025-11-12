import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Clock, AlertCircle, Target } from "lucide-react";

const Acoes = () => {
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
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Renda Variável</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ações
            </h1>
            <p className="text-xl text-muted-foreground">
              Torne-se sócio das maiores empresas da bolsa de valores
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que são Ações?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Ações são pequenas partes (frações) do capital social de uma empresa. Ao comprar ações, você se torna sócio da companhia e passa a ter direito a uma parte dos lucros (dividendos) e a participar das decisões em assembleias.
              </p>
              <p>
                No Brasil, as ações são negociadas principalmente na B3 (Brasil, Bolsa, Balcão), a bolsa de valores oficial do país. É o tipo de investimento de renda variável mais popular.
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
                  <li>• Potencial de alta rentabilidade</li>
                  <li>• Dividendos isentos de IR</li>
                  <li>• Liquidez alta (fácil de vender)</li>
                  <li>• Proteção contra inflação no longo prazo</li>
                  <li>• Possibilidade de ganhos com valorização</li>
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
                  <li>• Alta volatilidade (oscilação de preços)</li>
                  <li>• Risco de perdas significativas</li>
                  <li>• Requer estudo e acompanhamento</li>
                  <li>• IR de 15% sobre ganhos de capital</li>
                  <li>• Resultado incerto</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Tipos de Ações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ações Ordinárias (ON)</h3>
                <p className="text-muted-foreground">
                  Terminam com o número 3 (ex: PETR3). Dão direito a voto nas assembleias da empresa. O acionista participa das decisões importantes da companhia.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ações Preferenciais (PN)</h3>
                <p className="text-muted-foreground">
                  Terminam com o número 4 (ex: PETR4). Não dão direito a voto, mas têm preferência no recebimento de dividendos e no reembolso de capital em caso de liquidação.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Units</h3>
                <p className="text-muted-foreground">
                  Terminam com o número 11 (ex: SANB11). São pacotes que combinam diferentes tipos de ações da mesma empresa em uma única negociação.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Formas de Ganhar com Ações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Valorização do Preço</h3>
                <p className="text-muted-foreground">
                  Comprar ações a um preço e vender por um preço maior. É a forma mais conhecida de lucrar na bolsa.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dividendos</h3>
                <p className="text-muted-foreground">
                  Distribuição de parte dos lucros da empresa aos acionistas. São isentos de Imposto de Renda para pessoa física.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Juros sobre Capital Próprio (JCP)</h3>
                <p className="text-muted-foreground">
                  Similar aos dividendos, mas com IR de 15% retido na fonte. É uma forma alternativa de distribuição de lucros.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">⚠️ Cuidados Importantes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="space-y-2">
                <li>• Nunca invista dinheiro que você precisa no curto prazo</li>
                <li>• Diversifique seus investimentos (não coloque tudo em uma ação)</li>
                <li>• Estude antes de investir - conheça a empresa</li>
                <li>• Tenha uma estratégia e mantenha a disciplina</li>
                <li>• Não se deixe levar pela emoção nas oscilações</li>
                <li>• Rentabilidade passada não garante resultados futuros</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/30 border-accent">
            <CardHeader>
              <CardTitle>Para quem é indicado?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Ações são indicadas para investidores com perfil moderado a arrojado, que buscam rentabilidade superior à renda fixa no longo prazo e estão dispostos a aceitar maior volatilidade. É fundamental ter reserva de emergência constituída e horizonte de investimento de pelo menos 5 anos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Acoes;
