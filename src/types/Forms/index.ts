export interface ISiteForm {
  name: string;
  url: string;
}

export interface ISiteFirebase extends ISiteForm {
  authorId: string;
  createdAt: string;
}
