// test("", () => {});
import { ErrorRepository } from "../map";

describe("ErrorRepository class tests", () => {
  let repository;
  beforeEach(() => {
    repository = new ErrorRepository();
  });
  test("translate method throws a known error", () => {
    expect(repository.translate(400)).toBe("Bad Request");
  });
  test("translate method returns unknown error", () => {
    expect(repository.translate(123)).toBe("Unknown error");
  });
});
