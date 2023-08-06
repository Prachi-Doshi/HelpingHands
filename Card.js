// // import React from 'react';
// // import './Card.css';

// // const Card = (props) => {
// //   const { title, description, imageSrc } = props;

// //   return (
// //     <div className="card">
// //       {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
// //       <div className="card-content">
// //         <h2 className="card-title">{title}</h2>
// //         <p className="card-description">{description}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Card;


// import React from 'react';
// import { BrowserRouter as Link, Route, Routes } from 'react-router-dom';
// import './Card.css'
// import Funds from './Funds';
// // import Funds from './Funds'

// const Card = ({ imgSrc, imgAlt, title, description, path }) => {
//     return (
//         // <div className="col-md-6">
//         //     <div className="card mb-3">
//         //         <div className="row g-0">
//         //             <div className="col-md-4">
//         //                 <img
//         //                     src={imgSrc}
//         //                     className="img-fluid rounded-start"
//         //                     alt={imgAlt}
//         //                     style={{ padding: 25 }}
//         //                 />
//         //             </div>
//         //             <div className="col-md-8">
//         //                 <div className="card-body">
//         //                     <h3 className="card-title">{title}</h3>
//         //                     <p className="card-text">See details</p>
//         //                     <p className="card-text">
//         //                         <Link to={`/${imgAlt.toLowerCase()}`}>Click to help</Link>
//         //                     </p>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//         <div className="card">
//             <img src={imgSrc}
//                 className="card-image img-fluid rounded-start"
//                 alt={imgAlt}
//                 style={{ padding: 25 }}
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//                 {/* <Link to={<Funds/>}>Go somewhere</Link> */}
//                 <Link to={`/${path}`}>Click to Help</Link>
//                 {/* <a href={<path/>}>Go somewhere</a> */}
//             </div>
//             <Routes>
//                 <Route path={`/${path}`} element={`/${path}`} />
//             </Routes>
//         </div>
//     );
// };

// export default Card;


// //         <div className="col-md-6">
// //           <div className="card mb-3">
// //             <div className="row g-0">
// //               <div className="col-md-4">
// //                 <img src="/pen-fancy-solid.svg" className="img-fluid rounded-start" alt="img" style={{ padding: 25 }} />
// //               </div>
// //               <div className="col-md-8">
// //                 <div className="card-body">
// //                   <h3 className="card-title">Stationary</h3>
// //                   <p className="card-text">See which NGOs need stationary</p>
// //                   <p className="card-text"><small className="text-body-secondary">Click to help</small></p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>



import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Removed "as" from import
import './Card.css';

const Card = ({ imgSrc, imgAlt, title, description, path }) => {
    return (
        <div className="card">
            <img
                src={imgSrc}
                className="card-image img-fluid rounded-start"
                alt={imgAlt}
                style={{ padding: 25 }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="no-hover">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/${path}`} className='link'>Click to Help</Link>
                </div>
                <Link to={`/${path}`} className='link'>Click to Help</Link>
            </div>
            <Routes>
                <Route path={`/${path}`} element={<div>{path}</div>} />
            </Routes>
        </div>
    );
};

export default Card;