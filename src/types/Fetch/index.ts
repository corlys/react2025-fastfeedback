import { ISiteFirebase } from "../Forms";

export interface ISiteFetch extends ISiteFirebase {
  id?: string;
}

export interface ISiteSkeleton {
  id?: string;
  name?: string;
  url?: string;
  authorId?: string;
  createdAt?: string;
}

export interface ISiteData {
  sites: ISiteSkeleton[];
}

export interface IFeedbackSkeleton {
  id?: string;
  author?: string;
  authorId?: string;
  createdAt?: string;
  provider?: string;
  rating?: number;
  siteId?: string;
  status?: string;
  text?: string;
}

export interface IFeedbackData {
  feedback: IFeedbackSkeleton[];
}

export interface ResponseData<T> {
  payload: T;
}
