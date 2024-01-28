import TestNavbar from "../_components/test-navbar";


interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div>
      <TestNavbar />
      {children}
    </div>
   );
}
 
export default ProtectedLayout;