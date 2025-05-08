#include <iostream>

using namespace std;

template <typename T, int N>
class Array{
public:
    T arr[N] = { 0, };
    Array(){}

    Array(const Array& Arr) {
        for (int i = 0;i < N;i++) {
            this.arr[i] = Arr.arr[i];
        }
    }
    
    T& operator[](const int& idx) {
        if (idx >= 0 || idx <= N - 1) {
            return arr[idx];
        }
        else {
            cout << "idx out of bound\n";
        }
    }

    const T operator[](const int& idx) {
        if (idx >= 0 || idx <= N - 1) {
            return arr[idx];
        }
        else {
            cout << "idx out of bound\n";
        }
    }

    

};

int main() {

    Array<int, 100> arrr;

    cout << arrr[0];

    arrr[-1] = 100;
    arrr[0] = 10000;

    cout << arrr[0];
    return 0;
}