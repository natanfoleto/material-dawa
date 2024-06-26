# Trabalhando com fontes

Tipografia transmite mensagem

  - negrito (quer dar enfâse)
  - tamanho (quer mostrar mais aquele texto)
  - estilo (cada estilo transmite uma sensação diferente)

  *
    Quando alguém escreve em CAIXA ALTA pra você, e você pergunta...
    Por que você está gritando?
  *

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback* font

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

  - serif (fontes serifadas, ela tem dobrinhas nas letras)
  - sans (fontes sem serifa, não tem essas dobrinhas)

## Font Weight

* Peso da fonte

```css
p {
  font-weight: bold;
}
```

## Font Style

* Estilo da fonte

```css
p {
  font-style: italic;
}
```

## Font Size

* O tamanho da fonte

```css
p {
  font-size: 18px;
}
```

## Web Fonts

  - Fontes do sistema x fontes da web
    - Fontes do sistema são fontes que estarão instaladas na minha máquina,
      e nem sempre estará na máquina dos clientes
  - Como usar fontes para web?

  * @font-face
  * @import
  * link
