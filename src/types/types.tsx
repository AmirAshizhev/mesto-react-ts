export type User = {
  name: string,
  about: string,
  avatar: string,
  _id: string,
  cohort: string
}

export type CardType = {
  likes: User[],
  _id: string,
  name: string,
  link: string,
  owner: User,
  createdAt: string
}

