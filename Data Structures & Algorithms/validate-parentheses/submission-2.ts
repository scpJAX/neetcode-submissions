class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack : string[] = [];
        if (s.length === 0) return true; 
        for(const x of s) {
            if(x === '(' || x === '[' || x === '{'){
                stack.push(x);
            }
            else {
                if(x === ')' && stack[stack.length-1] === '('){
                    stack.pop();
                }
                else if (x === ']' && stack[stack.length-1] === '['){
                    stack.pop();
                }
                else if (x === '}' && stack[stack.length-1] === '{'){
                    stack.pop();
                }
                else {
                    //we hit some invalid character
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
