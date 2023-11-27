import { useSelector } from "react-redux";
import { Input, Table } from 'antd';
const Payment = () => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
            <p>Địa chỉ nhận hàng</p>
            <div className="flex gap-[10px]" style={{ marginBottom: '14px' }}>
                <Input placeholder="Họ và tên"></Input>
                <Input placeholder="Số điện thoại"></Input>
            </div>
            <div>
                <Input placeholder="Địa chỉ"></Input>
            </div>
        </div>
        <div></div>
    </div>
}

export default Payment;