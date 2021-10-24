export interface DataPaylaod<T> {
  [key: string]: T;
}

export interface DataResponse<T> {
  data: T;
  isLoading: boolean;
  isError: any;
}
