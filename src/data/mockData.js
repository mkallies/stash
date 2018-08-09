import { image } from 'faker'
import v4 from 'uuid/v4'

const sample = arr => arr[Math.floor(Math.random() * arr.length)]

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const discoveries = [
  {
    title: 'Strain',
    image: image.abstract(),
  },
  {
    title: 'Feeling',
    image: image.nature(),
  },
  {
    title: 'Price',
    image: image.people(),
  },
]

const titles = [
  'Durban Poison',
  'Lemon Haze',
  'OG Kush',
  'Pineapple Express',
  'Candyland',
  'Sour Diesel',
  'Green Crack',
  'Blueberry',
  'Blue Dream',
  'Great White Shark',
  'Grapefruit',
  'Vortex',
  'Acapulco Gold',
]

const images = [
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/642890/b/sour-diesel__primary_9bc6.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/707855/b/green-crack__primary_d525.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/649774/b/green-crack__primary_c971.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/606924/b/green-crack__primary_f2ee.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/646122/b/lemon-haze__primary_b0db.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/601424/b/lemon-haze__primary_1ab1.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/708298/b/durban-poison__primary_9afd.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/1002960/b/super-lemon-haze__primary_b4bd.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/1002705/b/purple-haze__primary_1b67.jpg',
  'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/641073/b/tangie__primary_afe8.jpg',
]

const flavours = [
  'Ammonia',
  'Apple',
  'Apricot',
  'Berry',
  'Blue',
  'Cheese',
  'Blueberry',
  'Butter',
  'Cheese',
  'Chemical',
  'Chestnut',
  'Citrus',
  'Coffee',
  'Diesel',
  'Earthy',
  'Flowery',
  'Grape',
  'Grapefruit',
  'Honey',
  'Lavender',
  'Lemon',
  'Lime',
  'Mango',
  'Menthol',
  'Mint',
  'Nutty',
  'Orange',
  'Peach',
  'Pear',
  'Pepper',
  'Pine',
  'Pineapple',
  'Plum',
  'Pungent',
  'Rose',
  'Sage',
  'Skunk',
  'Spicy/Herbal',
  'Strawberry',
  'Sweet',
  'Tar',
  'Tea',
  'Tobacco',
  'Tree',
  'Fruit',
  'Tropical',
  'Vanilla',
  'Violet',
  'Woody',
]

const createMock = () => ({
  title: sample(titles),
  image: sample(images),
  rating: getRandomInt(1, 5),
  price: getRandomInt(5, 30),
  flavours: [sample(flavours), sample(flavours), sample(flavours)],
  id: v4(),
})

export const experiences = [
  {
    title: 'Strains around Canada',
    items: Array.from({ length: 3 }, () => createMock()),
  },
  {
    title: 'Get things done',
    items: Array.from({ length: 3 }, () => createMock()),
  },
  {
    title: 'Flavours of B.C.',
    items: Array.from({ length: 3 }, () => createMock()),
  },
  {
    title: 'Getting creative',
    items: Array.from({ length: 3 }, () => createMock()),
  },
]
