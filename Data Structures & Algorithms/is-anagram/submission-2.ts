class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)
            return false;

        let countS : number[] = new Array(26).fill(0);
        let countT : number[] = new Array(26).fill(0);

        for(let c of s){
            let code = c.charCodeAt(0) - 97;
            countS[code] += 1;
        }
        let resultS = countS.join(',');
        for(let c of t){
            let code = c.charCodeAt(0) - 97;
            countT[code] += 1;
        }
        let resultT = countT.join(',');
        if(resultS !== resultT)
            return false;

        return true;
    }
}
