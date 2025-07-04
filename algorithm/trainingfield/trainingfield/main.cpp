#include <deque>
#include <vector>

using namespace std;

class node {
public:
    node(int sumarg, int crSize) {
        sum = sumarg;
        canRob.assign(crSize, true);
    }
    node(int sumarg, deque<bool>& cr) {
        sum = sumarg;
        canRob = cr;
    }

    int sum = 0;
    deque<bool> canRob;
};

class Solution {
public:
    int rob(vector<int>& nums) {
        int maxSum = 0;
        deque<node> bfs;

        int numsSize = nums.size();
        for (int i = 0;i < numsSize;i++) {
            int& housenum = i;

            node n(nums.at(housenum), numsSize);
            n.canRob.at(i) = false;
            if (i - 1 >= 0) {
                n.canRob.at(i - 1) = false;
            }

            if (i + 1 < numsSize) {
                n.canRob.at(i + 1) = false;
            }

            bfs.push_back(n);
        }

        while (!bfs.empty()) {
            node n = bfs.front();
            bfs.pop_front();

            if (maxSum < n.sum) {
                maxSum = n.sum;
            }

            int nsize = n.canRob.size();
            for (int i = 0;i < nsize;i++) {
                if (n.canRob.at(i)) {
                    node newn(n.sum + nums.at(i), n.canRob);
                    newn.canRob.at(i) = false;

                    if (i - 1 >= 0) {
                        newn.canRob.at(i - 1) = false;
                    }

                    if (i + 1 < numsSize) {
                        newn.canRob.at(i + 1) = false;
                    }

                    bfs.push_back(newn);
                }
            }
        }

        return maxSum;
    }
};