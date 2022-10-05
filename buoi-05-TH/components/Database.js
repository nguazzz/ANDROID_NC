export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "C04345",
  blue: "@0043F9",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
};

export const Items = [
  {
    id: 1,
    category: "product",
    productName: "Ca nấu lẫu, nấu mì mini...",
    productPrice: 1799000,
    description: "Shop Devang",
    ifOff: true,
    offPercentage: 10,
    productImage: require("../database/image/ca_nau_lau.png"),
    isAvailable: false,
    productIamgeList: [
      require("../database/image/ca_nau_lau.png"),
      require("../database/image/daucam.png"),
      require("../database/image/daynguon.png"),
    ],
  },

  {
    id: 2,
    category: "product",
    productName: "Xe cần cầu đa năng",
    productPrice: 199000,
    description: "Shop Thế giới đồ chơi",
    ifOff: false,
    offPercentage: 10,
    productImage: require("../database/image/xa_can_cau.png"),
    isAvailable: true,
    productIamgeList: [
      require("../database/image/do_choi_dang_mo_hinh.png"),
      require("../database/image/ga_bo_toi.png"),
      require("../database/image/lanh_dao_gian_don.png"),
    ],
  },

  {
    id: 3,
    category: "Book",
    productName: "Hiểu lòng con trẻ",
    productPrice: 169000,
    description: "Minh Long Book",
    ifOff: false,
    offPercentage: 15,
    productImage: require("../database/image/hieu_long_con_tre.png"),
    isAvailable: true,
    productIamgeList: [
      require("../database/image/trump.png"),
      require("../database/image/dauchuyendoipsps2.png"),
      require("../database/image/carbusbtops.png"),
    ],
  },

  {
    id: 4,
    category: "accessories",
    productName: "Cáp chuyển từ USB sang PS2",
    productPrice: 79000,
    description: "Shop Thế giới đồ chơi",
    ifOff: true,
    offPercentage: 0,
    productImage: require("../database/image/giacchuyen.png"),
    isAvailable: true,
    productIamgeList: [
      require("../database/image/daynguon.png"),
      require("../database/image/dauchuyendoi.png"),
      require("../database/image/trump.png"),
    ],
  },
];
