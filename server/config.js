/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
// const prizes = [
//   {
//     type: 0,
//     count: 1,
//     title: "",
//     text: "特别奖"
//   },
//   {
//     type: 1,
//     count: 1,
//     text: "一等奖",
//     title: "神秘大礼",
//     img: "../img/secrit.jpg"
//   },
//   {
//     type: 2,
//     count: 3,
//     text: "二等奖",
//     title: "Mac Pro",
//     img: "../img/mbp.jpg"
//   },
//   {
//     type: 3,
//     count: 5,
//     text: "三等奖",
//     title: "华为 Mate30",
//     img: "../img/huawei.png"
//   },
//   {
//     type: 4,
//     count: 10,
//     text: "幸运奖",
//     title: "红包",
//     img: "../img/ipad.jpg"
//   },
//   {
//     type: 5,
//     count: 10,
//     text: "幸运奖",
//     title: "红包",
//     img: "../img/spark.jpg"
//   }
// ];
const prizes = [
  {
    type: 0,
    count: 0,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "华为平板",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 3,
    text: "二等奖",
    title: "手机",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 5,
    text: "三等奖",
    title: "投影仪",
    img: "../img/tyy.jpg"
  },
  {
    type: 4,
    count: 10,
    text: "幸运奖",
    title: "红包",
    img: "../img/hb.png"
  },
  {
    type: 5,
    count: 10,
    text: "幸运奖",
    title: "红包",
    img: "../img/hb.png"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
// const EACH_COUNT = [1, 1, 3, 5, 10, 10];
const EACH_COUNT = [1, 1, 3, 5, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
