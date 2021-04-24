class StreamingPlayer {
  on(): void {
    console.log(`streaming player on`)
  }
  off(): void {
    console.log(`streaming player off`)
  }
  stop(): void {
    console.log(`streaming player stop`)
  }
  play(x: string): void {
    console.log(`streaming player play ${x}`)
  }
  toString(): string {
    return 'streaming player'
  }
}

export default StreamingPlayer
