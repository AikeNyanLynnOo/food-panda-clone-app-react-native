import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cuisine',
  title: 'Cuisine',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Cuisine',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description of cuisine',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of cuisine',
      type: 'image',
    }),
  ],
})
