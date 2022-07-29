import React, { LazyExoticComponent } from 'react'

const LoginPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Users/Login').then((module) => ({
        default: module.Login
    }))
)

const HomePage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Homepage/Homepage').then((module) => ({
        default: module.Homepage
    }))
)

const RegisterPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Users/Register').then((module) => ({
        default: module.Register
    }))
)

const ProfilePage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Profiles/Profile').then((module) => ({
        default: module.Profile
    }))
)

const UnderConstructionPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Templates/UnderConstruction').then((module) => ({
        default: module.UnderConstruction
    }))
)

const ErrorPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Templates/Error').then((module) => ({
        default: module.Error
    }))
)

interface PageRouting {
    path: string
    component: LazyExoticComponent<any>
}

export const Routing: PageRouting[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/profile/edit',
        component: UnderConstructionPage
    },
    {
        path: '/plan',
        component: UnderConstructionPage
    },
    {
        path: '/discussion',
        component: UnderConstructionPage
    },
    {
        path: '/shop',
        component: UnderConstructionPage
    },
    {
        path: '/recover',
        component: UnderConstructionPage
    },
    {
        path: '/agreement',
        component: UnderConstructionPage
    },
    {
        path: '*',
        component: ErrorPage
    }
]