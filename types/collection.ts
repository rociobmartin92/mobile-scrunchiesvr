export interface Collection {

    slug: string
    collectionName: string
    id: number
    images: {
        id: number
        url: string
    }[]
}