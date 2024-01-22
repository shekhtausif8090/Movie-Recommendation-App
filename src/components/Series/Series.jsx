import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import FetchSeries from '../Fetch-data/FetchSeries';
import Card from '../Card/Card';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';

function Series() {
  const [pageNo, setPageNo] = React.useState(1);
  const { isLoading, isError, data } = useQuery({
    queryKey: ['series', pageNo],
    queryFn: FetchSeries,
  });
  const queryClient = useQueryClient();

  console.log(data);

  React.useEffect(() => {
    async function FetchBefore() {
      const nextPage = pageNo + 1;
      await queryClient.prefetchQuery({
        queryKey: ['series', nextPage],
        queryFn: () => FetchSeries(nextPage),
      });
      console.log(nextPage);
    }

    FetchBefore();
  }, [pageNo, queryClient]);

  if (isLoading) {
    return <Spinner size={36} />;
  }
  console.log(data);
  return (
    <>
      <Card result={data.results} series="series"></Card>
      <Wrapper>
        <Button
          onClick={() => setPageNo(pageNo - 1)}
          disabled={pageNo === 1}
        >
          <ChevronsLeft />
        </Button>
        {/* <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <span>...</span> */}
        <Button onClick={() => setPageNo(pageNo + 1)}>
          <ChevronsRight />
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 36px;
`;
const Button = styled.button`
  padding: 0 12px;
  width: fit-content;
  border: transparent;
  background-color: transparent;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export default Series;
