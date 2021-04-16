class SingleTon {
  private static uniqueInstance: SingleTon
  private constructor() {}

  static getInstance() {
    if (!SingleTon.uniqueInstance) {
      SingleTon.uniqueInstance = new SingleTon()
    }

    return SingleTon.uniqueInstance
  }
}
