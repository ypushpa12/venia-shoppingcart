import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    //Fetching the data 
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    //Filter the products data
    const filterProduct = (element) => {
        const updatedList = data.filter((value) => value.category === element);
        setFilter(updatedList);
    }

    // Price Low To High
    const SortProduct = () => {
        data?.sort((a, b) => (a.price > b.price ? 1 : -1))
    }
    //Display the Products
    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-4 col-6 mb-4">

                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <NavLink to={`/products/${product.id}`}><img src={product.image} className="card-img-top" alt={product.title} height="250px"/></NavLink>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </>
        )

    }

    return (

        <div>
            <div className="container my-6 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        {/* <h1 className="display-6 fw-bolder text-center">Latest Products</h1> */}

                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}

export default Products