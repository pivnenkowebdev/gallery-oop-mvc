export default class Model {
  defaultValue = "food";

  constructor() {
    // ОСТОРОЖНО!
    this.API_KEY = "GhKsB5sAtKrUEiAAWKJYM56CueNnuUoIms_7HaILTUw";
    this.BASE_URL = "https://api.unsplash.com/search/photos";
  }

  async getData(valueQuery) {
    try {
      const url = `${this.BASE_URL}?client_id=${this.API_KEY}&query=${valueQuery}&per_page=20&orientation=portrait`;

      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return null;
    }
  }
}

// 1. пагинация (загрузить еще)
// 2. дефолтное значение в форме + стили
// 3. нажатие на картинку
