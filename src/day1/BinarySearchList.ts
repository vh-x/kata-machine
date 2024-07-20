export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0, // inclusive
        high = haystack.length; // exclusive
    while (high - low > 0) {
        const middle = Math.floor((high + low) / 2);
        if (haystack[middle] > needle) high = middle;
        else if (haystack[middle] < needle) low = middle + 1;
        else return true;
    }
    return false;
}
