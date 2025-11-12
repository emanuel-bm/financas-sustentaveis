import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Coins, TrendingUp, Clock, AlertCircle } from "lucide-react";

const Cripto = () => {
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
              <Coins className="w-4 h-4" />
              <span className="text-sm font-medium">Ativos Digitais</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Criptomoedas
            </h1>
            <p className="text-xl text-muted-foreground">
              Ativos digitais descentralizados baseados em tecnologia blockchain
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que são Criptomoedas?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Criptomoedas são moedas digitais que utilizam criptografia para segurança e funcionam de forma descentralizada, sem controle de governos ou bancos centrais. Elas são baseadas na tecnologia blockchain, um registro público e distribuído de todas as transações.
              </p>
              <p>
                O Bitcoin, criado em 2009, foi a primeira criptomoeda e ainda é a mais conhecida. Desde então, milhares de outras criptomoedas foram criadas, cada uma com características e propósitos específicos.
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
                  <li>• Alto potencial de valorização</li>
                  <li>• Descentralização e independência</li>
                  <li>• Transações 24/7 globalmente</li>
                  <li>• Baixas taxas de transação</li>
                  <li>• Transparência via blockchain</li>
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
                  <li>• Extrema volatilidade</li>
                  <li>• Regulação ainda em desenvolvimento</li>
                  <li>• Risco de perda total</li>
                  <li>• Vulnerabilidade a hacks</li>
                  <li>• Complexidade técnica</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-secondary" />
                Principais Criptomoedas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Bitcoin (BTC)</h3>
                <p className="text-muted-foreground">
                  A primeira e mais valiosa criptomoeda. Considerada "ouro digital", é vista por muitos como reserva de valor e proteção contra inflação.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ethereum (ETH)</h3>
                <p className="text-muted-foreground">
                  Plataforma que permite contratos inteligentes e aplicativos descentralizados (DApps). Segunda maior criptomoeda em valor de mercado.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Stablecoins</h3>
                <p className="text-muted-foreground">
                  Criptomoedas atreladas a ativos estáveis (como dólar). Exemplos: USDT, USDC. Usadas para reduzir volatilidade e facilitar transações.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Altcoins</h3>
                <p className="text-muted-foreground">
                  Todas as outras criptomoedas além do Bitcoin. Incluem projetos com diversos propósitos: finanças descentralizadas (DeFi), NFTs, metaverso, etc.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Como Investir em Criptomoedas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Exchanges (Corretoras)</h3>
                <p className="text-muted-foreground">
                  Plataformas onde você compra, vende e armazena criptomoedas. Exemplos brasileiros: Mercado Bitcoin, Binance, Foxbit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Carteiras (Wallets)</h3>
                <p className="text-muted-foreground">
                  Para maior segurança, você pode transferir suas criptomoedas para carteiras próprias. Existem carteiras online (hot wallets) e físicas (cold wallets).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">ETFs de Criptomoedas</h3>
                <p className="text-muted-foreground">
                  Fundos negociados na B3 que investem em criptomoedas. Forma mais simples e regulada de exposição ao mercado cripto.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">⚠️ Alertas Importantes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="space-y-2">
                <li>• Invista apenas o que você pode perder totalmente</li>
                <li>• Cuidado com promessas de lucros garantidos (possíveis golpes)</li>
                <li>• Use autenticação de dois fatores nas exchanges</li>
                <li>• Guarde suas senhas e chaves privadas com segurança</li>
                <li>• A volatilidade pode ser extrema (variações de 10%+ por dia)</li>
                <li>• Estude antes de investir em projetos desconhecidos</li>
                <li>• Tenha cuidado com "moedas meme" e projetos sem fundamento</li>
                <li>• Tributação: ganhos acima de R$ 35.000/mês têm IR de 15%</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Tecnologia Blockchain</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                O blockchain é a tecnologia por trás das criptomoedas. É um livro-razão digital distribuído que registra todas as transações de forma permanente e transparente. As principais características são:
              </p>
              <ul className="space-y-1 ml-4 mt-2">
                <li>• Descentralização: não há autoridade central controlando</li>
                <li>• Imutabilidade: registros não podem ser alterados</li>
                <li>• Transparência: todas as transações são públicas</li>
                <li>• Segurança: protegido por criptografia avançada</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/30 border-accent">
            <CardHeader>
              <CardTitle>Para quem é indicado?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Criptomoedas são indicadas para investidores com perfil arrojado, que entendem e aceitam os riscos elevados, têm conhecimento sobre a tecnologia e não precisarão do dinheiro investido. Recomenda-se alocar apenas uma pequena porcentagem (5-10%) da carteira total em cripto. Não é indicado para iniciantes ou para quem não tolera alta volatilidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cripto;
