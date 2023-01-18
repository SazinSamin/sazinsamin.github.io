import { min, max, standardDeviation } from "https://unpkg.com/simple-statistics@7.7.6/index.js?module"

const statistics = {};
statistics.min = (arr) => {
        return min(arr);
}
statistics.max = (arr) => {
        return max(arr);
}

statistics.mean =  (arr) => {
        return mean(arr);
}

statistics.standardDeviation = (arr) => {
        return standardDeviation(arr);
}

export default statistics;