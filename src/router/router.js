import { lazy } from "react";


export const Layout = lazy(() => import('@/layout/layout'))
export const Home = lazy(() => import('@/pages/home/home'))
export const About = lazy(() => import('@/pages/about/about'))
export const Contact = lazy(() => import('@/pages/contact/contact'))
export const Signup = lazy(() => import('@/pages/signup/signup'))
export const Cart = lazy(() => import('@/pages/cart/cart'))
export const Login = lazy(() => import("@/pages/login/login"))
export const Registr = lazy(() => import("@/pages/registr/registr"))