// import axios from "axios";
import { Message } from "element-ui";
const cart = {
  state: {
    cartList: [
      {
        id: "1",
        name: "四川攀枝花 小贵妃芒 5斤/8斤装",
        imgurl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576517817228&di=4a68d74f86fbbc86f8ccb149aa0547b5&imgtype=0&src=http%3A%2F%2Fimg3.myhsw.cn%2F2019-09-19%2Fk27xdk3f.jpg",
        price: 55.0,
        size: ":8斤装（7-9个）",
        qty: 7,
        gdsnum: 1,
        singtrue: false
      },
      {
        id: "2",
        name: "四川攀枝花 大贵妃芒 5斤/8斤装",
        imgurl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
        price: 45.0,
        size: ":5斤装（6-8个）",
        qty: 4,
        gdsnum: 1,
        singtrue: false
      },
      {
        id: "3",
        name: "四川攀枝花 金煌芒果 5斤/8斤",
        imgurl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
        price: 88.0,
        size: ":10斤装（10-12个）",
        qty: 5,
        gdsnum: 1,
        singtrue: false
      },
      {
        id: "4",
        name: "四川攀枝花 凯特大芒果 一级/二级大果",
        imgurl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
        price: 45.0,
        size: ":5斤装（6-8个）",
        qty: 8,
        gdsnum: 1,
        singtrue: false
      }
    ]
  },
  getters: {
    allprice(state) {
      state.cartList.filter(item => item.singtrue);
      // let sgtrue2=sgtrue.map(item=>item.price);
      // let sum=0;
      // sgtrue2.forEach(item=>{
      //   return sum+=item
      // })
      // return sum
      // if(sgtrue){
      //     return state.cartList.reduce((prev, item) =>prev + sgtrue.price * item.qty, 0 );
      // }
      // return state.cartList.reduce((prev, item) =>prev + sgtrue.price * item.qty, 0 );
    }
  },
  mutations: {
    //类似实例中的methods方法，能操控state数据的唯一方式
    removeItem(state) {
      //删除购物车某条商品
      state.cartList = state.cartList.filter(item => !item.singtrue);
    },

    addItem(state, data) {
      //添加商品

      state.cartList.unshift(data);
    },
    changeqty(state, { id, qty }) {
      //修改数量
      state.cartList.forEach(item => {
        if (item.id == id) {
          item.qty = qty;
        }
      });
    },
    fail() {
      Message.error("已经超过库存量了哦");
    }
  }
};

export default cart;
