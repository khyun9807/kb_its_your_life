#include <vector>
#include <deque>
#include <iostream>

using namespace std;

int lengthOfLIS(const vector<int>& nums) {
    deque<deque<int>> records;

    for (const int& num : nums) {
        bool flag = true;

        for (deque<int>& record : records) {
            if (record.back() < num) {
                record.push_back(num);
                flag = false;
            }
        }

        if (flag) {
            deque<int> temp(1, num);
            records.push_back(temp);
        }
    }

    int max = 0;
    for (deque<int>& record : records) {
        if (max < record.size()) {
            max = record.size();
        }
    }

    return max;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);

    cout << lengthOfLIS({ 10,9,2,5,3,7,101,18 });


    return 0;
}