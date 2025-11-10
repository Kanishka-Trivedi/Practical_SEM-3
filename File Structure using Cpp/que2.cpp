// Write a program to implement a stack using array with the following operations:
// a. Push
// b. Pop
// c. Display



#include <iostream>
using namespace std;

#define MAX 5

class Stack {
    int arr[MAX];
    int top;
public:
    Stack() { top = -1; }
    void push(int x) {
        if (top == MAX - 1) return;
        arr[++top] = x;
    }
    void pop() {
        if (top == -1) return;
        top--;
    }
    void display() {
        if (top == -1) return;
        for (int i = top; i >= 0; i--) cout << arr[i] << " ";
        cout << endl;
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.display();
    s.pop();
    s.display();
    return 0;
}