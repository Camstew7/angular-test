export class DataFormat {
  public id: string
  public title: string
  public content: string
  public type: string

  constructor(data:any) {
    this.id = data.id
    this.title = data.title
    this.content = data.content
    this.type = data.type
  }
}