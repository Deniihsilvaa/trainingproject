import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Primeira Linha */}
            <div className="col-span-1">
                <Skeleton className="h-[125px] w-full rounded-xl" />
            </div>
            <div className="col-span-2 md:col-span-1">
                <Skeleton className="h-[125px] w-full rounded-xl" />
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
            <div className="col-span-1 md:col-span-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
            </div>
        </div>
    );
}
