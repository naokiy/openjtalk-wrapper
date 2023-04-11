import { OpenJTalkOptions } from './OpenJTalkOptions.js';
import { OpenJTalkError } from './OpenJTalkError.js';
import { execa } from '@esm2cjs/execa';
import { Writable } from 'node:stream';

/**
 * OpenJtalk Wrapper
 *
 */
export class OpenJTalk {
    constructor(
        private readonly htsvoice: string,
        private readonly dictionary: string,
    ) {}

    /**
     * Create voice and save it to file.
     *
     * @param sentense sentense to speech
     * @param to file path
     * @param option optional parameters
     */
    async talkToFile(
        sentense: string,
        to: string,
        option?: OpenJTalkOptions,
    ): Promise<void> {
        const argumentArray = this._makeArguments(option, to);
        const command = execa('open_jtalk', argumentArray, { input: sentense });
        try {
            await command;
        } catch (e) {
            if (e instanceof Error) {
                throw new OpenJTalkError(e);
            }
        }
    }

    /**
     * Create voice and pass it to stream.
     *
     * @param sentense sentense to speech
     * @param to WritableStream to output
     * @param option optional parameters
     */
    async talkToStream(
        sentense: string,
        to: Writable,
        option?: OpenJTalkOptions,
    ): Promise<void> {
        const argumentArray = this._makeArguments(option);
        const command = execa('open_jtalk', argumentArray, { input: sentense });
        command.stdout?.pipe(to);
        try {
            await command;
        } catch (e) {
            if (e instanceof Error) {
                throw new OpenJTalkError(e);
            }
        }
    }

    private _makeArguments(
        source?: OpenJTalkOptions,
        to?: string,
    ): Array<string> {
        let options: Array<string> = [];
        options = [...options, '-m', this.htsvoice, '-x', this.dictionary];
        if (to !== undefined) {
            options = [...options, '-ow', to];
        }
        if (source?.ot !== undefined) {
            options = [...options, '-ot', source.ot];
        }
        if (source?.s !== undefined) {
            options = [...options, '-s', source.s.toString()];
        }
        if (source?.p !== undefined) {
            options = [...options, '-p', source.p.toString()];
        }
        if (source?.a !== undefined) {
            options = [...options, '-a', source.a.toString()];
        }
        if (source?.b !== undefined) {
            options = [...options, '-b', source.b.toString()];
        }
        if (source?.r !== undefined) {
            options = [...options, '-r', source.r.toString()];
        }
        if (source?.fm !== undefined) {
            options = [...options, '-fm', source.fm.toString()];
        }
        if (source?.u !== undefined) {
            options = [...options, '-u', source.u.toString()];
        }
        if (source?.jm !== undefined) {
            options = [...options, '-jm', source.jm.toString()];
        }
        if (source?.jf !== undefined) {
            options = [...options, '-jf', source.jf.toString()];
        }
        if (source?.z !== undefined) {
            options = [...options, '-z', source.z.toString()];
        }

        return options;
    }
}
