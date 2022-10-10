export type CardData = {
    name: string;
    rank?: number;
    imageUrl?: string;
}

export function swap(cards: Array<CardData>, i: number, j: number) {
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}
