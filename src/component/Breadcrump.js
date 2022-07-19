import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
export default function Breadcrump() {
    return (
        <div class="container">
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div class="text">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Clothing
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Women's
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Outwear
                            </Link>

                        </Breadcrumbs>
                    </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <p class="result"> 38 results</p>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <a href="" class="btn btn-outline-success">
                        Sort By Price
                    </a>
                </div>
            </div>
        </div>

    )
}
