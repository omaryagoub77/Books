import atomicHabitsCover from '../assets/covers/atomic_habits_cover.png'
import cleanCodeCover from '../assets/covers/clean_code_cover.png'
import designPatternsCover from '../assets/covers/design_patterns_cover.png'
import duneCover from '../assets/covers/dune_cover.png'
import the5amClubCover from '../assets/covers/the_5am_club_cover.png'
import theMartianCover from '../assets/covers/the_martian_cover.png'

const books = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming',
    rating: 4.8,
    reviews: 124,
    cover: cleanCodeCover,
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.8,
    reviews: 98,
    cover: atomicHabitsCover,
  },
  {
    id: 3,
    title: 'The Martian',
    author: 'Andy Weir',
    category: 'Science Fiction',
    rating: 4.7,
    reviews: 156,
    cover: theMartianCover,
  },
  {
    id: 4,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    rating: 4.6,
    reviews: 210,
    cover: duneCover,
  },
  {
    id: 5,
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
    category: 'Productivity',
    rating: 4.5,
    reviews: 87,
    cover: the5amClubCover,
  },
  {
    id: 6,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    category: 'Programming',
    rating: 4.7,
    reviews: 112,
    cover: designPatternsCover,
  },
]

export default books
