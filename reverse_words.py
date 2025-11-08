# Given a string s, reverse the string without reversing its individual words.
# Words are separated by dots(.). Handle multiple dots and leading/trailing dots.

class Solution:
    def reverse_words(self, s: str):
        # Split by dots and filter out empty strings (handles multiple dots)
        words = [word for word in s.split('.') if word]
        
        # Reverse the array of words
        self.reverse_array(words)
        
        # Join words with single dots
        return '.'.join(words)
    
    def reverse_array(self, words: list):
        left = 0
        right = len(words) - 1
        
        while left < right:
            # Swap elements
            words[left], words[right] = words[right], words[left]
            left += 1
            right -= 1

# Test cases
if __name__ == "__main__":
    solution = Solution()
    test_cases = [
        "i.like.this.program.very.much",
        "i..like.this.program.very.much",
        "hello...world",
        "python..is.awesome..",
        "..single.word.."
    ]
    
    for test in test_cases:
        print(f"Input:  {test}")
        print(f"Output: {solution.reverse_words(test)}\n")