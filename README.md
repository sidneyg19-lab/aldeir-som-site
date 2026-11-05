# Aldeir Som Automotivo — Signature Experience

Nova direção de arte, independente da V2/V3: landing page editorial, com animações GSAP, React + TypeScript e layout responsivo.

## Executar localmente

```powershell
npm install
npm run dev
```

## Publicar no GitHub Pages

O repositório de destino é `sidneyg19-lab/aldeir-som-site`, e o Vite já está configurado com `base: '/aldeir-som-site/'`.

1. Faça backup da versão atual do repositório ou crie uma branch `backup-cinematic-v3`.
2. Substitua os arquivos da raiz do repositório pelos arquivos deste projeto, preservando `.git`.
3. Execute `npm install` e `npm run build`.
4. No GitHub, em Settings > Pages, configure Source = **GitHub Actions**.
5. Faça commit e push; o workflow `.github/workflows/deploy.yml` executa build e publica `dist`.

## Avisos

- Protótipo demonstrativo: imagens genéricas de Unsplash, não são fotos reais da Aldeir.
- Contato é demonstrativo: não há número de WhatsApp nem e-mail real configurados. O botão apenas copia uma mensagem e exibe aviso.
- Não existe integração com o ERP.
- Imagens e fontes precisam de internet.
- Não contém modelo de carro 3D: a experiência é editorial e cinematográfica por composição e movimento.
