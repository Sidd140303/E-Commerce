const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

      let priceArr = action.payload.map((elem) => elem.price)
      // let maxPrice = priceArr.reduce((initialVal, elem) => Math.max(initialVal, elem), 0)
      let maxPrice = Math.max(...priceArr)

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters, maxPrice, price: maxPrice
        }
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true
      }
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false
      }
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload
      }
    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products]

      const sortingProducts = (a, b) => {
        if (sorting_value === 'lowest')
          return a.price - b.price
        if (sorting_value === 'highest')
          return b.price - a.price
        if (sorting_value === 'a-z')
          return a.name.localeCompare(b.name)
        if (sorting_value === 'z-a')
          return b.name.localeCompare(a.name)
      }
      newSortData = tempSortProduct.sort(sortingProducts)
      return {
        ...state,
        filter_products: newSortData

      }
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload
      return {
        ...state,
        filters: {
          ...state.filters, [name]: value,
        }
      }

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,

        }
      }

    case "FILTER_PRODUCTS":
      let { all_products } = state
      let tempFilterProduct = [...all_products]

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((elem) => {
          return elem.name.toLowerCase().includes(text);
        })
      }
      if (category !== 'All') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== 'All') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company === company
        );
      }
      if (color !== 'All') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price == price)
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct

      }
    default:
      return state;
  }
};

export default FilterReducer;
