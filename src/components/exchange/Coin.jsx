import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import ForexPair from './forex_pair';
import CfdPair from './cfd_pair';
import CyptoPair from './crypto_pair';
import StockPair from './stock_pair';
import { useEffect, useState } from 'react';

const Coin = ({
  formFields,
  sellForm,
  setFormFields,
  setSellForm,
  selectedOption,
  setSelectedOption,
  buyFormRef,
  sellFormRef,
}) => {
  const [activeOption, setActiveOption] = useState(selectedOption);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setActiveOption(value);
  };

  useEffect(() => {
    if (selectedOption && selectedOption !== activeOption) {
      setActiveOption(selectedOption);
    }
  }, [selectedOption]);

  const renderForm = () => {
    switch (activeOption) {
      case 'Forex Pairs':
        return <ForexPair {...commonProps} />;
      case 'Crypto Pairs':
        return <CyptoPair {...commonProps} />;
      case 'Cdf Pairs':
        return <CfdPair {...commonProps} />;
      case 'Stocks Pairs':
        return <StockPair {...commonProps} />;
      default:
        return null;
    }
  };

  const commonProps = {
    formFields,
    sellForm,
    setFormFields,
    setSellForm,
    selectedOption: activeOption,
    setSelectedOption,
    buyFormRef,
    sellFormRef,
  };

  return (
    <div className="w-full col-span-12 p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#e6f8ef] border border-green-200 shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
      <Tab.Group>
        <Tab.Panels className="mt-4">
          <Tab.Panel
            className="transition-all duration-500 ease-in-out animate-fade-in"
          >
            <h5 className="text-center mb-6 text-base sm:text-lg font-semibold text-[#142528]">
              {activeOption === ''
                ? 'Choose Trading Pairs'
                : `Your Chosen Trading Pair: ${activeOption}`}
            </h5>

            <div className="relative mb-8">
              <select
                className="w-full px-4 py-3 text-sm sm:text-base text-[#3f6870] bg-white border border-green-300 focus:ring-2 focus:ring-[#07A658] focus:outline-none rounded-md transition-all duration-300 ease-in-out"
                name="trading"
                id="marketOrderSelect"
                value={activeOption}
                onChange={handleChange}
              >
                <option value="">Choose Trading Pairs</option>
                <option value="Forex Pairs">Trade Forex</option>
                <option value="Crypto Pairs">Trade Crypto</option>
                <option value="Cdf Pairs">Trade CFD</option>
                <option value="Stocks Pairs">Trade Stocks</option>
              </select>
            </div>

            <div className="transition-all duration-500 ease-in-out animate-slide-up">
              {renderForm()}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

Coin.propTypes = {
  formFields: PropTypes.object.isRequired,
  sellForm: PropTypes.object.isRequired,
  setFormFields: PropTypes.func.isRequired,
  setSellForm: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  buyFormRef: PropTypes.object.isRequired,
  sellFormRef: PropTypes.object.isRequired,
};

export default Coin;
