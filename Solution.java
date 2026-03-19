    class Node{
        int val;
        Node left, right

        Node (int val){
            this.val = val;
        }
    }
public class Solution {
    static String path = "";

    public static boolean findpath(Node root, int target){
        if(root==null) return false;
        if(root.val == target) return true;

        path+='L';
        if(findpath(root.left, target)) return true;
        path = path.substring(0, path.length() -1);
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int height  = sc.nextInt();
        int size = Math.pow(2, height +1) -1;

        int[] arr = new int[size];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();

        }
        int target = sc.nextInt();

        Node nodes = new Node[size];
        for(int i=0;i<size;i++){
            node[i] = new Node(arr[i]);
        }

        for(int i=0;i<size;i++){
            int left = 2*i +1;
            int right = 2*i +2;

            if(left  <size) node[i].left = node[left];
            if(right < size) node[i].right = node[right];
            
        }
        findpath(node[0], target);
        System.out.print(path);
    }
}