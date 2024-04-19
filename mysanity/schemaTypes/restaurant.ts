import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'delivery_fee',
      title: 'Delivery fee of the restaurant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category of the restaurant',
      type: 'string',
    }),
    defineField({
      name: 'promotion',
      title: 'Promotion Percentage',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'Rating of the restaurant',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),

    defineField({
      name: 'cuisines',
      title: 'Cuisines',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'cuisine',
            },
          ],
        },
      ],
    }),
  ],
})
