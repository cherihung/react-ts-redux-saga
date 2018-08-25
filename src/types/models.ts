// for testing: https://jsonplaceholder.typicode.com/users/1/posts
export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostsStoreState {
  items: IPost[] | null;
  error: any;
  loading: boolean;
}