import { Skeleton } from '@/components/ui/skeleton';

export default function DashBoard() {
  return (
    <div className="flex flex-col space-y-6 p-4">
      {/* Card de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[150px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[150px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[150px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-[300px] w-full rounded-xl" />
        <Skeleton className="h-[300px] w-full rounded-xl" />
      </div>

      {/* Tabela */}
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-8 w-full rounded-xl" />
        <Skeleton className="h-8 w-[90%] rounded-xl" />
        <Skeleton className="h-8 w-[85%] rounded-xl" />
        <Skeleton className="h-8 w-[75%] rounded-xl" />
        <Skeleton className="h-8 w-[95%] rounded-xl" />
      </div>
    </div>
  );
}
