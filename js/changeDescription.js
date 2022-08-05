const hoverChangeDescription = (nameCard, text) => {
  const changeDescription = document.querySelector('#descriptionSkill')

  if (nameCard) {
    document.querySelector(nameCard).addEventListener('mouseover', () => {
      changeDescription.innerHTML = text
    })
  }

  document.querySelector(nameCard).addEventListener('mouseout', () => {
    changeDescription.innerHTML = `/* Passe o cursor do mouse no card */`
  })
}

hoverChangeDescription(
  '.html',
  'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.'
)
hoverChangeDescription(
  '.css',
  'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.'
)
hoverChangeDescription(
  '.js',
  'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
)
hoverChangeDescription(
  '.reactJS',
  'ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
)

export default hoverChangeDescription
