import React from 'react'
import Products from './Products'

import '../styles/aem-grid.css'
import Filters from './filters'
import Breadcrump from './Breadcrump'


function Home() {
    return (
        <div class="container">
          <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div class="nav">
                        <div class="nav-bg">
                            <h5 class="nav-t">women's</h5>
                            <div class="line"></div>
                        </div>
                    </div>

                </div>
                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <div class="card">
                        <div class="card-img">
                            <img src="https://www.zdnet.com/a/img/resize/aae4500dcc80cf4f9c59bd066c4db2fa96c1b02c/2021/04/16/8006dbda-20d3-40fb-9cf4-bc6c30ef0cce/shutterstock-526104310.jpg?width=770&height=578&fit=crop&auto=webp" class="card-img-top" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Breadcrump />
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--4">

                    <Filters />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--8">
                    <Products />
                </div>
            </div>

        </div>
    )
}

export default Home
