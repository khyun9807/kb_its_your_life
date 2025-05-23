#include<iostream>
#include<deque>

using namespace std;

int nodenum = 9;

deque<deque<int>> matrix;
/*
1   2--------3      4-----
|   |      / |      |    |
5   |     /   -- 6 --    |
|   /     |    / |       |
|  /      |  /   |       |
 7---------8-----9--------
*/


void init() {
	matrix.push_back({});
	for (int i = 1;i <= 9;i++) {
		matrix.push_back({});
	}

	matrix.at(1).push_back(5);

	matrix.at(2).push_back(3);
	matrix.at(2).push_back(7);

	matrix.at(3).push_back(2);
	matrix.at(3).push_back(6);
	matrix.at(3).push_back(8);

	matrix.at(4).push_back(6);
	matrix.at(4).push_back(9);

	matrix.at(5).push_back(1);
	matrix.at(5).push_back(7);

	matrix.at(6).push_back(3);
	matrix.at(6).push_back(4);
	matrix.at(6).push_back(8);
	matrix.at(6).push_back(9);

	matrix.at(7).push_back(2);
	matrix.at(7).push_back(5);
	matrix.at(7).push_back(8);

	matrix.at(8).push_back(3);
	matrix.at(8).push_back(6);
	matrix.at(8).push_back(7);
	matrix.at(8).push_back(9);

	matrix.at(9).push_back(4);
	matrix.at(9).push_back(6);
	matrix.at(9).push_back(8);
}

void bfs(int startnode) {
	deque<bool> readed(nodenum + 1, false);
	
	deque<int> que;
	deque<bool> reserved(nodenum + 1, false);


	que.push_back(startnode);
	reserved.at(startnode)=true;

	while (!que.empty()) {
		int curnode = que.front();
		que.pop_front();

		if (!readed.at(curnode)) {
			readed.at(curnode) = true;
			cout << curnode << " ";
		}

		for (int i = 0;i < matrix.at(curnode).size();i++) {
			int neighbor = matrix.at(curnode).at(i);

			if (!reserved.at(neighbor)) {
				reserved.at(neighbor) = true;
				que.push_back(neighbor);
			}
		}
	}
}

void dfs(int startnode) {
	deque<bool> readed(nodenum + 1, false);

	deque<int> tracker;
	deque<bool> tracked(nodenum + 1, false);
	deque<bool> completed(nodenum + 1, false);

	int curnode = startnode;
	tracker.push_back(curnode);
	tracked.at(curnode) = true;

	while (true) {
		if (!readed.at(curnode)) {
			readed.at(curnode) = true;
			cout << curnode << " ";
		}

		bool isCurCompleted = true;

		for (int neighbor : matrix.at(curnode)) {
			if (!tracked.at(neighbor) && !completed.at(neighbor)) {
				isCurCompleted = false;

				tracker.push_back(neighbor);
				tracked.at(neighbor)=true;

				break;
			}
		}

		if (isCurCompleted) {
			tracker.pop_back();
			tracked.at(curnode) = false;
			completed.at(curnode) = true;

			if (tracker.empty()) {
				break;
			}
			else {
				curnode = tracker.back();
			}
		}
		else {
			curnode = tracker.back();
		}
	}
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);

	init();

	dfs(1);

	return 0;
}