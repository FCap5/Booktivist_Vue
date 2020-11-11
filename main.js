var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { id: 1, category: 'Activism' },
      { id: 2, category: 'Ability' },
      { id: 3, category: 'Asian Pacific Islander' },
      { id: 4, category: 'Biography' },
      { id: 5, category: 'Black Lives Matter' },
      { id: 6, category: 'Challenging Stereotypes' },
      { id: 7, category: 'Diverse Representation' },
      { id: 8, category: 'Feelings/Self-Esteem' },
      { id: 9, category: 'History' },
      { id: 10, category: 'Latinx' },
      { id: 11, category: 'LGBTQIA+' },
      { id: 12, category: 'Native American / Indigenous' },
      { id: 13, category: 'Privilege / Racism' },
      { id: 14, category: 'Religion' },
      { id: 15, category: 'Strong Girls / Women' },
    ],
    categoryId: 0,
    categorySelected: false,
    showSelectButtons: false,
    selectMultipleCategories: false,
    displayMultipleCategories: [],
    showClearSelectMultiple: false,
    books: [
      {
        id: 1,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 2,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 3,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 4,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 5,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 6,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 7,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 8,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 9,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 10,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 11,
        title: 'A Is for Activist',
        subtitle: '',
        author: 'Innosanto Nagara',
        cover:
          'http://books.google.com/books/content?id=BWU4jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      {
        id: 12,
        title: 'Last Stop on Market Street',
        subtitle: '',
        author: 'Matt de la Peña',
        cover:
          'http://books.google.com/books/content?id=NS3eDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
    ],
  },
  methods: {
    // selectCategery() {
    //   console.log('hello');
    // },
    setCategoryId(id) {
      this.categoryId = id - 1;

      if (this.categorySelected === false) {
        this.categorySelected = true;
      }
      console.log(this.categorySelected);
    },
    setSelectMultiple() {
      this.selectMultipleCategories = true;
      console.log(this.selectMultipleCategories);
    },
    clearSelectedCategories() {
      this.categorySelected = false;
      this.showSelectButtons = false;
      this.selectMultipleCategories = false;
      this.showClearSelectMultiple = false;
    },
  },
  computed: {
    selectCategory() {
      if (this.selectMultipleCategories === false) {
        console.log(this.categories[this.categoryId].category);
        return this.categories[this.categoryId].category;
      }
      if (this.selectMultipleCategories === true) {
        console.log(this.categories[this.categoryId].category);

        // let displayString = displayMultipleCategories.toString();

        // return displayString;
      }
    },
  },
});
