export type SearchParames = {
  query: string;
  expansions?: "author_id";
  "tweet.fields"?: "created_at";
  "user.fields"?: "created_at";
  next_token?: string;
};
