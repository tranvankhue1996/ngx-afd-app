import { Constants } from './../constants/constants';

export class Utils {
    static constants = Constants;

    static strSelector(name: string) {
        return `${this.constants.CONFIG.APP.ID}-{name}`;
    }
}