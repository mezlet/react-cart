import React from 'react';
import { toast } from 'react-toastify';


const useToaster = () => {
    return {
        showError: (message) => toast.error(message),
        showSuccess: (message) => toast.success(message)
    }
}

export default useToaster
