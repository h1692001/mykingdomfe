import React from 'react';
import './AllProduct.scss';
import { AiOutlineRight } from 'react-icons/ai';

export default function AllProduct() {
  return (
    <>
      <div className="AllProduct">
        <div className="AllProduct_Title">
          TRANG CHỦ <AiOutlineRight /> HÀNG MỚI
        </div>
        <div className="AllProduct_Header">
          <div className="AllProduct_Header_Left">DANH MỤC</div>
          <div className="AllProduct_Header_Right">Sắp xếp theo: Giá cao Giá Thấp Nổi bật</div>
        </div>
        <div className="AllProduct">
          <div className="AllProduct_Left">
            <div className="AllProduct_Left_Price">
              <div className="AllProduct_Left_Price_Title">GIÁ</div>
            </div>
            <div className="AllProduct_Left_Age">
              <div className="AllProduct_Left_Age_Title">TUỔI</div>
              <div className="AllProduct_Left_Age_Category">
                <div className="AllProduct_Left_Age_CategoryOne">
                  <div className="AllProduct_Left_Age_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> 12 tuổi trở lên
                  </div>
                  <div className="AllProduct_Left_Age_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Age_CategoryOne">
                  <div className="AllProduct_Left_Age_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> 6-12 tuổi
                  </div>
                  <div className="AllProduct_Left_Age_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Age_CategoryOne">
                  <div className="AllProduct_Left_Age_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> 3-6 tuổi
                  </div>
                  <div className="AllProduct_Left_Age_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Age_CategoryOne">
                  <div className="AllProduct_Left_Age_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> 1-3 tuổi
                  </div>
                  <div className="AllProduct_Left_Age_CategoryOne_Amount">(60)</div>
                </div>
              </div>
            </div>
            <div className="AllProduct_Left_Gender">
              <div className="AllProduct_Left_Gender_Title">Giới tính</div>
              <div className="AllProduct_Left_Gender_Category">
                <div className="AllProduct_Left_Gender_CategoryOne">
                  <div className="AllProduct_Left_Gender_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> UNISEX
                  </div>
                  <div className="AllProduct_Left_Gender_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Gender_CategoryOne">
                  <div className="AllProduct_Left_Gender_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> BOY
                  </div>
                  <div className="AllProduct_Left_Gender_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Gender_CategoryOne">
                  <div className="AllProduct_Left_Gender_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> GIRL
                  </div>
                  <div className="AllProduct_Left_Gender_CategoryOne_Amount">(60)</div>
                </div>
              </div>
            </div>
            <div className="AllProduct_Left_Trademark">
              <div className="AllProduct_Left_Trademark_Title">THƯƠNG HIỆU</div>
              <div className="AllProduct_Left_Trademark_Category">
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> UNISEX
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> LEGO DREAMZZZ
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> POP MART
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> BARBIE
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> VECTO
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> HOT WHEELS
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> JURASSIC WORLD MATTEL
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> CHAMPION GAMES
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> DISNEY PRINCESS MATTEL
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> COOLKIDS
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> LEGO SUPERHEROES
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
                <div className="AllProduct_Left_Trademark_CategoryOne">
                  <div className="AllProduct_Left_Trademark_CategoryOne_Text">
                    {' '}
                    <input type="checkbox" /> POLLY POCKET
                  </div>
                  <div className="AllProduct_Left_Trademark_CategoryOne_Amount">(60)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="AllProduct_Right">
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
            <div className="AllProduct_Right_ProductItem">
              <div className="AllProduct_Right_ProductItem_Image"></div>
              <div className="AllProduct_Right_ProductItem_NameProduct">Đồ chơi lắp ráp Tàu cá mập bóng đêm LEGO DREAMZZZ 71469</div>
              <div className="AllProduct_Right_ProductItem_ProductCode">SKU: 6062331</div>
              <div className="AllProduct_Right_ProductItem_Price">4,629,000 VNĐ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
