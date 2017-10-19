export enum STATUS_CONTENT_TYPE {
    TEXT,
    LINK,
    HTML,
    JS
}

export class ChattingModel {
    public content: string;
    public type: STATUS_CONTENT_TYPE;

    constructor(content: string = "", type: STATUS_CONTENT_TYPE = STATUS_CONTENT_TYPE.TEXT) {
        this.content = content;
        this.type = type;
    }

    resetAll() {
        this.content = "";
        this.type = STATUS_CONTENT_TYPE.TEXT;
    }
}