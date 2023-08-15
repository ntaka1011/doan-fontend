import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Wrapper className="px-[15px] pb-[30px]">
      <div className="flex text-sm py-5">
        <Link
          href={"/"}
          className="mr-4 hover:text-[#35c0c5] hover:cursor-pointer"
        >
          Trang chủ
        </Link>
        <span className="w-4">/</span>
        <span className="text-[#35c0c5]">Giới thiệu</span>
      </div>

      <div className="flex flex-col">
        <span className="text-[40px] uppercase mb-[15px] font-medium">
          Giới thiệu
        </span>
        <p className="text-sm font-bold mb-[15px]">
          BRESHKA -SHOES WEBSITE MUA SẮM THỜI TRANG HÀNG HIỆU TRỰC TUYẾN HÀNG
          ĐẦU VIỆT NAM
        </p>
        <p className="text-sm uppercase mb-[15px]">
          BẠN ĐANG TÌM KIẾM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ PHỤ KIỆN
          MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI BRESHKA -SHOES!
        </p>
        <p className="text-sm mb-[15px]">
          Breshka-Shoes sẽ mang lại cho khách hàng những trải nghiệm mua sắm
          thời trang hàng hiệu trực tuyến thú vị từ các thương hiệu thời trang
          quốc tế và trong nước, cam kết chất lượng phục vụ hàng đầu cùng với
          những bộ sưu tập quần áo nam nữ khổng lồ từ giày dép, trang phục, phụ
          kiện đến mỹ phẩm cho cả phụ nữ và nam giới với những xu hướng thời
          trang mới nhất. Bạn có thể tìm thấy những bộ trang phục mình muốn từ
          những bộ đồ ở nhà thật thoải mái hay tự tin trong những bộ trang phục
          công sở phù hợp. Những trải nghiệm mới chỉ có ở trang mua sắm hàng
          hiệu trực tuyến Breshka-Shoes.
        </p>
        <p className="text-sm uppercase font-bold mb-[15px]">
          BRESHKA -SHOES MÓN QUÀ TẶNG NGƯỜI THÂN THẬT Ý NGHĨA!
        </p>
        <p className="text-sm mb-[15px]">
          Breshka-Shoes sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng
          người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của
          mình bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo của
          Breshka-Shoes.
        </p>
        <p className="text-sm uppercase font-bold mb-[15px]">
          MUA SẮM Ở BRESHKA -SHOES PHÙ HỢP VỚI TÚI TIỀN TỪ DOANH NHÂN, NHÂN VIÊN
          VĂN PHÒNG ĐẾN CÁC BẠN TRẺ
        </p>
        <p className="text-sm mb-[15px]">
          Breshka-Shoes luôn cập nhật những xu hướng thời trang phong cách nhất
          từ những hãng thời trang cao cấp như Lime Orange hoặc Alachic, những
          đôi giày nổi tiếng mà giá cả phải chăng như Me Girl hoặc Bandolini,
          Juno, JShoes cho tới các thương hiệu thời trang tầm trung như Lotus
          Shoes và Mollet, Lithe S, Om Shoes tất cả đều có ở Breshka-Shoes. Đặc
          biệt, Breshka-Shoes còn có nhiều đợt khuyến mãi, giảm giá đặc biệt với
          giá tốt nhất. Thời trang hàng hiệu chất lượng cao, phù hợp túi tiền -
          chỉ có ở Breshka-Shoes!
        </p>
        <p className="text-sm uppercase font-bold mb-[15px]">
          PHONG CÁCH MUA SẮM HIỆN ĐẠI - THUẬN TIỆN, THANH TOÁN AN TOÀN - DỄ DÀNG
        </p>
        <p className="text-sm mb-[15px]">
          Bạn có thể mua sắm thoải mái trên Breshka-Shoes mà không có bất kỳ lo
          lắng nào: trả hàng trong vòng 30 ngày kể từ ngày nhận hàng. Nếu bạn có
          bất kì câu hỏi nào về các sản phẩm của chúng tôi từ quần áo nam, trang
          phục nữ, mỹ phẩm nam hay trang sức hãy gọi ngay tới bộ phận chăm sóc
          khách hàng.
        </p>
      </div>
    </Wrapper>
  );
};

export default Page;
