interface ControllerInterface {
  start(): void
  stop(): void
  increaseBPM(): void
  decreaseBPM(): void
  setBPM(bpm: number): void
}

export default ControllerInterface
