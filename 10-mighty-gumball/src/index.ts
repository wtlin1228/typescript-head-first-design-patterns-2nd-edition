import GumballMachine from './gumball-machine'

function main(): void {
  const gumballMachine = new GumballMachine(5)

  console.log(gumballMachine.toString())

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine.toString())

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine.toString())

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine.toString())

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine.toString())
}

main()
