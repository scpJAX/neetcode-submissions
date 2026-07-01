class LRUCache {
private:
    struct Node {
        Node* prev;
        Node* next;
        int key;
        int value;

        Node(int key, int value):prev(nullptr), next(nullptr), key(key), value(value){}
    };

    Node* head;
    Node* tail;
    unordered_map<int, Node*> hashMap;
    int size;
public:
    LRUCache(int capacity) {
        size = capacity;
        head = nullptr;
        tail = nullptr;
    }
    
    int get(int key) {
        if(hashMap.find(key) == hashMap.end())
            return -1;

        Node* node = hashMap[key];
        remove(node);
        setHead(node);
        return node->value;
    }
    
    void put(int key, int value) {
        if(hashMap.find(key) != hashMap.end()) {
            Node* node = hashMap[key];
            remove(node);
            node->value = value;
            setHead(node);
            return;
        }

        Node* newNode = new Node(key, value);

        if(hashMap.size() >= size){
            Node* oldTail = tail;
            hashMap.erase(oldTail->key);
            remove(oldTail);
            setHead(newNode);
            delete oldTail;
        }
        else {
            setHead(newNode);
        }
        hashMap[key] = newNode;
    }

    void remove(Node* node){
        if(node->prev != nullptr){
            node->prev->next = node->next;
        }
        else {
            head = node->next;
        }

        if(node->next != nullptr){
            node->next->prev = node->prev;
        }
        else {
            tail = node->prev;
        }
        
        node->prev = nullptr;
        node->next = nullptr;
    }

    void setHead(Node* node){
        node->next = head;
        node->prev = nullptr;
        if(head != nullptr){
            head->prev = node;
        }
        head = node;
        if(tail==nullptr){
            tail=head;
        }
    }
};


