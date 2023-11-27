import { formatCurrency } from "../../../utils/convertPrice";
const CartItem = ({ item }) => {
    return <div className="flex" style={{ padding: '8px 0', borderTop: '1px solid #ddd', borderBottom: '2px solid #ddd', }}>
        <div style={{ width: '98px', height: '98px', marginRight: '12px' }}>
            <img src={item?.productDTO.images[0]} alt='ima' style={{ marginRight: '12px', width: '100%', height: '100%', borderRadius: '12px', objectFit: 'contain', border: '1px solid #e2e2e2' }}></img>
        </div>
        <div style={{ width: '50%' }}>
            <p style={{ fontWeight: '600' }}>{item?.amount} x {item?.productDTO?.name} </p>
            <div>
                <p style={{ fontSize: '14px', marginTop: '14px' }}>Xóa</p>
            </div>
        </div>

        <div style={{ fontSize: '12px' }}>
            <p style={{ color: '#df494a', fontSize: '12px', fontWeight: '600' }}>{formatCurrency(item?.productDTO?.price - (item?.productDTO?.price * item?.productDTO?.saleOff) / 100)} VNĐ</p>
            <p style={{ color: '#444', fontSize: '12px', textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: '600' }}>{formatCurrency(item?.productDTO?.price)} VNĐ</p>
        </div>
    </div>
}

export default CartItem;