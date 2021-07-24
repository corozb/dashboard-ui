import { userData } from '../../dummyData'
import Chart from '../../components/Chart/Chart'
import FeatureInfo from '../../components/FeaturedInfo/FeatureInfo'

import './Home.css'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

function Home() {
  return (
    <div className='home'>
      <FeatureInfo />
      <Chart title='Sales Analytics' data={userData} dataKey='Active User' grid />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
