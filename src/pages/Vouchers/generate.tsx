import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CardHeader from '@/components/atom/card/header';
import Stepper from '@/components/atom/stepper';
import { StepContext, StepContextData } from '@/context/StepContext';
import Step from '@/components/atom/stepper/step';

const Generate = () => {
  const { step, redirect_status } = useRouter().query;

  const [activeStepIndex, setActiveStepIndex] = useState(
    step == 'end' && redirect_status == 'succeeded' ? 2 : step == '1' ? 1 : 0,
  );
  const [formData, setFormData] = useState({});

  const contextValue: StepContextData = {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
  };

  return (
    <>
      <Head>
        <title>Générer un pass santé</title>
      </Head>
      <div className="flex flex-col w-full gap-4 p-2 space-y-6 md:py-8 md:px-6">
        <CardHeader
          title={'Générer un pass santé'}
          download={false}
          print={false}
        />

        <section className="w-full pb-20 md:pb-0">
          <div className="w-full overflow-hidden md:col-span-2 rounded-lg py-8 flex flex-col gap-6 bg-white drop-shadow-sm">
            <div className="px-8 space-y-8">
              <div>
                <h2 className="font-semibold text-xl">Générer un pass santé</h2>
              </div>
              <div className="flex flex-col gap-4">
                <StepContext.Provider value={contextValue}>
                  <div className="flex flex-col items-center justify-start">
                    <Stepper />
                    <Step />
                  </div>
                </StepContext.Provider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Generate;
