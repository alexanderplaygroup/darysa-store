import { useState } from 'react';

export function useCheckoutSteps(stepIds: string[]) {
  const [openSections, setOpenSections] = useState<string[]>([stepIds[0]]);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [editingStep, setEditingStep] = useState<string | null>(null);

  const completeStep = (id: string) => {
    if (!completedSteps.includes(id)) {
      setCompletedSteps((prev) => [...prev, id]);
    }
    setEditingStep(null);
  };

  const goToNextStep = (id: string) => {
    const index = stepIds.indexOf(id);
    const nextStep = stepIds[index + 1];
    if (nextStep) {
      setOpenSections((prev) => Array.from(new Set([...prev, nextStep])));
    }
  };

  const editStep = (id: string) => {
    setEditingStep(id);
    // ✅ abre automáticamente el acordeón del paso a editar
    setOpenSections((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const isCompleted = (id: string) => completedSteps.includes(id);
  const isEditing = (id: string) => editingStep === id;

  return {
    openSections,
    setOpenSections,
    completedSteps,
    completeStep,
    goToNextStep,
    editStep,
    isCompleted,
    isEditing,
  };
}
