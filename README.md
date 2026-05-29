# ONG+ | Conectando Empatia a Impacto Real

![ONG+ Banner](frontend/src/assets/about_us.png)

> **Uma plataforma curada que facilita doações para ONGs verificadas, garantindo transparência radical e conexão verdadeira com causas que importam.**

---

## 📖 Sobre o Projeto

O **ONG+** nasceu da necessidade de aproximar doadores de organizações não governamentais (ONGs) idôneas, eliminando a desconfiança através de um processo rigoroso de verificação e transparência financeira. A plataforma permite que usuários explorem causas, acompanhem o impacto real de suas doações e colaborem para um sistema de suporte e financiamento às ONGS.

---

## 🏛️ Arquitetura do Projeto (Monorepo)

O repositório do **ONG+** adota o padrão **Monorepo**, unificando o desenvolvimento do Backend e do Frontend em um único local para garantir sincronia de versão, facilitar a manutenção de contratos de API e centralizar a documentação.

A arquitetura de execução é baseada no modelo **Cliente-Servidor Desacoplado**:

```
ongplus/
│
├── backend/      # API REST (Django 6.0) - Arquitetura de Monolito Modular
│   ├── apps/     # Módulos de domínio (IA, Autenticação, Financeiro, Transparência, Verificação)
│   └── ong_plus/ # Configurações centrais do Django
│
├── frontend/     # Single Page Application (React + Vite)
│
└── docs/         # Guias e documentação de arquitetura
```

### 🔹 Backend (Monolito Modular em Django)
Para evitar a complexidade prematura de microsserviços e manter um código limpo e altamente coeso, o backend adota a arquitetura de **Monolito Modular**. Toda a lógica está organizada em aplicativos (`apps/`) de domínio específico dentro do mesmo projeto e banco de dados SQLite:
- `ai_assistant`: Integração com LLMs/IA para tirar dúvidas dos doadores.
- `authentication`: Gestão de usuários, perfis de ONGs e doadores, e controle de acesso.
- `financial`: Processamento de doações, histórico de transações e metas de arrecadação.
- `transparency`: Publicação de relatórios de prestação de contas e métricas de impacto.
- `verification`: Fluxo de auditoria e selo de verificação de legitimidade das ONGs.

### 🔹 Frontend (React + Vite)
O frontend é uma SPA moderna construída com **React** e empacotada via **Vite** para máxima performance. A navegação atual da aplicação é gerenciada de forma leve e direta através de estado interno (`useState`), permitindo transições instantâneas entre as telas de exploração, transparência, cadastro e sobre, com estrutura modular pronta para expansão futura.

---

## 🚀 Como Executar Localmente

Para rodar o projeto em sua máquina local, preparamos um guia passo a passo detalhado cobrindo a configuração do ambiente Python/Django e do ambiente Node.js/React.

👉 **[Consulte o Guia de Execução Local (How to Run)](docs/how_to_run.md)**

---

## 📚 Documentação Adicional

- **[Guia de Boas Práticas e Comandos Git](docs/gitguide.md)**: Manual prático para gestão de branches e fluxo de trabalho no monorepo.

---

## 🤝 Contribuindo

1. Crie uma branch a partir de `develop` (`git switch -c feature/sua-feature`).
2. Faça os commits com mensagens claras e descritivas.
3. Abra um Pull Request (PR) descrevendo as alterações tratadas.
