# Mais estilos para os textos

  * font-variant
  * letter-spacing
  * word-spacing
  * line-height
  * text-transform
  * text-decoration
  * text-align
  * text-shadow

## Font Variant

* Adiciona uma variante para a fonte

```css
p {
  font-variant: small-caps;
}
```

## Letter Spacing

* Adiciona espaçamentos entre as letras

```css
p {
  letter-spacing: 10px;
}
```

## Word Spacing

* Adiciona espaçamento para as palavras

```css
p {
  word-spacing: 10px;
}
```

## Line Height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
  line-height: 1.6;
}
```

## Text Transform

* Transformação de textos

```css
p {
  text-transform: uppercase;
}
```

## Text Decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
  * Podemos aplicar mais de um valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
  text-decoration: underline; /* shorthand */
}
```

## Text Align

* Alinhamento de textos
* center | right | left | justify

```css
p {
  text-align: center;
}
```

## Text Shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
  text-shadow: 1px 1px 1px red,
              2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```


## Shorthand

* font-style, font-variant, font-weight, font-size, line-height, e font family

```css
p {
  /* font-style, font-variant, font-weight, font-size, line-height, e font family */
  font: italic normal bold 3em/1.5 Helvetica, Arial, sans-serif;
}
```
