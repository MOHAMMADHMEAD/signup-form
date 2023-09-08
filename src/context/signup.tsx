import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserModel {
    id?: number;
    email: string;
    password: string;
    dob?: string;
    subscribe?: Boolean;
}

interface DataContextProps {
    users: UserModel[];
    currentUser: UserModel|null;
    addUser: (user: UserModel) => void;
    isUserExist: (user: UserModel) => boolean;
    removeCurrentUser: () => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<UserModel[]>(() => {
        // Load data from session storage, or use a default value
        if (typeof sessionStorage !== 'undefined') {
            const storedData = sessionStorage.getItem('usersData');
            return storedData ? JSON.parse(storedData) : [];
        } else {
            return [];
        }
    });

    const [currentUser,setUser]=useState<UserModel|null>(()=>{
        if (typeof sessionStorage !== 'undefined') {
            const storedData = sessionStorage.getItem('userData');
            return storedData ? JSON.parse(storedData) : {};
        } else {
            return {};
        }
    })

    const addUser = (user: UserModel) => {
        user.id = Date.now();
        setUsers([...users, user]);
        setUser(user)

        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('usersData', JSON.stringify([...users, user]));
            sessionStorage.setItem('userData', JSON.stringify(user));
        }
    };

    const isUserExist = (user: UserModel): boolean => {
        let index= users.findIndex(
            (savedUser) => savedUser.email === user.email && savedUser.password === user.password
        );

        if(index!== -1){
            setUser(users[index])
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem('userData', JSON.stringify(user));
            }
            return true
        }else{
            return false
        }
    };
    const removeCurrentUser = (): void => {
        setUser(null)
        sessionStorage.removeItem('userData');
    };

    return (
        <DataContext.Provider value={{ users,currentUser, addUser, isUserExist,removeCurrentUser}}>
            {children}
        </DataContext.Provider>
    );
};
