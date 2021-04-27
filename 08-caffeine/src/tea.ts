// @ts-expect-error
const inquirer = require('inquirer')

import CaffeineBeverage from './caffeine-beverage'

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('Steeping Tea Bag')
  }

  addCondiments(): void {
    console.log('Adding Lemon')
  }

  async customerWantsCondiments(): Promise<boolean> {
    const answer = await Tea.getUserInput()

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
        message: 'Would you like lemon with your tea (y/n)? ',
      },
    ]

    return inquirer
      .prompt(questions)
      .then((answers: Record<string, string>) => {
        return answers['answer']
      })
  }
}

export default Tea
