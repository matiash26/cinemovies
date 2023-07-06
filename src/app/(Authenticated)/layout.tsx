import CheckRoute from '../routes/CheckRoute';
import PageLayouts from '@/layouts/PageLayouts';
import UserProvider from '@/context/userContext';
function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | undefined {
  return (
    <UserProvider>
      <CheckRoute>
        <PageLayouts>{children}</PageLayouts>
      </CheckRoute>
    </UserProvider>
  );
}

export default LayoutAuth;
