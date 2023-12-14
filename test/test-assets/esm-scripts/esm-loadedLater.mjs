const attributes = {
    disableEntity: { type: 'boolean' },
    disableScriptComponent: { type: 'boolean' },
    disableScriptInstance: { type: 'boolean' }
};

export default class LoadedLater {
    static attributes = attributes;

    initialize() {
        window.initializeCalls.push(this.entity.getGuid() + ' initialize loadedLater');

        if (this.disableEntity) {
            this.entity.enabled = false;
        }

        if (this.disableScriptComponent) {
            this.entity.script.enabled = false;
        }

        if (this.disableScriptInstance) {
            this.entity.script.loadedLater.enabled = false;
        }
    }

    postInitialize() {
        window.initializeCalls.push(this.entity.getGuid() + ' postInitialize loadedLater');
    }
}