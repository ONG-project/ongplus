# Guia Prático: Comandos Básicos do Git

Este guia foi desenvolvido para ensinar o uso prático e conceitual dos comandos essenciais do Git para gerenciamento de ramificações (**branches**) e sincronização com repositórios remotos.

---

## 📌 Conceitos Iniciais: O que são Branches?

No Git, uma **branch** (ramificação) representa uma linha independente de desenvolvimento. Utilizar branches permite que você trabalhe em novas funcionalidades, corrija bugs ou experimente ideias sem afetar o código principal (geralmente chamado de `main` ou `master`).

```
  (main)    A --- B --- C --- F  <-- (Branch principal)
                 \           /
  (feature)       D --------E    <-- (Sua branch de trabalho)
```

---

## 1. `git branch` (Gerenciamento de Ramificações)

O comando `git branch` é utilizado para listar, criar, renomear e excluir branches no seu repositório local. Ele não altera a branch em que você está atualmente trabalhando.

### Principais Usos:

- **Listar branches locais:**
  ```bash
  git branch
  ```
  > A branch atual será destacada com um asterisco (`*`) e em cor diferente.

- **Listar todas as branches (locais e remotas):**
  ```bash
  git branch -a
  ```

- **Criar uma nova branch:**
  ```bash
  git branch nome-da-branch
  ```
  > [!NOTE]  
  > Este comando apenas cria a branch, mas **não** muda para ela. Você continuará na branch em que estava.

- **Excluir uma branch local (que já foi mesclada):**
  ```bash
  git branch -d nome-da-branch
  ```

- **Forçar a exclusão de uma branch local (mesmo sem mesclar):**
  ```bash
  git branch -D nome-da-branch
  ```

---

## 2. `git checkout` vs `git switch` (Navegação entre Branches)

Historicamente, o `git checkout` era o comando "faz-tudo" no Git: servia tanto para trocar de branch quanto para restaurar arquivos modificados. Para tornar o uso do Git mais intuitivo e seguro, a partir da versão **2.23**, o Git introduziu o comando `git switch`, dedicado exclusivamente à troca de branches.

### `git checkout` (O Comando Tradicional)

Ainda é amplamente utilizado e suportado, mas tem múltiplas funções.

- **Trocar para uma branch existente:**
  ```bash
  git checkout nome-da-branch
  ```

- **Criar uma nova branch e mudar para ela imediatamente:**
  ```bash
  git checkout -b nova-branch
  ```

> [!WARNING]  
> Como o `git checkout` também pode ser usado para descartar alterações em arquivos (`git checkout -- arquivo.txt`), iniciantes podem se confundir. Por isso, recomenda-se o uso do `git switch` para lidar com branches.

---

### `git switch` (O Comando Moderno)

Criado especificamente para alternar entre ramificações, tornando as operações mais claras e sem risco de alterar arquivos acidentalmente.

- **Trocar para uma branch existente:**
  ```bash
  git switch nome-da-branch
  ```

- **Criar uma nova branch e mudar para ela imediatamente:**
  ```bash
  git switch -c nova-branch
  ```
  *(O `-c` significa "create" / criar).*

- **Voltar para a branch anterior:**
  ```bash
  git switch -
  ```
  *(Semelhante ao atalho `cd -` no terminal).*

### 📊 Comparativo: Checkout vs Switch

| Objetivo | Comando Tradicional | Comando Moderno |
| :--- | :--- | :--- |
| Mudar de branch | `git checkout <branch>` | `git switch <branch>` |
| Criar e mudar de branch | `git checkout -b <branch>` | `git switch -c <branch>` |
| Restaurar arquivo modificado | `git checkout -- <arquivo>` | `git restore <arquivo>` |

---

## 3. `git pull` e `git push` (Sincronização Remota)

Enquanto os comandos anteriores trabalham localmente na sua máquina, `git pull` e `git push` são responsáveis por conectar e sincronizar seu trabalho com um servidor remoto (como GitHub, GitLab ou Bitbucket).

```
+------------------+                    +-------------------+
|                  |    git push        |                   |
| Repositório      | -----------------> | Repositório       |
| Local            |    git pull        | Remoto (GitHub)   |
|                  | <----------------- |                   |
+------------------+                    +-------------------+
```

### `git pull` (Puxar Atualizações)

O comando `git pull` busca as alterações mais recentes do repositório remoto e as mescla (merge) automaticamente na sua branch local atual. Na prática, ele executa dois comandos em sequência: `git fetch` (baixa os dados) + `git merge` (mescla os dados).

- **Atualizar a branch atual com as mudanças do remoto:**
  ```bash
  git pull
  ```

- **Puxar atualizações de uma branch remota específica:**
  ```bash
  git pull origin nome-da-branch
  ```

> [!TIP]  
> **Boas Práticas:** Sempre execute `git pull` antes de começar a trabalhar no seu código ou antes de fazer um `push`. Isso garante que você está trabalhando com a versão mais recente do projeto e evita conflitos de mesclagem.

---

### `git push` (Enviar Atualizações)

O comando `git push` envia seus commits locais para o repositório remoto, atualizando a branch correspondente no servidor.

- **Enviar alterações para a branch remota atual:**
  ```bash
  git push
  ```

- **Enviar uma nova branch local para o remoto pela primeira vez:**
  ```bash
  git push -u origin minha-nova-branch
  ```
  > [!IMPORTANT]  
  > A flag `-u` (ou `--set-upstream`) vincula a sua branch local à branch remota no servidor (`origin`). Nas próximas vezes que quiser enviar alterações dessa mesma branch, bastará digitar apenas `git push`.

- **Forçar o envio (Cuidado!):**
  ```bash
  git push --force
  ```
  > [!CAUTION]  
  > O `--force` sobrescreve o histórico do repositório remoto. Só utilize se tiver absoluta certeza do que está fazendo e se estiver trabalhando em uma branch isolada, pois isso pode apagar o trabalho de outros desenvolvedores.

---

## 🚀 Fluxo de Trabalho Prático (Dia a Dia)

Para consolidar o aprendizado, veja como esses comandos se conectam em um ciclo de trabalho real:

1. **Atualize sua branch principal antes de começar:**
   ```bash
   git switch main
   git pull
   ```

2. **Crie uma nova branch para a sua funcionalidade:**
   ```bash
   git switch -c feature-login
   ```

3. **Faça suas alterações no código, adicione e faça o commit:**
   ```bash
   git add .
   git commit -m "Adiciona tela de login"
   ```

4. **Envie sua nova branch para o repositório remoto:**
   ```bash
   git push -u origin feature-login
   ```

5. **Após a conclusão (e o merge no GitHub/GitLab), exclua a branch localmente:**
   ```bash
   git switch main
   git pull
   git branch -d feature-login
   ```

---

## 🎯 Resumo Rápido

- `git branch`: Lista, cria ou deleta branches.
- `git checkout`: Comando antigo/tradicional para mudar de branch ou criar/mudar (`-b`).
- `git switch`: Comando moderno, limpo e recomendado para mudar de branch ou criar/mudar (`-c`).
- `git pull`: Baixa e mescla as alterações do servidor remoto para a sua máquina.
- `git push`: Envia os seus commits locais para o servidor remoto.
