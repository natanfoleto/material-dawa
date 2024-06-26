# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros

## Valores

Podemos definir valores por:

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css
element {
  /* Keyword values */
  color: currentcolor;

  /* <named-color> values */
  color: red;
  color: orange;
  color: tan;
  color: green;

  /* <hex-color> values 0-9 e A-F */
  color: #090; /* RED, GREEN, BLUE */
  color: #009900;
  color: #090a;
  color:#009900aa;

  /* <rgb()> values */
  color: rgb(34, 12, 64, 0.6); /* 0-255 */
  color: rgba(34, 12, 64, 0.6);

  /* <hsl(deg, saturação, luz, transparência)> values */

  color: hsl(180, 100%, 50%, 60%); /* Hue - Saturation - Lumiance */
  color: hsla(180, 100%, 50%, 60%);

  /* Global values */
  color: inherit; /* Herda a cor do elemento anterior */
  color: initial; /* Volta a sua cor inicial */
  color: unset; /* Pega a cor do contexto */
}
```

## Conclusão

Existem documentações para cores
**https://developer.mozilla.org/en-US/docs/Web/CSS/color_value**
