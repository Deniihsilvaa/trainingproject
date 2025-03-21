
import HeaderLandig from '../components/ui/HeaderLandig';

import Footer from '../components/Footer/Footer';
function LayoutPublic( {children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col h-screen">
      <HeaderLandig />
      {children}
      <div className="sticky bottom-0 w-full bg-gray-500">
        <Footer />
      </div>
    </div>
  );
}

export default LayoutPublic;