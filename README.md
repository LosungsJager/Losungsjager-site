# 🤖 Lösungsjäger #21342 — Site Oficial

Site oficial da equipe de robótica **Lösungsjäger #21342** do Colégio Farroupilha, Porto Alegre, RS.

## 📁 Estrutura de Arquivos

```
losungsjager/
├── index.html        ← Site completo (uma única página)
├── logo-icon.png     ← Logo ícone (G roxa)
├── logo-full.png     ← Logo completa (nome da equipe)
├── vercel.json       ← Configuração do Vercel
└── README.md         ← Este arquivo
```

---

## 🚀 Como publicar no GitHub + Vercel

### Passo 1 — Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Nome sugerido: `losungsjager-site`
4. Deixe como **Public**
5. Clique em **"Create repository"**

### Passo 2 — Subir os arquivos

**Opção A — Pelo site do GitHub (mais fácil):**
1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos desta pasta
3. Clique em **"Commit changes"**

**Opção B — Via terminal (Git):**
```bash
git init
git add .
git commit -m "🤖 Site inicial Lösungsjäger"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/losungsjager-site.git
git push -u origin main
```

### Passo 3 — Publicar no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Selecione o repositório `losungsjager-site`
4. Mantenha as configurações padrão e clique em **"Deploy"**
5. ✅ Em ~30 segundos, seu site estará online com uma URL como `losungsjager-site.vercel.app`

### Passo 4 (Opcional) — Domínio personalizado

No painel do Vercel, vá em **Settings → Domains** e adicione um domínio customizado como `losungsjager.com.br`.

---

## ✏️ Como atualizar o site

Para atualizar qualquer conteúdo:
1. Edite o arquivo `index.html`
2. Faça commit e push para o GitHub
3. O Vercel faz o deploy automaticamente em segundos!

---

## 📬 Contato

- Instagram: [@losungsjager](https://instagram.com/losungsjager)
- E-mail: losungsjager@gmail.com
- FTC Team #21342
