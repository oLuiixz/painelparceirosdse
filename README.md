
# Painel Parceiros DSE (demo)

Este é um projeto React + Vite que reproduz um painel de parceiros semelhante ao exemplo indicado. 
Ele usa autenticação *mock* (armazenamento no localStorage) e dados mock em `src/data/partners.json`.

## Executar localmente

1. Instale Node.js (versão 18+ recomendada).
2. No terminal, rode:
```bash
npm install
npm run dev
```
3. Abra http://localhost:5173

## Como colocar no GitHub (passo a passo)

1. Crie uma conta no GitHub (https://github.com) se ainda não tiver.
2. No GitHub, clique em **New repository** e crie um repositório público chamado `painelparceirosdse`.
3. No seu computador, inicialize git na pasta do projeto:
```bash
git init
git add .
git commit -m "Initial commit - Painel Parceiros DSE"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/painelparceirosdse.git
git push -u origin main
```
(Substitua `YOUR_USERNAME` pelo seu usuário do GitHub.)

## Como implantar no Vercel

1. Crie uma conta em https://vercel.com (pode entrar com GitHub).
2. Clique em **New Project** -> **Import Git Repository** e escolha o repositório `painelparceirosdse`.
3. Vercel detecta automaticamente o framework (Vite). Apenas clique em **Deploy**.
4. Após alguns segundos/minutos, seu site ficará disponível em `https://painelparceirosdse.vercel.app` (ou similar). 
5. Para alterar o nome do projeto no painel Vercel, renomeie o projeto para `painelparceirosdse`.

## Notas importantes e próximos passos

- Este demo é front-end apenas. Para ter autenticação real, banco de dados e roles, recomendo integrar:
  - Backend (Firebase, Supabase ou API Node.js/Express + PostgreSQL)
  - Autenticação (Auth0, NextAuth, Firebase Auth)
  - Implantação contínua (Vercel conecta direto ao GitHub)
- Posso personalizar este projeto adicionando:
  - CRUD completo (criar/editar/excluir parceiros)
  - Integração com Supabase ou Firebase
  - Painéis de relatório e gráficos
  - Exportar CSV/PDF, gerenciamento de permissões
- Diga qual dessas opções quer que eu implemente a seguir e eu já altero o código aqui.

