export type OpenJTalkOptions = {
    /**
     * filename of output trace information
     */
    ot?: string;

    /**
     * sampling frequency
     *
     * @defaultValue `'auto'`
     */
    s?: number | 'auto';

    /**
     * frame period (point)
     *
     * @defaultValue `'auto'`
     */
    p?: number | 'auto';

    /**
     * all-pass constant
     *
     * @defaultValue `'auto'`*/
    a?: number | 'auto';

    /**
     * postfiltering coefficient
     *
     * @defaultValue `0.0`
     */
    b?: number;

    /**
     * speech speed rate
     *
     * @defaultValue `1.0`
     */
    r?: number;

    /**
     * additional half-tone
     *
     * @defaultValue `0.0`
     */
    fm?: number;

    /**
     * voiced/unvoiced threshold
     *
     * @defaultValue `0.5`
     */
    u?: number;

    /**
     * weight of GV for spectrum
     *
     * @defaultValue `1.0`
     */
    jm?: number;

    /**
     * weight of GV for log F0
     *
     * @defaultValue `1.0"
     */
    jf?: number;

    /**
     * audio buffer size (if 0, turn off)
     *
     * @defaultValue `0`
     */
    z?: number;
};
