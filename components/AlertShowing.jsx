"use client"
import { useState, useEffect } from 'react';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { Check } from "lucide-react";

const AlertShowing = ({ showAlert }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000); 

      return () => clearTimeout(timeout); 
    }
  }, [showAlert]);

  return (
    <>
      {visible && (
        <Alert className="mt-5 text-green-600 border border-green-600">
          <Check className="delay-75 w-4 h-4 text-green-600" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your operation was successful.</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default AlertShowing;
