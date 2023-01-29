export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(400, "некорректный запрос");
    this.error.set(404, "запрос не найден");
    this.error.set(500, "внутренняя ошибка сервера");
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return "Unknown error";
  }
}
