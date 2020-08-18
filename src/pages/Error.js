// import React from 'react'
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'

// export default function Error() {
//     return (
//         <>
//         <Hero>
//             <Banner title="404" subtitle="Ooops! You appear lost">
//                 <Link to="/" className="btn-primary">Return Home</Link>
//             </Banner>
//         </Hero>
//         </>
//     )
// }


import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default class Error extends Component {
    render() {
        console.log(this.props)
        return (
            <>
            {/* <Hero>
                <Banner title="404" subtitle="Ooops! You appear lost">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero> */}
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">
                            404
                        </h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the requested url<span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


