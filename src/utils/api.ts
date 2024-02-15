type Options = {
  baseUrl: string
  headers: HeadersInit
}

class Api {
  private readonly url: string
  private readonly headers: HeadersInit

  constructor(options: Options) {
    this.url = options.baseUrl
    this.headers = options.headers
  }

  async getInitialCards(): Promise<any> {
    const res = await fetch(`${this.url}/cards`, {
      headers: this.headers
    });
    return await this.checkResponse(res);
  }

  private async checkResponse(res: Response): Promise<any> {
    if (res.ok) {
      return await res.json();
    }

    return await Promise.reject(`Ошибка: ${res.status}`);
  }
}



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
    'Content-Type': 'application/json'
  }
});

export default api
