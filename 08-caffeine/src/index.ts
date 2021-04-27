import Coffee from './coffee'
import Tea from './tea'

async function main() {
  const tea = new Tea()
  const coffee = new Coffee()

  await tea.prepareRecipe()
  await coffee.prepareRecipe()
}

main()
