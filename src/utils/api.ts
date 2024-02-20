import type{ CardType } from "../types/types"

type Options = {
  baseUrl: string
  headers: HeadersInit
}

type NewCard = {
  name: string
  link: string
}

class Api {
  private readonly url: string
  private readonly headers: HeadersInit

  constructor(options: Options) {
    this.url = options.baseUrl
    this.headers = options.headers
  }

  public async getInitialCards(): Promise<CardType> {
    const res = await fetch(`${this.url}/cards`, {
      headers: this.headers
    })
    return await this.checkResponse(res)
  }

  public async postNewCard(card: NewCard): Promise<any> {
    const res = await fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    return await this.checkResponse(res)
  }

  public async deleteCard(id: number): Promise<any>{
    const res = await fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    return await this.checkResponse(res)
  }

  public async addLike(id: number): Promise<any> {
    const res = await fetch(`${this.url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    return await this.checkResponse(res)
  }

  public async deleteLike(id: number): Promise<any> {
    const res = await fetch(`${this.url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
    return await this.checkResponse(res)
  }

  private async checkResponse(res: Response): Promise<any> {
    if (res.ok) {
      return await res.json()
    }

    return await Promise.reject(new Error(`Ошибка: ${res.status}`))
  }
  
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
    'Content-Type': 'application/json',
  },
})

export default api
