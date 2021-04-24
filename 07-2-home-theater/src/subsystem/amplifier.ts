import StreamingPlayer from './streaming-player'

class Amplifier {
  on(): void {
    console.log(`amplifier on`)
  }
  off(): void {
    console.log(`amplifier off`)
  }
  setStreamingPlayer(player: StreamingPlayer): void {
    console.log(`amplifier setStreamingPlayer to ${player.toString()}`)
  }
  setSurroundSound(): void {
    console.log(`amplifier setSurroundSound`)
  }
  setVolume(x: number): void {
    console.log(`amplifier setVolume to ${x}`)
  }
}

export default Amplifier
