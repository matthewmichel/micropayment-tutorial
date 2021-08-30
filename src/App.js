import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import { PaymentCard } from '@crumb-app/crumb-react'

function App() {

  const [paymentSuccessful, setPaymentSuccessful] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {
          paymentSuccessful ?
            <>
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
            </>
            :
            <div className="row w-100 flex-row justify-content-center align-items-center">
              <div className="col-sm-12 col-lg-4">
                <PaymentCard
                  apiKey="Cpwqm1zake5IKEV0L4ivW8KBOmBn4OqOaQo7cYxj"
                  productId="5396ecb3-428e-40cd-b676-c66bed15371c"
                  onSuccess={(res) => {
                    setPaymentSuccessful(true)
                  }}
                  onError={(err) => {
                    console.error(err)
                  }}
                />
              </div>
            </div>
        }

      </header>
    </div>
  );
}

export default App;
