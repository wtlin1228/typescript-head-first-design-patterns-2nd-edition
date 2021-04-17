class CeilingFan {
  static readonly HIGH = 3
  static readonly MEDIUM = 2
  static readonly LOW = 1
  static readonly OFF = 0
  private location: string
  private speed: number

  constructor(location: string) {
    this.location = location
    this.speed = CeilingFan.OFF
  }

  high(): void {
    this.speed = CeilingFan.HIGH
    console.log(`Ceiling Fan is set to High`)
  }
  medium(): void {
    this.speed = CeilingFan.MEDIUM
    console.log(`Ceiling Fan is set to Medium`)
  }
  low(): void {
    this.speed = CeilingFan.LOW
    console.log(`Ceiling Fan is set to Low`)
  }
  off(): void {
    this.speed = CeilingFan.OFF
    console.log(`Ceiling Fan is set to Off`)
  }
  getSpeed(): number {
    return this.speed
  }
}

export default CeilingFan
