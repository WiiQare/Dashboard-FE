
import { GetStaticProps, NextPage } from 'next'
import IData from '../../components/atom/interface/data'

interface IProps {
  data: IData
}

const DataPage: NextPage<IProps> = ({ data }) => {
  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Registration Date</th>
            <th>Language</th>
            <th>Purchased Vouchers</th>
            <th>Beneficiaries Vouchers</th>
            <th>Unspent Vouchers</th>
            <th>Open Vouchers</th>
            <th>Redeemed Vouchers</th>
          </tr>
        </thead>
        <tbody>
          {data.record.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.country}</td>
              <td>{record.registrationDate}</td>
              <td>{record.language}</td>
              <td>{record.purchasedVouchers}</td>
              <td>{record.beneficiariesVouchers}</td>
              <td>{record.unspentVouchers}</td>
              <td>{record.openVouchers}</td>
              <td>{record.redeemedVouchers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const res = await fetch('/data.json')
  const data: IData = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default DataPage
