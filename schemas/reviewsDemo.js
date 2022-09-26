export default {
    name: 'reviews_demo',
    title: 'Reviews Content Demo',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'This is the title of the section, not shown on site.',
            type: 'string',
        },
        {
            title: 'Author Image',
            name: 'author_image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Review Author',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                }
            ]
        },
        {
            title: 'Review Count',
            name: 'count',
            type: 'number',
            validation: Rule => Rule.lessThan(6).greaterThan(0).integer()
        },
        {
            name: 'content',
            title: 'Review Content',
            type: 'string',
            rows: 5,
        }
    ]
}
