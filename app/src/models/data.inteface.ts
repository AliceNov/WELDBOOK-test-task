export interface IData {
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