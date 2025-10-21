import { AppImage } from '@/common/components/custom-ui/AppImage';
import { parseSoles } from '@/common/helpers/product';
import { Button } from '@shadcnui/button';
import { CircleXIcon, MinusIcon, PencilIcon, PlusIcon } from 'lucide-react';
import { FC, Fragment } from 'react';

interface ProductItemCarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product?: any;
  handleRemoveProduct?: (productId: string) => void;
  handleUpdateAmount?: (productId: string, quantity: number) => void;
}

export const ProductItemCart: FC<ProductItemCarProps> = ({
  product,
  handleRemoveProduct,
  handleUpdateAmount,
}) => {
  const handleEditProduct = (slug: string, color: string, size: string) => {
    console.log('asdsa');
  };

  return (
    <Fragment>
      <div className="flex gap-4 py-5 pr-2 pl-2 lg:py-8 lg:pr-9 lg:pl-6">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative aspect-square w-[100px]">
            <AppImage src={'/images/product-item.png'} alt="Empty Cart" fill sizes="100px" />
          </div>

          {/* Etiqueta de descuento sobre la imagen */}
          {product.inPromotion && (
            <div className="bg-darysa-green-500 absolute top-0 left-0 z-10 w-full px-2 py-0.5 text-center text-[10px] font-semibold text-white shadow">
              ¡En promoción!
            </div>
          )}
        </div>
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col justify-between">
            <h3 className="text-darysa-gris-950 line-clamp-1 text-sm font-bold lg:text-xl">
              {product.name}
            </h3>
            <p className="text-brand-black text-xs lg:text-sm">
              SKU: <span className="">{product.sku}</span>
            </p>
            <div className="flex items-end justify-between">
              <div className="flex">
                <Button variant="default" size="icon" className="h-6 w-6 rounded-sm lg:h-8 lg:w-10">
                  <MinusIcon />
                </Button>
                <span className="border-brand-black mx-1 flex h-6 items-center justify-center rounded-sm border px-2 text-sm font-bold lg:h-8 lg:px-4 lg:text-lg">
                  {product.quantity}
                </span>
                <Button variant="default" size="icon" className="h-6 w-6 rounded-sm lg:h-8 lg:w-10">
                  <PlusIcon />
                </Button>
              </div>
              {/* <p className="text-brand-black font-bold text-base lg:text-lg">
                {parseSoles(product?.priceTotal)}
              </p> */}
              <div className="flex flex-col items-end">
                {product.inPromotion && (
                  <div className="flex w-full items-center justify-between gap-2">
                    <p className="text-brand-gray text-xs font-medium line-through lg:text-sm">
                      {parseSoles(product.originalPrice)}
                    </p>
                    <span className="bg-brand-red rounded px-1.5 py-1 text-xs text-white">
                      -{product.discount}%
                    </span>
                  </div>
                )}
                <p className="text-brand-black text-sm font-semibold md:text-base lg:text-lg">
                  {parseSoles(product.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <CircleXIcon size={24} className="text-brand-red cursor-pointer" />
          <div
            onClick={() => handleEditProduct(product.slug, product.color, product.size)}
            className="border-brand-black mt-2 cursor-pointer rounded-full border-2 p-1"
          >
            <PencilIcon className="text-brand-black" size={12} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
