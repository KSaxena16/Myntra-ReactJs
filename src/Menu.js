import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Radio from "./Radio";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchProduct, setSearchProduct] = useState(" ");
  const getData = async () => {
    const resp = await axios.get(
      "https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e"
    );
    // console.log(resp.data.products);
    setProducts(resp?.data?.products);
  };
  useEffect(() => {
    getData();
  }, []);

  var genderArr = [];
  products.forEach((elem) => {
    genderArr.push(elem.gender);
  });
  var genderArr1 = new Set(genderArr);
  // console.log(genderArr1)
  var RadioArr = [];
  genderArr1.forEach((element) => {
    RadioArr.push(element);
    // console.log(RadioArr)
  });

  var categoryArr = [];
  products.forEach((elem) => {
    categoryArr.push(elem.category);
  });
  var categoryArr1 = new Set(categoryArr);
  var CheckboxArr = [];
  categoryArr1.forEach((param) => {
    CheckboxArr.push(param);
  });

  const genderFilter = (event) => {
    setSelectedGender(event.target.value);
  };
  // console.log(selectedGender)
  const categoryFilter = (event) => {
    if (event.target.checked) {
      setSelectedCategory([...selectedCategory, event.target.value]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((elem) => elem !== event.target.value)
      );
    }
  };
  const searchCard = (event) => {
    setSearchProduct(event.target.value);
  };
  // console.log(searchProduct);
  const filteredData = () => {
    if (
      selectedGender.length === 0 &&
      selectedCategory.length === 0 &&
      searchProduct === " "
    ) {
      return products;
    } else if (selectedGender.length !== 0 && selectedCategory.length !== 0) {
      return products.filter(
        (product) =>
          selectedGender.includes(product.gender) &&
          selectedCategory.includes(product.category)
      );
    } else if (selectedGender.length !== 0 || selectedCategory.length !== 0) {
      return products.filter(
        (product) =>
          selectedGender.includes(product.gender) ||
          selectedCategory.includes(product.category)
      );
    } else if (searchProduct !== " ") {
      return products.filter((product) =>
        product.product.toLowerCase().includes(searchProduct.toLowerCase())
      );
    }
  };
  return (
    <>
      <Navbar onChange={searchCard} />
      <div className="container-fluid">
        <div className="row  ml-2 p-5">
          <div className="col-md-3 border border-secondry">
            <div className="container mt-3">
              <div>
                <h1>Filter</h1>
                <hr />
                {RadioArr.map((Elem) => {
                  return (
                    <Radio gender={Elem} value={Elem} onClick={genderFilter} />
                  );
                })}
              </div>
              <div>
                <h1>Category</h1>
                {CheckboxArr.map((Elem) => {
                  return (
                    <Checkbox
                      category={Elem}
                      value={Elem}
                      onClick={categoryFilter}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div className="container">
            <div className="row mt-2">
              {filteredData().map((data, i) => {
                return (
                  <ProductCard
                    key={i}
                    images={data.searchImage}
                    brand={data.brand}
                    product={data.additionalInfo}
                    discountedPrice={data.price}
                    price={data.mrp}
                    discount={data.discountDisplayLabel}
                  />
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
