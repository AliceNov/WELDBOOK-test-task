export interface IData {
    prevPageToken: string,
    nextPageToken: string,
    items: [
        {
            id: string,
            snippet: {
                title: string  
            }
        }
    ]
}