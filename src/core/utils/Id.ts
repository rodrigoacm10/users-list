export default class ID {
  static get newId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
