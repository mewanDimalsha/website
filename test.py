class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        
        if(m==0): nums1=nums2
        if(n==0): nums2=nums1
        else:
            j=0
            for i in range(0,m):
                if (nums1[i]>nums2[j]):
                    nums1[i],nums2[j]=nums2[j],nums1[i]
                    j+=1
            for k in range(m,m+n):
                    nums1[k]=nums2[k-m]