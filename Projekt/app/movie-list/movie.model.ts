export interface Movie {
    id: number,
    name: string,
    categoryIds: string[],
    //count: number,
    fee:number,
    copiesLeft:number,
    isAvailable:boolean
}