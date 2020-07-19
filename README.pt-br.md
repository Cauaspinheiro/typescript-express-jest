# typescript-express-node

Um boilerplate para a criação de APIs no Node incluindo TypesScript, Express, Jest e ESLint.

## Features

- Suporte para diferentes ambientes de maneira fácil
- Configuração do Typescript, ESLint e Jest juntas
- Scripts para debug de testes e cobertura de código
- Entidades tipadas
- Fácil manutenção
- POO
- Configuração de arquivo .env
- Facilidade na criação de testes
- Supertest para testar as rotas da API
- Exemplos de uso
- Lint staged para lint automático de arquivos para commits
- Husky para execução de scripts usando os git-hooks
- Commitizen para commits mais rápidos usando CLI

## Usando

### Git Template

Clique em "use this template" (botão verde) na página inicial do repositório

![template-button](https://imgur.com/dq0tSwL.png)

Crie um repositório no github

Copie a url do repositório

![clone-button](https://i.imgur.com/gzyM1oO.png)

Rode o seguinte comando na sua máquina local: `git clone <url-copiada>`

### Upgrade das dependências

Após ter clonado o repositório na sua máquina, rode o seguinte comando: `npm update` ou se você estiver usando yarn: `yarn upgrade`

Isso vai servir para usar as dependências mais atuais

#### Pronto! Você já pode começar a criar seu projeto com base no boilerplate

## Guia de instalação

### git-clone

Clone o repositório usando o comando: `git clone https://github.com/Cauaspinheiro/typescript-express-jest.git`

### Node & NPM / Yarn

Certifique de ter o node e um gerenciador de pacotes instalados

**Node**: <https://nodejs.org/en/>

Caso queria usar Yarn ao invés de NPM: <https://yarnpkg.com/>

Após isso, instale as dependências do projeto localmente usando `yarn install` ou `npm install`

### .env

Usando o arquivo .env.example, crie um arquivo .env e coloque suas variáveis de ambiente.

#### Pronto! Agora você já pode usar o projeto em sua máquina local

## Scripts

- Commitar de forma mais rápida usando CLI: `ct`
- Iniciar API em modo de produção usando a build do typescript: `start`
- Iniciar a API em modo de desenvolvimento com hot-reload: `dev`
- Rodar os testes automatizados: `test`
- Rodar os testes de cobertura de código do jest: `test:coverage`
- Rodar os testes em modo debug: `test:debug`

## Coisas para adicionar

### Banco de dados

Use banco de dados diferentes para cada ambiente

Faça seeds do seu banco de dados e use esses dados nos testes

### Configurações

Adicione todas as configurações de funcionalidades de código (ex: Multer, para controle de imagens) em uma pasta config dentro de src

## Licença

![GitHub](https://img.shields.io/github/license/cauaspinheiro/typescript-express-jest?style=for-the-badge)

Esse projeto é licenciado sobre os termos de uso da licença MIT

> Você pode ler toda a licença do projeto [aqui](https://github.com/Cauaspinheiro/typescript-express-jest/blob/master/LICENSE)
