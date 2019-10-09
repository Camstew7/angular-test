export class Data {
  public title: string
  public content: string
  public type: string

  constructor(data:any) {
    this.title = data.title
    this.content = data.content
    this.type = data.type
  }
}