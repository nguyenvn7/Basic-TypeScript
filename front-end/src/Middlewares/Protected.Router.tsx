import { useEffect, useState } from 'react';

type protect = 'role' | 'login';

export function ProtectedRouter({ children }: { children: JSX.Element }) {
  const [isAllowed, setIsAllowed] = useState('waiting');

  useEffect(() => {}, []);
  if (isAllowed === 'waiting') {
    return <div>Loading</div>;
  }
  return children;
}
