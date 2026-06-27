# Pasta privada do currículo

Coloque aqui o seu arquivo real do currículo, com o nome exato:

```
cv.pdf
```

Ou seja, o caminho final deve ser: `secure/cv.pdf`

Esta pasta **não fica dentro de `public/`** de propósito — arquivos em
`public/` são servidos diretamente, sem nenhum controle, e podem ser
indexados pelo Google ou acessados por qualquer pessoa que descubra a URL.

O PDF colocado aqui só é entregue através da rota
`app/api/cv/route.ts` (`/api/cv`), que é chamada pelo botão "Download CV"
do site.

## Sobre o nível de proteção

Isso impede que o arquivo:
- apareça como link estático descobrível no HTML da página;
- seja indexado por buscadores (bloqueado também via `public/robots.txt`);
- fique disponível listando a pasta `public/`.

Mas **não é uma autenticação real**: quem souber exatamente a URL
`/api/cv` ainda consegue acessá-la. Se você quiser um controle mais forte
— por exemplo, só liberar o download depois que a pessoa preencher um
formulário com nome e email — é só pedir; o site já tem o padrão de
formulário pronto para isso.

## Deploy

Lembre-se de incluir esta pasta (com o `cv.pdf` dentro) quando fizer o
deploy — diferente de uma pasta `.gitignore`d, ela **precisa** estar
presente no servidor para a rota `/api/cv` conseguir ler o arquivo.

> Se for hospedar na Vercel e a rota `/api/cv` retornar erro 404 mesmo com
> o arquivo presente no repositório, adicione a configuração abaixo no
> `next.config.mjs` para garantir que o arquivo seja incluído no pacote da
> função serverless:
>
> ```js
> const nextConfig = {
>   reactStrictMode: true,
>   experimental: {
>     outputFileTracingIncludes: {
>       "/api/cv": ["./secure/**"],
>     },
>   },
> };
> ```
