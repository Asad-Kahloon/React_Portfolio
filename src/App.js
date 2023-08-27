
import './App.css';



// Expense Tracker Start

// import AddTransaction from './expense_tracker/components/AddTransaction';
// import Balance from './expense_tracker/components/Balance';
// import Header from './expense_tracker/components/Header';
// import IncomeExpenses from './expense_tracker/components/IncomeExpenses';
// import TransactionList from './expense_tracker/components/TransactionList';

// import { GlobalProvider } from './expense_tracker/context/GlobalState';

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className='container'>
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />
//       </div>
//     </GlobalProvider>

//   );
// }

// export default App;

// Expense Tracker End









// Pagination Starts

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Posts from './pagination/Posts';
// import Pagination from './pagination/Pagination';


// export default function App() {

//   const [posts , setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(5);


//   useEffect(()=>{
//     const fetchPosts = async () =>{
//       setLoading(true);
//       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(res.data);
//       setLoading(false);
//     }
//     fetchPosts();
//   },[]);

//   //Get Current Posts
//   const indexOfLastPost = currentPage - postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   //Change Page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber)



//   return (
//     <div className='container mt-5'>
//       <h1 className='text-primary mb-3'>My Blog</h1>
//         <Posts posts={currentPosts} loading={loading} />
//       <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
//     </div>
//   )
// }

// Pagination Ends






// Landing Page Start


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./landing_page/components/Header";
// import Home from "./landing_page/components/Home";
// import Footer from "./landing_page/components/Footer";
// import Services from "./landing_page/components/Services";
// import Contact from "./landing_page/components/Contact";

// import "./landing_page/styles/App.css";
// import "./landing_page/styles/header.css";
// import "./landing_page/styles/home.css";
// import "./landing_page/styles/footer.css";
// import "./landing_page/styles/contact.css";
// import "./landing_page/styles/mediaquery.css";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// Landing Page End





import React from 'react'
import Navbar from './portfolio/components/navbar/Navbar.jsx'
import PageContent from './portfolio/components/pagecontent/PageContent';
import About from './portfolio/components/about/About';


export default function App() {
  return (
    <appBody className="w3-black">
      <Navbar />
      <div className="w3-padding-large" id="main">
        <PageContent />
        <About/>
      </div>
    </appBody>

  )
}
