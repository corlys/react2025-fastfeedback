export interface ISiteForm {
  name: string;
  url: string;
}

export interface ISiteData extends ISiteForm {
  authorId: string;
  createdAt: string;
}
