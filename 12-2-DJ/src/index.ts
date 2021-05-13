import BeatController from './beat-controller'
import BeatModel from './beat-model'

const beatModel = new BeatModel()
new BeatController(beatModel)
