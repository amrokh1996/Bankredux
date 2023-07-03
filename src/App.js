import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './actions';
import { useEffect, useState } from 'react';
import AccountForm from './AccountForm';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    handleAddData()
  },[])

  const [state, setState] = useState({
    numberOfAccounts: 2,
    accounts: [
      { id: 1, name: 'amro alkhazaleh',accountNumber:"45124",email:"amro@gmail.com"},
      { id: 2, name: 'yazeed alkhazaleh',accountNumber:"45612",email:"yazeed@gmail.com"},
    ],
  });

  const addAccount = (name,accountNumber,email) => {
    const newAccount = {
      id: state.numberOfAccounts + 1,
      name: name,
      accountNumber:accountNumber,
      email:email
    };

    setState((prevState) => ({
      numberOfAccounts: prevState.numberOfAccounts + 1,
      accounts: [...prevState.accounts, newAccount],
    }));
  };

  const deleteAccount = (id) => {
    setState((prevState) => ({
      numberOfAccounts: prevState.numberOfAccounts - 1,
      accounts: prevState.accounts.filter((account) => account.id !== id),
    }));
  };

  // Selects the state value from the store.
  const data = useSelector((state) => state.data.data?.products);

  // Dispatches action to add the data
  const handleAddData = () => dispatch(addData());

  // Dispatches action to delete the data.
  

  return (
    <div>
      <h1>Bank App</h1>
<div className='d-flex justify-content-center'>
<AccountForm className=" h-75" addAccount={addAccount} />
</div>

      <table class="table table-striped">
      <thead>
        <tr className="bg-gray-200">
          <th scope="col">ID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Account Number</th>
          <th scope="col">Eamil</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {state.accounts.map(account => (
          <tr key={account.id} className="hover:bg-gray-100">
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.accountNumber}</td>
            <td>{account.email}</td>
            <td>
              <button
                onClick={() => deleteAccount(account.id)}
                className="bg-danger text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>



      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item carousel-item active d-flex flex-wrap">
                  {data?.map((data) => (
                    <div className="col-sm-3 m-5">
                      <div className="thumb-wrapper">
                        <span className="wish-icon">
                          <i className="fa fa-heart-o" />
                        </span>
                        <div className="img-box">
                          <img src={data?.images[0]} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Apple iPad</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star" />
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o" />
                              </li>
                            </ul>
                          </div>
                          <p className="item-price">
                            <strike>$400.00</strike> <b>$369.00</b>
                          </p>
                          <a href="#" className="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
