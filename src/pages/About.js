import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import ProductTable from "../components/ProductTable";
import axios from "axios";
import { useTable } from "react-table";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios("https://fakestoreapi.com/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setProducts([]);
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <img alt="" className="img prod-img" src={value} />
        ),
        maxWidth: 70,
      },
    ],
    []
  );
  /* 
  const data = useMemo(() => [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ]); */

  /*   const columns = useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Title",
      accessor: "title",
    },
  ]); */
  /*  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance; */
  return (
    <Wrapper>
      <div className="container">
        <div className="table-container">
          {loading ? (
            <span>Loading Products...</span>
          ) : (
            <ProductTable columns={columns} data={products} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex; */
  color: white;
`;
export default About;
