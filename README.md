# desafio-LuanMissel-2025

# Desafio: Abrigo de Animais

## Descrição do Projeto

Este projeto é a minha solução para o desafio "Abrigo de Animais", onde a missão é desenvolver um sistema para encontrar as pessoas certas para adotar animais de um abrigo. A solução foi desenvolvida em JavaScript e validada por um conjunto de testes que garantem o cumprimento de todas as regras do desafio.

---

## Lógica da Solução

A minha abordagem para a resolução do problema se concentra em uma lógica clara e modular, seguindo as regras de negócio fornecidas.

1.  **Estrutura de Dados:**
    A solução começa por organizar os dados de entrada. As strings com os brinquedos e a ordem dos animais são convertidas em arrays, facilitando a manipulação e a aplicação das regras do desafio. As informações sobre os animais (tipo e brinquedos favoritos) são armazenadas em um objeto centralizado para acesso rápido.

2.  **Verificação de Brinquedos (Regras 1 e 2):**
    A parte mais complexa do desafio, a verificação da ordem dos brinquedos, é resolvida por uma função dedicada (`verificaBrinquedos`). Esta função percorre a lista de brinquedos da pessoa e do animal simultaneamente, garantindo que os brinquedos favoritos do animal sejam encontrados na sequência correta, mesmo que haja outros brinquedos intercalados.

3.  **Regras de Adoção (Regras 3, 4, 5 e 6):**
    A lógica principal é aplicada em um loop que processa cada animal na ordem determinada. Para cada animal, o código:
    -   Verifica se a pessoa já atingiu o limite de três animais.
    -   Aplica a regra do jabuti `Loco`, que não é adotado.
    -   Usa a função `verificaBrinquedos` para determinar se a pessoa tem os brinquedos na ordem certa.
    -   Decide a adoção com base nas regras: se ambos estão aptos, o animal fica no abrigo; caso contrário, ele é adotado pela pessoa apta.

4.  **Processamento da Saída:**
    Ao final do processo, a lista de resultados é ordenada alfabeticamente, conforme exigido, e retornada no formato esperado pelo desafio.

---

## Como Rodar o Projeto

Siga estes passos para rodar a solução na sua máquina e validar os resultados:

### Requisitos

-   [Node.js](https://nodejs.org/en/) instalado.

### Execução

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/LuanMissel/desafio-LuanMissel-2025.git](https://github.com/LuanMissel/desafio-LuanMissel-2025.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd desafio-LuanMissel-2025
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute os testes para validar a solução:
    ```bash
    npm test
    ```
    (A saída deve indicar que todos os testes foram aprovados, garantindo a robustez da solução).

---

## Validação da Entrega

Para garantir que a entrega está completa, verifique os seguintes pontos:
-   O repositório é **público**.
-   O nome do repositório é `desafio-LuanMissel-2025`.
-   A branch principal é a `main`.
-   A estrutura de pastas e arquivos está conforme o exemplo fornecido no desafio original.