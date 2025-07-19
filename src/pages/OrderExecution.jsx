import React from 'react'
import ExecutionImportance from '../components/Order-Execution/ExecutionImportance'
import HomeNav from '../components/layout/HomeNav'
import Footer from '../components/layout/Footer'
import MarketExecutionSection from '../components/Order-Execution/MarketExecutionSection'
import OrderExecutionFeatures from '../components/Order-Execution/OrderExecutionFeatures'
import ExecutionTypeSection from '../components/Order-Execution/ExecutionTypeSection'
import FAQSection from '../components/Order-Execution/FAQSection'

const OrderExecution = () => {
  return (
    <div>
      <HomeNav/>
      <MarketExecutionSection/>
      <ExecutionImportance/>
      <ExecutionTypeSection/>
      <OrderExecutionFeatures/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default OrderExecution
