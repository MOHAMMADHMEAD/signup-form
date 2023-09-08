import React from 'react';
import AccountManagement from "@/components/account-managment";

const Account: React.FC = () => {
    return (
        <div className="flex justify-center min-h-screen flex-col items-center p-4">
            <AccountManagement/>
        </div>
    );
};

export default Account;
