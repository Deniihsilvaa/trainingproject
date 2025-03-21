import { useState } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

function LayoutAdmin() {
  const [isOpen, setIsOpen] = useState(true); // Estado para abrir/fechar a sidebar

  return (
    <div className="flex h-screen overflow-hidden w-full gap-2">
      <div className={`transition-all duration-300 ${isOpen ? "w-52" : "w-0"}`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className={`flex flex-col flex-1 ${isOpen ? "w-64" : "w-0"} p-3`}>
        {/* Header sempre visível */}
        <div className="sticky top-0 ">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* Conteúdo principal ocupando o espaço disponível */}
        <main className={`flex-1 p-4 overflow-auto w-full bg-gray-500 rounded`}>
          <Outlet />
        </main>
        {/* Footer */}
        <div className="sticky bottom-0 w-full bg-gray-500">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
