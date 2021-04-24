import Amplifier from './subsystem/amplifier'
import PopcornPopper from './subsystem/popcorn-popper'
import Projector from './subsystem/projector'
import Screen from './subsystem/screen'
import StreamingPlayer from './subsystem/streaming-player'
import TheaterLights from './subsystem/theater-lights'
import Tuner from './subsystem/tuner'

class HomeTheaterFacade {
  private amp: Amplifier
  // @ts-ignore
  private tuner: Tuner
  private player: StreamingPlayer
  private projector: Projector
  private lights: TheaterLights
  private screen: Screen
  private popper: PopcornPopper

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp
    this.tuner = tuner
    this.player = player
    this.projector = projector
    this.lights = lights
    this.screen = screen
    this.popper = popper
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...')
    this.popper.on()
    this.popper.pop()
    this.lights.dim(10)
    this.screen.down()
    this.projector.on()
    this.projector.wideScreenMode()
    this.amp.on()
    this.amp.setStreamingPlayer(this.player)
    this.amp.setSurroundSound()
    this.amp.setVolume(5)
    this.player.on()
    this.player.play(movie)
  }

  endMovie(): void {
    console.log('Shutting movie theater down...')
    this.popper.off()
    this.lights.on()
    this.screen.up()
    this.projector.off()
    this.amp.off()
    this.player.stop()
    this.player.off()
  }
}

const amp = new Amplifier()
const tuner = new Tuner()
const player = new StreamingPlayer()
const projector = new Projector()
const lights = new TheaterLights()
const screen = new Screen()
const popper = new PopcornPopper()

const homeTheater = new HomeTheaterFacade(
  amp,
  tuner,
  player,
  projector,
  lights,
  screen,
  popper
)

homeTheater.watchMovie('Raiders of the List Ark')
homeTheater.endMovie()
