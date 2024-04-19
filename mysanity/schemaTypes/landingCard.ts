import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingCard',
  title: 'Landing Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of landing Card',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle of landing Card',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of landing card',
      type: 'image',
    }),
  ],
})
