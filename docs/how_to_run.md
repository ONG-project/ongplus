# Guia de Execução Local (How to Run) - ONG+

Este guia detalha o processo passo a passo para configurar e executar o ambiente de desenvolvimento local do projeto **ONG+**, que é composto por um backend em Python (Django) e um frontend em JavaScript (React + Vite).

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina (ambiente Windows/Linux/macOS):

- **Python**: Versão 3.10 ou superior.
- **Node.js**: Versão 18 ou superior (recomendado v20+ LTS).
- **Git**: Para clonamento e gestão do repositório.

---

## 🚀 Passo 1: Clonando o Repositório

Abra o seu terminal (PowerShell, Git Bash ou Prompt de Comando) e clone o repositório para a sua máquina local:

```bash
git clone <url-do-repositorio>
cd ongplus
```

---

## 🐍 Passo 2: Configurando e Executando o Backend (Django)

O backend é construído em Django 6.0 e segue a arquitetura de Monolito Modular.

### 1. Abra o terminal na pasta raiz do projeto e acesse o diretório do backend:
```bash
cd backend
```

### 2. Crie o ambiente virtual (Virtual Environment):
```bash
python -m venv .venv
```

### 3. Ative o ambiente virtual:
- **No Windows (PowerShell):**
  ```powershell
  .\.venv\Scripts\Activate.ps1
  ```
- **No Windows (Prompt de Comando - CMD):**
  ```cmd
  .\.venv\Scripts\activate.bat
  ```
- **No Linux / macOS:**
  ```bash
  source .venv/bin/activate
  ```

### 4. Instale as dependências:
```bash
pip install -r requirements.txt
```

---

### 5. Execute as migrações do banco de dados:
Com o ambiente virtual ativado, crie as tabelas do banco de dados SQLite:
```bash
python manage.py migrate
```

### 6. Inicie o servidor de desenvolvimento do Django:
```bash
python manage.py runserver
```
O backend estará disponível em: `http://localhost:8000/`

---

## ⚛️ Passo 3: Configurando e Executando o Frontend (React + Vite)

O frontend é uma Single Page Application construída com React 19, Vite e Tailwind CSS 4.

### 1. Abra um **novo terminal** (mantendo o terminal do backend rodando) e acesse o diretório interno do frontend a partir da raiz:
```bash
cd frontend
```

### 2. Instale as dependências do projeto:
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento do Vite:
```bash
npm run dev
```
O frontend estará disponível em: `http://localhost:5173/` (ou na porta indicada no terminal).

---

## 🔄 Resumo do Fluxo de Trabalho (Workflow Diário)

Para trabalhar no projeto no dia a dia, o fluxo ideal consiste em manter duas abas ou janelas de terminal abertas simultaneamente:

1. **Terminal 1 (Backend):**
   ```bash
   cd backend
   .\.venv\Scripts\Activate.ps1
   python manage.py runserver
   ```

2. **Terminal 2 (Frontend):**
   ```bash
   cd frontend
   npm run dev
   ```

---

## 🛠️ Dicas Extras
- **Verificação de Linter (Frontend):** Para rodar a verificação de código do ESLint, utilize `npm run lint` dentro da pasta `frontend`.
- **Criação de Superusuário (Backend):** Para acessar o painel administrativo do Django (`http://localhost:8000/admin/`), crie um usuário administrador executando:
  ```bash
  python manage.py createsuperuser
  ```
