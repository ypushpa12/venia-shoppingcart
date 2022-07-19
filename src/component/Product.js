import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Swatch1 from '../images/Swatch 01.png'
import Swatch2 from '../images/Swatch 02.png'
import Swatch3 from '../images/Swatch 03.png'
import Swatch4 from '../images/Swatch 04.png'
import heart from '../images/heart.jpg'
import share from '../images/share-2.jpg'


const Product = (props) => {
    const { onAdd } = props;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {

        return (
            <>

                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="300px" width="300px" />
                </div>

                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-7">{product.title}</h1>
                    <h3 className="display-9 fw-bold my-4"> $ {product.price}</h3>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <p className="lead">{product.description}</p>
                    <hr />
                    <div class="sw1">
                        <img src={Swatch1} className="cl-1" />

                        <img src={Swatch2} className="cl-2" />
                        <img src={Swatch3} className="cl-3" />
                        <img src={Swatch4} className="cl-4" /><br />
                    </div>
                    <div className='size'>
                        <h5>Size</h5>
                        <span >XS</span>
                        <span >S</span>
                        <span >M</span>
                        <span >L</span>
                        <span >XL</span>
                    </div>
                    <br />
                    <div className='static'>
                        <p class="qty">Quantity</p>
                        <span className='start'>-</span>
                        <span className='one'>1</span>
                        <span className='end'>+</span>
                    </div><br />
                    <button className="button-1"
                        onClick={() => onAdd(product)}
                    >Add to Cart</button>
                    <br />
                    <div className='icons-share'>
                        <div className='icons-share01'>
                            <img src={heart} />
                            <p>save</p>
                        </div>
                        <div className='icons-share02'>
                            <img src={share} />
                            <p>share</p>
                        </div>
                    </div>
                </div>
                <div class="aem-Grid  aem-Grid--12">

                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <h1 className="display-6">{product.title}</h1>
                        <p>Description</p>
                        <p className="lead">{product.description}</p>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='desc'>
                            <h4>Details</h4>
                            <p>Sweat-wicking</p>
                            <p>Lightweight fabric</p>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='desc1'>
                            <p>Breathable</p>
                            <p>69% nylon, 31% lycra</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div>
            <div className="container py-4">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default Product