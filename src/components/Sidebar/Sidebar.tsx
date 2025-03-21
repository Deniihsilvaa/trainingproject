import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Função do ShadCN para mesclar classes Tailwind
import { LayoutDashboard, Users, Settings, Menu, X, FileText } from "lucide-react"; // Ícones

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div className="flex z-1000">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-gray-900 text-white w-54 h-screen fixed top-0 left-0 transform transition-transform z-1000",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Meu Painel</h1>
        </div>

        {/* Menu Principal */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/usuarios"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800"
              >
                <Users className="w-5 h-5" />
                <span>Usuários</span>
              </Link>
            </li>
            <li>
              <Link
                to="/request"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800"
              >
                <FileText className="w-5 h-5" />
                <span>Relatórios #</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Seção de Configurações (Posicionada no final) */}
        <div className="mt-auto">
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/configuracoes"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800"
                >
                  <Settings className="w-5 h-5" />
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay para fechar o menu no mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
