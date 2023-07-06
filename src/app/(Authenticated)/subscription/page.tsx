import './style.css';

import FormPayment from './components/FormPayment';
function Subscription(): JSX.Element {
  return (
    <main className="subscriptionContainer">
      <div className="subscriptionContent">
        <h1>assinatura</h1>
        <FormPayment />
      </div>
    </main>
  );
}
export default Subscription;
