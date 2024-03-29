import { Dropdown, Space, Layout, Menu, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../context'

const { Header, Content, Footer } = Layout

interface StandardLayoutProps {
    children?: JSX.Element | JSX.Element[] | string | string[]
}

export const StandardLayout: ({ }: StandardLayoutProps) => JSX.Element = ({
    children = undefined
}: StandardLayoutProps) => {
    const { user }: any = useContext(UserContext)
    const navigate = useNavigate()

    const communityMenu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/discussion')}>
                            Forum
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/shop')}>
                            Buy & Sell
                        </a>
                    ),
                },
            ]}
        />
    );

    if (!user.username || !user.password) {
        return <Navigate to={"/login"} />
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100px', background: '#ffffff', padding: 0, margin: 0 }}>
                <div className="logo" style={{ width: '100%' }} />
                <nav className="static bg-white border-gray-200 h-20">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                        <img onClick={() => navigate('/')} src="../../../logo_full.png" className="cursor-pointer mr-6 h-14" alt="Profile Picture" />
                        <div className="flex items-center">
                            <ul className='flex flex-row'>
                                <li>
                                    <Avatar style={{ backgroundColor: '#00A9EF', verticalAlign: 'middle', marginRight: 10 }} size="large">{(user.username.charAt(0))}</Avatar>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/profile')} className="font-bold text-sm text-blue-600 hover:underline">{user.username}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className=" bg-gray-700 h-15">
                    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                        <div className="flex items-center">
                            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                                <li>
                                    <a onClick={() => navigate('/about')} className="text-white hover:underline" aria-current="page">Why Construct.ly</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/pricing')} className="text-white hover:underline" aria-current="page">Pricing</a>
                                </li>
                                <li>
                                    <Dropdown overlay={communityMenu}>
                                        <a onClick={e => e.preventDefault()}>
                                            <Space className='text-white'>
                                                Community
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </Header>
            <Content className="site-layout" style={{ paddingTop: 60, marginTop: 64 }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Construct.ly ©2022 Created by asepBalon</Footer>
        </Layout>
    )
}