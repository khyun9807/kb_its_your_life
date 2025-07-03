#include <iostream>
#include <deque>
#include <unordered_map>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);

    deque<int> numbers;
    numbers.push_back(1);
    numbers.push_back(2);
    numbers.push_back(3);

    int size = numbers.size();

    unordered_map<int, deque<int>> graph;

    for (int i = 0;i < size - 1;i++) {
        int temp = numbers.at(i);
        int temp2 = numbers.at(i + 1);

        graph[temp] = {};
        graph[-temp] = {};

        graph[temp].push_back(temp2);
        graph[temp].push_back(-temp2);

        graph[-temp].push_back(temp2);
        graph[-temp].push_back(-temp2);
    }

    graph[numbers.at(size - 1)] = {};
    graph[-1 * numbers.at(size - 1)] = {};


    for (pair<const int, deque<int>>& kv : graph) {
        cout << kv.first << ": ";
        for (int i = 0;i < kv.second.size();i++) {
            cout << kv.second.at(i) << " ";
        }
        cout << "\n";
    }


	return 0;
}