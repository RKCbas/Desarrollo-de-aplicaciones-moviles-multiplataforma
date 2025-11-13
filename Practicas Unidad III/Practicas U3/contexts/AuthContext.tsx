import React, { 
  createContext,  // 1. Para crear el contexto
  useContext,     // 2. Para consumir el contexto
  useState,       // 3. Para el estado del usuario
  ReactNode       // 4. Tipo para children
} from 'react';

interface User {
  email: string;
  name?: string;  // ? = opcional
}

interface AuthContextType {
  user: User | null;           // Usuario actual (o null si no hay sesión)
  login: (email: string) => void;   // Función para iniciar sesión
  logout: () => void;                // Función para cerrar sesión
  isAuthenticated: boolean;          // true si hay usuario logueado
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  
  const [user, setUser] = useState<User | null>(null);
  
  
  const login = (email: string, name?: string) => {
    const newUser: User = { email, name };
    
    setUser(newUser);
    
    // OPCIONAL: Guardar en AsyncStorage para persistencia
    // await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };

  // Función para CERRAR SESIÓN
  const logout = () => {
    setUser(null);
    
    // OPCIONAL: Limpiar AsyncStorage
    // await AsyncStorage.removeItem('user');
  };

  // Empaquetar lo que queremos compartir
  const value: AuthContextType = {
    user,                           // El usuario actual
    login,                          // Función para login
    logout,                         // Función para logout
    isAuthenticated: user !== null, // true si hay usuario
  };

  // Retornar el Provider con el valor
  // Los componentes dentro de {children} tendrán acceso a 'value'
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth(): AuthContextType {
  // Obtener el contexto
  const context = useContext(AuthContext);
  
  // Validar que se esté usando dentro de un Provider
  if (context === undefined) {
    throw new Error(
      'useAuth debe ser usado dentro de un AuthProvider. ' +
      'Asegúrate de envolver tu app con <AuthProvider>'
    );
  }
  
  // Retornar el contexto
  return context;
}