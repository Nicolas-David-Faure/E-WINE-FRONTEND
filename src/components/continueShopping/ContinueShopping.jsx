import React, { useState } from 'react'
//styles
import './scss/continueShopping.scss'
//components
import PurchaseSummary from './PurchaseSummary'
import ChooseAddress from './ChooseAddress'
import ChoosePaymentMethod from './ChoosePaymentMethod'
import ConfirmDetails from './ConfirmDetails'
import ThanksForYourPurcharse from './ThanksForYourPurcharse'


const ContinueShopping = () => {
  const [ phaseContinueShopping , setPhaseContinueShopping ] = useState(0)
  const handleContinue = ( bolean )=>{
    if(bolean){
      setPhaseContinueShopping(phaseContinueShopping + 1)
    }else if(phaseContinueShopping >= 1){
      setPhaseContinueShopping(phaseContinueShopping - 1)
    }

  }
  const renderComponenets = {
    '0': <ChooseAddress setContinue={handleContinue} />,
    '1': <ChoosePaymentMethod  setContinue={handleContinue}/>,
    '2': <ConfirmDetails setContinue={setPhaseContinueShopping} />,
    '3': <ThanksForYourPurcharse />
  }
  return (
    <section className='continueShopping__main'>
      {renderComponenets[phaseContinueShopping]}
      {phaseContinueShopping !== 3 && <PurchaseSummary setContinue={handleContinue} phaseContinueShopping={phaseContinueShopping} /> }
    </section>
  )
}

export default ContinueShopping
