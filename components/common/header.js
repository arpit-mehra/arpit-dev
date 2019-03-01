import { Layout, Menu,Avatar } from 'antd';
import '../../styles/app.css'

const { Header} = Layout;


const HeaderComponent = () => (
    <div>
        <Header>
            <h1 className="headerName" >Arpit Mehra</h1>
        </Header>
    </div>
);

export default HeaderComponent