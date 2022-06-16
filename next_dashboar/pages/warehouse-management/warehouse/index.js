import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faArrowDownWideShort,
  faPlus,
  faPenToSquare,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
const BarsContainer = styled.div`
  :hover {
    border-bottom: 3px solid #eb6e15 !important;
    & > .customer_bars {
      font-weight: bold;
      color: #eb6e15 !important;
    }
  }
`;
const Warehouse = () => {
  let filterBars = [
    { id: 1, name: "Tất cả", num: 9 },
    { id: 2, name: "Mới", num: 9 },
    { id: 3, name: "Đang xử lý", num: 9 },
    { id: 4, name: "Hoàn thành", num: 996666 },
    { id: 5, name: "Hủy bỏ", num: 9 },
  ];
  let statusOfData = [
    { id: 1, value: "Mới" },
    { id: 2, value: "Đang xử lý" },
    { id: 3, value: "Hoàn thành" },
    { id: 4, value: "Hủy bỏ" },
  ];
  let threads = [
    { key: "couponId", name: "Mã phiếu" },
    { key: "orderId", name: "Mã đơn hàng" },
    { key: "quantity", name: "Số lượng" },
    { key: "warehouse", name: "Kho" },
    { key: "creator", name: "Người tạo" },
    { key: "update", name: "Cập nhật" },
    { key: "note", name: "Ghi chú" },
    { key: "status", name: "Trạng thái" },
  ];
  let datas = [
    {
      couponId: "1abc",
      orderId: "1-abc",
      quantity: 10,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 1,
    },
    {
      couponId: 2,
      orderId: 1,
      quantity: 9,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 2,
    },
    {
      couponId: 3,
      orderId: 1,
      quantity: 8,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 3,
    },
    {
      couponId: 4,
      orderId: 1,
      quantity: 7,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 4,
    },
    {
      couponId: 5,
      orderId: 1,
      quantity: 6,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 1,
    },
    {
      couponId: 6,
      orderId: 1,
      quantity: 5,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 3,
    },
    {
      couponId: 7,
      orderId: 1,
      quantity: 4,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 3,
    },
    {
      couponId: 8,
      orderId: 1,
      quantity: 3,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 2,
    },
    {
      couponId: 9,
      orderId: 1,
      quantity: 1,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 4,
    },
    {
      couponId: 10,
      orderId: 1,
      quantity: 0,
      warehouse: "Kho Bình Thạnh",
      creator: "/avatar.jpg",
      update: "",
      note: "",
      status: 2,
    },
  ];
  const [choseBar, setChoseBar] = useState(-1);
  const handleSetChoseBar = (id) => {
    setChoseBar(-1);
    setChoseBar(id);
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="p-2 text-[#424856] rounded text-2xl border-solid border border-[#424856]">
            <FontAwesomeIcon className="pl-2" icon={faMagnifyingGlass} />
            <input className="pl-3" placeholder="Tìm kiếm ..." />
          </div>
          <div className="ml-4 p-3 px-16 bg-[#f3f4f6] flex items-center justify-center">
            <button className="mr-4 rounded border border-solid border-[#f3f4f6]">
              Kho
            </button>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="ml-4 p-3 px-16 bg-[#f3f4f6] flex items-center justify-center">
            <button className="mr-4 rounded border border-solid border-[#f3f4f6]">
              Filter
            </button>
            <FontAwesomeIcon icon={faArrowDownWideShort} />
          </div>
        </div>
        <div className="flex">
          <div className="ml-4 p-3 px-16 bg-[#f3f4f6] flex items-center justify-center">
            <button className="mr-4 rounded border border-solid border-[#f3f4f6]">
              Thao tác
            </button>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="ml-4 p-3 px-16 bg-[#ed7d2d] text-white flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} />
            <button className="ml-4 rounded border border-solid border-[#ed7d2d]">
              Thêm mới
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        {filterBars.map((bar) => (
          <BarsContainer
            style={
              choseBar === bar.id
                ? {
                    borderBottom: "3px solid #eb6e15",
                  }
                : { borderBottom: "none" }
            }
            key={bar.id}
            className={`flex pl-10 pt-10 pr-10 text-xl items-center pb-3 cursor-pointer`}
            onClick={() => handleSetChoseBar(bar.id)}
          >
            <div
              style={
                choseBar === bar.id
                  ? {
                      color: "#eb6e15",
                      fontWeight: "bold",
                    }
                  : { color: "#424856" }
              }
              className={`text-[#424856] px-2 customer_bars`}
            >
              {bar.name}
            </div>
            <div
              className={`rounded-full flex justify-center text-[#424856] min-w-[20px] h-[20px] bg-[#dee1e6] items-center p-2`}
            >
              {bar.num > 99 ? `99+` : bar.num}
            </div>
          </BarsContainer>
        ))}
      </div>
      <div>
        <table className="w-full">
          <thead className="bg-[#f3f4f6]">
            <tr
              style={{
                borderTop: "1px solid #dee1e6",
                borderLeft: "1px solid #dee1e6",
                borderRight: "1px solid #dee1e6",
              }}
            >
              {threads.map((th) => (
                <th
                  className="text-xl pl-4 py-4 items-center uppercase text-left text-[#9a9ea9]"
                  key={th.key}
                >
                  <div className="flex items-center">
                    {th.key === "couponId" ? (
                      <input type="checkbox" className="accent-[#d46312]" />
                    ) : (
                      ""
                    )}
                    <div className="pl-4">{th.name}</div>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((tr) => (
              <tr
                key={tr.couponId}
                style={{
                  borderBottom: "1px solid #dee1e6",
                  borderLeft: "1px solid #dee1e6",
                  borderRight: "1px solid #dee1e6",
                }}
              >
                <td className="uppercase flex items-center py-8">
                  <div className="flex items-center pl-4">
                    <input type="checkbox" className="accent-[#d46312]" />
                    <div className="pl-4">{tr.couponId}</div>
                  </div>
                </td>
                <td className="uppercase pl-8">{tr.orderId}</td>
                <td className="px-8">
                  <div>{tr.quantity}/10</div>
                  <div className="w-full bg-[#cfd2da] h-[4px] rounded-full">
                    <div
                      className={`${
                        tr.quantity === 0
                          ? "bg-[#cfd2da] w-0"
                          : tr.quantity === 10
                          ? "bg-[#67cf8a] w-full"
                          : `bg-[#ed7d2d] w-[${(tr.quantity / 10) * 100}%]`
                      }  h-[4px] rounded-full`}
                    ></div>
                  </div>
                </td>
                <td className="pl-8">{tr.warehouse}</td>
                <td className="pl-8">
                  <div>
                    <Image
                      className="rounded-full"
                      src={tr.creator}
                      width={20}
                      height={20}
                    />
                  </div>
                </td>
                <td className="pl-8">{tr.update}</td>
                <td className="pl-8">{tr.note}</td>
                <td className="pl-8">
                  <span
                    className={`py-2 px-3 text-white ${
                      tr.status === 1
                        ? "bg-[#9095a1]"
                        : tr.status === 2
                        ? "bg-[#ed7d2d]"
                        : tr.status === 3
                        ? "bg-[#18ec5f]"
                        : "bg-[#f22121]"
                    }`}
                  >
                    {
                      statusOfData.find((status) => tr.status === status.id)
                        .value
                    }
                  </span>
                </td>
                <td>
                  <div className="flex text-[#9095a1] text-xl">
                    <div>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                    <div className="ml-2">
                      <FontAwesomeIcon icon={faPrint} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Warehouse;
