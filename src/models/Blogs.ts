class Blog {
  private id: number;
  private title: string; //praivat
  private PublisherName: string;
  private Image: string;
  private CategoryId: number;
  private discription: string;
  constructor(
    id: number,
    title: string,
    PublisherName: string,
    Image: string,
    CategoryId: number,
    discription: string
  ) {
    this.title = title;
    this.id = id;
    this.PublisherName = PublisherName;
    this.CategoryId = CategoryId;
    this.Image = Image;
    this.discription = discription;
  }
  get _id() {
    return this.id;
  }
  get _title() {
    return this.title;
  }

  get _PublisherName() {
    return this.PublisherName;
  }
  get _Image() {
    return this.Image;
  }
  get _CategoryId() {
    return this.CategoryId;
  }

  get _discription() {
    return this.discription;
  }
}
export default Blog;

