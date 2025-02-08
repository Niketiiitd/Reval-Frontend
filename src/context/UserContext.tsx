import React, { createContext, useContext, useEffect, useState } from "react";

// Define the User type
interface User {
  email: string | null;
  firstname: string | null;
  lastname: string | null;
}

// Define the context type
interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateUser: (fields: Partial<User>) => void;
  clearUser: () => void;
}

// Initial user state
const initialUser: User = {
  email: null,
  firstname: null,
  lastname: null,
};

// Create context with default values
export const UserContext = createContext<UserContextType>({
  user: initialUser,
  setUser: () => {},
  updateUser: () => {},
  clearUser: () => {},
});

// Custom hook for using the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  // Initialize state with localStorage data if it exists
  const [user, setUser] = useState<User>(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : initialUser;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialUser;
    }
  });

  // Update localStorage whenever user state changes
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [user]);

  // Utility function to update specific user fields
  const updateUser = (fields: Partial<User>) => {
    setUser(currentUser => ({
      ...currentUser,
      ...fields
    }));
  };

  // Utility function to clear user data
  const clearUser = () => {
    setUser(initialUser);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    setUser,
    updateUser,
    clearUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}