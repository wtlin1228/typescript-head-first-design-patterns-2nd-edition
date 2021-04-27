// @ts-expect-error
const inquirer = require('inquirer')

import CaffeineBeverage from './caffeine-beverage'

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('Dripping Coffee through filter')
  }

  addCondiments(): void {
    console.log('Adding Sugar and Milk')
  }

  async customerWantsCondiments(): Promise<boolean> {
    const answer = await Coffee.getUserInput()

    if (answer === 'y') {
      return true
    }

    return false
  }

  private static getUserInput(): string {
    const questions = [
      {
        type: 'input',
        name: 'answer',
        message: 'Would you like milk and sugar with your coffee (y/n)? ',
      },
    ]

    return inquirer
      .prompt(questions)
      .then((answers: Record<string, string>) => {
        return answers['answer']
      })
  }
}

export default Coffee
