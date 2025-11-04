import { Input } from '@/common/components/shadcn-ui/input';
import { Search } from 'lucide-react';

const SearchBlog = () => {
  return (
    <div className="border-darysa-gris-350-alt/60 flex w-full flex-1 items-center rounded-lg border bg-white p-3.5 lg:p-6">
      <Input
        type="text"
        placeholder="Buscar por palabra clave"
        className="h-12 rounded-l-lg rounded-r-none border pl-4 text-sm placeholder:font-semibold"
      />
      <span className="bg-darysa-amarillo flex aspect-square size-12 items-center justify-center rounded-r-lg text-white">
        <Search className="h-5 w-5" />
      </span>
    </div>
  );
};

export default SearchBlog;
