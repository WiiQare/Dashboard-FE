import React, { useEffect, useState } from 'react';
import Pagination from '@/components/atom/pagination';
import Content from '@/components/compounds/content';
import { useSession } from 'next-auth/react';
import { fetchData } from '@/pages/api/fetchData';
import { UserType } from '@/Interfaces/interfaces';
import PageSkeleton from '../molecules/pageSkeleton';

interface PageLayoutProps {
  columns: any[];
  CardsData: (summary: any) => any;
  columnGroupingModel: any;
  endpoint: string;
  itemNumberEndpoint: string;
  summaryEndpoint: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  columns,
  CardsData,
  columnGroupingModel,
  endpoint,
  summaryEndpoint,
  itemNumberEndpoint,
}) => {
  const { data: session } = useSession();
  const userState = session?.user as UserType;
  const [tableData, setTableData] = useState<any>(null);
  const [summary, setSummary] = useState<any>();
  const [numOfItems, setNumOfItems] = useState<number>(0);
  const [cardData, setCardData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>();
  const [showLoader, setShowLoader] = useState(true);
  const [accessToken, setAccessToken] = useState<string>('');

  const take = 10;
  const skip = 0;

  useEffect(() => {
    // Set the access token when userState is available
    if (userState?.id) {
      setAccessToken(userState.id);
    }
  }, [userState]);

  useEffect(() => {
    if (accessToken) {
      const fetchDataAsync = async () => {
        const res = await fetchData(endpoint, accessToken, take, skip);
        const summaryData = await fetchData(summaryEndpoint, accessToken);
        setTableData(res);
        setSummary(summaryData);
        setShowLoader(false);
      };

      fetchDataAsync();
    }
  }, [accessToken, endpoint, summaryEndpoint]);

  useEffect(() => {
    if (summary) {
      setCardData(CardsData(summary));
      setNumOfItems(summary[itemNumberEndpoint]);
    }
  }, [CardsData, itemNumberEndpoint, summary]);

  const handlePageChange = async (page: number) => {
    if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
      setCurrentPage(page);
      const newSkip = (page - 1) * take;
      const res = await fetchData(endpoint, accessToken, take, newSkip);
      setTableData(res);
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newPageSize = parseInt(event.target.value);
    setPageSize(newPageSize);

    fetchData(endpoint, accessToken, newPageSize, 0).then((res) => {
      setTableData(res);
      setCurrentPage(1);
    });
  };

  useEffect(() => {
    if (tableData && summary) {
      setTimeout(() => {
        setShowLoader(false);
      }, 25);
    }
  }, [summary, tableData]);
  if (showLoader) {
    //  console.log(tableData)
    return <PageSkeleton number={6} row={10} />;
  }

  return (
    <div>
      <Content
        columns={columns}
        data={tableData}
        cardsData={cardData}
        {...(columnGroupingModel && { groups: columnGroupingModel })}
        currentPage={'payers'}
      >
        <div className="flex items-center justify-end mt-3 mr-2">
          <div>
            <div className="flex items-center mt-3 mr-2">
              <div className="mr-4">
                <label htmlFor="pageSize">Items per Page:</label>
                <select
                  id="pageSize"
                  className="ml-2 p-1 border border-gray-300 rounded"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
              </div>
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(numOfItems / take)}
            onPageChange={handlePageChange}
          />
        </div>
      </Content>
    </div>
  );
};

export default PageLayout;
