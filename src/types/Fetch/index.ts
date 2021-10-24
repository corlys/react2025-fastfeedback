import { ISiteFirebase } from "../Forms";

export interface ISiteFetch extends ISiteFirebase {
  id?: string;
}

export interface ISiteData {
  sites: ISiteFetch[];
}
