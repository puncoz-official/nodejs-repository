class BaseRepository {
    private model: undefined

    constructor() {
        this._init()
    }

    _init() {
        if (this.model === undefined) {
            throw new TypeError("Repository should have 'model' method defined.")
        }
    }
}

export default BaseRepository
