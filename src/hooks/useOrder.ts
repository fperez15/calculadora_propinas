import { useState } from "react"
import type { OrderItem } from "../types"
import { OrderItem } from '../types/index';


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [total, setTotal] = useState(0)
    const [auth, setAuth] = useState(false)

    
    return {

    }
}