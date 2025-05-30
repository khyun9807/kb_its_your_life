#include <string>
#include <vector>
#include <deque>
#include <unordered_map>
#include <iostream>

using namespace std;

//          hit--hot
//             /  |
//          dot--lot---log
//           |          |
//          dog--------cog

//words �� begin, target�߰�
//words���� �׷��� ���� ����
//�ð� ���� ���⿡ 2���� ���� ���� ��ȸ�ϸ� ��
//�񱳽� �� ���ڸ� �ٸ� ��� �׷��� ����� ����.
//�׷��� �ϼ� ��
//�ϼ��� �׷������� ��ǥ�� '�ܰ�'�� ���� ��ǥ�� ����.
//=> BFS�� �̸��̾� ��. 

bool isNeighbor(string start, string end) {
    int count = 0;
    int slen = start.length();

    for (int i = 0;i < slen;i++) {
        if (start.at(i) != end.at(i)) {
            count++;
        }
    }

    return count == 1;
}

int solution(string begin, string target, vector<string> words) {

    words.push_back(begin);
    int wlen = words.size();

    deque<deque<int>> matrix(wlen);


    for (int i = 0;i < wlen;i++) {
        for (int j = 0;j < wlen;j++) {
            if (i == j) continue;

            string sw = words.at(i);
            string ew = words.at(j);

            if (isNeighbor(sw, ew)) {
                matrix.at(i).push_back(j);
            }
        }
    }

    deque<int> que;
    deque<bool> reserved(wlen, false);

    int cur = wlen - 1;
    int dest = -1;

    for (int i = 0;i < wlen;i++) {
        string word = words.at(i);
        if (word.compare(target) == 0) {
            dest = i;
            break;
        }
    }

    cout << "dest: " << dest << "\n" << "cur: " << cur << "\n";

    if (dest == -1)
        return 0;



    int count = 0;

    que.push_back(cur);
    reserved.at(cur) = true;

    bool isArrive = false;
    while (!que.empty()) {
        cur = que.front();
        que.pop_front();
        count++;

        if (cur == dest) {
            isArrive = true;
            break;
        }

        for (int i = 0;i < matrix.at(cur).size();i++) {
            int neighbor = matrix.at(cur).at(i);

            if (!reserved.at(neighbor)) {
                que.push_back(neighbor);
                reserved.at(neighbor) = true;
            }
        }
    }

    if (isArrive)
        return count;
    else
        return 0;
}

int main() {
    cout<<solution("hit", "cog", { "hot", "dot", "dog", "lot", "log", "cog" });
    //hot dot dog lot log cog hit
    // 0   1   2   3   4   5   6

//          hit--hot
//             /  |
//          dot--lot---log
//           |          |
//          dog--------cog
    return 0;
}