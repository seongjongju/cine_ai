'use client';
import React, { createContext, useContext } from 'react';
import { User } from '@supabase/supabase-js';

const UserContext = createContext<{ user: User | null }>({ user: null });

export const UsersProvider = ({ children, user }: {children: React.ReactNode, user: User | null;}) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);