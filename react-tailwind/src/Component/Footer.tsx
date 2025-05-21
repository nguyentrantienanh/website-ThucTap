import IconFC from "./IconFC";
import paymen from "../assets/payment.png";

function Footer() {
    const address = "20A Trần Quang Khải, Phòng Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa, Việt Nam";
    const phone = "+84 123 456 789";
  return (
    <footer className=" border-t-2 border-[#ffffff] w-auto">
        <div className="grid grid-cols-3 max-[770px]:grid-cols-2 max-[580px]:grid-cols-1 gap-7   text-[#fff] bg-[#6e4925] justify-between   px-50  py-10   max-[1450px]:px-20   max-[1030px]:px-0   ">
            <section className="flex flex-col gap-4 max-[1450px]:gap-3 text-[21px] max-[1450px]:text-[14px] px-5 ">
                <h1 className="font-medium text-[28px] max-[1450px]:text-[20px]">ADAMAS BOUTIQUE HOTEL</h1>
                <p className="text-[15px]"> CÔNG TY TNHH PHÁT TRIỂN TÙNG NAM </p>
                <div className=" border-t-3 border-[#fff] w-[15%]"></div>
                    <a href="">
                        <IconFC name="address" />
                        <span className="ml-2">{address}</span>
                    </a>
                    <a href="">
                        <IconFC name="phone" />
                        <span className="ml-2">{phone}</span>
                    </a> 
                    <a href="">
                        <IconFC name="email" />
                        <span className="ml-2">info@adamashotel.vn</span>
                    </a>
                    <a href="">
                        <IconFC name="internet" />
                        <span className="ml-2">www.adamashotel.vn</span>
                    </a>
                    <a href="">
                        <IconFC name="clock" />
                        <span className="ml-2">Thời gian hoạt động: 24/7</span>
                    </a>
            </section>
            <section className="flex flex-col   gap-4 max-[1450px]:gap-3 text-[21px] max-[1450px]:text-[14px] px-5">
                <h1 className="font-medium text-[28px] max-[1450px]:text-[20px] ">LIÊN KẾT NHANH</h1>
                <div className=" border-t-3 border-[#fff] w-[30%]"></div>
                <a href=""> Về chúng tôi </a>
                <a href=""> Hình ảnh </a>
            </section>
            <section className="flex flex-col gap-2 px-5">
                <h1 className="font-medium text-[28px] max-[1450px]:text-[20px]">KẾT NỐI VỚI CHÚNG TÔI</h1>
                <div className=" border-t-3 border-[#fff] w-[30%]"></div>
                <div className="flex flex-col gap-5" >
                    <div className="" data-href="https://www.facebook.com/adamasboutiquehotelnhatrang/" data-tabs="timeline" data-width="200" data-height="130" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=384&amp;height=130&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fadamasboutiquehotelnhatrang%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=386"><span><iframe name="f699eb316257b66a1" width="100%" height="100%" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin"  scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v19.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfefc04f5c16f99597%26domain%3Dadamashotel.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fadamashotel.vn%252Fff97eeb867ad0fb2d%26relation%3Dparent.parent&amp;container_width=384&amp;height=130&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fadamasboutiquehotelnhatrang%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=270"></iframe></span></div>
                    <img className="w-130 max-[1450px]:w-100 max-[1030px]:w-90  " src={paymen} alt="" />
                </div>
            </section>
        </div>
      <div className="bg-[#52340e] text-[#fff] justify-between flex px-55 text-[21px] items-center h-13    max-[1450px]:text-[14px] max-[1450px]:px-25 max-[1030px]:px-4 max-[770px]:flex-col max-[450px]:text-[12px] max-[770px]:justify-center ">
        <div className=" ">
              <p>Bản quyền thuộc về © 2024 Adamas Boutique Hotel</p>
        </div>
        <div className=" ">
             <p>Thiết kế và phát triển bởi SweetSoft JSC</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;