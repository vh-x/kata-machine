export default function two_crystal_balls(breaks: boolean[]): number {
    // worst case scenario: jump √n times and then walk √n elements
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break;
    }

    // set the limit
    const limit = i < breaks.length ? i : breaks.length;

    // jump back after first ball breaks
    i -= jump;

    // walk till it breaks or reaches the end
    for (; i < limit; i++) {
        if (breaks[i]) return i;
    }

    // the balls did not break
    return -1;
}
