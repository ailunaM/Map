export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, "Not Found"],
      [500, "Internal Server Error"],
      [400, "Bad Request"],
    ]);
  }
  translate(code) {
    return this.errors.get(code) || "Unknown error";
  }
}
const repository = new ErrorRepository();
console.log(repository.translate(123));
