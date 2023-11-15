export class Comment {
  comment_text: string;
  sauce_id: number;
  user_id: number;

  constructor(comment_text: string, sauce_id: number, user_id: number) {
    this.comment_text = comment_text;
    this.sauce_id = sauce_id;
    this.user_id = user_id;
  }
}