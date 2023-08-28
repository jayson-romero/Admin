import PageHeading from "../../components/PageHeading"
import FeaturedInfo from "./FeaturedInfo"
import Chart from "./Chart"
import { userData } from "../../dummyData"
import WidgetLg from "./WidgetLg"

const HomeLayout = () => {
  return (
    <>
    <PageHeading tittle="Home"/>
    <FeaturedInfo />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
       <WidgetLg/>
    </div>
    </>
  )
}
export default HomeLayout