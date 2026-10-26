# 🍙 Oniguiri Guiri (おにぎりぎり)

> **O autêntico onigiri artesanal japonês, feito à mão com alma e tradição — em breve em Sertãozinho, São Paulo.**

[![GitHub Pages Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square&logo=github)](https://www.oniguiriguiri.com.br)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=flat-square)](LICENSE)

---

## 📖 Visão Geral

Este repositório contém a **landing page oficial "Em Breve"** da **Oniguiri Guiri**. A proposta é oferecer uma experiência visual zen, elegante e acolhedora, baseada na estética japonesa contemporânea (*Wabi-Sabi Moderno*), anunciando a chegada da culinária artesanal de onigiris à cidade de Sertãozinho/SP.

A página foi construída com foco em **minimalismo absoluto**, **performance máxima** e **zero dependências externas pesadas**, entregando tempos de carregamento instantâneos e fluidez em qualquer dispositivo.

---

## ✨ Destaques & Características

* **Estética Zen & Wabi-Sabi:** Cores inspiradas nos ingredientes tradicionais da culinária japonesa (arroz *shari*, alga *nori*, chá verde *matcha*, *umeboshi* e gergelim dourado tostado).
* **Animações Fluidas & Sutis:**
  * Efeito suave de levitação (`gentleLevitate`) e brilho pulsante no logotipo oficial.
  * Canvas 2D interativo com partículas discretas em formato de sementes de gergelim dourado flutuantes.
* **Otimização de Hardware & Bateria:** O canvas pausa automaticamente quando a aba do navegador perde visibilidade (`visibilitychange`) e respeita preferências do sistema de redução de movimento (`prefers-reduced-motion`).
* **Tipografia Japonesa e Ocidental Harmoniosa:** Combinação das famílias tipográficas **Zen Maru Gothic** (caracteres elegantes e bordas suaves) e **Plus Jakarta Sans** (legibilidade e modernidade).
* **Selo Shokunin (職人):** Selo tradicional estilo *Hanko* vermelho comemorando a dedicação ao ofício artesanal.
* **Pronto para GitHub Pages:** Configurado com domínio personalizado via `CNAME` (`www.oniguiriguiri.com.br`) e `.nojekyll` para bypass do processamento Jekyll.
* **SEO e Redes Sociais Completos:** Metatags estruturadas para Open Graph (Facebook, WhatsApp, LinkedIn) e Twitter Cards.

---

## 🎨 Design System & Paleta de Cores

A identidade visual é orientada por variáveis CSS padronizadas em `:root`:

| Variável | Valor Hex | Significado / Inspiração |
| :--- | :--- | :--- |
| `--color-rice-white` | `#fbf9f5` | Branco arroz *shari* (fundo suave) |
| `--color-washi-warm` | `#f4efe4` | Papel artesanal *washi* japonês |
| `--color-nori-deep` | `#1b2e1e` | Verde profundo da alga *nori* (títulos) |
| `--color-nori-main` | `#253c28` | Verde nori clássico da identidade de marca |
| `--color-sesame-gold` | `#c49341` | Gergelim dourado tostado (destaques sutis) |
| `--color-umeboshi-red` | `#c75440` | Ameixa japonesa *umeboshi* (selo hanko artesanal) |
| `--color-ink-body` | `#324034` | Tinta preta/verde vegetal para textos corridos |

---

## 📂 Estrutura de Arquivos

```text
oniguiri-guiri-page/
├── index.html        # Estrutura semântica HTML5, metadados SEO/OG e layout principal
├── styles.css        # Folha de estilos, tokens CSS, responsividade e animações
├── script.js         # Lógica do Canvas 2D de partículas e atualização dinâmica de ano
├── logo.jpeg         # Logotipo oficial em alta definição da Oniguiri Guiri
├── CNAME             # Configuração de domínio personalizado para GitHub Pages
├── .nojekyll         # Instrução para GitHub Pages desativar build do Jekyll
├── .gitignore        # Arquivos e diretórios ignorados pelo Git
└── README.md         # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

Como a aplicação é 100% estática (Vanilla HTML5, CSS3 e JS), não é necessário instalar dependências ou rodar etapas de compilação.

### Opção 1: Servidor Local com Python (Recomendado)

Se você possui Python 3 instalado:

```bash
# Clone ou acerte o diretório do projeto
cd oniguiri-guiri-page

# Inicie um servidor HTTP local
python3 -m http.server 8000
```

Abra no navegador em: `http://localhost:8000`

### Opção 2: Node.js (via npx serve)

```bash
npx serve .
```

### Opção 3: Extensões de Editor

* **VS Code:** Instale a extensão *Live Server* e clique em "Go Live".
* **JetBrains / IntelliJ / WebStorm:** Clique com botão direito em `index.html` e selecione *Open in Browser*.

---

## 🌐 Publicação no GitHub Pages

O projeto já está estruturado para hospedagem automática no **GitHub Pages**:

1. **Repositório:** `https://github.com/passella/oniguiri-guiri-page`
2. **Branch de Publicação:** `master` (raiz `/`)
3. **Domínio Personalizado:** Configurado em `CNAME` para `www.oniguiriguiri.com.br`
4. **DNS Externo:** No provedor de DNS do seu domínio, configure os registros `CNAME` (apontando `www` para `<usuario>.github.io`) e os registros `A`/`AAAA` para o ápice do domínio, conforme orientado na [Documentação Oficial do GitHub Pages sobre Domínios Personalizados](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
5. **HTTPS:** O GitHub Pages provisiona certificado SSL automático Let's Encrypt quando o DNS estiver propagado.

---

## ♿ Acessibilidade & Boas Práticas

* Utilização de unidades fluidas (`clamp`, `rem`, `dvh`) para adaptação perfeita de telas móveis a monitores ultrawide.
* Tags semânticas (`<main>`, `<footer>`, `<canvas aria-hidden="true">`).
* Respeito à preferência do sistema operacional para redução de animações (`@media (prefers-reduced-motion: reduce)`).
* Otimização de renderização da imagem principal com `fetchpriority="high"`.

---

## 📜 Licença

Este projeto é desenvolvido para a marca **Oniguiri Guiri**. Todos os direitos reservados à marca e ao logotipo. O código-fonte base da página é licenciado sob a [Licença MIT](LICENSE).
