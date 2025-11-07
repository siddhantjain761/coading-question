// Given a string s, reverse the string without reversing its individual words. Words are separated by dots(.).

// Note: The string may contain leading or trailing dots(.) or multiple dots(.) between two words. The returned string should only have a single dot(.) separating the words, and no extra dots should be included.

// Examples :

// Input: s = "i.like.this.program.very.much"
// Output: "much.very.program.this.like.i"
// Explanation: The words in the input string are reversed while maintaining the dots as separators, resulting in "much.very.program.this.like.i".

class Solution {
    reverseWords(s) {
        // code here
        console.log(s.split('.'));
        let b = s.split('.').filter(Boolean)
        console.log(this.reverseArray(b).join("."));

        
    }
    reverseArray(a){
        let left =0;
        let right = parseInt(a.length) - 1 ;
        let temp;
        while(left < right){
            temp = a[left];
            a[left] = a[right];
            a[right] = temp;
            left ++;
            right -- ;
        }
        return a;
    }
}
const myInstance = new Solution();
myInstance.reverseWords("i..like.this.program.very.much");