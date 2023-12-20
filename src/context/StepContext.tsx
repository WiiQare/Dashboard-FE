import React, { createContext, useContext } from 'react';

// Interface pour définir le type de données stockées dans le contexte
export interface StepContextData {
  activeStepIndex: number;
  setActiveStepIndex: (id: number) => void;
  formData?: Object;
  setFormData: (data: Object) => void;
}

// Créez le contexte en utilisant createContext avec une valeur par défaut
const StepContext = createContext<StepContextData | undefined>(undefined);

// Créez un hook personnalisé pour accéder au contexte plus facilement dans vos composants
const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error(
      "useMyContext doit être utilisé à l'intérieur de MyContextProvider",
    );
  }
  return context;
};

// Exportez le contexte et le hook personnalisé pour une utilisation facile
export { StepContext, useStepContext };
