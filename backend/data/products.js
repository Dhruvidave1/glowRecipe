const products = [
  {
    name: 'Blueberry Bounce Gentle Cleanser',
    image: '/images/cleanser.jpg',
    description:
      'An effective yet gentle 3-in-1 bouncy makeup eraser, cleanser, and deep clarifying mask',
    brand: 'Glow Recipe',
    category: 'Cleanser',
    price: 30,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Avocado Ceramide Moisture Barrier Cleanser',
    image: '/images/cleanser2.jpg',
    description:
      'A hydrating, skin barrier strengthening cleanser packed with ceramides and pre & post-biotics to balance your moisture barrier, while effectifely removing makeup',
    brand: 'Glow Recipe',
    category: 'Cleanser',
    price: 30,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Papaya Sorbet Enzyme Cleansing Balm',
    image: '/images/cleansingBalm.jpg',
    description:
      'Effortlessly dissolve makeup, dirt, and oil with this PEG-free balm',
    brand: 'Glow Recipe',
    category: 'Cleanser',
    price: 32,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Watermelon Glow AHA Night Treatment',
    image: '/images/Cream.jpg',
    description:
      'A powerful, overnight resurfacing treatment that gently exfoliates, hydrates, and brightens with a 2.5% pH-balanced AHA complex for dramatically smoother, brighter, firmer-looking skin',
    brand: 'Glow Recipe',
    category: 'Moisturizers',
    price: 40,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Watermelon Glow Hyaluronic Clay Pore-Tight Facial',
    image: '/images/Facial.jpg',
    description:
      'Meet your ultimate facial in a jar. This non-drying pore facial with hyaluronic acid-infused kaolin clay instantly minimizes the look of pores, events tone, and hydrates all skin types.',
    brand: 'Glow Recipe',
    category: 'Cleanser',
    price: 49,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Lip Pop',
    image: '/images/lipPop.jpg',
    description:
      'Exfoliate, hydrate, and deposit the perfect pop of color with the new and improved Watermelon Glow & Blueberry Lip Pop',
    brand: 'Glow Recipe',
    category: 'Moisturizer',
    price: 22,
    countInStock: 100,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Watermelon Glow Ultra-Fine Mist',
    image: '/images/Mist.jpg',
    description:
      'Meet the ultra-fine watermelon mist that refreshes & hydrates skin for a dewy glow',
    brand: 'Glow Recipe',
    category: 'Moisturizer',
    price: 29,
    countInStock: 10,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Plum Plump Hyaluronic Cream',
    image: '/images/plumpMoisturizer.jpg',
    description:
      'Hydrate, plump and balance skin with our new whipped gel cream moisturizer for plumping hydration & a dewy glow',
    brand: 'Glow Recipe',
    category: 'Moisturizer',
    price: 39,
    countInStock: 100,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Watermelon Glow Niacinamide Dew Drops',
    image: '/images/serum1.jpg',
    description:
      'Reveal a dewy glow instantly and over time with this niacinamide-infused highlighting serum',
    brand: 'Glow Recipe',
    category: 'Serum',
    price: 34,
    countInStock: 20,
    rating: 4.5,
    numReviews: 1042,
  },

  {
    name: 'Strawberry Smooth BHA+AHA Salicylic Serum',
    image: '/images/serum2.jpg',
    description:
      'Meet Strawberry Smooth: Gently smooth texture, clear breakouts, and refine pores, while calming skin with our most powerful, yet gentle daily clarifying BHA + AHA serum',
    brand: 'Glow Recipe',
    category: 'Serum',
    price: 40,
    countInStock: 115,
    rating: 3.4,
    numReviews: 120,
  },

  {
    name: 'Watermelon Glow Pink Juice Moisturizer',
    image: '/images/serum3.jpg',
    description:
      'Meet our best selling moisturizer - a lightweight, silky gel that hydrates, plumps & soothes',
    brand: 'Glow Recipe',
    category: 'Moisturizer',
    price: 39,
    countInStock: 23,
    rating: 4.1,
    numReviews: 512,
  },

  {
    name: 'Guava Viamin C Dark Spot Serum',
    image: '/images/serum4.jpg',
    description:
      'Brighten dark spots & even skin tone with our clinically advanced Guava Vitamin C Dark Spot Serum.',
    brand: 'Glow Recipe',
    category: 'Serum',
    price: 45,
    countInStock: 140,
    rating: 5,
    numReviews: 394,
  },

  {
    name: 'Plum Plump Hyaluronic Serum',
    image: '/images/serum5.jpg',
    description:
      'Meet this serum powered by 5 weights of hyaluronic acid for deep hydration and plumping like never before',
    brand: 'Glow Recipe',
    category: 'Serum',
    price: 44,
    countInStock: 40,
    rating: 3.9,
    numReviews: 1837,
  },

  {
    name: 'Watermelon Glow PHA + BHA Pore-Tight Toner',
    image: '/images/toner.jpg',
    description:
      'Hydrate skin and tighten pores all at once with this ultra-gentle toner',
    brand: 'Glow Recipe',
    category: 'Toner',
    price: 34,
    countInStock: 1000,
    rating: 4.9,
    numReviews: 3806,
  },
]

// We dont have ES modules set up yet so this wont work, so want to write this in common JS
export default products

// module.exports = products
