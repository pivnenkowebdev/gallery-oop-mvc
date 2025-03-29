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

// вытащить данные путей из JSON с помощьюспециальных методов в модели и передать в вью

// 1. дефолтный запрос
// 2. создание объекта списка картинок и его методов
// 3. анимация загрузки
// 4. пагинация (загрузить еще)
