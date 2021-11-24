/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
        let result = []
        // two pointer solution
        let i = 0, j = 0;
        while (i < firstList.length && j < secondList.length) {
                // Check to see if firstList[i] interescts secondList[j]
                let low = Math.max(firstList[i][0], secondList[j][0])
                let high = Math.max(firstList[i][1], secondList[j][1])

                if(low <= high){
                        result.push([low, high])
                }

                if (firstList[i][1] < secondList[j][1]) {
                        i++;
                }
                else j++;

        }
        return result
};
