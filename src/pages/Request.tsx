
import { Skeleton } from '@/components/ui/skeleton';
export default function Request() {
  return (
    <div className="grid grid-cols-3 gap-4">
    {/* Primeira Linha */}
    <div className="col-span-1">
        <Skeleton className="h-[50px] w-full rounded-xl" />
    </div>
    <div className="col-span-2">
        <Skeleton className="h-[50px] w-full rounded-xl" />
    </div>

    {/* Segunda Linha */}
    <div className="col-span-1">
        <Skeleton className="h-[125px] w-full rounded-xl" />
    </div>
    <div className="col-span-1">
        <Skeleton className="h-[125px] w-full rounded-xl" />
    </div>
    <div className="col-span-1">
        <Skeleton className="h-[125px] w-full rounded-xl" />
    </div>

    {/* Terceira Linha ocupando as 3 colunas */}
    <div className="col-span-3">
        <Skeleton className="h-[225px] w-full rounded-xl" />
    </div>
</div>
  );
}