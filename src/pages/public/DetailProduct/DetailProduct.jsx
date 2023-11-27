import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductApi from "../../../api/ProductApi";
import ImageGallery from "react-image-gallery";
import "./DetailProduct.scss";
import { CiStar } from "react-icons/ci";
import { formatCurrency } from "../../../utils/convertPrice";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { InputNumber } from 'antd';
import { CiHeart } from "react-icons/ci";
import CartApi from "../../../api/CartApi";
import { fetchCart } from "../../../store/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const DetailProduct = () => {
    const [product, setProduct] = useState();
    const [otherProduct, setOtherProduct] = useState([]);
    const params = useParams();
    const [images, setImages] = useState([]);
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const fetchProduct = async () => {
        const res = await ProductApi.getById(params.id);
        const res2 = await ProductApi.getByCategory(res.category.id);
        const imgs = [];
        res.images.forEach(img => {
            imgs.push({
                original: img,
                thumbnail: img
            })
        })
        setProduct(res);
        setOtherProduct(res2);
        setImages(imgs);
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    console.log(cart);
    function createMarkup(des) {
        return { __html: des };
    }

    return <div style={{ display: 'flex', justifyContent: "center" }}>
        <div style={{ maxWidth: '1330px', width: '100%', }}>
            <div className="flex mt-[20px]" style={{ marginTop: '20px' }}>
                <div style={{ width: '50% !important' }} className="gallery">
                    <ImageGallery items={images} />
                </div>
                <div className="px-[10px]">
                    <p style={{ fontSize: '18px', marginBottom: '5px', fontWeight: '500' }}>{product?.name}</p>
                    <div className="flex" style={{ color: 'red', fontSize: '18px' }}>
                        <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                    </div>
                    <div className="flex gap-[50px]" style={{ gap: '50px', marginBottom: '10px' }}>
                        <p>Thương hiệu: <Link to={"/sos"} className="text-[#0000c3]" style={{ color: "#0000c3" }}>{product?.brand?.name}</Link></p>
                        <p> <span className="font-[600]" style={{ fontWeight: '600' }}>SKU</span> {product?.sku}</p>
                    </div>

                    <div className="flex gap-[50px] items-center" style={{ gap: '30px', marginBottom: '10px' }}>
                        <p style={{ color: "#f04e45", fontSize: '20px', fontWeight: '600' }}>{formatCurrency(product?.price - product?.price * product?.saleOff / 100)} VND</p>
                        <p style={{ color: "#696969", fontSize: '20px', fontWeight: '500', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{formatCurrency(product?.price)} VND</p>
                        <p style={{ color: "#f04e45", fontSize: '20px', fontWeight: '400' }}>-{product?.saleOff}%</p>
                    </div>
                    <div style={{ padding: '10px 0', marginBottom: '20px' }}>
                        <div style={{ padding: '15px 10px', height: '47px', border: '1px solid #cbcbcb' }} className="flex items-center">
                            <MdOutlineAttachMoney style={{ fontSize: '24px' }}></MdOutlineAttachMoney>
                            <p style={{ padding: '0 10px', fontSize: '14px' }}>Giao hàng chính hãng, chứng nhận an toàn</p>
                        </div>
                        <div style={{ padding: '15px 10px', height: '47px', border: '1px solid #cbcbcb', borderTop: 'none' }} className="flex items-center">
                            <FaShoppingCart style={{ fontSize: '20px' }}></FaShoppingCart>
                            <p style={{ padding: '0 10px', fontSize: '14px' }}>Miễn phí giao hàng toàn quốc  <span style={{ fontWeight: '600' }}>đơn trên 500k</span></p>
                        </div>
                        <div style={{ padding: '15px 10px', border: '1px solid #cbcbcb', borderTop: 'none' }} className="flex items-center">
                            <FaPhone style={{ fontSize: '18px' }}></FaPhone>
                            <p style={{ padding: '0 10px', fontSize: '14px' }}>Liên hệ hỗ trợ: 1900.1208</p>
                        </div>
                    </div>

                    <InputNumber min={1} max={product?.amount} defaultValue={1} onChange={(e) => { setAmount(e) }} style={{ display: 'block' }} />
                    <div className="flex items-center" style={{ gap: '30px' }}>
                        <div style={{ marginTop: '10px', backgroundColor: '#df494a', fontWeight: '500', display: 'inline-block', color: 'white', borderRadius: '8px', padding: '6px 5px' }}
                            onClick={() => {
                                const addToCart = async () => {
                                    try {
                                        const res = await CartApi.addToCart({
                                            cartId: cart.id,
                                            productId: product.id,
                                            amount: amount
                                        })
                                        dispatch(fetchCart(res));
                                    }
                                    catch (e) { }
                                }

                                addToCart();
                            }}>
                            <p>THÊM VÀO GIỎ HÀNG</p>
                        </div>

                        <CiHeart style={{ color: "#f04e45", fontSize: '40px', marginTop: '10px' }}></CiHeart>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <p style={{ color: "#222", fontSize: '16px', fontWeight: '500', marginBottom: '10px' }}>Mô tả sản phẩm</p>
                <div dangerouslySetInnerHTML={createMarkup(product?.des)}></div>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <p style={{ color: "#222", fontSize: '16px', fontWeight: '500', marginBottom: '10px' }}>Thông tin sản phẩm</p>
                <table style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
                    <tbody>
                        <tr>
                            <th>Chủ đề</th>
                            <td>{product?.topic}</td>
                        </tr>
                        <tr>
                            <th>Xuất xứ</th>
                            <td>{product?.madeIn}</td>
                        </tr>
                        <tr>
                            <th>Mã VT</th>
                            <td>{product?.vtid}</td>
                        </tr>
                        <tr>
                            <th>Tuổi</th>
                            <td>{product?.age}</td>
                        </tr>
                        <tr>
                            <th>Thương hiệu</th>
                            <td>{product?.brand?.name}</td>
                        </tr>
                        <tr>
                            <th>Xuất xứ thương hiệu</th>
                            <td>{product?.brand?.comeFrom}</td>
                        </tr>
                        <tr>
                            <th>Giới tính</th>
                            <td>{product?.gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <p style={{ color: "#222", fontSize: '16px', fontWeight: '500', marginBottom: '10px' }}>Có thể bạn sẽ thích</p>
                <div className="SpecialSale_Container">
                    <div className="SpecialSale">
                        <div className="SpecialSale_Product">
                            <div>
                                {otherProduct.map((dt) => {
                                    if (dt.id !== product?.id) {
                                        return (
                                            <div className="SpecialSale_ProductItem" key={dt.id}>
                                                <div
                                                    className="SpecialSale_ProductItem_Image"
                                                    style={{
                                                        backgroundImage: `url(${dt.images[0]})`,
                                                    }}
                                                    onMouseOver={(e) => (e.currentTarget.style.backgroundImage = `url(${dt.images[1] ? dt.images[1] : dt.images[0]})`)}
                                                    onMouseOut={(e) => (e.currentTarget.style.backgroundImage = `url(${dt.images[0]})`)}
                                                ></div>
                                                <div style={{ padding: '10px 10px 0 10px' }}>
                                                    <div className="SpecialSale_ProductItem_NameProduct">{dt.name}</div>
                                                    <div className="SpecialSale_ProductItem_ProductCode">SKU: {dt.sku}</div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                                                        <div className="SpecialSale_ProductItem_Price">{formatCurrency(dt.price - (dt.price * dt.saleOff) / 100)} VNĐ</div>
                                                        <div style={{ color: '#444', fontSize: '12px', textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: '600' }}>{formatCurrency(dt.price)} VNĐ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default DetailProduct;