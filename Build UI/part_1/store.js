// store.js // Thằng này chứa dữ liệu để đưa ra view thôi
import { createStore } from "./core.js"
import reducer from "./reducer.js"

const { attach, connect, dispatch } = createStore(reducer)

window.dispatch = dispatch

export {
    attach,
    connect
}