import { Skeleton } from '@/components/ui/skeleton';

export default function Users() {
  return (
    <div className="flex flex-col space-y-6 p-4">
      {/* Seção para Criar/Editar Usuários */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        {/* Botões para ações */}
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>

      {/* Tabela de Usuários */}
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-10 w-full rounded-xl" /> {/* Título da tabela */}

        <div className="space-y-2">
          {/* Tabela de Dados */}
          <Skeleton className="h-8 w-full rounded-xl" />
          <Skeleton className="h-8 w-[90%] rounded-xl" />
          <Skeleton className="h-8 w-[85%] rounded-xl" />
          <Skeleton className="h-8 w-[95%] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
