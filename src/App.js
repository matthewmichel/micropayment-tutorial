import logo from './logo.svg';
import './App.css';
import { PaymentCard } from '@crumb-app/crumb-react'
import { useState } from 'react'

function App() {

  const [paid, setPaid] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {
          paid ?
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
            <div className="row w-100 d-flex flex-row justify-content-center">
              <div className="col-sm-12 col-lg-6">
                <PaymentCard
                  apiKey="VVaKSzdW7i8vdTmGxzmy1jHQfTpekgt7zf7EriXa"
                  productId="749c1dde-0f86-4b7a-a6d3-a236973cfd3e"
                  onSuccess={() => {
                    setPaid(true)
                  }}
                  onError={(err) => {
                    console.log(err)
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
