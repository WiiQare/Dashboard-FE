import { useStepContext } from '@/context/StepContext';
import React, { useContext } from 'react';
import Identity from './forms/Identity';
import Payment from './forms/Payment';
import Send from './forms/Send';

const Step: React.FC = () => {
  const { activeStepIndex } = useStepContext();
  let stepContent;

  switch (activeStepIndex) {
    case 0:
      stepContent = <Identity />;
      break;

    case 1:
      stepContent = <Payment />;
      break;
    case 2:
      stepContent = <Send />;
      break;
    default:
      break;
  }

  return stepContent;
};

export default Step;
