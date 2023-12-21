import { Button } from 'flowbite-react';
import { CiSaveDown2 } from 'react-icons/ci';
import { HiOutlinePrinter } from 'react-icons/hi';

interface cardHeaderProps {
  children?: React.ReactElement;
  title: string;
  download?: boolean;
  print?: boolean;
}
const CardHeader: React.FC<cardHeaderProps> = ({
  children = null,
  title,
  download = true,
  print = false,
}) => {
  return (
    <div className="border w-full rounded-lg py-8 px-6 flex flex-col flex-wrap md:flex-row justify-between items-center gap-4 bg-white cursor-pointer">
      <div className="flex flex-col">
        <h1 className=" text-gray-700 font-bold flex-wrap flex items-center gap-2 text-lg">
          {title}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap  gap-2 center justify-end space-x-2">
        {print ? (
          <Button className="border-2 border-sky text-primary hover:text-white hover:bg-primary">
            <HiOutlinePrinter className="mr-2 h-5 w-5" />
            Imprimer
          </Button>
        ) : (
          <></>
        )}

        {download ? (
          <Button className="bg-primary">
            <CiSaveDown2 className="mr-2 h-5 w-5" />
            Télécharger le rapport
          </Button>
        ) : (
          <></>
        )}

        {children ? children : <></>}
      </div>
    </div>
  );
};

export default CardHeader;
