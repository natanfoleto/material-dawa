// Criando e adicionando elementos

// createElement

const div = document.createElement('div')
div.innerText = "Olá Devs!"

// append prepend

const body = document.querySelector('body')

body.append(div)
body.prepend(div)

// insertBefore

const script = body.querySelector('script')
body.insertBefore(div, script)

// insertAfter não existe, tem como simular?

const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)