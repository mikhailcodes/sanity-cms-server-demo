export default {
    name: 'hero_demo',
    title: 'Hero Demo',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'This is the title of the section, not shown on site.',
            type: 'string',
        },
        {
            name: 'main_title',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'sub_title',
            title: 'Sub Title',
            type: 'string',
        },
        {
            name: 'button_text_primary',
            title: 'Button Text Primary',
            type: 'string',
        },
        {
            name: 'button_color_primary',
            title: 'Primary Button color',
            type: 'colorPicker'
        },
        {
            name: 'button_text_secondary',
            title: 'Button Text Secondary',
            type: 'string',
        },
        {
            name: 'button_color_secondary',
            title: 'Secondary Button color',
            type: 'colorPicker'
        },
    ]
}
