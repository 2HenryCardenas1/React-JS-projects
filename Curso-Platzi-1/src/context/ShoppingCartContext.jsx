import {createContext, useEffect, useState} from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCard, setShoppingCar] = useState([]);
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);

  const [orderProducts, setOrderProducts] = useState([]);

  const [items, setItems] = useState([]);

  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const openCheckoitSideMenu = () => {
    setCheckoutSideMenuOpen(true);
  };
  const closeCheckoitSideMenu = () => setCheckoutSideMenuOpen(false);

  const openProductDetail = () => {
    setViewDetail(true);
  };
  const closeProductDetail = () => setViewDetail(false);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  const valuesContext = {
    count,
    setCount,
    viewDetail,
    openProductDetail,
    closeProductDetail,
    productToShow,
    setProductToShow,
    shoppingCard,
    setShoppingCar,
    isCheckoutSideMenuOpen,
    openCheckoitSideMenu,
    closeCheckoitSideMenu,
    orderProducts,
    setOrderProducts,
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    setSearchByCategory,
    searchByCategory,
  };

  return (
    <ShoppingCartContext.Provider value={valuesContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
