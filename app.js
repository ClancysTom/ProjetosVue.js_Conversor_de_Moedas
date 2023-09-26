new Vue({
    el: '#app',
    data: {
        fromAmount: 1,
        toAmount: 0,
        fromCurrency: 'USD',
        toCurrency: 'BTC',
        isFromCurrency: true,
        result: '',
    },
    methods: {
        convert: function () {
            // Simulação de uma pausa para a animação
            this.result = 'Calculando...';

            // Adiciona um pequeno atraso antes de realizar a conversão para a animação
            setTimeout(() => {
                // Simulação de uma solicitação para obter a taxa de câmbio em tempo real
                const exchangeRate = 0.0001; // Exemplo de taxa de câmbio fictícia

                if (this.isFromCurrency) {
                    this.toAmount = (this.fromAmount * exchangeRate).toFixed(2);
                    this.result = `${this.fromAmount} ${this.fromCurrency} = ${this.toAmount} ${this.toCurrency}`;
                } else {
                    this.fromAmount = (this.toAmount / exchangeRate).toFixed(2);
                    this.result = `${this.toAmount} ${this.toCurrency} = ${this.fromAmount} ${this.fromCurrency}`;
                }
            }, 1000); // Tempo simulado para a animação
        },
    },
    watch: {
        isFromCurrency: function () {
            // Troca a cor de fundo ativa entre as moedas e criptomoedas
            const currencyCards = document.querySelectorAll('.currency-card');
            currencyCards.forEach((card) => {
                card.classList.toggle('active');
            });
        },
    },
});
