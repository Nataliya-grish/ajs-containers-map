import ErrorRepository from "../app";

test("existing error", () => {
  const testError = new ErrorRepository();
  expect(testError.translate(500)).toBe("внутренняя ошибка сервера");
});

test("non-existing error", () => {
  const testError = new ErrorRepository();
  expect(testError.translate(600)).toBe("Unknown error");
});
