class Solution {
public:
    int maxArea(vector<int>& heights) {
        //area is lxw
        int left = 0; 
        int right = heights.size()-1;

        int maxArea = 0;
        while(left < right){
            int currentArea = 0;
            if(heights[left] > heights[right]){
                currentArea = heights[right] * (right-left);
            } else {
                currentArea = heights[left] * (right-left);
            }
            if (currentArea > maxArea)
                maxArea = currentArea;
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
