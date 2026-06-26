class Solution {
public:
    int maxArea(vector<int>& heights) {
        //area is lxw
        int left = 0; 
        int right = heights.size()-1;

        int maxArea = 0;
        while(left < right){
            int currentArea = min(heights[left], heights[right]) * (right-left);
            maxArea = max(maxArea, currentArea);
            if(heights[left] < heights[right]) {
                //increasing left would give us bigger height for area
                left++;
            }
            else{
                right--;
            }
        }
        return maxArea;
    }
};
