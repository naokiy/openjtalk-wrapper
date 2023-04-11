export class OpenJTalkError extends Error {
    constructor(source?: Error) {
        super(source?.message);
    }
}
