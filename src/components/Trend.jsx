import Trends from './Trends';
import { comptes, TrendsTable } from './TrendsTable';


function Trend() {
  return (
    <div className='sidebar-right'>
      <Trends props={TrendsTable} table={comptes} />
    </div>
  )
}
export default Trend;