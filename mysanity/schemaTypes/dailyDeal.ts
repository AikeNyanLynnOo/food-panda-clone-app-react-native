import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dailyDeal',
  title: 'Daily Deal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of daily deal',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of daily deal',
      type: 'image',
    }),
  ],
})
