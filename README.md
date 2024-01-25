
# Gympass-APP

[![wakatime](https://wakatime.com/badge/user/0cca606b-99f7-4d43-8228-7f249bc17f26/project/018bd02e-2ae8-4935-8e61-abc93a2c8ad7.svg)](https://wakatime.com/badge/user/0cca606b-99f7-4d43-8228-7f249bc17f26/project/018bd02e-2ae8-4935-8e61-abc93a2c8ad7)

> **Gympass-APP** é um API para gerenciamento de academias, usuarios e check-ins.

## 🔎 Sobre

Gympass-APP é um aplicativo dedicado ao gerenciamento de academias, usuários e check-ins. Desenvolvido utilizando Docker, TypeScript, Vitest e PostgreSQL, o projeto oferece funcionalidades essenciais, incluindo a criação e autenticação de usuários via JWT, busca rápida de usuários, check-in em academias, criação de novas academias e busca de academias próximas ao usuário. 



## 🔧 Tecnologias

- <a target="_blank" href="https://www.prisma.io">Prisma</a>
- <a target="_blank" href="https://www.docker.com">Docker</a>
- <a target="_blank" href="https://fastify.dev">Fastify</a>
- <a target="_blank" href="https://www.typescriptlang.org">TypeScript</a>
- <a target="_blank" href="https://vitest.dev">Vitest</a>
- <a target="_blank" href="https://www.postgresql.org">PostgreSQL</a>
- <a target="_blank" href="https://github.com/dcodeIO/bcrypt.js/tree/master">bcryptjs</a>
- <a target="_blank" href="https://zod.dev">Zod</a>
- <a target="_blank" href="https://github.com/ladjs/supertest#readme">Supertest</a>
- <a target="_blank" href="https://tsup.egoist.dev">Tsup</a>
## ✨ Rodando localmente

- ### **Pré-requisitos**
  - É **necessário** ter o **Git** instalado e configurado em seu computador.
  - É **necessário** ter o **Docker** instalado e configurado em seu computador.
  - É **necessário** ter o **NodeJS** instalado e configurado em seu computador.


#### Clone o projeto

```bash
  git clone https://github.com/RafaelMotaAlvess/Gympass-APP.git
```

#### Entre no diretório do projeto

```bash
  cd meu-projeto
```

#### Instale as dependências

```bash
  npm install
```

#### Configure as variaveis de ambiente

Mude o nome do seu `.env.example` para `.env` e adicione as informações necessárias para cada variavel.

#### Execute o contêiner

```bash
  docker-compose up
```

#### Execute a Migration

```bash
  npx prisma migrate dev
```


#### Inicie o servidor

```bash
  npm run start
```




## 📃 Licença

O projeto está sob a licença [MIT license](./LICENSE).

---
Este aplicativo foi desenvolvido sob a mentoria da [Rocketseat](https://www.rocketseat.com.br).
