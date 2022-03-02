/*
 * @Author: your name
 * @Date: 2022-03-02 23:53:34
 * @LastEditTime: 2022-03-02 23:55:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-demo/src/store/index.ts
 */
import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state: any) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})