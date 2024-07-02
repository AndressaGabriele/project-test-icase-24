# Teste iCasei: Front-End

## Descrição do Projeto

Este projeto consiste no desenvolvimento de uma aplicação HTML5 dividida em dois micro-frontends: `mf_drawer` e `mf_videos`. O objetivo é permitir que os usuários busquem vídeos no YouTube, marquem vídeos como favoritos e naveguem entre as seções de vídeos e favoritos. A aplicação foi desenvolvida seguindo as melhores práticas de arquitetura, com um design responsivo e navegação por rotas sem o uso de frameworks JavaScript como React, Vue ou Angular.

## Funcionalidades

- **mf_drawer**: Contém dois links de navegação: "VÍDEOS" e "FAVORITOS".
- **mf_videos**: Permite a busca de vídeos no YouTube, reprodução de vídeos e marcação de vídeos como favoritos.
- **Favoritos**: Exibe a lista de vídeos marcados como favoritos.

## Tecnologias Utilizadas

- HTML5
- CSS3/SASS
- JavaScript (Vanilla)
- Node.js para BFF (Backend for Frontend)
- Docker para containerização dos micro-frontends e BFF
- API de busca do YouTube
- Testes unitários

## Requisitos de Desenvolvimento

- Controle de sessão e BFF utilizando Node.js (ou outras linguagens como Go ou Ruby)
- Navegação por rotas
- Código tipado
- Design responsivo
- Micro-frontends separados
- Docker para containerização
- Testes unitários

## Instruções para Compilar, Testar e Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Docker instalado
- API key do YouTube (gerar [aqui](https://developers.google.com/youtube/v3/getting-started))

### Passos para Compilar e Rodar

1. **Clone o repositório**
```git clone https://github.com/seu-usuario/teste-icasei-frontend.git cd  teste-icasei-frontend```
2. **Configurar a API Key**
- Crie um arquivo .env na raiz do projeto e adicione sua API key do YouTube:
```YOUTUBE_API_KEY=your_api_key_here```
3. **Instalar dependências**
```npm install``
4. **Compilar os micro-frontends**

```npm run build:mf_drawer npm run build:mf_videos```

5. **Rodar os containers Docker**
```docker-compose up```

6. Acessar a aplicação:

- Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.

project-test-icasei-24/
│
├── mf_drawer/
│   ├── Dockerfile
│
├── mf_videos/
│   ├── Dockerfile
│
├── bff/
│   ├── node_modules/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .env
├── .gitignore
├── docker-compose.yml
├── README.md
└── ...

## Considerações Finais

- Este projeto foi desenvolvido com foco na organização, componentização, usabilidade e acessibilidade, seguindo os padrões e boas práticas de desenvolvimento. A aplicação está containerizada para facilitar a execução e o ambiente de desenvolvimento, garantindo a escalabilidade e manutenção do projeto.

