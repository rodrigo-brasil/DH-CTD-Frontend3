import { BrowserRouter, Routes, Route } from "react-router-dom"
import ViaCep from '../pages/ViaCep'
import  BrasilApi from '../pages/BrasilApi'
import  Home from '../pages/Home'
import  NotFound from '../pages/NotFound'


export default function RouteList() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/viacep" element={<ViaCep />} />
                <Route path="/brasilapi" element={<BrasilApi />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}