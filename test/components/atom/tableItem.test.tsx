import React from 'react';
import { render } from '@testing-library/react';
import TableItems from '@/components/atom/tableItem';
import { GridColumnGroupingModel } from '@mui/x-data-grid';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

describe('TableItems Component', () => {
  test('Renders without errors', () => {
    const data = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 30 },
    ];

    const columns = [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'age', headerName: 'Age' },
    ];

    const groups: GridColumnGroupingModel = [];

    render(
      <SessionProvider
        session={{
          user: { data: { userId: 'random123' } } as UserType,
          expires: '',
        }}
      >
        <TableItems
          data={data}
          columns={columns}
          groups={groups}
          currentPage={'0'}
        />
      </SessionProvider>,
    );
  });
});
