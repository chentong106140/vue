/**
 * Created by cherish on 2018/1/18.
 */

let init = setTimeout(function () {
  console.log("\n\n/***************************style_Array.js  start****************************************/\n\n");



  /**
   * 使用数组语法与对象语法组合用法：
   * <div v-bind:style="[{width:divWidth,borderRadius:divBorderRadius,transform:'scale(1.5)'},baseStyles,overridingStyles,styleObject]"></div>
   *
   * 效果：
   * <div style="width: 100%; border-radius: 20px; transform: scale(1.5); color: red; font-size: 12px; line-height: 40px;"></div>
   *
   */
  var vm1 = new Vue({
    el:"#ObjGrammar7",
    data:{
      divWidth:'100%',
      divBorderRadius:'20px',
      baseStyles:{
        color:'red'
      },
      overridingStyles:{
        fontSize:'12px'
      }
    },
    computed:{
      styleObject:function () {
        return {
          lineHeight:'40px'
        }
      }
    }
  });

  console.log("\n\n/***************************style_Array.js  end****************************************/\n\n");

},4);
export  default init;
