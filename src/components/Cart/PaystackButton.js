import React from 'react'
import { usePaystackPayment, PaystackButton as PayStackButton_New, PaystackConsumer } from 'react-paystack';
import {ShopConsumer} from '../../Context'



// const PaystackHookExample = () => {
//     const initializePayment = usePaystackPayment(config);
//     return (
//         <div>
//             <button onClick={() => {
//                 initializePayment()
//             }}>Paystack Hooks Implementation</button>
//         </div>
//     );
// };

function PaystackButton({email, total, clearCart}) {
    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: total,
        publicKey: process.env.REACT_APP_PayStack_APP_ID,
    };
    console.log(process.env.REACT_APP_PayStack_APP_ID)

const successfulPayment = ()=> {
    console.log("payment successful")
    clearCart()
}

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: () => successfulPayment(),
        onClose: () => null
    };

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <PaystackHookExample /> */}
        {/* <PayStackButton_New {...componentProps} /> */}
        <PaystackConsumer {...componentProps} >
            {({initializePayment}) => <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
        </PaystackConsumer>
    </div>
  );
}

export default PaystackButton;
