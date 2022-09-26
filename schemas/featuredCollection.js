export default {
    name: 'featured_collection',
    title: 'Featured Collections',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'This is the title of the section, not shown on site.',
            type: 'string',
        },
        {
            title: 'Collection Item',
            name: 'author_image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'collection_title',
                    type: 'string',
                    title: 'Collection Title',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    name: 'caption',
                    type: 'url',
                    title: 'Collection Url',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                }
            ]
        }
    ]
}
